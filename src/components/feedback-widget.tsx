import { useEffect, useRef, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { supabase, type Annotation } from "../lib/supabase";

const NAME_KEY = "hub_feedback_author";

type DraftPin = {
  x: number;
  y: number;
  targetText: string | null;
  selector: string | null;
  offsetXPct: number;
  offsetYPct: number;
};

function pageHeight() {
  return Math.max(document.documentElement.scrollHeight, document.body.scrollHeight, 1);
}

function pageWidth() {
  return Math.max(document.documentElement.scrollWidth, document.body.scrollWidth, 1);
}

// Anchor metadata (which element a pin was left on, and where within it) is
// packed into the existing target_text column as JSON, rather than needing a
// schema migration — {t: visible text snippet, s: css selector, ox/oy: offset
// percentage within that element}.
type Anchor = { t: string | null; s: string | null; ox: number; oy: number };

function encodeAnchor(a: Anchor): string {
  return JSON.stringify(a);
}

function decodeAnchor(raw: string | null): Anchor | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === "object" && "ox" in parsed && "oy" in parsed) {
      return parsed as Anchor;
    }
  } catch {
    return null;
  }
  return null;
}

function cssPath(el: Element): string | null {
  if (!(el instanceof Element)) return null;
  const path: string[] = [];
  let node: Element | null = el;
  let depth = 0;
  while (node && node.nodeType === Node.ELEMENT_NODE && node !== document.body && depth < 8) {
    let selector = node.nodeName.toLowerCase();
    if (node.id) {
      selector += `#${CSS.escape(node.id)}`;
      path.unshift(selector);
      break;
    }
    const parent = node.parentElement;
    if (parent) {
      const sameTag = Array.from(parent.children).filter(
        (c) => c.nodeName === node!.nodeName
      );
      if (sameTag.length > 1) {
        const idx = sameTag.indexOf(node) + 1;
        selector += `:nth-of-type(${idx})`;
      }
    }
    path.unshift(selector);
    node = parent;
    depth++;
  }
  return path.length ? path.join(">") : null;
}

// Resolves a pin's anchor element (if any) to a live absolute page position,
// falling back to the stored whole-page percentage for older rows or if the
// element can no longer be found.
function resolvePinPosition(pin: Annotation): { x: number; y: number } {
  const anchor = decodeAnchor(pin.target_text);
  if (anchor?.s) {
    try {
      const el = document.querySelector(anchor.s);
      if (el) {
        const rect = el.getBoundingClientRect();
        const pageLeft = rect.left + window.scrollX;
        const pageTop = rect.top + window.scrollY;
        return {
          x: pageLeft + (anchor.ox / 100) * rect.width,
          y: pageTop + (anchor.oy / 100) * rect.height,
        };
      }
    } catch {
      // invalid/stale selector — fall through to legacy positioning
    }
  }
  return {
    x: (pin.x_pct / 100) * pageWidth(),
    y: (pin.y_pct / 100) * pageHeight(),
  };
}

