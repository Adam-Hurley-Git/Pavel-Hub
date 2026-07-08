import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { HubKicker, HubShell, HubText } from "@/components/hub-shell";

export const Route = createFileRoute("/hub/")({
  head: () => ({
    meta: [{ title: "Client Hub | Čisté šachty — Help Us Launch" }],
  }),
  component: HubIndex,
});

type CardLink = { to: string; external?: boolean };

function Card({
  n,
  title,
  body,
  link,
  cta = "Open",
}: {
  n: string;
  title: ReactNode;
  body: ReactNode;
  link: CardLink;
  cta?: ReactNode;
}) {
  const inner = (
    <div
      style={{
        background: "white",
        border: "1px solid #DEE8F7",
        borderRadius: 16,
        padding: 24,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        textDecoration: "none",
        color: "inherit",
        transition: "box-shadow .15s, transform .15s",
      }}
    >
      <div style={{ fontSize: 12, fontWeight: 800, color: "#00C9A7", letterSpacing: "0.08em" }}>{n}</div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "#334A73" }}>{title}</div>
      <div style={{ fontSize: 13.5, color: "#76787B", lineHeight: 1.6, flex: 1 }}>{body}</div>
      <div style={{ fontSize: 13, fontWeight: 700, color: "#EA3959", marginTop: 6 }}>{cta} →</div>
    </div>
  );

  if (link.external) {
    return (
      <a href={link.to} target="_blank" rel="noreferrer" style={{ textDecoration: "none" }}>
        {inner}
      </a>
    );
  }
  return (
    <Link to={link.to} style={{ textDecoration: "none" }}>
      {inner}
    </Link>
  );
}

function IntakeFormCard() {
  const missing = [
    { cs: "Telefon a veřejný e-mail", en: "Phone & public email" },
    { cs: "IČO / DIČ a fakturační adresa", en: "IČO / DIČ & billing address" },
    { cs: "Reálné ceny", en: "Real pricing" },
    { cs: "Alespoň jedna skutečná reference", en: "At least one real reference" },
  ];
  return (
    <Link to="/hub/docs/intake-form" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
      <div
        style={{
          background: "#FFFBF0",
          border: "1.5px dashed #D99A2B",
          borderRadius: 16,
          padding: 26,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, flexShrink: 0, borderRadius: 8, background: "#D99A2B", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 15 }}>
            📋
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#9A6A00", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              <HubText cs="Potřebujeme od vás" en="Action needed from you" />
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#334A73" }}>
              <HubText cs="Formulář s podklady" en="Intake Form" />
            </div>
          </div>
        </div>
        <p style={{ fontSize: 13.5, color: "#76787B", lineHeight: 1.6, margin: 0 }}>
          <HubText cs="Většina textů webu je už připravená. Pár tvrdých faktů ale musí přijít přímo od vás:" en="Most of the site copy is already drafted. A handful of hard facts still need to come directly from you:" />
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 7, flex: 1 }}>
          {missing.map((m) => (
            <li key={m.en} style={{ display: "flex", gap: 8, fontSize: 13, color: "#7a5a10", alignItems: "flex-start" }}>
              <span style={{ color: "#D99A2B", fontWeight: 700 }}>○</span>
              <HubText cs={m.cs} en={m.en} />
            </li>
          ))}
        </ul>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#B8720A", marginTop: 4 }}>
          <HubText cs="Vyplnit formulář →" en="Fill in the form →" />
        </div>
      </div>
    </Link>
  );
}

