// ==========================================================================
// DAVID PINHEIRO PORTFOLIO - Main JavaScript
// ==========================================================================

// --------------------------------------------------------------------------
// TRANSLATIONS (EN default, FR alternative)
// --------------------------------------------------------------------------
const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.creative": "Creative",
    "nav.contact": "Contact",
    "nav.web": "Web / Services",
    "nav.portfolio": "Photo Portfolio",
    "nav.lab": "Creative Lab",

    // Hero Section
    "hero.kicker": "Full-Stack Developer · Berlin",
    "hero.greeting": "Hi, I'm",
    "hero.tagline": "I Build Web Apps. I Understand Business.",
    "hero.subtitle": "With 10 years in sales and a fresh bootcamp graduation from Le Wagon Berlin, I bring a unique blend of business acumen and technical skills to every project.",
    "hero.cta_projects": "View Projects",
    "hero.cta_contact": "Get in Touch",

    // About Section
    "about.kicker": "About Me",
    "about.title": "A Different Kind of Developer",
    "about.lead": "I'm not your typical junior developer. I spent 10 years in sales, working my way up to Sales Manager at a recycling company in Paris. I know how to talk to clients, understand their needs, and deliver results.",
    "about.text1": "In 2025, I graduated from Le Wagon Berlin's intensive bootcamp and immediately started building. My first VS Code extension, Terminal Impact, is already published on the marketplace.",
    "about.text2": "Beyond code, I've spent 10 years behind a camera and 7 years producing music in Ableton. This creative background gives me an eye for design and attention to detail that shows in my work.",
    "about.highlight1.title": "10 Years in Sales",
    "about.highlight1.text": "Client communication, negotiation, understanding business needs",
    "about.highlight2.title": "Le Wagon Berlin 2025",
    "about.highlight2.text": "Full-stack web development, Ruby on Rails, JavaScript",
    "about.highlight3.title": "10 Years of Photography",
    "about.highlight3.text": "Visual storytelling, Photoshop, Lightroom, DaVinci Resolve",
    "about.highlight4.title": "7 Years of Music Production",
    "about.highlight4.text": "Sound design, mixing, Ableton Live",

    // Projects Section
    "projects.kicker": "Featured Work",
    "projects.title": "Projects",
    "projects.subtitle": "From VS Code extensions to award-winning bootcamp projects, here's what I've been building.",
    "projects.terminal.desc": "VS Code extension that highlights files created or modified by integrated terminal commands or AI agents, right in the Explorer. Helps developers track changes made by CLI tools and AI assistants.",
    "projects.talez.desc": "Interactive storybook app for children that helps them express themselves through AI-powered image and text generation. Awarded best project across all Le Wagon batches in 2025.",
    "projects.muzik.desc": "Music discovery and sharing app built during Le Wagon bootcamp. Allows users to explore and share their favorite tracks.",
    "projects.trackid.desc": "App for DJs to manage and organize their track IDs from sets and mixes. Never lose a track ID again.",

    // Tech Stack Section
    "techstack.kicker": "Technologies",
    "techstack.title": "Tech Stack",
    "techstack.learning": "Currently Learning",

    // Creative Section
    "creative.kicker": "Beyond Code",
    "creative.title": "Creative Side",
    "creative.subtitle": "Code is just one part of what I do. Photography and music production have shaped how I think about design and detail.",
    "creative.photo.title": "Photography",
    "creative.photo.text": "10 years of visual storytelling. Travel, portraits, and night atmospheres.",
    "creative.music.title": "Music Production",
    "creative.music.text": "7 years in <strong>Ableton</strong>. Electronic music, sound design, and sonic experiments. I also write Phase, a newsletter on <strong>Substack</strong> about Electronic Music & <strong>Berlin</strong>.",

    // Contact Section
    "contact.kicker": "Get in Touch",
    "contact.title": "Let's Work Together",
    "contact.subtitle": "I'm currently available for freelance projects, collaborations, or full-time opportunities. Let's discuss how I can help bring your ideas to life.",
    "contact.cta": "Say Hello",
    "contact.location": "Berlin, Germany",
    "contact.remote": "Available for remote work across EU",

    // Footer
    "footer.copyright": "© 2025 David Pinheiro. Built with vanilla HTML, CSS & JS.",
    "footer.legal": "Based in Berlin. Available for projects across the EU.",

    // =========================================================================
    // EXISTING TRANSLATIONS FOR OTHER PAGES (web.html, portfolio.html, etc.)
    // =========================================================================

    "nav.name": "David Pinheiro",
    "nav.role": "Web Developer",
    "nav.offers": "Offers",
    "nav.process": "Process",
    "nav.cases": "Case studies",
    "nav.about": "About",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "15-min call",

    "hero.kicker.web": "Landing pages & showcase sites",
    "hero.title.web": "Clean, fast pages that make people click.",
    "hero.subtitle.web": "I design and build landing pages and showcase sites that explain your offer clearly, load fast and guide visitors to your main action: booking, quote request, or purchase.",
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
    "home.title": "Hey there, I'm David.",
    "home.subtitle": "I build clear, fast websites for creatives and small teams — and spend the rest of my time chasing light and sound.",
    "home.web.title": "Web / Services",
    "home.web.subtitle": "Landing pages & showcase sites to move your project forward.",
    "home.portfolio.title": "Photo portfolio",
    "home.portfolio.subtitle": "Places, faces and late nights — selected series.",
    "home.lab.title": "Creative Lab",
    "home.lab.subtitle": "Ableton, textures and visual/sonic experiments.",

    "fit.kicker": "Who it's for",
    "fit.title": "Who I work with",
    "fit.subtitle": "I mostly collaborate with small, nimble teams who need clarity and momentum.",
    "fit.item1": "Freelance creatives launching a new offer or productized service.",
    "fit.item2": "Small studios needing a landing page that explains their positioning fast.",
    "fit.item3": "Coaches and consultants who want leads to book a call without hunting for information.",
    "fit.item4": "Bootstrapped SaaS or e-commerce founders polishing their early-stage presence.",
    "fit.note": "Past work with: business coach, photo studio, boutique agency, SaaS advisor.",

    "portfolio.hero.kicker": "Photo portfolio",
    "portfolio.hero.title": "Places, faces and late nights.",
    "portfolio.hero.subtitle": "A selection of images from travels, portraits and night walks. This is the visual side of my practice, the same eye I bring to web projects.",
    "portfolio.series.kicker": "Series",
    "portfolio.series.travel.title": "Travel & places",
    "portfolio.series.travel.subtitle": "Deserts, coastlines and cities in-between quiet frames from the road.",
    "portfolio.series.portraits.title": "Portraits",
    "portfolio.series.portraits.subtitle": "People in their own light, slow sessions focused on trust and presence.",
    "portfolio.series.night.title": "Nights & atmospheres",
    "portfolio.series.night.subtitle": "Late-night walks, city glow and small surreal moments.",
    "portfolio.press.title": "Press & festivals",
    "portfolio.press.text": "If you need a quick overview for programming, you can request or download a photo presskit.",
    "portfolio.press.cta": "Download photo presskit",

    "lab.placeholder.kicker": "Creative Lab",
    "lab.placeholder.title": "Creative lab in progress",
    "lab.placeholder.subtitle": "A space to share behind-the-scenes from photo and music projects, experiments and tools. I'm gathering notes and visuals, they'll be online soon.",
    "lab.placeholder.cta": "Check the web services",

    "proof.kicker": "Social proof",
    "proof.title": "What clients say after launch",
    "proof.subtitle": "Short notes from recent projects — straight to the point, like the sites we ship.",
    "proof.quote1": "\"David distilled my messy draft into something clients actually read. Calls doubled the first week.\"",
    "proof.author1": "Lina S. — Creative coach",
    "proof.quote2": "\"We shipped a new landing page in three days. Clean, fast, and easy for my team to tweak later.\"",
    "proof.author2": "Mark P. — Boutique studio lead",

    "offers.kicker": "Transparent pricing",
    "offers.title": "3 clear packs. No hidden fees.",
    "offers.subtitle": "After 10 years in sales, I know what clients hate: vague quotes, endless back-and-forth, and surprise invoices. That's why I work with fixed-scope packs. You know what you get, what it costs, and when it's done. You bring the content — I handle the build.",
    "offers.note_title": "Why these rates?",
    "offers.note_text": "I work solo, no agency overhead. You get senior-level attention at freelance rates — direct communication, fast turnaround, and a site built to convert, not just to look pretty.",

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
    "process.subtitle": "The goal: move from 'we should have a proper site' to 'here is the link, share it' without unnecessary meetings.",
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
    "cases.case2.before": "Before: slow site, confusing portfolio, technical copy, menu that didn't speak to clients.",
    "cases.case2.after": "After: 4 clear pages (Home, Portfolio, Services, Contact), optimised images, simple navigation, shorter copy.",
    "cases.case2.result": "Result: faster loading, better mobile UX, more qualified quote requests.",
    "cases.before_label": "Before",
    "cases.after_label": "After",

    "about.kicker.web": "About",
    "about.title.web": "Berlin-based web developer with a creative background",
    "about.subtitle.web": "I come from photography and music, and I apply the same mindset to the web: remove noise, keep the essential, and make it pleasant to look at and use.",
    "about.speed": "Speed: simple, lightweight stack (HTML, CSS, JS) so your site is quick to build and easy to maintain.",
    "about.design": "Design: clean layouts, readable type, real breathing space, focus on your message and visuals.",
    "about.support": "Support: I help you prioritise, structure your content and decide what really deserves to be on the page.",
    "about.languages": "Languages: French, English, Portuguese, Spanish – handy if you work across different markets or teams.",
    "about.text1.web": "Based in Berlin, I work with freelancers, creative studios and small businesses in Germany, France and across the EU.",
    "about.text2.web": "My goal: a site you're not shy to share, because it finally matches who you are and what you offer.",

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
    "faq.q5": "Who owns the site once it's live?",
    "faq.a5": "You own the site, the code and the domain. I hand over all access (hosting, CMS if any, analytics) at the end of the project.",
    "faq.q6": "Is SEO and Analytics included?",
    "faq.a6": "Yes, basic SEO is included (title, meta, structure, alt tags, performance) and I integrate Google Analytics 4 with simple events on your key CTAs.",
    "checklist.title": "Quality checklist applied to every project:",
    "checklist.li1": "Responsive layout (mobile / tablet / desktop).",
    "checklist.li2": "Optimised images (WebP, ≤ 200 KB) with lazy loading.",
    "checklist.li3": "One H1, clear heading hierarchy, basic SEO meta.",
    "checklist.li4": "Alt text on images and accessible contrast.",
    "checklist.li5": "GA4 setup with simple event tracking.",

    "contact.kicker.web": "Contact",
    "contact.title.web": "Book a 15-minute call",
    "contact.subtitle.web": "Tell me where you are (idea, draft, existing site) and what you want your next site to do for you.",
    "contact.highlight": "A short call, a concrete plan: scope, budget, timeline.",
    "contact.location.web": "📍 Based in Berlin, working remotely across the EU.",
    "contact.langs": "Languages: French, English, Portuguese, Spanish.",
    "contact.cta.web": "Book a 15-min slot",
    "contact.note": "Pick a slot, describe your project in a few lines, and you'll get a confirmation email with the video link.",
    "contact.reassurance": "Call = 15 minutes. No aggressive pitch — we map the scope, a realistic budget and next steps.",

    "footer.available": "Available in Berlin & remote EU.",

    "legal.text": "Site edited by David Pinheiro, web developer based in Berlin. Contact: david.pinheiro.d@gmail.com. Data sent through forms is only used to answer your requests and is not sold to third parties. This site may use Google Analytics 4 for anonymised audience measurement. You can disable analytics cookies in your browser settings."
  },

  fr: {
    // Navigation
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.creative": "Créatif",
    "nav.contact": "Contact",
    "nav.web": "Web / Services",
    "nav.portfolio": "Portfolio Photo",
    "nav.lab": "Creative Lab",

    // Hero Section
    "hero.kicker": "Développeur Full-Stack · Berlin",
    "hero.greeting": "Salut, je suis",
    "hero.tagline": "Je Crée des Apps Web. Je Comprends le Business.",
    "hero.subtitle": "Avec 10 ans d'expérience commerciale et une formation intensive au Wagon Berlin, j'apporte un mélange unique de compréhension business et de compétences techniques à chaque projet.",
    "hero.cta_projects": "Voir les Projets",
    "hero.cta_contact": "Me Contacter",

    // About Section
    "about.kicker": "À Propos",
    "about.title": "Un Développeur Pas Comme les Autres",
    "about.lead": "Je ne suis pas un développeur junior classique. J'ai passé 10 ans dans le commerce, devenant Responsable Commercial dans une entreprise de recyclage à Paris. Je sais communiquer avec les clients, comprendre leurs besoins et livrer des résultats.",
    "about.text1": "En 2025, j'ai obtenu mon diplôme du bootcamp intensif du Wagon Berlin et j'ai immédiatement commencé à construire. Ma première extension VS Code, Terminal Impact, est déjà publiée sur le marketplace.",
    "about.text2": "Au-delà du code, j'ai passé 10 ans derrière un appareil photo et 7 ans à produire de la musique sur Ableton. Ce background créatif me donne un œil pour le design et une attention aux détails qui se reflète dans mon travail.",
    "about.highlight1.title": "10 Ans de Commercial",
    "about.highlight1.text": "Communication client, négociation, compréhension des besoins métier",
    "about.highlight2.title": "Le Wagon Berlin 2025",
    "about.highlight2.text": "Développement web full-stack, Ruby on Rails, JavaScript",
    "about.highlight3.title": "10 Ans de Photographie",
    "about.highlight3.text": "Narration visuelle, Photoshop, Lightroom, DaVinci Resolve",
    "about.highlight4.title": "7 Ans de Production Musicale",
    "about.highlight4.text": "Sound design, mixage, Ableton Live",

    // Projects Section
    "projects.kicker": "Réalisations",
    "projects.title": "Projets",
    "projects.subtitle": "Des extensions VS Code aux projets primés du bootcamp, voici ce que j'ai construit.",
    "projects.terminal.desc": "Extension VS Code qui met en évidence les fichiers créés ou modifiés par les commandes du terminal intégré ou les agents IA, directement dans l'Explorateur.",
    "projects.talez.desc": "Application de livres interactifs pour enfants qui les aide à s'exprimer grâce à la génération d'images et de textes par IA. Élu meilleur projet de toutes les promos Le Wagon en 2025.",
    "projects.muzik.desc": "Application de découverte et partage musical développée pendant le bootcamp Le Wagon. Permet aux utilisateurs d'explorer et partager leurs morceaux préférés.",
    "projects.trackid.desc": "Application pour DJs permettant de gérer et organiser les Track IDs des sets et mixes. Ne perdez plus jamais un Track ID.",

    // Tech Stack Section
    "techstack.kicker": "Technologies",
    "techstack.title": "Stack Technique",
    "techstack.learning": "En cours d'apprentissage",

    // Creative Section
    "creative.kicker": "Au-delà du Code",
    "creative.title": "Côté Créatif",
    "creative.subtitle": "Le code n'est qu'une partie de ce que je fais. La photographie et la production musicale ont façonné ma vision du design et du détail.",
    "creative.photo.title": "Photographie",
    "creative.photo.text": "10 ans de narration visuelle. Voyages, portraits et atmosphères nocturnes.",
    "creative.music.title": "Production Musicale",
    "creative.music.text": "7 ans sur <strong>Ableton</strong>. Musique électronique, sound design et expérimentations sonores. J'écris aussi Phase, une newsletter sur <strong>Substack</strong> sur la musique électronique & <strong>Berlin</strong>.",

    // Contact Section
    "contact.kicker": "Contact",
    "contact.title": "Travaillons Ensemble",
    "contact.subtitle": "Je suis actuellement disponible pour des projets freelance, collaborations ou opportunités à temps plein. Discutons de comment je peux donner vie à vos idées.",
    "contact.cta": "Dire Bonjour",
    "contact.location": "Berlin, Allemagne",
    "contact.remote": "Disponible en remote dans toute l'UE",

    // Footer
    "footer.copyright": "© 2025 David Pinheiro. Construit avec HTML, CSS & JS vanilla.",
    "footer.legal": "Basé à Berlin. Disponible pour des projets dans toute l'UE.",

    // =========================================================================
    // EXISTING FR TRANSLATIONS FOR OTHER PAGES
    // =========================================================================

    "nav.name": "David Pinheiro",
    "nav.role": "Développeur Web",
    "nav.offers": "Offres",
    "nav.process": "Process",
    "nav.cases": "Cas clients",
    "nav.about": "À propos",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",
    "nav.cta": "Appel 15 min",

    "hero.kicker.web": "Landing pages & sites vitrines",
    "hero.title.web": "Des pages claires, rapides, qui donnent envie de cliquer.",
    "hero.subtitle.web": "Je conçois et développe des landing pages et des sites vitrines qui expliquent votre offre simplement, chargent vite et guident vos visiteurs vers l'action : prise de rendez-vous, demande de devis ou achat.",
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
    "home.title": "Salut, moi c'est David.",
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
    "fit.item2": "Petits studios qui ont besoin d'une landing page claire pour expliquer leur positionnement.",
    "fit.item3": "Coachs et consultants qui veulent que les prospects réservent un appel sans chercher l'information.",
    "fit.item4": "Fondateurs SaaS ou e-commerce en phase early-stage qui souhaitent une présence soignée.",
    "fit.note": "Déjà accompagné : coach business, studio photo, agence boutique, conseiller SaaS.",

    "portfolio.hero.kicker": "Portfolio photo",
    "portfolio.hero.title": "Lieux, visages et nuits tardives.",
    "portfolio.hero.subtitle": "Une sélection d'images issues de voyages, portraits et marches nocturnes. C'est la partie visuelle de ma pratique — le même regard que j'apporte aux projets web.",
    "portfolio.series.kicker": "Séries",
    "portfolio.series.travel.title": "Voyages & lieux",
    "portfolio.series.travel.subtitle": "Déserts, littoraux et villes entre les deux — des instants calmes pris sur la route.",
    "portfolio.series.portraits.title": "Portraits",
    "portfolio.series.portraits.subtitle": "Des personnes dans leur propre lumière — des séances lentes centrées sur la confiance et la présence.",
    "portfolio.series.night.title": "Nuits & atmosphères",
    "portfolio.series.night.subtitle": "Marches tardives, lumières de ville et petits moments irréels.",
    "portfolio.press.title": "Presse & festivals",
    "portfolio.press.text": "Si vous avez besoin d'un aperçu rapide pour une programmation, vous pouvez demander ou télécharger un presskit photo.",
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

    "offers.kicker": "Tarifs transparents",
    "offers.title": "3 formules claires. Sans frais cachés.",
    "offers.subtitle": "Après 10 ans dans la vente, je sais ce que les clients détestent : les devis flous, les allers-retours interminables et les factures surprises. C'est pourquoi je travaille avec des packs à périmètre fixe. Vous savez ce que vous obtenez, combien ça coûte et quand c'est livré. Vous fournissez le contenu — je m'occupe de la construction.",
    "offers.note_title": "Pourquoi ces tarifs ?",
    "offers.note_text": "Je travaille en solo, sans les frais d'une agence. Vous bénéficiez d'une attention de niveau senior aux tarifs freelance — communication directe, délais rapides et un site conçu pour convertir, pas juste pour être joli.",

    "offers.landing.title": "Landing 72h",
    "offers.landing.subtitle": "1–3 sections, mise en ligne rapide",
    "offers.landing.price": "500–900 €",
    "offers.landing.tag": "~72h",
    "offers.landing.intro": "Idéal pour tester une offre, une campagne ou un événement sur une page claire et ciblée.",
    "offers.landing.li1": "Structure simple : hero, bénéfices, preuve / contact.",
    "offers.landing.li2": "Intégration de votre identité visuelle.",
    "offers.landing.li3": "CTA principal : formulaire, email, Calendly…",
    "offers.landing.li4": "SEO de base (title, meta, titres, balises alt).",
    "offers.landing.footer": "Délai : jusqu'à 72 h après réception des contenus validés.\n1 aller-retour de retouches inclus.",

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
    "mentions.li4": "Les délais sont suspendus en cas d'attente de contenus ou de validations.",

    "process.kicker": "Process",
    "process.title": "De l'idée au site en ligne, sans friction",
    "process.subtitle": "Objectif : passer de « il nous faudrait un site » à « voici le lien, partage-le » sans réunions inutiles.",
    "process.step1.title": "Brief rapide (30 min)",
    "process.step1.text": "On clarifie votre cible, votre offre et l'action principale (leads, ventes, rendez-vous). Vous m'envoyez logo, textes brouillons, visuels, références.",
    "process.step2.title": "Structure & wireframe",
    "process.step2.text": "Je prépare une structure simple ou un wireframe avec un parcours clair. On ajuste une fois ensemble avant le développement.",
    "process.step3.title": "Mise en ligne",
    "process.step3.text": "Je développe la page, j'optimise les performances, je connecte votre domaine et GA4. Vous repartez avec un site en ligne et un mini handover.",

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

    "about.kicker.web": "À propos",
    "about.title.web": "Développeur web à Berlin, issu du créatif",
    "about.subtitle.web": "Je viens de la photo et de la musique, et j'applique la même logique au web : enlever le bruit, garder l'essentiel, rendre le tout agréable à regarder et à utiliser.",
    "about.speed": "Vitesse : stack simple et légère (HTML, CSS, JS) pour un site rapide à construire et facile à maintenir.",
    "about.design": "Design : mises en page épurées, typo lisible, vrais espaces pour respirer, focus sur votre message et vos visuels.",
    "about.support": "Accompagnement : je vous aide à prioriser, structurer vos contenus et décider ce qui mérite vraiment d'être sur la page.",
    "about.languages": "Langues : Français, Anglais, Portugais, Espagnol – pratique si vous travaillez sur plusieurs marchés.",
    "about.text1.web": "Basé à Berlin, je travaille avec des freelances, studios créatifs et petites entreprises en Allemagne, en France et dans l'UE.",
    "about.text2.web": "Mon objectif : un site que vous êtes fier de partager, parce qu'il reflète enfin vraiment votre activité.",

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
    "faq.a5": "Vous êtes propriétaire du site, du code et du nom de domaine. Je vous transmets tous les accès (hébergeur, CMS s'il y en a un, analytics) en fin de projet.",
    "faq.q6": "Le SEO et les Analytics sont-ils inclus ?",
    "faq.a6": "Oui, un SEO de base est inclus (title, meta, structure, alt, performance) et j'intègre Google Analytics 4 avec des events simples sur vos CTAs clés.",
    "checklist.title": "Checklist qualité appliquée à chaque projet :",
    "checklist.li1": "Layout responsive (mobile / tablette / desktop).",
    "checklist.li2": "Images optimisées (WebP, ≤ 200 Ko) avec lazy loading.",
    "checklist.li3": "Un seul H1, hiérarchie de titres claire, meta de base.",
    "checklist.li4": "Texte alternatif sur les images et contraste accessible.",
    "checklist.li5": "Mise en place de GA4 avec suivi simple des actions clés.",

    "contact.kicker.web": "Contact",
    "contact.title.web": "Planifier un appel de 15 minutes",
    "contact.subtitle.web": "Dites-moi où vous en êtes (idée, brouillon, site existant) et ce que vous attendez de votre prochain site.",
    "contact.highlight": "Un appel court, un plan concret : périmètre, budget, délai.",
    "contact.location.web": "📍 Basé à Berlin, je travaille en remote dans toute l'UE.",
    "contact.langs": "Langues : Français, Anglais, Portugais, Espagnol.",
    "contact.cta.web": "Réserver un créneau 15 min",
    "contact.note": "Vous choisissez un créneau, décrivez votre projet en quelques lignes, et vous recevez un mail de confirmation avec le lien de visio.",
    "contact.reassurance": "Appel = 15 minutes. Pas de pitch agressif — on clarifie le périmètre, un budget réaliste et les prochaines étapes.",

    "footer.available": "Disponible à Berlin et à distance dans l'UE.",

    "legal.text": "Site édité par David Pinheiro, développeur web basé à Berlin. Contact : david.pinheiro.d@gmail.com. Les informations envoyées via les formulaires servent uniquement à répondre à vos demandes et ne sont pas revendues. Ce site peut utiliser Google Analytics 4 pour mesurer l'audience de manière anonymisée. Vous pouvez désactiver les cookies d'analytics dans les réglages de votre navigateur."
  }
};

