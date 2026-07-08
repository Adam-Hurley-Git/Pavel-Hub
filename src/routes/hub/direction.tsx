import { createFileRoute } from "@tanstack/react-router";
import { HubKicker, HubShell } from "@/components/hub-shell";
import logo from "@/assets/extracted/logo.svg";

export const Route = createFileRoute("/hub/direction")({
  head: () => ({
    meta: [{ title: "Design Direction | Čisté šachty Hub" }],
  }),
  component: DirectionPage,
});

const SWATCHES = [
  { name: "Forest", hex: "#22563d", note: "Primary brand colour — buttons, links, headings" },
  { name: "Forest Light", hex: "#4a9b70", note: "Accent — highlights, icons, hover states" },
  { name: "Cream", hex: "#f6f0e6", note: "Background — warm, paper-like, easy on the eye" },
  { name: "Ink", hex: "#0f2b1f", note: "Dark hero sections, footer, high-contrast text" },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ background: "white", border: "1px solid #DEE8F7", borderRadius: 16, padding: 26, marginBottom: 20 }}>
      <h2 style={{ fontSize: 18, fontWeight: 700, color: "#334A73", marginBottom: 14 }}>{title}</h2>
      {children}
    </div>
  );
}

function DirectionPage() {
  return (
    <HubShell>
      <HubKicker>Brand & Design</HubKicker>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1A1A1A", marginBottom: 10, letterSpacing: "-0.02em" }}>
        Where the design stands right now
      </h1>
      <p style={{ fontSize: 15, color: "#5a6b80", maxWidth: 680, lineHeight: 1.7, marginBottom: 30 }}>
        This is a snapshot of the direction we've locked in for the Čisté šachty brand and
        website — logo, colours, typography and the current homepage layout. Nothing here is
        set in stone: use the button at the bottom to review the actual live site and leave
        comments on anything you'd like changed.
      </p>

      <Section title="Logo">
        <div style={{ background: "#0f2b1f", borderRadius: 12, padding: "28px 24px", display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="Čisté šachty logo" style={{ height: 48 }} />
        </div>
        <p style={{ fontSize: 13, color: "#76787B", marginTop: 12 }}>
          Clean, confident wordmark built around the "Čisté šachty" name — designed to work on both
          the dark forest hero background and light cream page backgrounds.
        </p>
      </Section>

      <Section title="Colour palette">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {SWATCHES.map((s) => (
            <div key={s.hex} style={{ border: "1px solid #E7E9ED", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ height: 64, background: s.hex }} />
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>
                  {s.name} <span style={{ color: "#76787B", fontWeight: 500 }}>{s.hex}</span>
                </div>
                <div style={{ fontSize: 12, color: "#76787B", marginTop: 2 }}>{s.note}</div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Typography">
        <div style={{ display: "grid", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C9A7", marginBottom: 6 }}>
              Display — Fraunces
            </div>
            <div style={{ fontFamily: "Fraunces, Georgia, serif", fontSize: 34, color: "#22563d", lineHeight: 1.1 }}>
              Čištění šachet pro SVJ a bytové domy
            </div>
            <p style={{ fontSize: 12.5, color: "#76787B", marginTop: 6 }}>
              A warm serif for headlines — gives the brand a more established, trustworthy feel than a generic sans-serif.
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C9A7", marginBottom: 6 }}>
              Body — Inter
            </div>
            <div style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: 15, color: "#1A1A1A", maxWidth: 560, lineHeight: 1.7 }}>
              Profesionální čištění vzduchových šachet pro SVJ, bytová družstva a správce. Bez vstupu do bytů, s fotodokumentací a přehledným protokolem pro výbor.
            </div>
            <p style={{ fontSize: 12.5, color: "#76787B", marginTop: 6 }}>
              Clean, highly legible sans-serif for body copy, forms and navigation.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Current homepage direction">
        <p style={{ fontSize: 14, color: "#3a4f70", lineHeight: 1.7, marginBottom: 10 }}>
          The live homepage uses a dark forest hero with a photo collage of real job photos
          (roof access, camera inspection, shaft interiors), a bold serif headline, and clear
          trust badges ("Bez vstupu do bytů", "Fotodokumentace a protokol", "Pro SVJ, BD a
          správce"). It leads with two calls to action — book a free inspection, or check
          indicative pricing.
        </p>
        <p style={{ fontSize: 13, color: "#76787B" }}>
          If you'd like to compare other directions before we fully commit, we can review the
          design exploration separately during the next project walkthrough.
        </p>
      </Section>

      <div style={{ background: "#0f2b1f", borderRadius: 16, padding: 28, textAlign: "center" }}>
        <p style={{ color: "#f6f0e6", fontSize: 15, marginBottom: 16 }}>
          Ready to see it in action? Open the live site and click <strong>📍 Leave feedback</strong> to
          comment on anything — a headline, a photo, a section — right where it appears on the page.
        </p>
        <a
          href="https://cistesachty-website-one.vercel.app/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-block",
            background: "#00C9A7",
            color: "#0f2b1f",
            fontWeight: 700,
            fontSize: 14,
            padding: "12px 22px",
            borderRadius: 999,
            textDecoration: "none",
          }}
        >
          Review the live site →
        </a>
      </div>
    </HubShell>
  );
}