function OtherServicesCard() {
  const services = [
    { cs: "Hosting & údržba", en: "Hosting & Maintenance" },
    { cs: "SEO obsah", en: "SEO Content" },
    { cs: "Regionální stránky", en: "Regional Pages" },
    { cs: "Úprava fotek", en: "Photo Enhancement" },
    { cs: "Lead-gen pipeline", en: "Lead-Gen Pipeline" },
    { cs: "Šablony protokolů", en: "Protocol Templates" },
  ];
  return (
    <Link to="/hub/services" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
      <div
        style={{
          background: "white",
          border: "1px solid #DEE8F7",
          borderRadius: 16,
          padding: 26,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <div style={{ fontSize: 17, fontWeight: 700, color: "#334A73" }}>
            <HubText cs="Další služby" en="Other Services" />
          </div>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "#00806c", background: "rgba(0,201,167,0.12)", padding: "3px 10px", borderRadius: 999, whiteSpace: "nowrap" }}>
            <HubText cs="Volitelné doplňky" en="Optional add-ons" />
          </span>
        </div>
        <p style={{ fontSize: 13.5, color: "#76787B", lineHeight: 1.6, margin: 0 }}>
          <HubText cs="Věci navíc, které můžeme přidat nad rámec současného webu — můžete si vybrat teď, později, nebo vůbec:" en="Extra things we could add beyond the current build — pick and choose, now, later, or not at all:" />
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1, alignContent: "flex-start" }}>
          {services.map((s) => (
            <span
              key={s.en}
              style={{ fontSize: 12, fontWeight: 600, color: "#334A73", background: "#F2F5FA", border: "1px solid #DEE8F7", padding: "5px 12px", borderRadius: 999 }}
            >
              <HubText cs={s.cs} en={s.en} />
            </span>
          ))}
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#EA3959", marginTop: 4 }}>
          <HubText cs="Prohlédnout doplňky →" en="Browse add-ons →" />
        </div>
      </div>
    </Link>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section style={{ marginBottom: 40 }}>
      <div style={{ marginBottom: 16 }}>
        <h2 style={{ fontSize: 13, fontWeight: 800, color: "#334A73", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: description ? 4 : 0 }}>
          {title}
        </h2>
        {description && (
          <p style={{ fontSize: 13.5, color: "#76787B", lineHeight: 1.6, maxWidth: 560 }}>{description}</p>
        )}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
        {children}
      </div>
    </section>
  );
}