// --------------------------------------------------------------------------
// LANGUAGE FUNCTIONS
// --------------------------------------------------------------------------

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = dict[key];
    if (!value) return;

    // Handle line breaks and HTML tags
    if (value.includes("\n")) {
      const parts = value.split("\n");
      el.innerHTML = parts.map((p) => `<span>${p}</span>`).join("<br>");
    } else {
      el.innerHTML = value;
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

// --------------------------------------------------------------------------
// MENU FUNCTIONS
// --------------------------------------------------------------------------

function initMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navDrawer = document.querySelector(".nav-drawer");
  const navOverlay = document.querySelector(".nav-overlay");
  const closeButton = document.querySelector(".nav-drawer__close");

  if (!menuToggle || !navDrawer) return;

  function openMenu() {
    menuToggle.setAttribute("aria-expanded", "true");
    navDrawer.classList.add("is-open");
    navOverlay?.classList.add("is-visible");
    document.body.classList.add("nav-open");
  }

  function closeMenu() {
    menuToggle.setAttribute("aria-expanded", "false");
    navDrawer.classList.remove("is-open");
    navOverlay?.classList.remove("is-visible");
    document.body.classList.remove("nav-open");
  }

  function toggleMenu() {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  menuToggle.addEventListener("click", toggleMenu);
  navOverlay?.addEventListener("click", closeMenu);
  closeButton?.addEventListener("click", closeMenu);

  // Close on escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && navDrawer.classList.contains("is-open")) {
      closeMenu();
    }
  });

  // Close menu when clicking a link
  navDrawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

