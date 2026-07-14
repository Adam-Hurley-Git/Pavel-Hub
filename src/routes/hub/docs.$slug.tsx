import { createFileRoute, notFound } from "@tanstack/react-router";
import { DocEmbed } from "@/components/doc-embed";
import { HUB_DOC_THEME_CSS } from "@/components/doc-embed-theme";
import { HubShell } from "@/components/hub-shell";
import { useHubLanguage, type HubLanguage } from "@/lib/language";

import marketReportHtml from "@/content/docs/market-report.html?raw";
import legalRequirementsHtml from "@/content/docs/legal-requirements.html?raw";
import offerScopeHtml from "@/content/docs/offer-scope.html?raw";
import offerScopeCsHtml from "@/content/docs/offer-scope.cs.html?raw";
import intakeFormHtml from "@/content/docs/intake-form.html?raw";
import intakeFormEnHtml from "@/content/docs/intake-form.en.html?raw";
import databoxOutreachHtml from "@/content/docs/databox-outreach.html?raw";

const DOCS: Record<string, { title: string; html: string | Record<HubLanguage, string>; background: string; color: string; hubTheme?: boolean }> = {
  "market-report": {
    title: "Market & Competitor Report",
    html: marketReportHtml,
    background: "#F2F5FA",
    color: "#1A1A1A",
    hubTheme: true,
  },
  "legal-requirements": {
    title: "Legal Requirements",
    html: legalRequirementsHtml,
    background: "#F2F5FA",
    color: "#1A1A1A",
    hubTheme: true,
  },
  "offer-scope": {
    title: "What's In The Build",
    html: { cs: offerScopeCsHtml, en: offerScopeHtml },
    background: "#f8f9fb",
    color: "#1a1d23",
  },
  "intake-form": {
    title: "Intake Form",
    html: { cs: intakeFormHtml, en: intakeFormEnHtml },
    background: "#F2F5FA",
    color: "#1A1A1A",
    hubTheme: true,
  },
  "databox-outreach": {
    title: "Data Box Outreach — Legal Limits",
    html: databoxOutreachHtml,
    background: "#F2F5FA",
    color: "#1A1A1A",
    hubTheme: true,
  },
};

export const Route = createFileRoute("/hub/docs/$slug")({
  loader: ({ params }) => {
    const doc = DOCS[params.slug];
    if (!doc) throw notFound();
    return { title: doc.title };
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "Document"} | Čisté šachty Hub` }],
  }),
  component: DocViewer,
});

function DocViewer() {
  const { slug } = Route.useParams();
  const [language] = useHubLanguage();
  const doc = DOCS[slug];
  const html = typeof doc.html === "string" ? doc.html : doc.html[language];

  return (
    <HubShell content="full" mainStyle={{ background: doc.background, color: doc.color }}>
      <DocEmbed
        className={doc.hubTheme ? `hub-doc-theme hub-doc-${slug}` : undefined}
        html={html}
        styleOverride={doc.hubTheme ? HUB_DOC_THEME_CSS : undefined}
      />
    </HubShell>
  );
}
