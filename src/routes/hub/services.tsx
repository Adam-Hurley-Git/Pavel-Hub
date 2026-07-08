import { createFileRoute } from "@tanstack/react-router";
import { HubKicker, HubShell } from "@/components/hub-shell";

export const Route = createFileRoute("/hub/services")({
  head: () => ({
    meta: [{ title: "Other Services | Čisté šachty Hub" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: "Google Business Profile Management",
    tag: "Recurring",
    body: "Ongoing management of your Google Business Profile after the initial setup — regular posts, review generation and responses, and fresh photos — to keep you active in Google Maps and the local “3-pack”, where most SVJ boards and property managers find you first.",
    includes: [
      "At least 2 Google posts per month — job updates, seasonal tips, service spotlights",
      "Review management: review link, follow-ups after jobs, and responses within 48 hours",
      "Fresh job photos added to the profile regularly",
      "Q&A and profile details kept current",
    ],
  },
  {
    title: "Hosting & Maintenance Retainer",
    tag: "Recurring",
    body: "We keep the site running: hosting, uptime monitoring, backups, security updates, and small content edits (opening hours, prices, photos) whenever you need them — without touching any code yourself.",
    includes: [
      "Managed hosting and SSL",
      "Regular backups and uptime monitoring",
      "Software/security updates",
      "A set number of small content edits per month",
    ],
  },
  {
    title: "SVJ Protocol Template Package",
    tag: "One-off build",
    body: "Branded, ready-to-send documentation templates for after each job — the before/after photo report and completion protocol your SVJ/BD clients can file straight into their building records.",
    includes: [
      "Branded protocol template (Word/PDF)",
      "Before/after photo report layout",
      "Consistent, professional paperwork for every job",
      "Reinforces your documentation USP on the website",
    ],
  },
  {
    title: "Blog & SEO Content",
    tag: "Recurring",
    body: "Regular articles targeting the searches SVJ boards and property managers actually make — the legal-obligation angle, pricing questions, and process explainers — to build long-term organic traffic.",
    includes: [
      "Keyword-led article topics",
      "Written, optimised, and published for you",
      "Builds authority for the core service pages",
    ],
  },
  {
    title: "Regional Service Pages",
    tag: "Expandable",
    body: "Dedicated pages for the towns you serve, starting with one general area page and expanding to individual town pages (Kyjov, Veselí nad Moravou, Strážnice, etc.) as you grow into new areas.",
    includes: [
      "One general service-area page to start",
      "Additional town pages added as needed",
      "Each targets local search for that town",
    ],
  },
  {
    title: "AI Photo Enhancement",
    tag: "One-off / ongoing",
    body: "We take your rough job-site photos and turn them into clean, social-ready images using AI enhancement — so your real work looks as good online as it is in person.",
    includes: [
      "Colour, lighting and clarity correction",
      "Consistent, professional look across all photos",
      "Ready to post on the website, Google Business Profile and social media",
    ],
  },
  {
    title: "Automated Lead-Generation Pipeline",
    tag: "Recurring",
    body: "A system to help you actively find new SVJ/BD clients — rather than waiting for them to find you — built around the public SVJ registry, property-management partnerships, and targeted outreach.",
    includes: [
      "Building a target list of local SVJs, BDs and property managers",
      "Outreach sequence to reach them",
      "Ongoing pipeline so new leads keep coming in",
    ],
  },
];

function ServicesPage() {
  return (
    <HubShell>
      <HubKicker>Beyond The Current Build</HubKicker>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1A1A1A", marginBottom: 10, letterSpacing: "-0.02em" }}>
        Other services we could add
      </h1>
      <p style={{ fontSize: 15, color: "#5a6b80", maxWidth: 700, lineHeight: 1.7, marginBottom: 30 }}>
        The current build covers your website and Google Business Profile setup (see{" "}
        <em>What's In The Build</em> in the hub). Everything below is optional — things we think
        could genuinely help grow Čisté šachty, that you can add now, later, or not at all.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
        {SERVICES.map((s) => (
          <div key={s.title} style={{ background: "white", border: "1px solid #DEE8F7", borderRadius: 16, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#334A73" }}>{s.title}</div>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: "#00806c", background: "rgba(0,201,167,0.12)", padding: "3px 9px", borderRadius: 999, whiteSpace: "nowrap" }}>
                {s.tag}
              </span>
            </div>
            <p style={{ fontSize: 13.5, color: "#5a6578", lineHeight: 1.65 }}>{s.body}</p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, color: "#76787B", lineHeight: 1.9 }}>
              {s.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 30, background: "#F2F5FA", border: "1px solid #DEE8F7", borderRadius: 16, padding: 22, fontSize: 13.5, color: "#334A73", lineHeight: 1.7 }}>
        Interested in any of these? Mention it when we review next steps, or leave a comment
        on this page using the feedback button and we'll follow up with scope and pricing for
        whichever ones you want to add.
      </div>
    </HubShell>
  );
}