export function FeedbackWidget() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [active, setActive] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [pins, setPins] = useState<Annotation[]>([]);
  const [draft, setDraft] = useState<DraftPin | null>(null);
  const [openPin, setOpenPin] = useState<string | null>(null);
  const [commentText, setCommentText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [, setLayoutTick] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAuthorName(localStorage.getItem(NAME_KEY) || "");
  }, []);

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    supabase
      .from("annotations")
      .select("*")
      .eq("page_path", pathname)
      .order("created_at", { ascending: true })
      .then(({ data }) => {
        if (!cancelled && data) setPins(data as Annotation[]);
      });
    return () => {
      cancelled = true;
    };
  }, [pathname]);

  // Re-render on layout changes (images/fonts finishing load, resize) so pins
  // anchored to elements stay lined up with the content they were left on.
  useEffect(() => {
    const bump = () => setLayoutTick((t) => t + 1);
    window.addEventListener("resize", bump);
    window.addEventListener("load", bump);
    const ro = new ResizeObserver(bump);
    ro.observe(document.body);
    return () => {
      window.removeEventListener("resize", bump);
      window.removeEventListener("load", bump);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!active) return;
    document.body.style.cursor = "crosshair";
    return () => {
      document.body.style.cursor = "";
    };
  }, [active]);

  function handlePageClick(e: React.MouseEvent) {
    if (!active) return;
    if (overlayRef.current && overlayRef.current.contains(e.target as Node) === false) return;

    // Hide the overlay for a moment so elementFromPoint can see the real
    // content underneath instead of hitting our own click-catcher div.
    const overlay = overlayRef.current;
    if (overlay) overlay.style.pointerEvents = "none";
    const targetEl = document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null;
    if (overlay) overlay.style.pointerEvents = "auto";

    const targetText = targetEl?.textContent?.trim().slice(0, 80) || null;
    let selector: string | null = null;
    let offsetXPct = 50;
    let offsetYPct = 50;
    if (targetEl) {
      selector = cssPath(targetEl);
      const rect = targetEl.getBoundingClientRect();
      if (rect.width > 0 && rect.height > 0) {
        offsetXPct = ((e.clientX - rect.left) / rect.width) * 100;
        offsetYPct = ((e.clientY - rect.top) / rect.height) * 100;
      }
    }

    setDraft({ x: e.pageX, y: e.pageY, targetText, selector, offsetXPct, offsetYPct });
    setCommentText("");
    setOpenPin(null);
  }

  async function submitDraft() {
    if (!draft || !commentText.trim() || !supabase) return;
    localStorage.setItem(NAME_KEY, authorName);

    const payload = {
      page_path: pathname,
      x_pct: (draft.x / pageWidth()) * 100,
      y_pct: (draft.y / pageHeight()) * 100,
      target_text: encodeAnchor({
        t: draft.targetText,
        s: draft.selector,
        ox: draft.offsetXPct,
        oy: draft.offsetYPct,
      }),
      comment: commentText.trim(),
      author_name: authorName.trim() || null,
    };

    const { data } = await supabase.from("annotations").insert(payload).select().single();

    if (data) setPins((prev) => [...prev, data as Annotation]);
    setDraft(null);
    setCommentText("");
  }

  async function resolvePin(id: string) {
    if (!supabase) return;
    await supabase.from("annotations").update({ status: "resolved" }).eq("id", id);
    setPins((prev) => prev.map((p) => (p.id === id ? { ...p, status: "resolved" } : p)));
  }

  const openCount = pins.filter((p) => p.status === "open").length;

  if (!supabase) return null;

  return (
    <>
      {(active || pins.length > 0) && (
        <div
          ref={overlayRef}
          onClick={active ? handlePageClick : undefined}
          style={{
            position: "absolute",
            inset: 0,
            width: pageWidth(),
            height: pageHeight(),
            zIndex: 2147483000,
            cursor: active ? "crosshair" : "default",
            pointerEvents: active ? "auto" : "none",
          }}
        >
          {pins.map((pin, i) => {
            const pos = resolvePinPosition(pin);
            return (
              <button
                key={pin.id}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenPin(pin.id);
                  setDraft(null);
                }}
                title={pin.comment}
                style={{
                  position: "absolute",
                  left: pos.x,
                  top: pos.y,
                  transform: "translate(-50%, -50%)",
                  width: 26,
                  height: 26,
                  borderRadius: "50% 50% 50% 4px",
                  border: "2px solid white",
                  background: pin.status === "resolved" ? "#8a97a8" : "#EA3959",
                  color: "white",
                  fontSize: 12,
                  fontWeight: 700,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 8px rgba(0,0,0,.35)",
                  cursor: "pointer",
                  pointerEvents: "auto",
                }}
              >
                {i + 1}
              </button>
            );
          })}

          {draft && (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                left: draft.x,
                top: draft.y,
                transform: "translate(-8px, 12px)",
                width: 280,
                background: "white",
                borderRadius: 10,
                boxShadow: "0 12px 32px rgba(0,0,0,.25)",
                padding: 14,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              <div style={{ fontSize: 12, fontWeight: 700, color: "#334A73", marginBottom: 6 }}>
                Leave a comment
              </div>
              <input
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder="Your name"
                style={{
                  width: "100%",
                  fontSize: 13,
                  padding: "6px 8px",
                  marginBottom: 6,
                  border: "1px solid #DEE8F7",
                  borderRadius: 6,
                }}
              />
              <textarea
                autoFocus
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                placeholder="What would you like changed here?"
                rows={3}
                style={{
                  width: "100%",
                  fontSize: 13,
                  padding: "6px 8px",
                  border: "1px solid #DEE8F7",
                  borderRadius: 6,
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
              <div style={{ display: "flex", gap: 8, marginTop: 8, justifyContent: "flex-end" }}>
                <button
                  onClick={() => setDraft(null)}
                  style={{
                    fontSize: 12,
                    padding: "6px 10px",
                    border: "none",
                    background: "transparent",
                    color: "#76787B",
                    cursor: "pointer",
                  }}
                >
                  Cancel
                </button>
                <button
                  onClick={submitDraft}
                  disabled={!commentText.trim()}
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    padding: "6px 12px",
                    border: "none",
                    borderRadius: 6,
                    background: "#00C9A7",
                    color: "#1A1A1A",
                    cursor: "pointer",
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          )}

          {openPin &&
            (() => {
              const pin = pins.find((p) => p.id === openPin);
              if (!pin) return null;
              const pos = resolvePinPosition(pin);
              return (
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{
                    position: "absolute",
                    left: pos.x,
                    top: pos.y,
                    transform: "translate(-8px, 12px)",
                    width: 260,
                    background: "white",
                    borderRadius: 10,
                    boxShadow: "0 12px 32px rgba(0,0,0,.25)",
                    padding: 14,
                    pointerEvents: "auto",
                    fontFamily: "system-ui, sans-serif",
                    fontSize: 13,
                  }}
                >
                  <div style={{ fontWeight: 700, color: "#334A73", marginBottom: 4 }}>
                    {pin.author_name || "Anonymous"}
                  </div>
                  <div style={{ color: "#1A1A1A", marginBottom: 10 }}>{pin.comment}</div>
                  <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                    <button
                      onClick={() => setOpenPin(null)}
                      style={{
                        fontSize: 12,
                        padding: "6px 10px",
                        border: "none",
                        background: "transparent",
                        color: "#76787B",
                        cursor: "pointer",
                      }}
                    >
                      Close
                    </button>
                    {pin.status === "open" && (
                      <button
                        onClick={() => resolvePin(pin.id)}
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          padding: "6px 12px",
                          border: "none",
                          borderRadius: 6,
                          background: "#F2F5FA",
                          color: "#334A73",
                          cursor: "pointer",
                        }}
                      >
                        Mark resolved
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}
        </div>
      )}

      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 2147483001,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: 8,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {panelOpen && (
          <div
            style={{
              width: 300,
              maxHeight: 360,
              overflowY: "auto",
              background: "white",
              borderRadius: 12,
              boxShadow: "0 12px 32px rgba(0,0,0,.25)",
              padding: 12,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 13, color: "#334A73", marginBottom: 8 }}>
              Comments on this page
            </div>
            {pins.length === 0 && (
              <div style={{ fontSize: 12, color: "#76787B" }}>
                No comments yet. Turn on feedback mode and click anywhere to leave one.
              </div>
            )}
            {pins.map((pin, i) => (
              <div
                key={pin.id}
                style={{
                  fontSize: 12,
                  padding: "8px 0",
                  borderBottom: "1px solid #E7E9ED",
                  opacity: pin.status === "resolved" ? 0.5 : 1,
                }}
              >
                <strong style={{ color: "#EA3959" }}>#{i + 1}</strong>{" "}
                <strong>{pin.author_name || "Anonymous"}</strong>: {pin.comment}
                {pin.status === "resolved" && <span> · resolved</span>}
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", gap: 8 }}>
          <button
            onClick={() => setPanelOpen((v) => !v)}
            style={{
              padding: "10px 14px",
              borderRadius: 999,
              border: "1px solid #DEE8F7",
              background: "white",
              color: "#334A73",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(13,30,55,.15)",
            }}
          >
            💬 {pins.length > 0 ? `${openCount} open` : "Comments"}
          </button>
          <button
            onClick={() => {
              setActive((v) => !v);
              setPanelOpen(false);
              setDraft(null);
              setOpenPin(null);
            }}
            style={{
              padding: "10px 16px",
              borderRadius: 999,
              border: "none",
              background: active ? "#EA3959" : "#00C9A7",
              color: active ? "white" : "#1A1A1A",
              fontSize: 13,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 4px 14px rgba(13,30,55,.25)",
            }}
          >
            {active ? "✕ Done marking" : "📍 Leave feedback"}
          </button>
        </div>
      </div>
    </>
  );
}
