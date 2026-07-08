import { createFileRoute } from "@tanstack/react-router";
import { HubKicker, HubShell, HubText } from "@/components/hub-shell";
import logo from "@/assets/extracted/logo.svg";

export const Route = createFileRoute("/hub/direction")({
  head: () => ({
    meta: [{ title: "Design Direction | Čisté šachty Hub" }],
  }),
  component: DirectionPage,
});

const SWATCHES = [
  { name: { cs: "Lesní zelená", en: "Forest" }, hex: "#22563d", note: { cs: "Hlavní barva značky — tlačítka, odkazy, nadpisy", en: "Primary brand colour — buttons, links, headings" } },
  { name: { cs: "Světlá zelená", en: "Forest Light" }, hex: "#4a9b70", note: { cs: "Akcent — zvýraznění, ikony, hover stavy", en: "Accent — highlights, icons, hover states" } },
  { name: { cs: "Krémová", en: "Cream" }, hex: "#f6f0e6", note: { cs: "Pozadí — teplé, papírové, příjemné pro čtení", en: "Background — warm, paper-like, easy on the eye" } },
  { name: { cs: "Inkoustová", en: "Ink" }, hex: "#0f2b1f", note: { cs: "Tmavé hero sekce, footer a vysoce kontrastní text", en: "Dark hero sections, footer, high-contrast text" } },
];