function HubIndex() {
  return (
    <HubShell>
      <HubKicker><HubText cs="Klientský kontrolní hub" en="Client Review Hub" /></HubKicker>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: "#1A1A1A", marginBottom: 10, letterSpacing: "-0.02em" }}>
        <HubText cs="Čisté šachty — vše na jednom místě" en="Čisté šachty — everything in one place" />
      </h1>
      <p style={{ fontSize: 15, color: "#5a6b80", maxWidth: 640, lineHeight: 1.7, marginBottom: 36 }}>
        <span className="cs">
          Tady najdete všechno, co jsme zatím připravili: tržní průzkum,
          právní podklady, rozsah webu, směr designu i podklady pro další postup. Níže
          otevřete libovolnou část a pomocí tlačítka <strong>📍 Zanechat komentář</strong>
          můžete na kterékoliv stránce, včetně živého webu, přímo označit, co chcete změnit.
        </span>
        <span className="en">
          This page brings together everything we've prepared so far: the market
          research, the legal background, what's included in the build, the design direction,
          and the paperwork to move forward. Click into anything below, and use the{" "}
          <strong>📍 Leave feedback</strong> button on any page (including the live site) to
          comment directly on what you'd like changed.
        </span>
      </p>

      <div
        style={{
          background: "linear-gradient(135deg, #1A1A1A 0%, #334A73 100%)",
          borderRadius: 16,
          padding: "28px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          marginBottom: 40,
        }}
      >
        <div>
          <div style={{ fontSize: 11, fontWeight: 800, color: "#00C9A7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
            <HubText cs="Živý web" en="Live Site" />
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 6 }}>
            <HubText cs="Podívejte se na aktuální verzi webu" en="See the actual website as it stands today" />
          </div>
          <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
            <HubText cs="Otevřete si web a nechte poznámky přímo na stránce přes Pastel." en="Open the site and leave notes directly on the page via Pastel." />
          </div>
        </div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a
            href="https://cistesachty-website-one.vercel.app/"
            target="_blank"
            rel="noreferrer"
            style={{
              flexShrink: 0,
              fontSize: 14,
              fontWeight: 700,
              color: "#1A1A1A",
              background: "#00C9A7",
              padding: "12px 22px",
              borderRadius: 999,
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            <HubText cs="Otevřít živý web →" en="Visit live site →" />
          </a>
          <a
            href="https://usepastel.com/link/o8m7rg13/"
            target="_blank"
            rel="noreferrer"
            style={{
              flexShrink: 0,
              fontSize: 14,
              fontWeight: 700,
              color: "white",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.24)",
              padding: "12px 22px",
              borderRadius: 999,
              whiteSpace: "nowrap",
              textDecoration: "none",
            }}
          >
            <HubText cs="📍 Okomentovat →" en="📍 Annotate →" />
          </a>
        </div>
      </div>

      <Section title={<HubText cs="Průzkum" en="Research" />} description={<HubText cs="Podklady pro strategii — situace na trhu a právní kontext." en="Background that informs the strategy — market landscape and legal context." />}>
        <Card
          n="01"
          title={<HubText cs="Tržní a konkurenční report" en="Market & Competitor Report" />}
          body={<HubText cs="Kompletní rozbor lokálního trhu, konkurentů, jejich reklam a SEO, včetně hlavních příležitostí." en="A full breakdown of your local market, competitors, their ads and SEO, and where the opportunities are." />}
          cta={<HubText cs="Otevřít" en="Open" />}
          link={{ to: "/hub/docs/market-report" }}
        />
        <Card
          n="02"
          title={<HubText cs="Právní požadavky" en="Legal Requirements" />}
          body={<HubText cs="Co musí výbory SVJ/BD právně řešit kolem čištění šachet a jak se to propisuje do marketingu." en="What SVJ/BD boards are legally required to do around shaft cleaning, and how that plays into your marketing." />}
          cta={<HubText cs="Otevřít" en="Open" />}
          link={{ to: "/hub/docs/legal-requirements" }}
        />
      </Section>

      <Section title={<HubText cs="Web & služba" en="Website & Service" />} description={<HubText cs="Co se pro vás konkrétně staví a dodává." en="What's actually being built and delivered for you." />}>
        <Card
          n="03"
          title={<HubText cs="Co je v rozsahu" en="What's In The Build" />}
          body={<HubText cs="Přesný rozsah webu a jednorázového nastavení Google firemního profilu — jen to, co je skutečně zahrnuté." en="The exact scope of the website and one-time Google Business Profile setup you're getting — trimmed to what's actually included." />}
          cta={<HubText cs="Otevřít" en="Open" />}
          link={{ to: "/hub/docs/offer-scope" }}
        />
        <Card
          n="04"
          title={<HubText cs="Okomentovat web" en="Annotate The Website" />}
          body={<HubText cs="Otevřete živý web v nástroji Pastel a nechte poznámky přímo na stránce — klikněte kamkoli, napište komentář a my to uvidíme." en="Open the live site in Pastel and leave notes directly on the page — click anywhere, add a comment, and we'll see it." />}
          cta={<HubText cs="Otevřít Pastel" en="Open Pastel" />}
          link={{ to: "https://usepastel.com/link/o8m7rg13/", external: true }}
        />
        <Card
          n="05"
          title={<HubText cs="Směr designu" en="Design Direction" />}
          body={<HubText cs="Barvy, písma a směr loga, které jsme zatím zvolili, plus odkaz na živý web pro komentáře." en="The colours, fonts and logo direction we've chosen so far, plus a link to review the live site and leave comments." />}
          cta={<HubText cs="Otevřít" en="Open" />}
          link={{ to: "/hub/direction" }}
        />
        <Card
          n="07"
          title={<HubText cs="Cena & smlouva" en="Contract & Pricing" />}
          body={<HubText cs="Jednorázová cena za web a jasný přehled toho, co je zahrnuté. Fakturu a platbu potvrdíme osobně." en="The one-off build price and a clear overview of what is included. Invoice and payment details will be confirmed in person." />}
          cta={<HubText cs="Otevřít" en="Open" />}
          link={{ to: "/hub/contract" }}
        />
      </Section>

      <section style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 18,
            alignItems: "stretch",
          }}
        >
          <IntakeFormCard />
          <OtherServicesCard />
        </div>
      </section>
    </HubShell>
  );
}
