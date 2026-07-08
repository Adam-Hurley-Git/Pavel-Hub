import { Link, createFileRoute } from "@tanstack/react-router";
import { HubKicker, HubShell, HubText } from "@/components/hub-shell";

export const Route = createFileRoute("/hub/contract")({
  head: () => ({
    meta: [{ title: "Contract & Pricing | Čisté šachty Hub" }],
  }),
  component: ContractPage,
});

function ContractPage() {
  return (
    <HubShell>
      <HubKicker><HubText cs="Připraveno k dalšímu kroku" en="Ready To Move Forward" /></HubKicker>
      <h1 style={{ fontSize: 32, fontWeight: 800, color: "#1A1A1A", marginBottom: 10, letterSpacing: "-0.02em" }}>
        <HubText cs="Cena & smlouva" en="Contract & pricing" />
      </h1>
      <p style={{ fontSize: 15, color: "#5a6b80", maxWidth: 680, lineHeight: 1.7, marginBottom: 10 }}>
        <HubText cs="Tady je plná cena za web a praktický přehled toho, co je zahrnuté." en="Here's the full build price and the practical overview of what is included." />
      </p>
      <div
        style={{
          background: "#F2F5FA",
          border: "1px solid #DEE8F7",
          borderRadius: 12,
          padding: "12px 16px",
          fontSize: 13,
          color: "#334A73",
          marginBottom: 28,
          maxWidth: 680,
          lineHeight: 1.65,
        }}
      >
        <span className="cs">Celý rozsah najdete v dokumentu{" "}</span>
        <span className="en">For the full scope, review{" "}</span>
        <Link to="/hub/docs/offer-scope" style={{ color: "#1b6f8f", fontWeight: 700 }}>
          <HubText cs="Co je v rozsahu" en="What's In The Build" />
        </Link>
        <span className="cs">, společně s{" "}</span>
        <span className="en">, alongside the{" "}</span>
        <Link to="/hub/docs/market-report" style={{ color: "#1b6f8f", fontWeight: 700 }}>
          <HubText cs="tržním reportem" en="market report" />
        </Link>{" "}
        <span className="cs">a{" "}</span>
        <span className="en">and{" "}</span>
        <Link to="/hub/docs/legal-requirements" style={{ color: "#1b6f8f", fontWeight: 700 }}>
          <HubText cs="právními požadavky" en="legal requirements" />
        </Link>
        <span className="cs">. Tyto podklady vysvětlují, proč je web strukturovaný právě takto a co formovalo nabídku.</span>
        <span className="en">. These explain why the site is structured this way and what has shaped the offer.</span>
      </div>

      <div style={{ background: "white", border: "1px solid #DEE8F7", borderRadius: 16, padding: 26, marginBottom: 20 }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#334A73", marginBottom: 16 }}><HubText cs="Co je zahrnuté" en="What's included" /></h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 14, marginBottom: 20 }}>
          <div style={{ border: "1px solid #E7E9ED", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#1A1A1A", marginBottom: 6 }}><HubText cs="Tvorba webu" en="Website build" /></div>
            <div style={{ fontSize: 13, color: "#76787B", lineHeight: 1.6 }}>
              <HubText cs="Kompletní web na míru — homepage, služby, ceny, lokality, kontakt a právní stránky, postavené tak, aby přesvědčily výbory SVJ a správce nemovitostí." en="Full custom website — homepage, services, pricing, locations, contact and legal pages, built to convert SVJ boards and property managers." />
            </div>
          </div>
          <div style={{ border: "1px solid #E7E9ED", borderRadius: 12, padding: 16 }}>
            <div style={{ fontWeight: 700, fontSize: 14, color: "#1A1A1A", marginBottom: 6 }}><HubText cs="Nastavení Google firemního profilu" en="Google Business Profile setup" /></div>
            <div style={{ fontSize: 13, color: "#76787B", lineHeight: 1.6 }}>
              <HubText cs="Jednorázové založení/nastavení, optimalizace a předání pro viditelnost v Mapách Google. Je to součást webu, ne pravidelná měsíční služba." en="One-time setup, optimisation and handover for Google Maps visibility. This is included in the build, not a recurring monthly service." />
            </div>
          </div>
        </div>

        <h2 style={{ fontSize: 18, fontWeight: 700, color: "#334A73", marginBottom: 16 }}>
          <HubText cs="Cena" en="Price" />
        </h2>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5, marginBottom: 20 }}>
          <tbody>
            <tr>
              <td style={{ padding: "10px 0", color: "#5a6578" }}><HubText cs="Tvorba webu (jednorázově)" en="Website build (one-off)" /></td>
              <td style={{ padding: "10px 0", fontWeight: 800, color: "#1A1A1A", textAlign: "right", fontSize: 18 }}>CZK 12,000</td>
            </tr>
          </tbody>
        </table>

        <h3 style={{ fontSize: 14, fontWeight: 800, color: "#334A73", marginBottom: 10 }}><HubText cs="Přehled zahrnutých položek" en="Included overview" /></h3>
        <ul style={{ margin: 0, paddingLeft: 18, fontSize: 13, color: "#5a6578", lineHeight: 1.9 }}>
          <li><HubText cs="Kompletní web Čisté šachty: homepage, stránka služby, ceník, stránky pro cílové skupiny, O nás a kontakt." en="Full Čisté šachty website build: homepage, service page, pricing page, audience pages, about page and contact page." /></li>
          <li><HubText cs="Konverzní nástroje zaměřené na poptávky: poptávkový formulář, skrytá kalkulačka odhadu, garance nejlepší ceny a jasné CTA sekce." en="Lead-focused conversion tools: enquiry form, hidden estimate calculator, best-price guarantee and clear call-to-action sections." /></li>
          <li><HubText cs="Důvěra a dokumentace: místa pro fotky před/po, sekce s postupem práce, komunikace předávacího protokolu a FAQ." en="Trust and documentation positioning: before/after photo slots, process sections, protocol handover messaging and FAQ content." /></li>
          <li><HubText cs="Právní a compliance stránky připravené pro spuštění: ochrana soukromí a cookies, s finálními detaily k potvrzení." en="Legal and compliance pages prepared for launch: privacy policy and cookies pages, with final details to be confirmed." /></li>
          <li><HubText cs="Jednorázové nastavení Google firemního profilu: založení nebo převzetí profilu, kategorie, oblast služeb, kontakty, popis, služby a úvodní fotky." en="One-time Google Business Profile setup: profile creation or claim, categories, service area, contact details, description, services and launch photos." /></li>
          <li><HubText cs="Tržní a právní průzkum je už hotový a propsaný do struktury webu, směru textů i lokálních SEO priorit." en="Market and legal research already completed and reflected in the site structure, copy direction and local SEO priorities." /></li>
        </ul>
      </div>

      <div style={{ background: "white", border: "1px solid #DEE8F7", borderRadius: 16, padding: 22, fontSize: 13.5, color: "#334A73", lineHeight: 1.7 }}>
        <HubText cs="Finální platební údaje potvrdíme osobně a fakturu předáme přímo. Tato stránka slouží jen ke kontrole ceny a zahrnutého rozsahu." en="We will confirm the final payment details in person and provide the invoice directly. This page is for reviewing the price and included scope only." />
      </div>
    </HubShell>
  );
}
