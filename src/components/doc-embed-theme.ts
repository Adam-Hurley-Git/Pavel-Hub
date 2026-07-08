export const HUB_DOC_THEME_CSS = `
body:has(.hub-doc-theme) {
  background: #F2F5FA !important;
  overflow-x: hidden !important;
}

body:has(.hub-doc-theme) > div > footer {
  background: transparent !important;
  color: #76787B !important;
  border-top: 1px solid #E7E9ED !important;
}

.hub-doc-theme {
  --hub-page: #F2F5FA;
  --hub-card: #FFFFFF;
  --hub-line: #DEE8F7;
  --hub-ink: #1A1A1A;
  --hub-heading: #334A73;
  --hub-muted: #5A6B80;
  --hub-soft: #F7FAFE;
  --hub-accent: #00C9A7;
  --hub-cta: #EA3959;
  display: block;
  min-height: 100%;
  background: var(--hub-page);
  color: var(--hub-ink);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  overflow-x: hidden;
}

.hub-doc-market-report {
  --bg: #1A1A1A;
  --bg2: #334A73;
  --panel: var(--hub-card);
  --ink: var(--hub-ink);
  --muted: var(--hub-muted);
  --line: var(--hub-line);
  --brand: #008F7C;
  --brand2: var(--hub-accent);
  --soft: var(--hub-page);
  --soft2: var(--hub-soft);
  --shadow: 0 1px 2px rgba(15, 35, 70, 0.04), 0 16px 34px -22px rgba(51, 74, 115, 0.32);
  --shadow2: none;
}

.hub-doc-legal-requirements {
  --bg: var(--hub-page);
  --surface: var(--hub-card);
  --surface2: var(--hub-soft);
  --border: var(--hub-line);
  --accent: #008F7C;
  --text: var(--hub-ink);
  --muted: var(--hub-muted);
  --green: #1F9D6B;
  --red: #D6483B;
  --orange: #D99A2B;
  --accent3: #B8720A;
  --purple: #7C58B3;
}

.hub-doc-intake-form {
  --forest: var(--hub-heading);
  --forest-light: var(--hub-accent);
  --cream: var(--hub-page);
  --sand: #E7E9ED;
  --ink: var(--hub-ink);
  --muted: var(--hub-muted);
  --card: var(--hub-card);
  --border: var(--hub-line);
  --hero: linear-gradient(135deg, #1A1A1A 0%, #334A73 100%);
  --leaf: linear-gradient(135deg, #008F7C 0%, #00C9A7 100%);
  --shadow: 0 1px 2px rgba(15, 35, 70, 0.04), 0 16px 34px -24px rgba(51, 74, 115, 0.32);
  --radius-xl: 16px;
  --radius-lg: 16px;
  --radius-md: 12px;
  --radius-sm: 8px;
  --page-width: 1180px;
}

.hub-doc-theme :is(.wrap, .container, .content, .page) {
  max-width: 1180px !important;
  margin-inline: auto !important;
}

.hub-doc-theme :is(.wrap, .container) {
  padding-inline: 24px !important;
}

.hub-doc-theme .content,
.hub-doc-theme .page {
  padding: 40px 24px 72px !important;
}

.hub-doc-theme :is(header.hero, .hero) {
  background: linear-gradient(135deg, #1A1A1A 0%, #334A73 100%) !important;
  color: #FFFFFF !important;
  border-bottom: 0 !important;
  box-shadow: none !important;
}

.hub-doc-legal-requirements {
  display: flex;
  flex-direction: column;
}

.hub-doc-legal-requirements .hero {
  order: 1;
}

.hub-doc-legal-requirements > nav {
  order: 2;
}

.hub-doc-legal-requirements > .container {
  order: 3;
}

.hub-doc-market-report header.hero,
.hub-doc-legal-requirements .hero {
  padding-block: 44px 42px !important;
}

.hub-doc-legal-requirements .hero {
  text-align: left !important;
}

.hub-doc-legal-requirements .hero .container {
  max-width: 1180px !important;
  padding-inline: 24px !important;
}

.hub-doc-legal-requirements .hero h1 {
  max-width: 760px !important;
  margin: 0 0 10px !important;
  font-size: clamp(2rem, 4vw, 2.8rem) !important;
  line-height: 1.12 !important;
}

.hub-doc-legal-requirements .hero .sub {
  max-width: 760px !important;
  margin: 0 0 22px !important;
}

.hub-doc-legal-requirements .hero-meta {
  justify-content: flex-start !important;
  gap: 10px !important;
}

.hub-doc-intake-form .hero {
  border-radius: 16px !important;
  padding: 30px !important;
}

.hub-doc-theme :is(header.hero, .hero) :is(h1, h2, h3),
.hub-doc-theme :is(header.hero, .hero) :is(.sub, p, li, .hero-meta, .hero-card ul) {
  color: rgba(255, 255, 255, 0.82) !important;
}

.hub-doc-theme :is(header.hero, .hero) h1,
.hub-doc-theme :is(header.hero, .hero) .hero-card h2 {
  color: #FFFFFF !important;
}

.hub-doc-theme :is(header.hero, .hero) h1 span {
  color: inherit !important;
}

.hub-doc-theme :is(.hero-tag, .kicker, .section-label, .section-kicker, .eyebrow) {
  color: #008F7C !important;
  background: rgba(0, 201, 167, 0.1) !important;
  border-color: rgba(0, 201, 167, 0.18) !important;
  border-radius: 999px !important;
}

.hub-doc-theme :is(.hero-tag, .kicker, .section-label, .eyebrow) {
  width: fit-content !important;
  max-width: 100% !important;
}

.hub-doc-intake-form .eyebrow {
  justify-self: start !important;
}

.hub-doc-theme :is(header.hero, .hero) :is(.hero-tag, .kicker, .eyebrow) {
  color: var(--hub-accent) !important;
  background: rgba(0, 201, 167, 0.14) !important;
  border-color: rgba(0, 201, 167, 0.24) !important;
}

.hub-doc-theme :is(nav.toc, nav, .toolbar) {
  background: rgba(255, 255, 255, 0.96) !important;
  border: 1px solid var(--hub-line) !important;
  border-left: 0 !important;
  border-right: 0 !important;
  box-shadow: 0 1px 0 rgba(51, 74, 115, 0.04) !important;
  backdrop-filter: blur(12px) !important;
}

.hub-doc-theme nav.toc {
  top: 0 !important;
}

.hub-doc-theme :is(nav.toc a, nav a.nav-link, .toolbar-links a, .chip) {
  color: var(--hub-muted) !important;
  border-radius: 999px !important;
}

.hub-doc-theme :is(nav.toc a:hover, nav a.nav-link:hover, nav a.nav-link.active, .toolbar-links a:hover) {
  background: rgba(0, 201, 167, 0.1) !important;
  color: #008F7C !important;
  border-color: rgba(0, 201, 167, 0.18) !important;
}

.hub-doc-theme :is(.lang-btn.active, .btnPrint, .btn-primary) {
  background: var(--hub-accent) !important;
  border-color: var(--hub-accent) !important;
  color: #1A1A1A !important;
}

.hub-doc-theme :is(.print-btn, .btn-secondary, .btn-ghost, .lang-btn) {
  border-color: var(--hub-line) !important;
}

.hub-doc-theme :is(h1, h2, h3, .section-title, h2.section-title, .card-title, .subhead, .progress-summary h2) {
  letter-spacing: 0 !important;
}

.hub-doc-theme :is(h2, h3, .section-title, h2.section-title, .card-title, .subsection h3, .progress-summary h2) {
  color: var(--hub-heading) !important;
}

.hub-doc-theme :is(p, .lead, .section-desc, .card p, .card-val, .card-note, .step-body p, .hint, .footer-note, .small, .muted) {
  color: var(--hub-muted) !important;
}

.hub-doc-theme a {
  color: #008F7C !important;
}

.hub-doc-market-report .ad-btn {
  color: #FFFFFF !important;
}

.hub-doc-market-report .lang-group,
.hub-doc-market-report .btnPrint,
.hub-doc-legal-requirements .nav-actions {
  display: none !important;
}

.hub-doc-theme .en {
  display: none !important;
}

body.lang-en .hub-doc-theme .cs {
  display: none !important;
}

body.lang-en .hub-doc-theme .en {
  display: revert !important;
}

body.lang-en .hub-doc-legal-requirements li.en,
body.lang-en .hub-doc-legal-requirements a.en {
  display: flex !important;
}

body.lang-en .hub-doc-market-report nav.toc a.en,
body.lang-en .hub-doc-theme :is(.badge.en, .pill.en, .chip.en) {
  display: inline-flex !important;
}

.hub-doc-theme :is(.card, .comp-card, .icp-card, .opp-card, .accordion, .acc-header, .acc-body, .step, .stat-box, .fine-box, .meta-box, .progress-summary, .section, .formula-box, .inspo-card, .swatch, .check-card, .hero-card) {
  border-radius: 16px !important;
  border-color: var(--hub-line) !important;
  box-shadow: none !important;
}

.hub-doc-theme :is(.card, .comp-card, .icp-card, .opp-card, .accordion, .acc-header, .acc-body, .step, .stat-box, .meta-box, .progress-summary, .section, .formula-box, .inspo-card, .swatch, .check-card) {
  background: var(--hub-card) !important;
}

.hub-doc-theme .hero-card {
  background: rgba(255, 255, 255, 0.08) !important;
  border-color: rgba(255, 255, 255, 0.16) !important;
}

.hub-doc-theme :is(section, .section) {
  padding-block: 40px !important;
}

.hub-doc-legal-requirements .section {
  background: transparent !important;
  border: 0 !important;
  border-bottom: 1px solid var(--hub-line) !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}

.hub-doc-legal-requirements .section:last-child {
  border-bottom: 0 !important;
}

.hub-doc-intake-form .section,
.hub-doc-intake-form .progress-summary,
.hub-doc-intake-form .meta-box {
  padding: 24px !important;
}

.hub-doc-theme :is(table, .tableScroll, .table-wrap, .matrix-wrap) {
  border-color: var(--hub-line) !important;
  box-shadow: none !important;
}

.hub-doc-theme th {
  background: var(--hub-soft) !important;
  color: var(--hub-heading) !important;
  border-color: var(--hub-line) !important;
}

.hub-doc-theme td {
  border-color: var(--hub-line) !important;
}

.hub-doc-theme :is(tbody tr:nth-child(even), .sm-table tr:nth-child(even) td) {
  background: #FAFCFF !important;
}

.hub-doc-theme :is(input[type="text"], input[type="email"], input[type="tel"], input[type="date"], input[type="url"], textarea, select) {
  color: var(--hub-ink) !important;
  background: #FFFFFF !important;
  border: 1px solid var(--hub-line) !important;
  border-radius: 12px !important;
  box-shadow: none !important;
}

.hub-doc-theme :is(input, textarea, select):focus {
  border-color: var(--hub-accent) !important;
  box-shadow: 0 0 0 4px rgba(0, 201, 167, 0.14) !important;
}

.hub-doc-theme footer {
  background: #1A1A1A !important;
  color: rgba(255, 255, 255, 0.72) !important;
}

@media (max-width: 760px) {
  .hub-doc-theme .content,
  .hub-doc-theme .page,
  .hub-doc-theme :is(.wrap, .container) {
    padding-inline: 16px !important;
  }

  .hub-doc-theme .content,
  .hub-doc-theme .page {
    padding-top: 28px !important;
  }

  .hub-doc-theme :is(header.hero, .hero) {
    padding-block: 30px !important;
  }

  .hub-doc-legal-requirements .hero .container {
    padding-inline: 16px !important;
  }

  .hub-doc-intake-form .hero {
    padding: 24px !important;
  }

  .hub-doc-theme :is(section, .section) {
    padding-block: 30px !important;
  }
}
`;
