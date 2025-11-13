// Simple translations (EN default, FR alternative)
const translations = {
  en: {
    "nav.name": "David Pinheiro",
    "nav.role": "Web Developer",
    "nav.home": "Home",
    "nav.web": "Web / Services",
    "nav.portfolio": "Portfolio",
    "nav.lab": "Creative Lab",
    "nav.offers": "Offers",
    "nav.process": "Process",
    "nav.cases": "Case studies",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "15-min call",

    "hero.kicker": "Landing pages & showcase sites",
    "hero.title": "Clean, fast pages that make people click.",
    "hero.subtitle": "I design and build landing pages and showcase sites that explain your offer clearly, load fast and guide visitors to your main action: booking, quote request, or purchase.",
    "hero.tag1": "Based in Berlin",
    "hero.tag2": "Remote EU",
    "hero.tag3": "FR / EN / PT / ES",
    "hero.cta_primary": "Book a 15-min call",
    "hero.cta_secondary": "See the 3 packs",
    "hero.note": "In 15 minutes, we clarify your needs, outline the plan, budget and next steps. No sales pitch.",
    "hero.card_title": "What you get",
    "hero.card_li1": "A site that is easy to understand for your visitors.",
    "hero.card_li2": "Optimised loading time, especially on mobile.",
    "hero.card_li3": "Basic SEO and Analytics (GA4) already plugged in.",
    "hero.meta1": "📍 Berlin & remote EU",
    "hero.meta2": "🕒 Landing possible within 72 hours",
    "hero.meta3": "🌐 French, English, Portuguese, Spanish",

    "home.kicker": "Digital practice · Berlin",
    "home.title": "Hey there, I’m David.",
    "home.subtitle": "I build clear, fast websites for creatives and small teams — and spend the rest of my time chasing light and sound.",
    "home.web.title": "Web / Services",
    "home.web.subtitle": "Landing pages & showcase sites to move your project forward.",
    "home.portfolio.title": "Photo portfolio",
    "home.portfolio.subtitle": "Places, faces and late nights — selected series.",
    "home.lab.title": "Creative Lab",
    "home.lab.subtitle": "Ableton, textures and visual/sonic experiments.",

    "fit.kicker": "Who it’s for",
    "fit.title": "Who I work with",
    "fit.subtitle": "I mostly collaborate with small, nimble teams who need clarity and momentum.",
    "fit.item1": "Freelance creatives launching a new offer or productized service.",
    "fit.item2": "Small studios needing a landing page that explains their positioning fast.",
    "fit.item3": "Coaches and consultants who want leads to book a call without hunting for information.",
    "fit.item4": "Bootstrapped SaaS or e-commerce founders polishing their early-stage presence.",
    "fit.note": "Past work with: business coach, photo studio, boutique agency, SaaS advisor.",

    "portfolio.hero.kicker": "Photo portfolio",
    "portfolio.hero.title": "Places, faces and late nights.",
    "portfolio.hero.subtitle": "A selection of images from travels, portraits and night walks. This is the visual side of my practice — the same eye I bring to web projects.",
    "portfolio.series.kicker": "Series",
    "portfolio.series.travel.title": "Travel & places",
    "portfolio.series.travel.subtitle": "Deserts, coastlines and cities in-between — quiet frames from the road.",
    "portfolio.series.portraits.title": "Portraits",
    "portfolio.series.portraits.subtitle": "People in their own light — slow sessions focused on trust and presence.",
    "portfolio.series.night.title": "Nights & atmospheres",
    "portfolio.series.night.subtitle": "Late-night walks, city glow and small surreal moments.",
    "portfolio.press.title": "Press & festivals",
    "portfolio.press.text": "If you need a quick overview for programming, you can request or download a photo presskit.",
    "portfolio.press.cta": "Download photo presskit",

    "lab.placeholder.kicker": "Creative Lab",
    "lab.placeholder.title": "Creative lab in progress",
    "lab.placeholder.subtitle": "A space to share behind-the-scenes from photo and music projects, experiments and tools. I’m gathering notes and visuals — they’ll be online soon.",
    "lab.placeholder.cta": "Check the web services",

    "proof.kicker": "Social proof",
    "proof.title": "What clients say after launch",
    "proof.subtitle": "Short notes from recent projects — straight to the point, like the sites we ship.",
    "proof.quote1": "“David distilled my messy draft into something clients actually read. Calls doubled the first week.”",
    "proof.author1": "Lina S. — Creative coach",
    "proof.quote2": "“We shipped a new landing page in three days. Clean, fast, and easy for my team to tweak later.”",
    "proof.author2": "Mark P. — Boutique studio lead",

    "offers.kicker": "Service packs",
    "offers.title": "3 clear packs to get online quickly",
    "offers.subtitle": "Each pack comes with a defined scope, price range and realistic timeline. You provide the content (text, images, logo), I handle the rest.",

    "offers.landing.title": "Landing 72h",
    "offers.landing.subtitle": "1–3 sections, fast launch",
    "offers.landing.price": "€500–900",
    "offers.landing.tag": "~72h",
    "offers.landing.intro": "Perfect to test an offer, a campaign or an event with one clear, focused page.",
    "offers.landing.li1": "Simple structure: hero, benefits, proof / contact.",
    "offers.landing.li2": "Uses your existing visual identity.",
    "offers.landing.li3": "Main CTA: form, email, Calendly, etc.",
    "offers.landing.li4": "Basic SEO (title, meta, headings, alt tags).",
    "offers.landing.footer": "Timeline: up to 72 hours after receiving approved content.\n1 round of revisions included.",

    "offers.vitrine.title": "Showcase site (3–5 pages)",
    "offers.vitrine.subtitle": "For freelancers, studios, small businesses",
    "offers.vitrine.price": "€1,000–2,000",
    "offers.vitrine.tag": "~2 weeks",
    "offers.vitrine.intro": "A complete site to present who you are, what you do and how to work with you.",
    "offers.vitrine.li1": "3–5 pages (Home, About, Services, Portfolio, Contact…)",
    "offers.vitrine.li2": "Responsive design, readable on mobile and desktop.",
    "offers.vitrine.li3": "Basic SEO + simple sitemap.",
    "offers.vitrine.li4": "Google Analytics 4 setup with basic events.",
    "offers.vitrine.footer": "Approx. 2 weeks after the wireframe is approved and content is complete.",

    "offers.maintenance.title": "Monthly maintenance",
    "offers.maintenance.subtitle": "Keep your site clean & up to date",
    "offers.maintenance.price": "€120–250 / month",
    "offers.maintenance.tag": "monthly",
    "offers.maintenance.intro": "You keep a living site without worrying about updates and small fixes.",
    "offers.maintenance.li1": "Simple content updates.",
    "offers.maintenance.li2": "Backups & basic checks.",
    "offers.maintenance.li3": "Small design tweaks or new sections.",
    "offers.maintenance.li4": "Light performance and traffic overview.",
    "offers.maintenance.footer": "Price depends on volume. Monthly, cancellable with notice.",

    "mentions.title": "Quick terms:",
    "mentions.li1": "30% upfront, 70% on delivery.",
    "mentions.li2": "1 round of revisions included per pack (extra rounds on quote).",
    "mentions.li3": "Content (text, images, logo) is provided by the client.",
    "mentions.li4": "Timeline pauses if we are waiting for content or approvals.",

    "process.kicker": "Process",
    "process.title": "From idea to live site, with minimal friction",
    "process.subtitle": "The goal: move from “we should have a proper site” to “here’s the link, share it” without unnecessary meetings.",
    "process.step1.title": "Quick brief (30 min)",
    "process.step1.text": "We clarify your audience, offer and primary action (leads, sales, bookings). You send what you already have: logo, copy drafts, visuals, references.",
    "process.step2.title": "Structure & wireframe",
    "process.step2.text": "I prepare a simple structure or wireframe with a clear user journey. We adjust once together before I start coding.",
    "process.step3.title": "Build & go live",
    "process.step3.text": "I develop the page, optimise performance, connect your domain and GA4. You get a live site, plus access and a short handover.",

    "cases.kicker": "Case studies",
    "cases.title": "Before / after: more clarity, more action",
    "cases.subtitle": "Two recent redesigns: same core content, but better structure, clearer message and stronger CTAs.",
    "cases.case1.label": "Case 1",
    "cases.case1.title": "Wellness coach – Landing 72h",
    "cases.case1.before": "Before: long page, dense text, weak CTA, no clear message above the fold.",
    "cases.case1.after": "After: hero focused on a clear target, 3 concrete benefits, one strong Calendly CTA on desktop and mobile.",
    "cases.case1.result": "Result: smoother journey, more calls booked from mobile, positive feedback on clarity.",
    "cases.case2.label": "Case 2",
    "cases.case2.title": "Photo studio in Berlin – Showcase site",
    "cases.case2.before": "Before: slow site, confusing portfolio, technical copy, menu that didn’t speak to clients.",
    "cases.case2.after": "After: 4 clear pages (Home, Portfolio, Services, Contact), optimised images, simple navigation, shorter copy.",
    "cases.case2.result": "Result: faster loading, better mobile UX, more qualified quote requests.",
    "cases.before_label": "Before",
    "cases.after_label": "After",

    "about.kicker": "About",
    "about.title": "Berlin-based web developer with a creative background",
    "about.subtitle": "I come from photography and music, and I apply the same mindset to the web: remove noise, keep the essential, and make it pleasant to look at and use.",
    "about.speed": "Speed: simple, lightweight stack (HTML, CSS, JS) so your site is quick to build and easy to maintain.",
    "about.design": "Design: clean layouts, readable type, real breathing space, focus on your message and visuals.",
    "about.support": "Support: I help you prioritise, structure your content and decide what really deserves to be on the page.",
    "about.languages": "Languages: French, English, Portuguese, Spanish – handy if you work across different markets or teams.",
    "about.text1": "Based in Berlin, I work with freelancers, creative studios and small businesses in Germany, France and across the EU.",
    "about.text2": "My goal: a site you’re not shy to share, because it finally matches who you are and what you offer.",

    "faq.kicker": "FAQ",
    "faq.title": "Quick answers",
    "faq.subtitle": "A few common questions. The rest is easier to cover in a short call.",
    "faq.q1": "How much does a project cost?",
    "faq.a1": "Most projects fit one of the three packs: landing from €500–900, showcase site from €1,000–2,000, maintenance from €120–250/month. A precise quote comes after the brief.",
    "faq.q2": "What are the typical timelines?",
    "faq.a2": "A simple landing can be ready within 72 hours once content is final. A 3–5 page site usually takes around 2 weeks after the structure is approved.",
    "faq.q3": "Who writes the copy and provides images?",
    "faq.a3": "You provide copy, logo and visuals. I guide you on length, clarity and missing pieces. I can also simplify or slightly rewrite your existing copy.",
    "faq.q4": "How many revisions are included?",
    "faq.a4": "Each pack includes 1 round of revisions (copy & micro design tweaks). Extra rounds are possible with an additional quote or hourly rate.",
    "faq.q5": "Who owns the site once it’s live?",
    "faq.a5": "You own the site, the code and the domain. I hand over all access (hosting, CMS if any, analytics) at the end of the project.",
    "faq.q6": "Is SEO and Analytics included?",
    "faq.a6": "Yes, basic SEO is included (title, meta, structure, alt tags, performance) and I integrate Google Analytics 4 with simple events on your key CTAs.",
    "checklist.title": "Quality checklist applied to every project:",
    "checklist.li1": "Responsive layout (mobile / tablet / desktop).",
    "checklist.li2": "Optimised images (WebP, ≤ 200 KB) with lazy loading.",
    "checklist.li3": "One H1, clear heading hierarchy, basic SEO meta.",
    "checklist.li4": "Alt text on images and accessible contrast.",
    "checklist.li5": "GA4 setup with simple event tracking.",

    "contact.kicker": "Contact",
    "contact.title": "Book a 15-minute call",
    "contact.subtitle": "Tell me where you are (idea, draft, existing site) and what you want your next site to do for you.",
    "contact.highlight": "A short call, a concrete plan: scope, budget, timeline.",
    "contact.location": "📍 Based in Berlin, working remotely across the EU.",
    "contact.langs": "Languages: French, English, Portuguese, Spanish.",
    "contact.cta": "Book a 15-min slot",
    "contact.note": "Pick a slot, describe your project in a few lines, and you’ll get a confirmation email with the video link.",
    "contact.reassurance": "Call = 15 minutes. No aggressive pitch — we map the scope, a realistic budget and next steps.",

    "footer.available": "Available in Berlin & remote EU.",

    "legal.text": "Site edited by David Pinheiro, web developer based in Berlin. Contact: david.pinheiro.d@gmail.com. Data sent through forms is only used to answer your requests and is not sold to third parties. This site may use Google Analytics 4 for anonymised audience measurement. You can disable analytics cookies in your browser settings."
  },

  fr: {
    "nav.name": "David Pinheiro",
    "nav.role": "Développeur Web",
    "nav.home": "Accueil",
    "nav.web": "Web / Services",
    "nav.portfolio": "Portfolio",
    "nav.lab": "Creative Lab",
    "nav.offers": "Offres",
    "nav.process": "Process",
    "nav.cases": "Cas clients",
    "nav.about": "À propos",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Appel 15 min",

    "hero.kicker": "Landing pages & sites vitrines",
    "hero.title": "Des pages claires, rapides, qui donnent envie de cliquer.",
    "hero.subtitle": "Je conçois et développe des landing pages et des sites vitrines qui expliquent votre offre simplement, chargent vite et guident vos visiteurs vers l’action : prise de rendez-vous, demande de devis ou achat.",
    "hero.tag1": "Basé à Berlin",
    "hero.tag2": "Remote UE",
    "hero.tag3": "FR / EN / PT / ES",
    "hero.cta_primary": "Planifier un appel 15 min",
    "hero.cta_secondary": "Voir les 3 packs",
    "hero.note": "En 15 minutes, on clarifie votre besoin, le plan, le budget et les prochaines étapes. Aucun pitch commercial.",
    "hero.card_title": "Ce que vous obtenez",
    "hero.card_li1": "Un site facile à comprendre pour vos visiteurs.",
    "hero.card_li2": "Un temps de chargement optimisé, surtout sur mobile.",
    "hero.card_li3": "Un SEO de base et Analytics (GA4) déjà branchés.",
    "hero.meta1": "📍 Berlin & remote UE",
    "hero.meta2": "🕒 Landing possible en 72 h",
    "hero.meta3": "🌐 Français, Anglais, Portugais, Espagnol",

    "home.kicker": "Pratique digitale · Berlin",
    "home.title": "Salut, moi c’est David.",
    "home.subtitle": "Je crée des sites clairs et rapides pour des créatifs et petites structures — et je passe le reste de mon temps à traquer la lumière et le son.",
    "home.web.title": "Web / Services",
    "home.web.subtitle": "Landing pages & sites vitrines pour faire avancer votre projet.",
    "home.portfolio.title": "Portfolio photo",
    "home.portfolio.subtitle": "Lieux, visages et nuits tardives — une sélection de séries.",
    "home.lab.title": "Creative Lab",
    "home.lab.subtitle": "Ableton, textures et expérimentations visuelles/sonores.",

    "fit.kicker": "Pour qui",
    "fit.title": "Avec qui je travaille",
    "fit.subtitle": "Je collabore surtout avec des équipes petites et réactives qui veulent gagner en clarté.",
    "fit.item1": "Créatifs freelance lançant une nouvelle offre ou un service packagé.",
    "fit.item2": "Petits studios qui ont besoin d’une landing page claire pour expliquer leur positionnement.",
    "fit.item3": "Coachs et consultants qui veulent que les prospects réservent un appel sans chercher l’information.",
    "fit.item4": "Fondateurs SaaS ou e-commerce en phase early-stage qui souhaitent une présence soignée.",
    "fit.note": "Déjà accompagné : coach business, studio photo, agence boutique, conseiller SaaS.",

    "portfolio.hero.kicker": "Portfolio photo",
    "portfolio.hero.title": "Lieux, visages et nuits tardives.",
    "portfolio.hero.subtitle": "Une sélection d’images issues de voyages, portraits et marches nocturnes. C’est la partie visuelle de ma pratique — le même regard que j’apporte aux projets web.",
    "portfolio.series.kicker": "Séries",
    "portfolio.series.travel.title": "Voyages & lieux",
    "portfolio.series.travel.subtitle": "Déserts, littoraux et villes entre les deux — des instants calmes pris sur la route.",
    "portfolio.series.portraits.title": "Portraits",
    "portfolio.series.portraits.subtitle": "Des personnes dans leur propre lumière — des séances lentes centrées sur la confiance et la présence.",
    "portfolio.series.night.title": "Nuits & atmosphères",
    "portfolio.series.night.subtitle": "Marches tardives, lumières de ville et petits moments irréels.",
    "portfolio.press.title": "Presse & festivals",
    "portfolio.press.text": "Si vous avez besoin d’un aperçu rapide pour une programmation, vous pouvez demander ou télécharger un presskit photo.",
    "portfolio.press.cta": "Télécharger le presskit photo",

    "lab.placeholder.kicker": "Creative Lab",
    "lab.placeholder.title": "Creative lab en préparation",
    "lab.placeholder.subtitle": "Un espace pour partager les coulisses des projets photo et musique, des essais et des outils. Les notes et visuels arrivent très vite.",
    "lab.placeholder.cta": "Découvrir Web / Services",

    "proof.kicker": "Preuves sociales",
    "proof.title": "Ce que disent les clients après la mise en ligne",
    "proof.subtitle": "Quelques retours récents — concis et concrets, comme les sites livrés.",
    "proof.quote1": "« David a transformé mon brouillon en quelque chose que les clients lisent vraiment. Les appels ont doublé la première semaine. »",
    "proof.author1": "Lina S. — Coach créative",
    "proof.quote2": "« Landing livrée en trois jours, propre, rapide et facile à ajuster en interne. »",
    "proof.author2": "Mark P. — Directeur de studio boutique",

    "offers.kicker": "Offres packagées",
    "offers.title": "3 packs clairs pour être en ligne rapidement",
    "offers.subtitle": "Chaque pack a un périmètre défini, une fourchette de prix et un délai réaliste. Vous fournissez les contenus (textes, images, logo), je m’occupe du reste.",

    "offers.landing.title": "Landing 72h",
    "offers.landing.subtitle": "1–3 sections, mise en ligne rapide",
    "offers.landing.price": "500–900 €",
    "offers.landing.tag": "~72h",
    "offers.landing.intro": "Idéal pour tester une offre, une campagne ou un événement sur une page claire et ciblée.",
    "offers.landing.li1": "Structure simple : hero, bénéfices, preuve / contact.",
    "offers.landing.li2": "Intégration de votre identité visuelle.",
    "offers.landing.li3": "CTA principal : formulaire, email, Calendly…",
    "offers.landing.li4": "SEO de base (title, meta, titres, balises alt).",
    "offers.landing.footer": "Délai : jusqu’à 72 h après réception des contenus validés.\n1 aller-retour de retouches inclus.",

    "offers.vitrine.title": "Site vitrine (3–5 pages)",
    "offers.vitrine.subtitle": "Pour freelances, studios, petites structures",
    "offers.vitrine.price": "1 000–2 000 €",
    "offers.vitrine.tag": "~2 semaines",
    "offers.vitrine.intro": "Un site complet pour présenter qui vous êtes, ce que vous faites et comment travailler avec vous.",
    "offers.vitrine.li1": "3–5 pages (Accueil, À propos, Services, Portfolio, Contact…).",
    "offers.vitrine.li2": "Design responsive, lisible sur mobile et desktop.",
    "offers.vitrine.li3": "SEO de base + sitemap simple.",
    "offers.vitrine.li4": "Mise en place de Google Analytics 4 (events simples).",
    "offers.vitrine.footer": "Environ 2 semaines après validation de la structure et contenus complets.",

    "offers.maintenance.title": "Maintenance mensuelle",
    "offers.maintenance.subtitle": "Garder un site propre et à jour",
    "offers.maintenance.price": "120–250 €/mois",
    "offers.maintenance.tag": "mensuel",
    "offers.maintenance.intro": "Votre site reste vivant sans vous occuper des petites tâches récurrentes.",
    "offers.maintenance.li1": "Mises à jour de contenus simples.",
    "offers.maintenance.li2": "Sauvegardes et vérifications basiques.",
    "offers.maintenance.li3": "Petites retouches design ou nouvelles sections.",
    "offers.maintenance.li4": "Suivi léger des performances et du trafic.",
    "offers.maintenance.footer": "Tarif ajusté au volume. Mensuel, résiliable avec préavis.",

    "mentions.title": "Mentions rapides :",
    "mentions.li1": "30 % à la commande, 70 % à la livraison.",
    "mentions.li2": "1 aller-retour de retouches inclus par pack (au-delà, devis).",
    "mentions.li3": "Les contenus (textes, images, logo) sont fournis par le client.",
    "mentions.li4": "Les délais sont suspendus en cas d’attente de contenus ou de validations.",

    "process.kicker": "Process",
    "process.title": "De l’idée au site en ligne, sans friction",
    "process.subtitle": "Objectif : passer de « il nous faudrait un site » à « voici le lien, partage-le » sans réunions inutiles.",
    "process.step1.title": "Brief rapide (30 min)",
    "process.step1.text": "On clarifie votre cible, votre offre et l’action principale (leads, ventes, rendez-vous). Vous m’envoyez logo, textes brouillons, visuels, références.",
    "process.step2.title": "Structure & wireframe",
    "process.step2.text": "Je prépare une structure simple ou un wireframe avec un parcours clair. On ajuste une fois ensemble avant le développement.",
    "process.step3.title": "Mise en ligne",
    "process.step3.text": "Je développe la page, j’optimise les performances, je connecte votre domaine et GA4. Vous repartez avec un site en ligne et un mini handover.",

    "cases.kicker": "Cas clients",
    "cases.title": "Avant / après : plus clair, plus efficace",
    "cases.subtitle": "Deux refontes récentes : même contenu de base, mais meilleure structure, message plus net et CTAs plus visibles.",
    "cases.case1.label": "Cas 1",
    "cases.case1.title": "Coach bien-être – Landing 72h",
    "cases.case1.before": "Avant : page longue, texte dense, CTA peu visible, message flou au-dessus de la ligne de flottaison.",
    "cases.case1.after": "Après : hero ciblé, 3 bénéfices concrets, CTA Calendly bien visible sur desktop et mobile.",
    "cases.case1.result": "Résultat : parcours plus fluide, plus de rendez-vous pris sur mobile, retours positifs sur la clarté.",
    "cases.case2.label": "Cas 2",
    "cases.case2.title": "Studio photo à Berlin – Site vitrine",
    "cases.case2.before": "Avant : site lent, portfolio confus, textes techniques, menu peu parlant.",
    "cases.case2.after": "Après : 4 pages claires (Accueil, Portfolio, Services, Contact), images optimisées, navigation simple, textes raccourcis.",
    "cases.case2.result": "Résultat : chargement plus rapide, meilleure expérience mobile, demandes de devis plus qualifiées.",
    "cases.before_label": "Avant",
    "cases.after_label": "Après",

    "about.kicker": "À propos",
    "about.title": "Développeur web à Berlin, issu du créatif",
    "about.subtitle": "Je viens de la photo et de la musique, et j’applique la même logique au web : enlever le bruit, garder l’essentiel, rendre le tout agréable à regarder et à utiliser.",
    "about.speed": "Vitesse : stack simple et légère (HTML, CSS, JS) pour un site rapide à construire et facile à maintenir.",
    "about.design": "Design : mises en page épurées, typo lisible, vrais espaces pour respirer, focus sur votre message et vos visuels.",
    "about.support": "Accompagnement : je vous aide à prioriser, structurer vos contenus et décider ce qui mérite vraiment d’être sur la page.",
    "about.languages": "Langues : Français, Anglais, Portugais, Espagnol – pratique si vous travaillez sur plusieurs marchés.",
    "about.text1": "Basé à Berlin, je travaille avec des freelances, studios créatifs et petites entreprises en Allemagne, en France et dans l’UE.",
    "about.text2": "Mon objectif : un site que vous êtes fier de partager, parce qu’il reflète enfin vraiment votre activité.",

    "faq.kicker": "FAQ",
    "faq.title": "Questions fréquentes",
    "faq.subtitle": "Quelques réponses rapides. Le reste se règle facilement en appel.",
    "faq.q1": "Combien coûte un projet ?",
    "faq.a1": "La plupart des projets entrent dans un des 3 packs : landing à partir de 500–900 €, site vitrine à partir de 1 000–2 000 €, maintenance à partir de 120–250 €/mois. Un devis précis suit le brief.",
    "faq.q2": "Quels sont les délais habituels ?",
    "faq.a2": "Une landing simple peut être prête en 72 h une fois les contenus finalisés. Un site de 3–5 pages prend en général autour de 2 semaines après validation de la structure.",
    "faq.q3": "Qui rédige les textes et fournit les visuels ?",
    "faq.a3": "Vous fournissez les textes, le logo et les images. Je vous guide sur la longueur, la clarté et ce qui manque. Je peux simplifier ou reformuler vos textes existants.",
    "faq.q4": "Combien de retours sont inclus ?",
    "faq.a4": "Chaque pack inclut 1 aller-retour de retouches (texte et micro-ajustements design). Des retours supplémentaires sont possibles via un devis ou un forfait horaire.",
    "faq.q5": "À qui appartient le site une fois en ligne ?",
    "faq.a5": "Vous êtes propriétaire du site, du code et du nom de domaine. Je vous transmets tous les accès (hébergeur, CMS s’il y en a un, analytics) en fin de projet.",
    "faq.q6": "Le SEO et les Analytics sont-ils inclus ?",
    "faq.a6": "Oui, un SEO de base est inclus (title, meta, structure, alt, performance) et j’intègre Google Analytics 4 avec des events simples sur vos CTAs clés.",
    "checklist.title": "Checklist qualité appliquée à chaque projet :",
    "checklist.li1": "Layout responsive (mobile / tablette / desktop).",
    "checklist.li2": "Images optimisées (WebP, ≤ 200 Ko) avec lazy loading.",
    "checklist.li3": "Un seul H1, hiérarchie de titres claire, meta de base.",
    "checklist.li4": "Texte alternatif sur les images et contraste accessible.",
    "checklist.li5": "Mise en place de GA4 avec suivi simple des actions clés.",

    "contact.kicker": "Contact",
    "contact.title": "Planifier un appel de 15 minutes",
    "contact.subtitle": "Dites-moi où vous en êtes (idée, brouillon, site existant) et ce que vous attendez de votre prochain site.",
    "contact.highlight": "Un appel court, un plan concret : périmètre, budget, délai.",
    "contact.location": "📍 Basé à Berlin, je travaille en remote dans toute l’UE.",
    "contact.langs": "Langues : Français, Anglais, Portugais, Espagnol.",
    "contact.cta": "Réserver un créneau 15 min",
    "contact.note": "Vous choisissez un créneau, décrivez votre projet en quelques lignes, et vous recevez un mail de confirmation avec le lien de visio.",
    "contact.reassurance": "Appel = 15 minutes. Pas de pitch agressif — on clarifie le périmètre, un budget réaliste et les prochaines étapes.",

    "footer.available": "Disponible à Berlin et à distance dans l’UE.",

    "legal.text": "Site édité par David Pinheiro, développeur web basé à Berlin. Contact : david.pinheiro.d@gmail.com. Les informations envoyées via les formulaires servent uniquement à répondre à vos demandes et ne sont pas revendues. Ce site peut utiliser Google Analytics 4 pour mesurer l’audience de manière anonymisée. Vous pouvez désactiver les cookies d’analytics dans les réglages de votre navigateur."
  }
};

