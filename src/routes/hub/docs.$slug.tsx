import { createFileRoute, notFound } from "@tanstack/react-router";
import { DocEmbed } from "@/components/doc-embed";
import { HubShell } from "@/components/hub-shell";

import marketReportHtml from "@/content/docs/market-report.html?raw";
import legalRequirementsHtml from "@/content/docs/legal-requirements.html?raw";
import offerScopeHtml from "@/content/docs/offer-scope.html?raw";
import intakeFormHtml from "@/content/docs/intake-form.html?raw";

const DOCS: Record<string, { title: string; html: string; background: string; color: string }> = {
  "market-report": {
    title: "Market & Competitor Report",
    html: marketReportHtml,
    background: "#f4f8fb",
    color: "#16202e",
  },
  "legal-requirements": {
    title: "Legal Requirements",
    html: legalRequirementsHtml,
    background: "#0f1117",
    color: "#e2e6f0",
  },
  "offer-scope": {
    title: "What's In The Build",
    html: offerScopeHtml,
    background: "#f8f9fb",
    color: "#1a1d23",
  },
  "intake-form": {
    title: "Intake Form",
    html: intakeFormHtml,
    background: "linear-gradient(180deg, #f9f5ef 0%, #f6f0e6 100%)",
    color: "#0f2b1f",
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
  const doc = DOCS[slug];

  return (
    <HubShell content="full" mainStyle={{ background: doc.background, color: doc.color }}>
      <DocEmbed html={doc.html} />
    </HubShell>
  );
}