// --------------------------------------------------------------------------
// TEXT REVEAL ANIMATION
// --------------------------------------------------------------------------

function initTextReveal() {
  // Only apply to section titles (hero has complex structure with nested spans)
  const titles = document.querySelectorAll('.section__title');

  titles.forEach((title) => {
    // Skip if already processed
    if (title.classList.contains('text-reveal-ready')) return;

    const text = title.textContent;
    const words = text.trim().split(' ');

    // Clear title
    title.innerHTML = '';
    title.classList.add('text-reveal-ready');

    words.forEach((word, wordIndex) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.style.setProperty('--word-index', wordIndex);

      // Create letter spans
      word.split('').forEach((letter, letterIndex) => {
        const letterSpan = document.createElement('span');
        letterSpan.className = 'letter';
        letterSpan.textContent = letter;
        letterSpan.style.setProperty('--letter-index', letterIndex);
        wordSpan.appendChild(letterSpan);
      });

      title.appendChild(wordSpan);

      // Add space between words (except last)
      if (wordIndex < words.length - 1) {
        title.appendChild(document.createTextNode(' '));
      }
    });
  });

  // Observer to trigger animation
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('text-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -10% 0px',
    }
  );

  titles.forEach((title) => revealObserver.observe(title));
}

// --------------------------------------------------------------------------
// SCROLL PROGRESS BAR
// --------------------------------------------------------------------------

