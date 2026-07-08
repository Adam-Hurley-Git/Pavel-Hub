import { useEffect, useRef } from "react";

// Renders a self-contained legacy HTML document (style + body markup, possibly
// with inline <script> setup code) directly into the current page instead of
// an <iframe> — so it's a real part of this document and the site-wide
// FeedbackWidget overlay can anchor comments to its actual elements.
export function DocEmbed({ html }: { html: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scripts: string[] = [];
    const markup = html.replace(/<script>([\s\S]*?)<\/script>/g, (_match, code: string) => {
      scripts.push(code);
      return "";
    });

    container.innerHTML = markup;

    const injected = scripts.map((code) => {
      const script = document.createElement("script");
      script.textContent = code;
      document.body.appendChild(script);
      return script;
    });

    return () => {
      injected.forEach((s) => s.remove());
      container.innerHTML = "";
    };
  }, [html]);

  return <div ref={containerRef} />;
}
