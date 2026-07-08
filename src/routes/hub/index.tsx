import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { HubKicker, HubShell } from "@/components/hub-shell";

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
  title: string;
  body: string;
  link: CardLink;
  cta?: string;
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
    "Phone & public email",
    "IČO / DIČ & billing address",
    "Real pricing",
    "At least one real reference",
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
              Action needed from you
            </div>
            <div style={{ fontSize: 17, fontWeight: 700, color: "#334A73" }}>Intake Form</div>
          </div>
        </div>
        <p style={{ fontSize: 13.5, color: "#76787B", lineHeight: 1.6, margin: 0 }}>
          Most of the site copy is already drafted. A handful of hard facts still need to come directly from you:
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: 7, flex: 1 }}>
          {missing.map((m) => (
            <li key={m} style={{ display: "flex", gap: 8, fontSize: 13, color: "#7a5a10", alignItems: "flex-start" }}>
              <span style={{ color: "#D99A2B", fontWeight: 700 }}>○</span>
              {m}
            </li>
          ))}
        </ul>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#B8720A", marginTop: 4 }}>Fill in the form →</div>
      </div>
    </Link>
  );
}

function OtherServicesCard() {
  const services = [
    "Hosting & Maintenance",
    "SEO Content",
    "Regional Pages",
    "Photo Enhancement",
    "Lead-Gen Pipeline",
    "Protocol Templates",
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
          <div style={{ fontSize: 17, fontWeight: 700, color: "#334A73" }}>Other Services</div>
          <span style={{ fontSize: 10.5, fontWeight: 700, color: "#00806c", background: "rgba(0,201,167,0.12)", padding: "3px 10px", borderRadius: 999, whiteSpace: "nowrap" }}>
            Optional add-ons
          </span>
        </div>
        <p style={{ fontSize: 13.5, color: "#76787B", lineHeight: 1.6, margin: 0 }}>
          Extra things we could add beyond the current build — pick and choose, now, later, or not at all:
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, flex: 1, alignContent: "flex-start" }}>
          {services.map((s) => (
            <span
              key={s}
              style={{ fontSize: 12, fontWeight: 600, color: "#334A73", background: "#F2F5FA", border: "1px solid #DEE8F7", padding: "5px 12px", borderRadius: 999 }}
            >
              {s}
            </span>
          ))}
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "#EA3959", marginTop: 4 }}>Browse add-ons →</div>
      </div>
    </Link>
  );
}

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
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
      <HubKicker>Client Review Hub</HubKicker>
      <h1 style={{ fontSize: 34, fontWeight: 800, color: "#1A1A1A", marginBottom: 10, letterSpacing: "-0.02em" }}>
        Čisté šachty — everything in one place
      </h1>
      <p style={{ fontSize: 15, color: "#5a6b80", maxWidth: 640, lineHeight: 1.7, marginBottom: 36 }}>
        Hi Pavel — this page brings together everything we've prepared so far: the market
        research, the legal background, what's included in the build, the design direction,
        and the paperwork to move forward. Click into anything below, and use the{" "}
        <strong>📍 Leave feedback</strong> button on any page (including the live site) to
        comment directly on what you'd like changed.
      </p>

      <a
        href="https://cistesachty-website-one.vercel.app/"
        target="_blank"
        rel="noreferrer"
        style={{ textDecoration: "none", display: "block", marginBottom: 40 }}
      >
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
          }}
        >
          <div>
            <div style={{ fontSize: 11, fontWeight: 800, color: "#00C9A7", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
              Live Site
            </div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "white", marginBottom: 6 }}>
              See the actual website as it stands today
            </div>
            <div style={{ fontSize: 13.5, color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}>
              Use the 📍 feedback button in the corner to comment on anything you'd like changed.
            </div>
          </div>
          <div
            style={{
              flexShrink: 0,
              fontSize: 14,
              fontWeight: 700,
              color: "#1A1A1A",
              background: "#00C9A7",
              padding: "12px 22px",
              borderRadius: 999,
              whiteSpace: "nowrap",
            }}
          >
            Visit live site →
          </div>
        </div>
      </a>

      <Section title="Research" description="Background that informs the strategy — market landscape and legal context.">
        <Card
          n="01"
          title="Market & Competitor Report"
          body="A full breakdown of your local market, competitors, their ads and SEO, and where the opportunities are."
          link={{ to: "/hub/docs/market-report" }}
        />
        <Card
          n="02"
          title="Legal Requirements"
          body="What SVJ/BD boards are legally required to do around shaft cleaning, and how that plays into your marketing."
          link={{ to: "/hub/docs/legal-requirements" }}
        />
      </Section>

      <Section title="Website & Service" description="What's actually being built and delivered for you.">
        <Card
          n="03"
          title="What's In The Build"
          body="The exact scope of the website and one-time Google Business Profile setup you're getting — trimmed to what's actually included."
          link={{ to: "/hub/docs/offer-scope" }}
        />
        <Card
          n="05"
          title="Design Direction"
          body="The colours, fonts and logo direction we've chosen so far, plus a link to review the live site and leave comments."
          link={{ to: "/hub/direction" }}
        />
        <Card
          n="07"
          title="Contract & Pricing"
          body="The one-off build price and a clear overview of what is included. Invoice and payment details will be confirmed in person."
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