function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + '%';
  }, { passive: true });
}

// --------------------------------------------------------------------------
// ACTIVE NAV SECTION TRACKING
// --------------------------------------------------------------------------

function initActiveNavTracking() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-drawer__link');

  if (sections.length === 0 || navLinks.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          navLinks.forEach((link) => {
            link.classList.remove('is-active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('is-active');
            }
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-20% 0px -60% 0px',
    }
  );

  sections.forEach((section) => observer.observe(section));
}

// --------------------------------------------------------------------------
// SMOOTH SCROLL
// --------------------------------------------------------------------------

function initSmoothScroll() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion.matches) return;

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    const href = anchor.getAttribute("href");
    if (!href || href.length < 2) return;

    anchor.addEventListener("click", (event) => {
      const target = document.querySelector(href);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Update URL without scrolling
      history.pushState(null, null, href);
    });
  });
}

// --------------------------------------------------------------------------
// HERO ANIMATION
// --------------------------------------------------------------------------

function initHeroAnimation() {
  const heroSection = document.querySelector(".hero");
  if (!heroSection) return;

  heroSection.style.opacity = "0";
  heroSection.style.transform = "translateY(20px)";
  heroSection.style.transition = "opacity 0.6s ease, transform 0.6s ease";

  requestAnimationFrame(() => {
    heroSection.style.opacity = "1";
    heroSection.style.transform = "translateY(0)";
  });
}