document.documentElement.classList.add("js");

// Apply language
function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) return;

    // Simple handling for \n in text (line breaks)
    if (value.includes("\n")) {
      const parts = value.split("\n");
      el.innerHTML = parts.map((p) => `<span>${p}</span>`).join("<br>");
    } else {
      el.textContent = value;
    }
  });

  // Update buttons aria-pressed
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.langBtn === lang ? "true" : "false");
  });

  // Save preference
  try {
    localStorage.setItem("lang", lang);
  } catch (e) {
    // ignore
  }
}

function detectInitialLanguage() {
  // 1. user preference
  let stored;
  try {
    stored = localStorage.getItem("lang");
  } catch (e) {
    stored = null;
  }
  if (stored && translations[stored]) return stored;

  // 2. browser language
  const navLang = (navigator.language || navigator.userLanguage || "en").toLowerCase();
  if (navLang.startsWith("fr")) return "fr";

  // default
  return "en";
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const initialLang = detectInitialLanguage();
  applyLanguage(initialLang);

  // Lang buttons
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.langBtn;
      applyLanguage(lang);
    });
  });

  const heroSection = document.querySelector(".hero--intro");
  if (heroSection) {
    requestAnimationFrame(() => {
      heroSection.classList.add("is-visible");
    });
  }

  document.querySelectorAll("#faq details").forEach((detail) => {
    const summary = detail.querySelector("summary");
    if (!summary) return;

    const setExpanded = () => {
      summary.setAttribute("aria-expanded", detail.open ? "true" : "false");
    };

    setExpanded();
    detail.addEventListener("toggle", setExpanded);
  });

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!prefersReducedMotion.matches) {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (!href || href.length < 2) return;
      anchor.addEventListener("click", (event) => {
        const target = document.querySelector(href);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }
});
