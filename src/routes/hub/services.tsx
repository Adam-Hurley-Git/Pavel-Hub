import { createFileRoute } from "@tanstack/react-router";
import { HubKicker, HubShell, HubText } from "@/components/hub-shell";

export const Route = createFileRoute("/hub/services")({
  head: () => ({
    meta: [{ title: "Other Services | Čisté šachty Hub" }],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    title: { cs: "Správa Google firemního profilu", en: "Google Business Profile Management" },
    tag: { cs: "Pravidelně", en: "Recurring" },
    body: { cs: "Průběžná správa Google firemního profilu po úvodním nastavení — pravidelné příspěvky, získávání recenzí a odpovědi, nové fotky — aby profil zůstal aktivní v Mapách Google a lokálním „3-packu“, kde vás většina výborů SVJ a správců najde jako první.", en: "Ongoing management of your Google Business Profile after the initial setup — regular posts, review generation and responses, and fresh photos — to keep you active in Google Maps and the local “3-pack”, where most SVJ boards and property managers find you first." },
    includes: [
      { cs: "Minimálně 2 příspěvky na Google měsíčně — zakázky, sezónní tipy, představení služby", en: "At least 2 Google posts per month — job updates, seasonal tips, service spotlights" },
      { cs: "Správa recenzí: odkaz na recenzi, připomínky po zakázkách a odpovědi do 48 hodin", en: "Review management: review link, follow-ups after jobs, and responses within 48 hours" },
      { cs: "Pravidelné doplňování nových fotek ze zakázek", en: "Fresh job photos added to the profile regularly" },
      { cs: "Aktuální otázky a odpovědi i detaily profilu", en: "Q&A and profile details kept current" },
    ],
  },
  {
    title: { cs: "Hosting & údržba", en: "Hosting & Maintenance Retainer" },
    tag: { cs: "Pravidelně", en: "Recurring" },
    body: { cs: "Postaráme se, aby web běžel: hosting, monitoring dostupnosti, zálohy, bezpečnostní aktualizace a drobné úpravy obsahu (otevírací doba, ceny, fotky), kdykoliv je budete potřebovat — bez zásahu do kódu.", en: "We keep the site running: hosting, uptime monitoring, backups, security updates, and small content edits (opening hours, prices, photos) whenever you need them — without touching any code yourself." },
    includes: [
      { cs: "Spravovaný hosting a SSL", en: "Managed hosting and SSL" },
      { cs: "Pravidelné zálohy a monitoring dostupnosti", en: "Regular backups and uptime monitoring" },
      { cs: "Softwarové a bezpečnostní aktualizace", en: "Software/security updates" },
      { cs: "Domluvený počet drobných úprav obsahu za měsíc", en: "A set number of small content edits per month" },
    ],
  },
  {
    title: { cs: "Balíček šablon protokolů pro SVJ", en: "SVJ Protocol Template Package" },
    tag: { cs: "Jednorázově", en: "One-off build" },
    body: { cs: "Brandované šablony dokumentace připravené k odeslání po každé zakázce — fotoreport před/po a předávací protokol, který si klienti ze SVJ/BD mohou rovnou založit do dokumentace domu.", en: "Branded, ready-to-send documentation templates for after each job — the before/after photo report and completion protocol your SVJ/BD clients can file straight into their building records." },
    includes: [
      { cs: "Brandovaná šablona protokolu (Word/PDF)", en: "Branded protocol template (Word/PDF)" },
      { cs: "Rozvržení fotoreportu před/po", en: "Before/after photo report layout" },
      { cs: "Jednotná profesionální dokumentace pro každou zakázku", en: "Consistent, professional paperwork for every job" },
      { cs: "Posiluje na webu vaši výhodu v dokumentaci", en: "Reinforces your documentation USP on the website" },
    ],
  },
  {
    title: { cs: "Blog & SEO obsah", en: "Blog & SEO Content" },
    tag: { cs: "Pravidelně", en: "Recurring" },
    body: { cs: "Pravidelné články cílené na dotazy, které výbory SVJ a správci skutečně hledají — právní povinnosti, otázky kolem ceny a vysvětlení postupu — pro dlouhodobou organickou návštěvnost.", en: "Regular articles targeting the searches SVJ boards and property managers actually make — the legal-obligation angle, pricing questions, and process explainers — to build long-term organic traffic." },
    includes: [
      { cs: "Témata článků podle klíčových slov", en: "Keyword-led article topics" },
      { cs: "Texty napsané, optimalizované a publikované za vás", en: "Written, optimised, and published for you" },
      { cs: "Buduje autoritu hlavních servisních stránek", en: "Builds authority for the core service pages" },
    ],
  },
  {
    title: { cs: "Regionální servisní stránky", en: "Regional Service Pages" },
    tag: { cs: "Rozšiřitelné", en: "Expandable" },
    body: { cs: "Samostatné stránky pro města, kde působíte. Začít lze jednou obecnou stránkou oblasti a postupně přidávat jednotlivá města (Kyjov, Veselí nad Moravou, Strážnice atd.) podle růstu.", en: "Dedicated pages for the towns you serve, starting with one general area page and expanding to individual town pages (Kyjov, Veselí nad Moravou, Strážnice, etc.) as you grow into new areas." },
    includes: [
      { cs: "Jedna obecná stránka obsluhované oblasti na začátek", en: "One general service-area page to start" },
      { cs: "Další městské stránky podle potřeby", en: "Additional town pages added as needed" },
      { cs: "Každá cílí na lokální vyhledávání daného města", en: "Each targets local search for that town" },
    ],
  },
  {
    title: { cs: "AI vylepšení fotek", en: "AI Photo Enhancement" },
    tag: { cs: "Jednorázově / průběžně", en: "One-off / ongoing" },
    body: { cs: "Hrubé fotky ze zakázek upravíme pomocí AI do čistých obrázků připravených pro web a sociální sítě — aby vaše reálná práce online vypadala stejně dobře jako na místě.", en: "We take your rough job-site photos and turn them into clean, social-ready images using AI enhancement — so your real work looks as good online as it is in person." },
    includes: [
      { cs: "Úprava barev, světla a ostrosti", en: "Colour, lighting and clarity correction" },
      { cs: "Jednotný profesionální vzhled všech fotek", en: "Consistent, professional look across all photos" },
      { cs: "Připraveno pro web, Google profil i sociální sítě", en: "Ready to post on the website, Google Business Profile and social media" },
    ],
  },
  {
    title: { cs: "Automatizovaná lead-gen pipeline", en: "Automated Lead-Generation Pipeline" },
    tag: { cs: "Pravidelně", en: "Recurring" },
    body: { cs: "Systém, který vám pomůže aktivně nacházet nové klienty ze SVJ/BD místo čekání, až najdou oni vás — založený na veřejných rejstřících SVJ, partnerství se správci a cíleném oslovení.", en: "A system to help you actively find new SVJ/BD clients — rather than waiting for them to find you — built around the public SVJ registry, property-management partnerships, and targeted outreach." },
    includes: [
      { cs: "Sestavení cílového seznamu místních SVJ, BD a správců", en: "Building a target list of local SVJs, BDs and property managers" },
      { cs: "Oslovovací sekvence pro kontaktování", en: "Outreach sequence to reach them" },
      { cs: "Průběžná pipeline, aby přicházely nové příležitosti", en: "Ongoing pipeline so new leads keep coming in" },
    ],
  },
];

function ServicesPage() {
  return (
    <HubShell>
      <HubKicker><HubText cs="Nad rámec současného webu" en="Beyond The Current Build" /></HubKicker>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1A1A1A", marginBottom: 10, letterSpacing: "-0.02em" }}>
        <HubText cs="Další služby, které můžeme přidat" en="Other services we could add" />
      </h1>
      <p style={{ fontSize: 15, color: "#5a6b80", maxWidth: 700, lineHeight: 1.7, marginBottom: 30 }}>
        <span className="cs">Současný rozsah pokrývá web a nastavení Google firemního profilu (viz <em>Co je v rozsahu</em> v hubu). Vše níže je volitelné — věci, které by podle nás mohly Čistým šachtám reálně pomoct růst a které můžete přidat teď, později, nebo vůbec.</span>
        <span className="en">The current build covers your website and Google Business Profile setup (see{" "}
        <em>What's In The Build</em> in the hub). Everything below is optional — things we think
        could genuinely help grow Čisté šachty, that you can add now, later, or not at all.</span>
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 18 }}>
        {SERVICES.map((s) => (
          <div key={s.title.en} style={{ background: "white", border: "1px solid #DEE8F7", borderRadius: 16, padding: 22, display: "flex", flexDirection: "column", gap: 10 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#334A73" }}><HubText cs={s.title.cs} en={s.title.en} /></div>
              <span style={{ fontSize: 10.5, fontWeight: 700, color: "#00806c", background: "rgba(0,201,167,0.12)", padding: "3px 9px", borderRadius: 999, whiteSpace: "nowrap" }}>
                <HubText cs={s.tag.cs} en={s.tag.en} />
              </span>
            </div>
            <p style={{ fontSize: 13.5, color: "#5a6578", lineHeight: 1.65 }}><HubText cs={s.body.cs} en={s.body.en} /></p>
            <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12.5, color: "#76787B", lineHeight: 1.9 }}>
              {s.includes.map((i) => (
                <li key={i.en}><HubText cs={i.cs} en={i.en} /></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 30, background: "#F2F5FA", border: "1px solid #DEE8F7", borderRadius: 16, padding: 22, fontSize: 13.5, color: "#334A73", lineHeight: 1.7 }}>
        <HubText cs="Zajímá vás něco z toho? Zmiňte to při kontrole dalších kroků, nebo na této stránce zanechte komentář přes feedback tlačítko a doplníme rozsah i cenu pro služby, které chcete přidat." en="Interested in any of these? Mention it when we review next steps, or leave a comment on this page using the feedback button and we'll follow up with scope and pricing for whichever ones you want to add." />
      </div>
    </HubShell>
  );
}