// --------------------------------------------------------------------------
// SCROLL THEME TRANSITIONS
// --------------------------------------------------------------------------

function initScrollThemeTransition() {
  const heroSection = document.querySelector(".hero");
  const techSection = document.querySelector(".techstack");

  if (!heroSection) return;

  let currentTheme = "light";

  // Light → Dark: after hero
  const darkObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && currentTheme === "light") {
          document.body.classList.add("scrolled-dark");
          currentTheme = "dark";
          updateParticlesTheme("dark");
        } else if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
          document.body.classList.remove("scrolled-dark", "scrolled-orange");
          currentTheme = "light";
          updateParticlesTheme("light");
        }
      });
    },
    { threshold: [0, 0.3, 0.7] }
  );

  darkObserver.observe(heroSection);

  // Dark → Orange: at tech stack section (stays orange once triggered)
  if (techSection) {
    const orangeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const techTop = techSection.getBoundingClientRect().top;

          if (entry.isIntersecting && currentTheme !== "light") {
            // Entering orange zone
            document.body.classList.remove("scrolled-dark");
            document.body.classList.add("scrolled-orange");
            currentTheme = "orange";
            updateParticlesTheme("orange");
          } else if (!entry.isIntersecting && currentTheme === "orange" && techTop > 0) {
            // Only go back to dark if we scrolled UP (techSection is below viewport)
            document.body.classList.remove("scrolled-orange");
            document.body.classList.add("scrolled-dark");
            currentTheme = "dark";
            updateParticlesTheme("dark");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -15% 0px" }
    );

    orangeObserver.observe(techSection);
  }
}

