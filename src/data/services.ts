import { ServiceDetail } from '../types';

export const serviceDetails: { [key: string]: ServiceDetail } = {
  business: {
    id: "business",
    icon: "Briefcase",
    title: "Business Websites / مواقع الخدمات والأعمال المتميزة",
    description: "Premium fast loading representative pages crafted for modern businesses seeking global reach and brand authority.",
    benefits: [
      "Optimized for conversion and lead capture.",
      "High performance on Google Speed insights.",
      "Stunning look reflecting elite posture."
    ],
    features: [
      "Secure hosting compatibility",
      "Dynamic lead forms with WhatsApp linkage",
      "Robust localization and analytics setup"
    ]
  },
  corporate: {
    id: "corporate",
    icon: "Building",
    title: "Corporate Websites / مواقع الشركات والمؤسسات الكبرى",
    description: "Enterprise-grade informational structures geared towards massive holdings, featuring secure stakeholder document vaults.",
    benefits: [
      "Rigid ISO-grade security practices.",
      "Highly stable and scalable architecture.",
      "Elite layout representing absolute reliability."
    ],
    features: [
      "Stakeholder notification integrations",
      "Interactive company history timelines",
      "Automated recruitment entry funnel"
    ]
  },
  stores: {
    id: "stores",
    icon: "ShoppingBag",
    title: "Online Stores / متاجر البيع الفاخرة والتجارة الإلكترونية",
    description: "High performance headless checkout carts designed to eliminate transaction friction and retain continuous customer orders.",
    benefits: [
      "Loads in under 0.5s for fast conversion rates.",
      "Faceted product filtering systems.",
      "Optimized native checkout checkout flows."
    ],
    features: [
      "Stripe, Knet, and local bank integrations",
      "Dynamic catalog search powered by cloud caching",
      "Robust shipping API synchronization systems"
    ]
  },
  news: {
    id: "news",
    icon: "Globe",
    title: "News Websites / منصات وبوابات الأخبار العاجلة",
    description: "Elastic headless databases ready to accommodate hundreds of thousands of concurrent visitors read-loads without slowing.",
    benefits: [
      "Protected completely from breaking-news traffic surges.",
      "Intuitive publishing editor workspace.",
      "Extremely optimized mobile article delivery rates."
    ],
    features: [
      "Static edge page pre-rendering models",
      "Integrated ad spots and membership wall system",
      "Real-time pushing newsletter alerts"
    ]
  },
  educational: {
    id: "educational",
    icon: "GraduationCap",
    title: "Educational Platforms / المنصات التعليمية والـ LMS",
    description: "Comprehensive virtual school assets enabling flawless video streaming playback, active gradebooks, and homework submissions.",
    benefits: [
      "Stable concurrent live lesson streams.",
      "Automated evaluation grading modules.",
      "Highly interactive teacher and student rooms."
    ],
    features: [
      "WebRTC video classrooms integration",
      "Interactive quiz builder and file manager",
      "Automatic dynamic certificate generator tools"
    ]
  },
  realestate: {
    id: "realestate",
    icon: "Home",
    title: "Real Estate Platforms / بوابات العقارات وعرض المشاريع",
    description: "Stunning immersive catalogs paired with interactive SVG unit select overlays, designed to capture investor leads globally.",
    benefits: [
      "High impact image presentation layers.",
      "Simple interactive maps integration workflow.",
      "Direct developer sales team notifications."
    ],
    features: [
      "Interactive map overlays showing vacant plots",
      "Agent scheduling calendar hooks",
      "Custom dynamic home valuation calculators"
    ]
  },
  booking: {
    id: "booking",
    icon: "Calendar",
    title: "Booking Platforms / منسقات الحجز المجدول والخدمات",
    description: "Intuitive self-service calendars for hospitality, health groups, or clinics with automated SMS reservation alerts.",
    benefits: [
      "Eliminates double-booking errors.",
      "Instant secure deposits checking.",
      "Full mobile calendar synchronization."
    ],
    features: [
      "Two-way Google Calendar API syncing",
      "Flexible hourly, daily, dynamic pricing",
      "Automated client text reminder sequences"
    ]
  },
  marketplaces: {
    id: "marketplaces",
    icon: "Users",
    title: "Marketplaces / أسواق متعددة البائعين والتجار",
    description: "Advanced complex environments authorizing multi-seller listing registries, split checkout payments, and custom wallets.",
    benefits: [
      "Automated split checkout fees processing.",
      "Individual vendor management panels.",
      "Highly scalable product catalogs routing."
    ],
    features: [
      "Separate vendor bookkeeping portals",
      "Commission splits managed on Stripe custom engine",
      "Customer reviews audit controls"
    ]
  },
  saas: {
    id: "saas",
    icon: "Cpu",
    title: "SaaS Platforms / منصات وتطبيقات الخدمات السحابية",
    description: "Bespoke SaaS app architectures implementing visual telemetry analytics, active user subscriptions integration, and secure user auth.",
    benefits: [
      "Extremely high code reusability ratios.",
      "Built for continuous scaling pipelines.",
      "Beautiful dark tech metrics displays."
    ],
    features: [
      "Secure OAuth2 login structures",
      "Responsive subscription billing portals",
      "Telemetry graph displays with high performance"
    ]
  },
  erp: {
    id: "erp",
    icon: "Layers",
    title: "ERP Systems / برمجيات تخطيط موارد المؤسسات مخصصة",
    description: "Bespoke internal dashboards connecting inventory pipelines directly with HR records, accounting ledgers, and logistics.",
    benefits: [
      "Total central asset view instantly.",
      "Tailored precisely to local business rules.",
      "Eliminates expensive pre-seat pricing fees."
    ],
    features: [
      "ZATCA compliant phase-2 electronic invoicing",
      "Live inventory movement tracking nodes",
      "Granular employee access roles controls"
    ]
  },
  crm: {
    id: "crm",
    icon: "UserCheck",
    title: "CRM Systems / نظم رعاية المبيعات وإدارة العملاء",
    description: "Intuitive pipeline monitors crafted with customized conversion parameters, designed to maximize salesperson close capabilities.",
    benefits: [
      "Visual lead pipelines that load instantly.",
      "Accurate automated notification sequences.",
      "Full communication logs saved securely."
    ],
    features: [
      "Interactive drag-and-drop opportunity boards",
      "Automatic click-to-WhatsApp link macros",
      "Dynamic sales representative KPI dashboards"
    ]
  },
  membership: {
    id: "membership",
    icon: "Lock",
    title: "Membership Websites / منصات العضويات والاشتراكات",
    description: "Frictionless content protection paywalls for elite training institutes, newsletters, and premium content creators.",
    benefits: [
      "Guarantees private article files remain secure.",
      "Accepts credit cards globally.",
      "Fully responsive localized client login profiles."
    ],
    features: [
      "Encrypted page routes with permission guards",
      "Flexible multi-tier billing integration",
      "Instant self-service client cancellation toggles"
    ]
  },
  custom: {
    id: "custom",
    icon: "Sparkles",
    title: "Custom Systems / الحلول البرمجية الهندسية المخصصة",
    description: "Tailored codebases utilizing absolute custom state control and specialized business logic for truly unique tech innovations.",
    benefits: [
      "Unrestricted functional capacity limit.",
      "Perfect integration into specialized hardware.",
      "Zero legacy overhead bloat slowing performance."
    ],
    features: [
      "Custom state control systems",
      "High performance web socket loops",
      "Optimized data mapping structures"
    ]
  },
  backend: {
    id: "backend",
    icon: "Server",
    title: "Mobile App Backend Development / مطوري الواجهات الخلفية",
    description: "High concurrency API server platforms built with secure authorization handshakes, database indexing, and low latency responses.",
    benefits: [
      "Handles thousands of concurrent active devices.",
      "Optimized query structures saving server costs.",
      "Zero backend security breach vulnerabilities."
    ],
    features: [
      "JSON Web Token (JWT) authenticated endpoints",
      "Express/NestJS clustered server setups",
      "Automated database safety backup routines"
    ]
  },
  api: {
    id: "api",
    icon: "Link",
    title: "API Integrations / ربط وتكامل الأنظمة الرقمية والبرامج",
    description: "Flawless linkage of legacy data architectures with outer payment structures, SMS gateways, ERPs, and external partners.",
    benefits: [
      "Harmonious continuous database sync.",
      "Highly intelligent error retry routines.",
      "Automated rate-limiting policy controls."
    ],
    features: [
      "Custom webhooks handler layers",
      "Oauth2 handshake synchronization engines",
      "Payload translation and validation pipelines"
    ]
  },
  themes: {
    id: "themes",
    icon: "Palette",
    title: "Custom Themes Development / تصميم قوالب هوية فاخرة",
    description: "Ultra lightweight, customized themes styled directly around visual branding guidelines with strict adherence to pristine layout rhythm.",
    benefits: [
      "Loads immediately, boosting SEO rank metrics.",
      "Distinct custom designs separate from competition.",
      "Flawless responsiveness across all smart screens."
    ],
    features: [
      "Highly responsive CSS-grid custom layouts",
      "Cinematic SVG micro transitions",
      "Fluid typography integration out of the box"
    ]
  }
};
