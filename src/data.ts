import { ServiceDetail, CaseStudy, PortfolioItem, PricingPlan, Testimonial, BlogPost, FAQItem } from "./types";

export const SERVICES_DATA: ServiceDetail[] = [
  {
    id: "shopify-development",
    title: "Shopify Store Development",
    shortDescription: "Custom, enterprise-grade Shopify & Shopify Plus architectures engineered for high volume, unmatched speed, and seamless integrations.",
    fullDescription: "We build custom-coded, high-performance Shopify storefronts that combine gorgeous aesthetics with enterprise-grade stability. No slow templates, no bloated apps—just custom-tailored solutions designed to convert cold traffic into loyal brand advocates.",
    benefits: [
      "Ultra-fast loading times (under 1.5s mobile average) scoring 95+ on Lighthouse.",
      "Completely bespoke headless or custom Liquid layouts suited perfectly to your brand.",
      "Seamless integrations with ERPs, advanced inventory management, CRM, and custom APIs.",
      "Fully optimized mobile-first checkout flows that drastically reduce cart abandonment.",
      "Complete autonomy to manage content easily with custom drag-and-drop metaobject blocks."
    ],
    process: [
      { step: "01", title: "Information Architecture", description: "Analyzing your user journeys and mapping conversion pathways before writing code." },
      { step: "02", title: "UI/UX High-Fidelity Design", description: "Crafting a bespoke digital interface that elevates your brand and streamlines the path-to-purchase." },
      { step: "03", title: "Custom Development", description: "Bespoke Clean Liquid or Headless (Hydrogen/Oxygen) coding following elite standards." },
      { step: "04", title: "Optimization & QA", description: "Rigorous testing on 15+ device-screen-browser combinations with pixel-perfect refinement." }
    ],
    deliverables: [
      "Custom Shopify/Shopify Plus Live Storefront",
      "Seamless Custom Pixel & GA4 Setup",
      "Tailored Metaobjects & Custom Fields Customizer",
      "Product Customization Flow Architecture",
      "1 Month of Dedicated Launch Hypercare & Support"
    ],
    faq: [
      { question: "Do you design custom elements or use standard templates?", answer: "We never use pre-made themes. Every Shopify storefront we build is designed completely custom in Figma from a blank canvas and developed from scratch in ultra-clean Liquid theme code or Headless React." },
      { question: "Can you migrate our current store from WooCommerce, Magento, or custom code?", answer: "Yes, we specialize in high-stakes migrations. We securely move customer records, historical orders, product catalogs, and collections while preserving your SEO ranking and URL structures." }
    ]
  },
  {
    id: "salla-development",
    title: "Salla Store Development",
    shortDescription: "Unlocking the GCC market with high-converting, premium Salla custom themes tailored to regional shopper behaviors.",
    fullDescription: "Salla is the powerhouse of e-commerce in the Gulf region. We push Salla to its absolute design limits using their advanced Salla Developer platform (Twilight engine) to construct world-class storefronts that drive massive regional engagement.",
    benefits: [
      "Bespoke Salla Twilight layouts configured specifically for premium Arabic & English dual-language markets.",
      "Optimized native integrations with local GCC payment gateways like Mada, Apple Pay, and STC Pay.",
      "Custom Javascript & CSS injects to transcend Salla theme limitations.",
      "Full localization mapping, currency routing, and hyper-reliable local shipping rules integration."
    ],
    process: [
      { step: "01", title: "Localization Alignment", description: "Designing typography and layouts matching both Arabic (RTL) and English (LTR) visual structures." },
      { step: "02", title: "Tailored Prototype", description: "Designing modern mockups adapted perfectly to local GCC luxury consumer demographics." },
      { step: "03", title: "Twilight Theme Coding", description: "Writing professional code on the Salla Developer Platform with custom blocks." },
      { step: "04", title: "Integration & Launch", description: "Configuring hyper-local warehouses, Mada payment endpoints, and regional logistics." }
    ],
    deliverables: [
      "Custom Salla Twilight Theme Codebase",
      "Perfect Dual-Language Localization Integration",
      "Mada & Apple Pay Optimization Layouts",
      "Wholesale & Loyalty Program Integrations",
      "Admin Dashboard Training & Operations Blueprint"
    ],
    faq: [
      { question: "What is the Salla Twilight engine, and how does it help?", answer: "Twilight is Salla's developer ecosystem that lets us write custom code. Instead of sticking inside standard Salla templates, we can create custom layouts, interactive widgets, and brand experiences that look completely distinctive, like a bespoke platform." },
      { question: "Can we support both Arabic and English perfectly?", answer: "Absolutely. We specialize in pixel-perfect dual typography, ensuring that RTL (Right-to-Left) and LTR layout structures look exceptionally balanced, utilizing custom GCC-optimized fonts." }
    ]
  },
  {
    id: "zid-development",
    title: "Zid Store Development",
    shortDescription: "Enterprise-level Zid store setups tailored for massive scale and streamlined retail operations throughout Saudi Arabia.",
    fullDescription: "Zid is a premier choice for major retail brands transitioning to online powerhouses. We leverage Zid’s API and developer SDKs to deliver fully responsive, highly-branded Saudi e-commerce spaces built for high transactional volume.",
    benefits: [
      "Custom Zid theme designs supporting comprehensive retail omnichannel systems.",
      "GCC payment gateway configurations coupled with multi-branch regional inventory synchronization.",
      "Fluid local logistics integrations & automated billing architectures custom-built.",
      "Enhanced local SEO architectures configured directly to target high-intent regional keywords."
    ],
    process: [
      { step: "01", title: "Operational Audit", description: "Analyzing brick-and-mortar or multi-warehouse configurations to map product flows." },
      { step: "02", title: "Brand Customization", description: "Styling layouts that match regional high-fashion and enterprise retail expectations." },
      { step: "03", title: "Theme Engineering", description: "Developing custom modules using clean coding frameworks mapped to the Zid core." },
      { step: "04", title: "Inventory & POS Launch", description: "Enabling direct API connections into physical retail stores and regional delivery hubs." }
    ],
    deliverables: [
      "Enterprise Custom Zid Store Environment",
      "Multi-Branch Stock Synchronization Settings",
      "Custom GCC Logistics & Courier Integrations",
      "Advanced Arabized Typography Suite Integration",
      "Dynamic Promotional & Upsell Modules Custom Layout"
    ],
    faq: [
      { question: "Why choose Zid over other platforms?", answer: "Zid offers a highly optimized, localized retail management system perfectly aligned with Saudi business regulations, VAT requirements, and retail networks, making it superb for brick-and-mortar brands scaling online." }
    ]
  },
  {
    id: "branding",
    title: "Branding & Visual Identity",
    shortDescription: "Forging elite brand identity guidelines, visual systems, and luxury standards that stand proudly on an international stage.",
    fullDescription: "True value lies in brand equity. We design iconic visual systems that instantly communicate premium quality, authority, and status. From custom logomarks to strict, comprehensive brand manuals, we convert business missions into visual poetry.",
    benefits: [
      "Bespoke professional logo marks designed with mathematical geometry and elegant balance.",
      "Complete, scalable typography systems and intentional color boards that command premium pricing.",
      "Thorough style templates for digital, retail, social media, and internal communications.",
      "Direct positioning guides that separate your e-commerce brand from sea of competitors."
    ],
    process: [
      { step: "01", title: "Positioning & Strategy", description: "Deep competitor audting, clarifying core messaging, values, and distinct target customer avatars." },
      { step: "02", title: "Visual Exploration", description: "Presenting diverse conceptual directions, color theories, and geometry grids." },
      { step: "03", title: "Refinement", description: "Perfecting the chosen route down to a single pixel and kerning block." },
      { step: "04", title: "Brand Guidelines Guide", description: "Assembling a massive, highly detailed digital brand book detailing every system rule." }
    ],
    deliverables: [
      "Primary, Secondary, and Monogram Custom Logomarks",
      "Official Interactive Digital Brand Book (PDF & Figma)",
      "Strict Font Pairings & Custom Palette Tokens",
      "E-commerce Grid Layouts and Social Media Assets Kit",
      "Creative Art Direction Guide for future photography sessions"
    ],
    faq: [
      { question: "What is included in the brand guide?", answer: "It includes logo usage rules (spacing, forbidden alignments), typography scales, official brand color palettes (HEX, RGB, CMYK, Pantone), stationary design, social-media layouts, and creative photographic templates defining the lighting and mood of future product shoots." }
    ]
  },
  {
    id: "packaging-design",
    title: "Packaging & Unboxing Experience",
    shortDescription: "Designing tactile, high-end packaging blueprints that make the physical opening act a core customer retention channel.",
    fullDescription: "For modern e-commerce, the product delivery is your only certain physical touchpoint with your customer. We craft luxurious, highly engineered custom packaging blueprints that elevate the perceived product value instantly, turning unboxing into an absolute ceremony.",
    benefits: [
      "Custom structural blueprinting and die-line layout files ready for direct manufacturer printing.",
      "Focus on sustainable, premium luxury materials, unique paper weights, foils, and premium embossing.",
      "3D volumetric mockup generation allowing you to visualize layouts from every possible angle.",
      "Engineered interior compartments to keep items secure while presenting them with stunning visual staging."
    ],
    process: [
      { step: "01", title: "Structural Conceptualization", description: "Mapping volumetric requirements and selecting custom materials (uncoated paper, rigid boards, gold hot foil)." },
      { step: "02", title: "Vector Die-line Design", description: "Crafting microscopic-precision flat layouts conforming to international printing machinery guidelines." },
      { step: "03", title: "Interactive 3D Renderings", description: "Building realistic 3D models with true texture, lighting, and shadow reflections." },
      { step: "04", title: "Production Consultation", description: "Providing detailed manufacturing instructions, material sheets, and coordinating directly with factory reps." }
    ],
    deliverables: [
      "Production-Ready Custom Die-Line Vector files (AI, PDF, DXF)",
      "Photorealistic Custom 3D Volumetric Package Renders",
      "Direct Manufacturer Material Tech Specification Sheet",
      "Interior Insert Staging Framework Blueprints",
      "Supplier Sourcing & Cost Optimization Cheat Sheet"
    ],
    faq: [
      { question: "Do you supply the packaging physically?", answer: "We serve as the design architects, engineers, and brand directors. We deliver industrial-grade files and introduce you directly to elite global and local premium-grade suppliers and factories that execute the prints to perfection." }
    ]
  },
  {
    id: "cro",
    title: "Conversion Rate Optimization (CRO)",
    shortDescription: "Scientific, data-guided storefront improvements that permanently double or triple your revenue from existing traffic flow.",
    fullDescription: "Stop pouring capital into paid ads that dump users into a leaky bucket. Our CRO service is an ongoing scientific engine that leverages quantitative behavioral recordings, heatmaps, and psychological visual triggers to maximize user payout.",
    benefits: [
      "Deep-dive session replay auditing, custom funnel tracking, and drop-off user isolation.",
      "Fast layout tweaks (A/B testing) that eliminate friction and boost purchase security.",
      "Data-backed checkout streamlining, micro-interaction modifications, and high-impact trust signals.",
      "Drastic reductions in cart abandonment rates and boosts in average order value (AOV)."
    ],
    process: [
      { step: "01", title: "Data Harvesting", description: "Installing heatmaps, session recording software, and setting advanced custom conversion trackers." },
      { step: "02", title: "Friction Point Isolation", description: "Finding the exact form fields, slow pages, or visual layouts where clients get confused." },
      { step: "03", title: "A/B Testing Framework", description: "Deploying rapid parallel landing tests to verify exactly which design generates more revenue." },
      { step: "04", title: "Systemic Implementation", description: "Hardcoding the winning variants directly into your Shopify/Salla/Zid theme." }
    ],
    deliverables: [
      "Comprehensive Store Performance & UX Audit PDF",
      "A/B Testing Implementation Blueprint & Analytics Setup",
      "Optimized Interactive Checkout & Product Page Layouts",
      "Micro-copy Adjustments and Value Proposition Matrices",
      "AOV Boosting Custom Bundling & Upsell Flow Designs"
    ],
    faq: [
      { question: "How long does it take to see positive results?", answer: "Initial insights. and quick-win layout optimizations are implemented in week 2, which typically trigger 15-30% conversion upgrades. Comprehensive A/B tests deliver rock-solid, mathematically proven revenue increases inside 30 to 45 days." }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX & Interactive Design",
    shortDescription: "Ultra-sleek, minimalist web layouts engineered for modern aesthetic appeal, fluid motion, and flawless accessibility.",
    fullDescription: "Before a single line of code is written, our state-of-the-art UI/UX laboratory styles responsive, custom-fitted digital assets. We design with absolute layout discipline, gorgeous negative space, micro-animations, and striking visual balance.",
    benefits: [
      "Modern, futuristic grids drawing heavy inspiration from world-class high-end tech and luxury brands.",
      "Complete design components library matching international accessibility rules (WCAGAA).",
      "Interactive high-fidelity prototypes built in Figma demonstrating transitions, slideouts, and hover actions.",
      "Tailored layout patterns that keep users engaged longer, reinforcing brand status."
    ],
    process: [
      { step: "01", title: "Moodboard Direction", description: "Curating luxury aesthetic themes, font weights, and dark/light dynamic styling guidelines." },
      { step: "02", title: "Wireframe Mapping", description: "Mapping page flows and content priorities with clean structural mockups." },
      { step: "03", title: "High-Fidelity Rendering", description: "Flesh-out design prototypes looking exactly like the final, premium internet product." },
      { step: "04", title: "Developer Handoff", description: "Detailed styling guides, auto-layouts, custom measurements, and structural code markers ready for development." }
    ],
    deliverables: [
      "Interactive High-Fidelity Figma Prototypes (Mobile + Desktop)",
      "Complete Custom Design Tokens & UI Kit Library",
      "High-Resolution Custom Icon Packages & vector graphics",
      "Dynamic Page Flow Specifications & Interactive blueprints"
    ],
    faq: [
      { question: "What software do you use for design?", answer: "Our layout laboratory operates entirely inside the highest tier of Figma, using native enterprise libraries, auto-layout 4.0 systems, custom variables, and components ready to scale infinitely." }
    ]
  }
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: "aether-apparel",
    title: "AETHER Apparel",
    client: "Aether Lifestyle Ltd",
    industry: "High-End Technical Fashion",
    platform: "Shopify Plus (Custom Coded Developer Liquid Store)",
    metrics: {
      revenueIncrease: "+342% Direct Revenue",
      conversionRate: "4.12% CR (Up from 1.2%)",
      averageOrderValue: "$285 Average Ticket",
      loadTimeReduction: "0.9s Mobile Speed"
    },
    challenge: "Aether sells outer-garment technical wear costing upwards of $500. Their old Shopify template felt generic, loaded slow (4.8 seconds), failed to communicate the extreme engineering behind their technical fabrics, and had massive drop-offs on product pages.",
    research: "By researching high-wealth outdoor enthusiasts, we discovered that their primary purchase driver is materials validation. They need to understand the structural layers, thermal metrics, waterproof seals, and durability specs before pulling their cards.",
    designProcess: "We replaced their grid layout with an immersive, asymmetric, luxury interactive space that treats technical wear like architectural feats. We utilized minimalist typography paired with interactive hotspots highlighting technical fabric close-ups.",
    brandIdentity: "We refreshed their brand guidelines by introducing a stark technical color palette (Jet Charcoal, Matte Chromium, and a stark Neon Mint accent). High-contrast typography featuring bespoke, elegant sans-serif scales was enforced.",
    storeDevelopment: "Our technical team developed a custom theme from scratch on Shopify Plus. We custom-coded a 3D layering diagram of their jackets that dynamically updates as the user scroll, built with vanilla JS and optimized SVG layers to keep speeds exceptionally fast.",
    results: "Within ninety days post-launch, mobile page speeds plummeted to 0.9s. The brand was positioned as a premium technical leader, yielding a monster conversion leap of +342% and raising total AOV by nearly $100 per basket.",
    image: "/assets/case-aether.jpg"
  },
  {
    id: "luna-gazing-cosmetics",
    title: "Luna Gazing Cosmetics",
    client: "Luna Beauty Co",
    industry: "Luxury Clean Cosmetics",
    platform: "Salla Custom twilight Theme",
    metrics: {
      revenueIncrease: "+280% Sales Growth",
      conversionRate: "5.85% Mobile CR",
      averageOrderValue: "SAR 340 AOV",
      loadTimeReduction: "1.1s Page Boot"
    },
    challenge: "Luna Beauty is an upscale organic makeup brand based in Riyadh. Their generic store failed to capture the luxury, pristine, botanical essence of their formulas. High-value Arab luxury shoppers abandoned their Salla cart because of a lack of premium local localized layouts.",
    research: "We analyzed premium Middle Eastern beauty and fragrance demographics. Our qualitative testing revealed that Saudi audience members demanded ultra-premium localization, smooth Mada auto-payments, elegant Arabic script curves, and packaging transparency on mobile devices.",
    designProcess: "We completely redesigned the user experience, treating each cosmetics tube like a work of raw organic art. Generous margins, pristine product shots, and interactive dual-language typography created an elegant layout reminiscent of French couture.",
    brandIdentity: "Prstine Rose Quartz background color paired with deep Forest Onyx. Clean, custom-crafted Arabized typography using specialized modern high-end geometric letterings that align smoothly with premium Latin weights.",
    storeDevelopment: "We designed a bespoke Salla theme and compiled it using the sophisticated Salla Twilight Developer system. We custom-coded interactive shade-selectors, high-performance local Mada custom fields, and an automated regional shipping calculator.",
    results: "Luna transformed into one of Riyadh's top emerging cosmetic platforms, achieving an explosive SAR 340 average order value, reducing cart drop-off by 60%, and establishing absolute local luxury domain dominance.",
    image: "/assets/case-luna.jpg"
  },
  {
    id: "elysian-luxury-watches",
    title: "Elysian Horology",
    client: "Elysian Swiss S.A.",
    industry: "Luxury Timepieces",
    platform: "Shopify Plus Headless (Hydrogen & React)",
    metrics: {
      revenueIncrease: "+412% Conversion",
      conversionRate: "2.89% (High for High-Luxury)",
      averageOrderValue: "$5,400 AOV",
      loadTimeReduction: "0.62s Time to Interactive"
    },
    challenge: "With products averaging $5,000, Elysian Horology required their digital shop to perform like a real Swiss brick-and-mortar luxury showroom. Traditional page reloads and standard shopping carts felt low-end and detracted heavily from their heritage prestige.",
    research: "High-net-worth collectors buy watches for the prestige and craftsmanship. We observed that collectors focus intently on micro-movements, watch dials, and the pure mechanical heritage. The digital experience had to breathe mathematical precision.",
    designProcess: "We created a fully cinematic web design featuring ultra-smooth parallax movements, dark carbon backgrounds, and luxurious, crisp typographic hierarchies (Playfair Display paired with crisp Space Grotesk labels).",
    brandIdentity: "Deep Champagne Gold accents, Rich Onyx Black backgrounds, and beautiful Ivory highlights. Logo mark optimized for luxury engravings.",
    storeDevelopment: "We constructed a cutting-edge headless e-commerce build built on React and Shopify Hydrogen. We implemented lazy-loaded custom animations, an interactive 360-degree watch crown rotate dialer, and an ultra-secure VIP global courier checkout module.",
    results: "Elysian broken digital sales records in their Q1, capturing $4.5M in custom headless orders in the first 4 weeks, with pages loading in an astonishing 0.6 seconds worldwide.",
    image: "/assets/case-elysian.jpg"
  }
];

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: "vanguard-outerwear",
    title: "Vanguard Outerwear",
    subtitle: "High-Performance Technical Shells",
    category: "Fashion",
    metrics: "+342% Revenue Growth",
    tags: ["Shopify Plus", "Tailored Liquid", "3D Interactive Layout"],
    image: "fashion",
    caseStudyId: "aether-apparel"
  },
  {
    id: "luna-cosmetics",
    title: "Luna Gazing Beauty",
    subtitle: "Organic luxury skincare and lipsticks",
    category: "Cosmetics",
    metrics: "5.85% Mobile CR • +280% Sales",
    tags: ["Salla Twilight Code", "GCC Optimization", "Arabic Dual-Language"],
    image: "cosmetics",
    caseStudyId: "luna-gazing-cosmetics"
  },
  {
    id: "le-bistrot-digital",
    title: "Le Bistrot & Co.",
    subtitle: "Immersive Michelin-Starred Dining Store",
    category: "Restaurants",
    metrics: "+190% Direct Reservations",
    tags: ["UI/UX Design", "Custom Delivery Grid", "Branding system"],
    image: "restaurant",
  },
  {
    id: "elysian-timepieces",
    title: "Elysian Horology",
    subtitle: "Ultra-high-end watch manufacture",
    category: "Luxury",
    metrics: "$5,400 Average Ticket Size",
    tags: ["Shopify Headless", "React / Hydrogen", "360-Degree Custom Dial"],
    image: "luxury",
    caseStudyId: "elysian-luxury-watches"
  },
  {
    id: "voltaic-sound",
    title: "Voltaic Sound Labs",
    subtitle: "Audiophile electrostatic headphones",
    category: "Electronics",
    metrics: "4.8% CR • +155% Checkout Success",
    tags: ["Zid Enterprise", "Custom Checkout Layout", "CRO Audit"],
    image: "electronics",
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Launchpad",
    tagline: "For ambitious DTC brands aiming to establish an elite visual footprint.",
    price: "$4,500",
    timeline: "3 - 4 Weeks",
    deliverables: [
      "Custom Shopify, Salla, or Zid Custom Design & Build",
      "Up to 10 Custom-designed structural components",
      "Complete Brand Identity system (Logo suite & Typography)",
      "Standard GA4 & Local Pixel tracking scripts config",
      "2 Weeks post-launch hypercare bug-fixing support"
    ],
    features: [
      { text: "Bespoke UI/UX Design (No templates)", included: true },
      { text: "Shopify / Salla / Zid Theme Development", included: true },
      { text: "Brand Logo & Typographic Identity System", included: true },
      { text: "Full Mobile Optimization Certification", included: true },
      { text: "Localized Dual-Language Alignment", included: true },
      { text: "Advanced Headless custom integrations", included: false },
      { text: "A/B Testing & dedicated CRO analysis", included: false },
      { text: "Bespoke 3D Graphics / Interactive Models", included: false }
    ]
  },
  {
    id: "growth",
    name: "Growth Engine",
    tagline: "Our flagship package engineered to aggressively scale revenue & maximize conversion rates.",
    price: "$8,500",
    timeline: "5 - 6 Weeks",
    deliverables: [
      "Everything in Starter plus highly optimized sales features",
      "Complete Conversion Rate Optimization (CRO) storefront audit",
      "Interactive Product Configurator / Shading custom layouts",
      "Tactile Premium Packaging & Die-Line Print Guidelines",
      "Comprehensive digital brand manual & interactive design tokens",
      "1 Month of full-access post-launch optimization"
    ],
    features: [
      { text: "Bespoke UI/UX Design (No templates)", included: true },
      { text: "Shopify / Salla / Zid Theme Development", included: true },
      { text: "Brand Logo & Typographic Identity System", included: true },
      { text: "Full Mobile Optimization Certification", included: true },
      { text: "Localized Dual-Language Alignment", included: true },
      { text: "A/B Testing & dedicated CRO analysis", included: true },
      { text: "Custom Interactive upsell & checkout components", included: true },
      { text: "Tactile Premium Packaging Blueprints", included: true },
      { text: "Advanced Headless custom integrations", included: false }
    ],
    recommendation: true
  },
  {
    id: "premium",
    name: "Enterprise Headless",
    tagline: "Bespoke industry-redefining digital experiences built on ultra-fast headless tech.",
    price: "$16,000",
    timeline: "8 - 10 Weeks",
    deliverables: [
      "Fully headless custom storefront (React/Hydrogen/Next.js)",
      "Infinite design components catalog & animation schemas",
      "Ultimate database APIs & custom order integrations",
      "All-inclusive branding, packaging, video directions, and copywriting",
      "Full ongoing speed-audit certification (Lighthouse score 98+ guaranteed)",
      "3 Months of dedicated slack support with primary developer allocation"
    ],
    features: [
      { text: "Bespoke UI/UX Design (No templates)", included: true },
      { text: "Shopify / Salla / Zid Theme Development", included: true },
      { text: "Brand Logo & Typographic Identity System", included: true },
      { text: "Full Mobile Optimization Certification", included: true },
      { text: "Localized Dual-Language Alignment", included: true },
      { text: "A/B Testing & dedicated CRO analysis", included: true },
      { text: "Custom Interactive upsell & checkout components", included: true },
      { text: "Tactile Premium Packaging Blueprints", included: true },
      { text: "Headless Web-App (Hydrogen / Next.js Node)", included: true },
      { text: "Bespoke 3D Graphics / Interactive Models", included: true },
      { text: "Lighthouse 98+ Page Speed Guarantee", included: true }
    ]
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "khalid-suliman",
    name: "Khalid Bin Suliman",
    role: "Founder & Creative Director",
    company: "Luna Gazing Cosmetics (Saudi Arabia)",
    content: "Nexora Studio completely transformed our online presence. By utilizing the Salla Twilight engine and designing a completely custom Arabic luxury layout, our average order value skyrocketed to SAR 340. They didn't just write theme code—they understood our regional luxury audience on a cellular level.",
    avatar: "KS",
    rating: 5
  },
  {
    id: "marcus-voss",
    name: "Marcus Voss",
    role: "VP of Digital E-commerce",
    company: "Aether Apparel (London & USA)",
    content: "An elite technical outfit. They custom-developed a Shopify layout with absolute styling discipline, lightning-fast pages (0.9s), and custom 3D fabric selectors. Our sales jumped over 340% in our first quarter post-launch. If you charge premium prices, you need Nexora to design your store.",
    avatar: "MV",
    rating: 5
  },
  {
    id: "sophia-alvarez",
    name: "Sophia Alvarez",
    role: "Chief Operating Officer",
    company: "Elysian Swiss S.A. (Geneva)",
    content: "We hired Nexora for our Shopify Plus Headless migration. They built a custom React/Hydrogen timepiece salon that loaded instantaneously. The conversion rate of 2.89% for products retailing over five thousand dollars is flat out unheard of in timepieces horology history.",
    avatar: "SA",
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "shopify-page-speed",
    title: "The Silent Conversion Killer: Achieving sub-1s load times on Shopify Plus",
    excerpt: "Discover why template bloat is ruining your checkout conversions, and exactly how to optimize your script loads and image frameworks for premium margins.",
    category: "Shopify",
    readTime: "5 min read",
    date: "June 2, 2026",
    author: {
      name: "Tariq Farooq",
      role: "Lead E-commerce Architect",
      avatar: "TF"
    },
    image: "speed",
    content: "In the high-end retail ecosystem, latency is directly proportional to brand erosion. If your storefront takes more than three seconds to bootstrap on a luxury buyer's iPhone, you have lost them. This article lays down our proprietary protocol for eliminating heavy scripts, optimizing modern WebP and AVIF assets, implementing localized custom lazy-loaders, and why you should absolutely avoid heavy page-builder plugins."
  },
  {
    id: "salla-twilight-guide",
    title: "Mastering the Salla Twilight Engine for Dual-Language Arabic & English Luxury Stores",
    excerpt: "How our agency completely bypasses standard Salla limitations to implement high-end international typography and custom RTL (Right-to-Left) animations.",
    category: "Salla Growth",
    readTime: "7 min read",
    date: "May 28, 2026",
    author: {
      name: "Yasmine Al-Azhar",
      role: "Senior UI/UX Designer Strategy",
      avatar: "YA"
    },
    image: "salla",
    content: "The Saudi e-commerce demographic demands unmatched premium feels and local localized trust. Historically, Salla themes felt flat. By programming within the raw Salla Twilight Developer framework, we can inject bespoke React sheets, micro-interactions, custom interactive Mada forms, and beautiful Arabic calligraphy blocks that render harmoniously alongside Latin styles."
  },
  {
    id: "unboxing-tactile-magic",
    title: "Packaging Psychology: Turning the unboxing ceremony into your strongest retention loop",
    excerpt: "Why spending an additional dollar on embossing, spot UV patterns, and custom boxes can reduce your cost per acquisition (CAC) and drive recurring sales.",
    category: "Branding",
    readTime: "4 min read",
    date: "May 15, 2026",
    author: {
      name: "Jean-Pierre Durand",
      role: "Director of Packaging",
      avatar: "JD"
    },
    image: "packaging",
    content: "E-commerce doesn't end when the user clicks 'Checkout'. The packaging is your brand's only physical touchpoint. We discuss how high-density rigid secondary boxes, custom embossed linen paper, fragrance-sprayed paper slips, and targeted interactive cards create a luxury unboxing experience that prompts organic social shares and locks in customers for years."
  },
  {
    id: "conversion-rate-psychology",
    title: "Micro-Copy and Trust: How tiny visual cues boosted AOV by 28% for technical apparel",
    excerpt: "Our recent CRO case study analyzing exactly which checkout trust-badges, value propositions, and payment options drive massive high-ticket buyer action.",
    category: "E-commerce Marketing",
    readTime: "6 min read",
    date: "April 30, 2026",
    author: {
      name: "Amara Okoye",
      role: "Head of CRO & Growth Analytics",
      avatar: "AO"
    },
    image: "cro",
    content: "High-ticket consumers require absolute clarity. By evaluating user session replays, we found three major friction zones: unclear vat rules, ambiguous global returns processes, and slow Apple Pay layouts. Learn how micro-copy modifications and custom structural security placement resolved all three instantly."
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why should we hire Nexora instead of a standard local web freelancer?",
    answer: "Nexora Studio does not compile raw websites; we engineer revenue-generating e-commerce machines with custom design and absolute styling discipline. Every line of code is handwritten for premium performance, and our team integrates elite regional localization (Saudi, GCC) alongside international luxury standard branding. Standard developers rarely understand average order value, conversion funnels, and unboxing logistics.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "Do you build international stores with dual-language and multi-currency support?",
    answer: "Yes. Every single custom Shopify, Salla, or Zid store we build is configured to support flawless multi-language typography (smooth native RTL and LTR) and automatic regional currency/VAT configurations tailored to local regulations.",
    category: "Technical"
  },
  {
    id: "faq-3",
    question: "How long is a typical project cycle, and what are the pricing parameters?",
    answer: "Our project timelines run from 3 weeks for ambitious launches up to 10 weeks for highly integrated custom headless environments. Our structures are clear and flat-rate, starting at $4,500 and climbing to $16,000 for enterprise custom builds. We never hide costs.",
    category: "Financial"
  },
  {
    id: "faq-4",
    question: "Do you assist with physical products printing, manufacturer sourcing, and shipping setup?",
    answer: "We deliver industry-certified vectors, structured files, material maps, and direct physical box die-lines. We then make direct warm introductions to top luxury suppliers and print factories globally and across the GCC to ensure your final physical quality is flawless.",
    category: "Packaging"
  }
];