// --------------------------------------------------------------------------
// STARFIELD CANVAS INITIALIZATION
// --------------------------------------------------------------------------

// starfield instance is created in starfield.js as window.starfield

function initStarfield() {
  // Starfield is auto-initialized via window.starfield in starfield.js
  // Just verify it exists - don't start yet, will be activated when entering dark mode
  if (!window.starfield) {
    console.warn('Starfield not initialized');
  }
}

// --------------------------------------------------------------------------
// TSPARTICLES INITIALIZATION
// --------------------------------------------------------------------------

let particlesInstance = null;

function initParticles() {
  if (typeof tsParticles === "undefined") {
    console.warn("tsParticles not loaded");
    return;
  }

  const isDark = document.body.classList.contains("scrolled-dark");

  tsParticles
    .load("tsparticles", {
      fullScreen: { enable: false },
      fpsLimit: 60,
      particles: {
        number: {
          value: 60,
          density: {
            enable: true,
            area: 900,
          },
        },
        color: {
          value: "#8B5CF6",
        },
        opacity: {
          value: 0.5,
        },
        size: {
          value: { min: 1, max: 3 },
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: "none",
          random: true,
          straight: false,
          outModes: {
            default: "bounce",
          },
        },
        links: {
          enable: true,
          distance: 150,
          color: "#8B5CF6",
          opacity: 0.5,
          width: 1,
        },
      },
      interactivity: {
        detectsOn: "window",
        events: {
          onHover: {
            enable: true,
            mode: "grab",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 0.8,
            },
          },
        },
      },
      detectRetina: true,
    })
    .then((container) => {
      particlesInstance = container;

      // Override particles mouse tracking to follow the ball
      function syncParticlesToBall() {
        if (window.customCursorPos && particlesInstance?.interactivity?.mouse) {
          particlesInstance.interactivity.mouse.position = {
            x: window.customCursorPos.x * window.devicePixelRatio,
            y: window.customCursorPos.y * window.devicePixelRatio
          };
          particlesInstance.interactivity.mouse.isInside = true;
        }
        requestAnimationFrame(syncParticlesToBall);
      }
      syncParticlesToBall();
    });
}