function Section({ title, children }: { title: React.ReactNode; children: React.ReactNode }) {
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
      <HubKicker><HubText cs="Značka & design" en="Brand & Design" /></HubKicker>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1A1A1A", marginBottom: 10, letterSpacing: "-0.02em" }}>
        <HubText cs="Kde teď design stojí" en="Where the design stands right now" />
      </h1>
      <p style={{ fontSize: 15, color: "#5a6b80", maxWidth: 680, lineHeight: 1.7, marginBottom: 30 }}>
        <span className="cs">Toto je aktuální snapshot směru, který jsme pro značku a web Čisté šachty zvolili — logo, barvy, typografie a současné rozvržení homepage. Nic tu není vytesané do kamene: dole otevřete živý web a můžete komentovat cokoliv, co chcete změnit.</span>
        <span className="en">This is a snapshot of the direction we've locked in for the Čisté šachty brand and
        website — logo, colours, typography and the current homepage layout. Nothing here is
        set in stone: use the button at the bottom to review the actual live site and leave
        comments on anything you'd like changed.</span>
      </p>

      <Section title={<HubText cs="Logo" en="Logo" />}>
        <div style={{ background: "#0f2b1f", borderRadius: 12, padding: "28px 24px", display: "flex", justifyContent: "center" }}>
          <img src={logo} alt="Čisté šachty logo" style={{ height: 48 }} />
        </div>
        <p style={{ fontSize: 13, color: "#76787B", marginTop: 12 }}>
          <HubText cs="Čistý a sebevědomý wordmark postavený na názvu „Čisté šachty“ — navržený tak, aby fungoval na tmavém lesním hero pozadí i na světlých krémových stránkách." en='Clean, confident wordmark built around the "Čisté šachty" name — designed to work on both the dark forest hero background and light cream page backgrounds.' />
        </p>
      </Section>

      <Section title={<HubText cs="Barevná paleta" en="Colour palette" />}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
          {SWATCHES.map((s) => (
            <div key={s.hex} style={{ border: "1px solid #E7E9ED", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ height: 64, background: s.hex }} />
              <div style={{ padding: "10px 12px" }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A" }}>
                  <HubText cs={s.name.cs} en={s.name.en} /> <span style={{ color: "#76787B", fontWeight: 500 }}>{s.hex}</span>
                </div>
                <div style={{ fontSize: 12, color: "#76787B", marginTop: 2 }}><HubText cs={s.note.cs} en={s.note.en} /></div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title={<HubText cs="Typografie" en="Typography" />}>
        <div style={{ display: "grid", gap: 16 }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C9A7", marginBottom: 6 }}>
              <HubText cs="Nadpisy — Inter (medium)" en="Headings — Inter (medium)" />
            </div>
            <div style={{ fontFamily: "Inter, system-ui, sans-serif", fontWeight: 500, letterSpacing: "-0.02em", fontSize: 34, color: "#22563d", lineHeight: 1.1 }}>
              Čištění šachet pro SVJ a bytové domy
            </div>
            <p style={{ fontSize: 12.5, color: "#76787B", marginTop: 6 }}>
              <HubText cs="Stejné písmo jako text, jen v medium řezu a s mírně staženým prostrkáním — drží nadpisy čisté a moderní." en="Same typeface as the body copy, just medium weight with slightly tightened letter-spacing — keeps headlines clean and modern." />
            </p>
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#00C9A7", marginBottom: 6 }}>
              <HubText cs="Text — Inter (regular)" en="Body — Inter (regular)" />
            </div>
            <div style={{ fontFamily: "Inter, system-ui, sans-serif", fontSize: 15, color: "#1A1A1A", maxWidth: 560, lineHeight: 1.7 }}>
              Profesionální čištění vzduchových šachet pro SVJ, bytová družstva a správce. Bez vstupu do bytů, s fotodokumentací a přehledným protokolem pro výbor.
            </div>
            <p style={{ fontSize: 12.5, color: "#76787B", marginTop: 6 }}>
              <HubText cs="Čisté a velmi čitelné bezpatkové písmo pro texty, formuláře a navigaci." en="Clean, highly legible sans-serif for body copy, forms and navigation." />
            </p>
          </div>
        </div>
      </Section>

      <Section title={<HubText cs="Současný směr homepage" en="Current homepage direction" />}>
        <p style={{ fontSize: 14, color: "#3a4f70", lineHeight: 1.7, marginBottom: 10 }}>
          <span className="cs">Živá homepage používá tmavý lesní hero s koláží reálných fotek ze zakázek (přístup na střechu, kamerová kontrola, interiéry šachet), výrazný patkový nadpis a jasné důvěryhodnostní štítky („Bez vstupu do bytů“, „Fotodokumentace a protokol“, „Pro SVJ, BD a správce“). Hlavní akce jsou dvě — objednat bezplatnou kontrolu, nebo se podívat na orientační cenu.</span>
          <span className="en">The live homepage uses a dark forest hero with a photo collage of real job photos
          (roof access, camera inspection, shaft interiors), a bold serif headline, and clear
          trust badges ("Bez vstupu do bytů", "Fotodokumentace a protokol", "Pro SVJ, BD a
          správce"). It leads with two calls to action — book a free inspection, or check
          indicative pricing.</span>
        </p>
        <p style={{ fontSize: 13, color: "#76787B" }}>
          <HubText cs="Pokud chcete před finálním potvrzením porovnat i jiné směry, můžeme si designovou exploraci projít zvlášť při další kontrole projektu." en="If you'd like to compare other directions before we fully commit, we can review the design exploration separately during the next project walkthrough." />
        </p>
      </Section>

      <div style={{ background: "#0f2b1f", borderRadius: 16, padding: 28, textAlign: "center" }}>
        <p style={{ color: "#f6f0e6", fontSize: 15, marginBottom: 16 }}>
          <span className="cs">Chcete to vidět v praxi? Otevřete živý web níže, nebo rovnou v Pastelu, a okomentujte cokoliv — nadpis, fotku nebo sekci — přímo tam, kde se na stránce zobrazuje.</span>
          <span className="en">Ready to see it in action? Open the live site below, or straight in Pastel, and
          comment on anything — a headline, a photo, a section — right where it appears on the page.</span>
        </p>
        <div style={{ display: "inline-flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
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
            <HubText cs="Zkontrolovat živý web →" en="Review the live site →" />
          </a>
          <a
            href="https://usepastel.com/link/o8m7rg13/"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#f6f0e6",
              fontWeight: 700,
              fontSize: 14,
              padding: "12px 22px",
              borderRadius: 999,
              textDecoration: "none",
            }}
          >
            <HubText cs="📍 Okomentovat v Pastelu →" en="📍 Annotate in Pastel →" />
          </a>
        </div>
      </div>
    </HubShell>
  );
}