function updateParticlesTheme(theme) {
  // Handle starfield toggle for dark mode only
  if (theme === "dark") {
    // Start starfield in dark mode
    if (window.starfield) {
      window.starfield.start();
    }
  } else {
    // Stop starfield in light/orange mode
    if (window.starfield) {
      window.starfield.stop();
    }
  }

  // Update tsParticles colors smoothly without resetting positions
  if (!particlesInstance) return;

  let newColor;
  if (theme === "orange") {
    newColor = "#581C87";
  } else {
    newColor = "#8B5CF6";
  }

  // Update each particle's color directly (no position reset)
  particlesInstance.particles.forEach((particle) => {
    particle.color.value = newColor;
  });

  // Update link color in options for new connections
  particlesInstance.options.particles.links.color = newColor;
  particlesInstance.options.particles.color.value = newColor;
}

// --------------------------------------------------------------------------
// INTERSECTION OBSERVER FOR ANIMATIONS
// --------------------------------------------------------------------------

function initScrollAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (prefersReducedMotion.matches) return;

  const sections = document.querySelectorAll("section:not(.hero)");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(section);
  });

  const style = document.createElement("style");
  style.textContent = `
    section.is-visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
}

// --------------------------------------------------------------------------
// SIDEBAR VISIBILITY (appears at About, hides at Contact)
// --------------------------------------------------------------------------

function initSidebarObservers() {
  const contactSection = document.querySelector(".contact");

  // Show/hide sidebar when About content is visible (at "In 2025, I graduated..." level)
  const aboutContent = document.querySelector(".about__content");
  if (aboutContent) {
    const showObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rect = aboutContent.getBoundingClientRect();
          if (entry.isIntersecting) {
            document.body.classList.add("sidebar-visible");
          } else if (rect.top > 0) {
            // Only hide when scrolling back UP (about content is below viewport)
            document.body.classList.remove("sidebar-visible");
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px 0px 0px",
      }
    );
    showObserver.observe(aboutContent);
  }

  // Hide sidebar when Contact section appears
  if (contactSection) {
    const hideObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.body.classList.add("contact-visible");
          } else {
            document.body.classList.remove("contact-visible");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px 0px 0px",
      }
    );
    hideObserver.observe(contactSection);
  }
}

// --------------------------------------------------------------------------
// TILT & GLARE EFFECTS
// --------------------------------------------------------------------------

function initCardEffects() {
  // Highlight cards: VanillaTilt (if available and not mobile)
  if (typeof VanillaTilt !== 'undefined' && window.innerWidth > 768) {
    const highlightCards = document.querySelectorAll('.highlight-card');
    if (highlightCards.length > 0) {
      VanillaTilt.init(highlightCards, {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        scale: 1.03,
        perspective: 1000,
        gyroscope: false,
      });
    }
  }

  // Project cards: Mouse tracking glow effect
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty('--mouse-x', x + '%');
      card.style.setProperty('--mouse-y', y + '%');
    });

    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--mouse-x', '50%');
      card.style.setProperty('--mouse-y', '50%');
    });
  });
}

// --------------------------------------------------------------------------
// FAQ ACCORDION
// --------------------------------------------------------------------------

function initFAQ() {
  document.querySelectorAll("#faq details").forEach((detail) => {
    const summary = detail.querySelector("summary");
    if (!summary) return;

    const setExpanded = () => {
      summary.setAttribute("aria-expanded", detail.open ? "true" : "false");
    };

    setExpanded();
    detail.addEventListener("toggle", setExpanded);
  });
}

// --------------------------------------------------------------------------
// INITIALIZE
// --------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const initialLang = detectInitialLanguage();
  applyLanguage(initialLang);

  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.langBtn;
      applyLanguage(lang);
    });
  });

  // Skip home page initializations for page--web (handled by web-main.js)
  if (document.body.classList.contains("page--web")) {
    return;
  }

  // Text reveal BEFORE AOS (avoid conflict)
  initTextReveal();

  initMenu();
  initSmoothScroll();
  initHeroAnimation();
  initScrollAnimations();
  initFAQ();
  initSidebarObservers();
  initScrollProgress();
  initActiveNavTracking();
  initCardEffects();

  // Initialize starfield (for dark mode)
  initStarfield();

  if (document.querySelector("#tsparticles")) {
    initParticles();
    initScrollThemeTransition();
  }

  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
      anchorPlacement: 'top-bottom',
      disable: window.innerWidth < 768 ? true : false,
    });
  }
});
