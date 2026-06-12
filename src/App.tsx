import { useState, useMemo, useEffect, FormEvent } from 'react';
import { 
  Building2, 
  Briefcase, 
  Target, 
  ShoppingBag, 
  Store, 
  Globe, 
  Sparkles, 
  PenTool, 
  Layout, 
  TrendingUp, 
  Percent, 
  ArrowLeft, 
  Check, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Star, 
  Phone, 
  Mail, 
  Users, 
  Award, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Search, 
  Menu, 
  X, 
  Calendar,
  Sparkle, 
  RefreshCw,
  TrendingDown,
  Info
} from 'lucide-react';
import { SERVICES, PORTFOLIO, TESTIMONIALS, FAQS, SAUDI_PRESETS } from './data';
import { CalculatorInputs, CalculatorOutputs, Recommendation } from './types';
import PortfolioShowcase from './components/PortfolioShowcase';
import FreeTools from './components/FreeTools';
import logo from './Photo/logo.png';

// Multi-color beautiful Vector Logo for Ventaria (Majestic Bird + Waterdrop)
function VentariaLogo({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 500 500" 
      className={`${className} fill-current transition-transform duration-500 hover:scale-105 shrink-0`}
      xmlns="http://www.w3.org/2000/svg"
      id="ventaria-logo-svg"
    >
      <defs>
        <linearGradient id="ventaria-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00bc7d" />
          <stop offset="100%" stopColor="#008a5b" />
        </linearGradient>
      </defs>
      {/* Outer droplet outline */}
      <path d="M250,25 C308,103 416,211 416,331 C416,419 342,490 250,490 C158,490 84,419 84,331 C84,213 186,105 250,25 Z" fill="url(#ventaria-gradient)" />
      {/* Phoenix bird contours carved in white Negative Space */}
      <path d="M255,108 C233,124 204,131 169,129 C189,139 203,153 210,171 C180,165 152,175 131,199 C157,192 181,198 198,215 C164,218 139,239 133,275 C154,261 176,261 195,273 C149,291 126,331 133,382 C149,343 177,322 213,319 C184,345 174,383 185,426 C206,377 241,349 288,348 C256,380 248,419 262,459 C284,409 321,379 371,376 C333,407 319,451 329,493 C359,444 382,382 381,313 C380,211 319,146 255,108 Z" fill="#ffffff" />
    </svg>
  );
}

// Icon Finder Helper
function IconComponent({ name, className }: { name: string; className: string }) {
  switch (name) {
    case 'Building': return <Building2 className={className} id="icon-building" />;
    case 'Briefcase': return <Briefcase className={className} id="icon-briefcase" />;
    case 'Target': return <Target className={className} id="icon-target" />;
    case 'ShoppingBag': return <ShoppingBag className={className} id="icon-shopping-bag" />;
    case 'Store': return <Store className={className} id="icon-store" />;
    case 'Globe': return <Globe className={className} id="icon-globe" />;
    case 'Sparkles': return <Sparkles className={className} id="icon-sparkles" />;
    case 'PenTool': return <PenTool className={className} id="icon-pen-tool" />;
    case 'Layout': return <Layout className={className} id="icon-layout" />;
    case 'TrendingUp': return <TrendingUp className={className} id="icon-trending-up" />;
    default: return <Sparkles className={className} id="icon-default" />;
  }
}

export default function App() {
  // Mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active page state: 'home' | 'tools'
  const [activePage, setActivePage] = useState<'home' | 'tools'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#tools') {
        setActivePage('tools');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash.startsWith('#')) {
        // If it is a home section hash
        if (hash && hash !== '#tools') {
          setActivePage('home');
          setTimeout(() => {
            const element = document.querySelector(hash);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, 100);
        } else if (!hash) {
          setActivePage('home');
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Active showcase mockup tab
  const [activeMockupTab, setActiveMockupTab] = useState<'corporate' | 'salla' | 'dashboard'>('corporate');

  // Services State: Search and select
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedServiceForForm, setSelectedServiceForForm] = useState('corporate-web');

  // Portfolio State: Category Filter
  const [portfolioFilter, setPortfolioFilter] = useState<'all' | 'corporate' | 'landing' | 'ecommerce' | 'branding'>('all');

  // Calculator State
  const [inputs, setInputs] = useState<CalculatorInputs>({
    sellingPrice: 199,
    productCost: 60,
    shippingCost: 22,
    packagingCost: 6,
    platformFeeType: 'salla_pro',
    platformFeePercent: 0,
    platformFeeFixed: 0,
    paymentGateway: 'mada',
    gatewayFeePercent: 1.75,
    gatewayFeeFixed: 0,
    advertisingCost: 3500,
  });

  // Selected preset index
  const [selectedPresetIdx, setSelectedPresetIdx] = useState(1); // Default to shirts shop preset

  // FAQ expanded state
  const [faqExpanded, setFaqExpanded] = useState<string | null>('q1');

  // Lead contact form states
  const [leadForm, setLeadForm] = useState({
    name: '',
    mobile: '',
    countryCode: '+966',
    email: '',
    budget: '5000-10000',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionCode, setSubmissionCode] = useState('');

  // Apply preset values to calculator
  const handleApplyPreset = (index: number) => {
    setSelectedPresetIdx(index);
    const preset = SAUDI_PRESETS[index];
    setInputs({
      ...inputs,
      ...preset.values,
    });
  };

  // Custom Input Handlers
  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setSelectedPresetIdx(0); // Set to manual customization
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Math calculations for calculator
  const outputs = useMemo<CalculatorOutputs>(() => {
    const {
      sellingPrice,
      productCost,
      shippingCost,
      packagingCost,
      platformFeeType,
      platformFeePercent,
      platformFeeFixed,
      paymentGateway,
      gatewayFeePercent,
      gatewayFeeFixed,
      advertisingCost
    } = inputs;

    // Gateway variables based on premium regional rules
    let gatewayPercent = 0;
    let gatewayFixed = 0;

    if (paymentGateway === 'mada') {
      gatewayPercent = 1.75;
      gatewayFixed = 0; // مدى رخيص جدا ولا عمولة ثابتة إضافية في أغلب المتاجر
    } else if (paymentGateway === 'visa') {
      gatewayPercent = 2.2;
      gatewayFixed = 1.0;
    } else if (paymentGateway === 'tamara' || paymentGateway === 'tabby') {
      gatewayPercent = 5.5; // الدفع الآجل المرتفع بالسعودية
      gatewayFixed = 1.0;
    } else if (paymentGateway === 'cod') {
      gatewayPercent = 0;
      gatewayFixed = 12.0; // تكلفة تحصيل نقدي للطلب من شركة الشحن
    } else {
      gatewayPercent = gatewayFeePercent;
      gatewayFixed = gatewayFeeFixed;
    }

    // Platform variables
    let platformPercent = 0;
    let platformFixed = 0;

    if (platformFeeType === 'salla_pro') {
      // سلة برو باقة ثابتة بدون عمولة مبيعات (فقط البوابة)
      platformPercent = 0;
      platformFixed = 0;
    } else if (platformFeeType === 'zid_pro') {
      platformPercent = 0;
      platformFixed = 0;
    } else if (platformFeeType === 'shopify_basic') {
      // شوبيفاي يفرض عمولة مبيعات إضافية في حال استخدام بوابات دفع خارجية
      platformPercent = 2.0;
      platformFixed = 0;
    } else if (platformFeeType === 'percentage') {
      platformPercent = platformFeePercent;
      platformFixed = platformFeeFixed;
    }

    // Single order costs breakdown
    const singleGatewayCost = (sellingPrice * (gatewayPercent / 100)) + gatewayFixed;
    const singlePlatformCost = (sellingPrice * (platformPercent / 100)) + platformFixed;
    const singleAdCostShare = 0; // variables
    
    const netProfit = sellingPrice - (productCost + shippingCost + packagingCost + singleGatewayCost + singlePlatformCost);
    const profitMargin = sellingPrice > 0 ? (netProfit / sellingPrice) * 100 : 0;

    // Break even point (نقطة التعادل)
    // How many orders needed to cover the advertising cost
    const breakEvenOrders = netProfit > 0 ? Math.ceil(advertisingCost / netProfit) : 0;
    const breakEvenSales = breakEvenOrders * sellingPrice;

    // Multi-orders dynamic projections
    const profit100 = netProfit > 0 ? (netProfit * 100) - advertisingCost : -advertisingCost;
    const profit1000 = netProfit > 0 ? (netProfit * 1000) - advertisingCost : -advertisingCost;

    // Relative breakdown for horizontal visual bar
    const totalOrderCost = productCost + shippingCost + packagingCost + singleGatewayCost + singlePlatformCost;
    const isProfitable = netProfit > 0;

    const costBreakdown = [
      { category: 'تكلفة المنتج', amount: productCost, percent: sellingPrice > 0 ? (productCost / sellingPrice) * 100 : 0, color: 'bg-red-500' },
      { category: 'التوصيل والشحن', amount: shippingCost, percent: sellingPrice > 0 ? (shippingCost / sellingPrice) * 100 : 0, color: 'bg-orange-400' },
      { category: 'التغليف والهدايا', amount: packagingCost, percent: sellingPrice > 0 ? (packagingCost / sellingPrice) * 100 : 0, color: 'bg-amber-300' },
      { category: 'عمولة الدفع الإلكتروني', amount: singleGatewayCost, percent: sellingPrice > 0 ? (singleGatewayCost / sellingPrice) * 100 : 0, color: 'bg-indigo-400' },
      { category: 'عمولة المنصة', amount: singlePlatformCost, percent: sellingPrice > 0 ? (singlePlatformCost / sellingPrice) * 100 : 0, color: 'bg-blue-400' },
      { category: 'صافي الربح الفعلي', amount: isProfitable ? netProfit : 0, percent: sellingPrice > 0 && isProfitable ? (netProfit / sellingPrice) * 100 : 0, color: 'bg-primary' },
    ].filter(item => item.percent > 0);

    // ROI / ROAS estimation
    const roi = advertisingCost > 0 && netProfit > 0 
      ? (((netProfit * (advertisingCost / netProfit)) / advertisingCost) * 100) 
      : 0;

    return {
      netProfit: parseFloat(netProfit.toFixed(2)),
      profitMargin: parseFloat(profitMargin.toFixed(1)),
      breakEvenOrders,
      breakEvenSales: parseFloat(breakEvenSales.toFixed(2)),
      profit100: parseFloat(profit100.toFixed(0)),
      profit1000: parseFloat(profit1000.toFixed(0)),
      costBreakdown,
      roi: parseFloat(roi.toFixed(0))
    };
  }, [inputs]);

  // Advisor advice updates dynamically as results shift
  const mathAdvice = useMemo<Recommendation>(() => {
    const { profitMargin, netProfit } = outputs;
    if (netProfit <= 0) {
      return {
        type: 'danger',
        title: 'تنبيّه هام: نموذج أعمال خاسر!',
        description: 'التكاليف الإجمالية للطلب الواحد تتجاوز سعر البيع الحالي. يرجى مراجعة تكلفة المنتج أو زيادة سعر البيع فوراً لتجنب استنزاف رأسمالك.',
        actionText: 'اطلب تدقيق سريع لمتجرك',
        actionTarget: '#contact'
      };
    }
    if (profitMargin < 15) {
      return {
        type: 'warn',
        title: 'هامش ربح منخفض ومخاطرة عالية',
        description: `هامش ربحك الحالي (${profitMargin}٪) ضعيف وقد لا يغطي تكاليف الإعلانات المرتفعة ومشاكل استرجاع المنتجات. ننصح بتقليل تكلفة التوصيل أو تفعيل عروض حزم المنتجات (Bundling) لزيادة متوسط قيمة السلة.`,
        actionText: 'استشرنا بمبيعاتك مجاناً',
        actionTarget: '#contact'
      };
    }
    if (profitMargin > 45) {
      return {
        type: 'success',
        title: 'امتياز! هامش ربح فخم جداً',
        description: `أنت في النطاق الذهبي للتجارة الإلكترونية بهامش يبلغ (${profitMargin}٪) وبصافي ربح يعادل (${outputs.netProfit} ر.س) لكل طلب. هذا هو التوقيت الأمثل لمضاعفة ميزانيتك الإعلانية وتحسين تجربة الشراء للتوسع السريع والسيطرة على السوق.`,
        actionText: 'احصل على صفحة هبوط تضاعف مبيعاتك',
        actionTarget: '#contact'
      };
    }
    return {
      type: 'info',
      title: 'بنية أرباح ممتازة ومستقرة',
      description: 'أرقامك صحية وتندرج ضمن معايير المتاجر المربحة في المنطقة العربية. يمكنك التركيز الآن على تحسين واجهات متجرك وسرعة تحميله في وثيقة سيو لرفع معدلات التحويل التلقائية وتقليل هدر ميزانيات التسويق.',
      actionText: 'استكشف خدمات تحسين المتاجر والنمو',
      actionTarget: '#services'
    };
  }, [outputs]);

  // Service Filter & Search matching
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return SERVICES;
    const query = searchQuery.toLowerCase();
    return SERVICES.filter(s => 
      s.title.toLowerCase().includes(query) || 
      s.subtitle.toLowerCase().includes(query) ||
      s.description.toLowerCase().includes(query) ||
      s.features.some(f => f.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Portfolio items mapping based on category filter
  const filteredPortfolio = useMemo(() => {
    if (portfolioFilter === 'all') return PORTFOLIO;
    if (portfolioFilter === 'corporate') {
      return PORTFOLIO.filter(p => p.platform === 'موقع تعريفي' || p.platform === 'موقع مخصص' || p.id === 'nova-estate');
    }
    if (portfolioFilter === 'landing') {
      return PORTFOLIO.filter(p => p.platform === 'صفحة هبوط');
    }
    if (portfolioFilter === 'ecommerce') {
      return PORTFOLIO.filter(p => p.platform === 'سلة' || p.platform === 'زد' || p.platform === 'Shopify');
    }
    if (portfolioFilter === 'branding') {
      return PORTFOLIO.filter(p => p.category.includes('هوية') || p.id === 'noire' || p.id === 'roasta' || p.id === 'velora');
    }
    return PORTFOLIO;
  }, [portfolioFilter]);

  // Lead contact form submission mock
  const handleLeadSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.mobile || !leadForm.email) {
      alert('يرجى ملء جميع الحقول الأساسية لتلقي استشارتكم بنجاح.');
      return;
    }
    setIsSubmitting(true);
    
    // Simulate API delivery
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Generate a nice mock proposal booking number
      const serial = 'VNT-' + Math.floor(Math.random() * 90000 + 10000);
      setSubmissionCode(serial);
    }, 1200);
  };

  const handleResetForm = () => {
    setLeadForm({
      name: '',
      mobile: '',
      countryCode: '+966',
      email: '',
      budget: '5000-10000',
      notes: '',
    });
    setSubmitSuccess(false);
  };

  // Direct CTA Scroll trigger helper
  const navigateToSection = (id: string, formServiceId?: string) => {
    setMobileMenuOpen(false);
    if (formServiceId) {
      setSelectedServiceForForm(formServiceId);
    }
    if (activePage === 'tools') {
      setActivePage('home');
      window.location.hash = id;
      setTimeout(() => {
        const element = document.querySelector(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.hash = id;
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Open WhatsApp chat helper
  const openWhatsApp = (phone: string, message?: string) => {
    const text = encodeURIComponent(message || 'مرحبا، أريد التواصل معكم بخصوص مشروع.');
    const cleaned = phone.replace(/[^0-9+]/g, '');
    const url = `https://wa.me/${cleaned.replace(/^\+/, '')}?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <div id="ventaria-app" className="min-h-screen bg-white text-[#111111] antialiased selection:bg-primary selection:text-white overflow-x-hidden font-sans">
      
      {/* HEADER SECTION */}
      <header id="ventaria-navbar" className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <a 
              href="#hero" 
              onClick={(e) => { e.preventDefault(); navigateToSection('#hero'); }} 
              className="flex items-center gap-3 group"
              id="brand-logo-link"
            >
              <img src={logo} alt="Ventaria Logo" className="w-10 h-10 object-contain" />
              <div className="flex flex-col items-start leading-none" id="brand-text">
                <span className="font-display font-extrabold text-xl tracking-tight text-[#111111] group-hover:text-primary transition-colors">Ventaria</span>
                <span className="text-[10px] text-zinc-400 font-medium tracking-widest mt-1">فينتاريا الرقمية</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 text-[14px] font-semibold text-zinc-600" id="desktop-nav-menu">
              <a href="#hero" onClick={(e) => { e.preventDefault(); navigateToSection('#hero'); }} className="hover:text-primary transition-colors">الرئيسية</a>
              <a href="#services" onClick={(e) => { e.preventDefault(); navigateToSection('#services'); }} className="hover:text-primary transition-colors">الخدمات</a>
              <a href="#why-ventaria" onClick={(e) => { e.preventDefault(); navigateToSection('#why-ventaria'); }} className="hover:text-primary transition-colors">من نحن</a>
              <a href="#portfolio" onClick={(e) => { e.preventDefault(); navigateToSection('#portfolio'); }} className="hover:text-primary transition-colors">أعمالنا</a>
              <a href="#calculator" onClick={(e) => { e.preventDefault(); navigateToSection('#calculator'); }} className="hover:text-primary transition-colors flex items-center gap-1">
                حاسبة الأرباح
                <span className="inline-block bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">مجاناً</span>
              </a>
              <a href="#tools" onClick={(e) => { e.preventDefault(); setActivePage('tools'); window.location.hash = '#tools'; }} className={`${activePage === 'tools' ? 'text-primary font-bold' : 'hover:text-primary'} transition-colors flex items-center gap-1`}>
                الأدوات المجانية
                <span className="inline-block bg-emerald-500 text-white text-[9px] px-1.5 py-0.5 rounded-full font-black">جديد</span>
              </a>
              <a href="#faqs" onClick={(e) => { e.preventDefault(); navigateToSection('#faqs'); }} className="hover:text-primary transition-colors">الأسئلة الشائعة</a>
            </nav>

            {/* Premium CTA Trigger on Navigation */}
            <div className="hidden md:flex items-center gap-4" id="nav-cta-group">
              <span className="text-zinc-300">|</span>
              <button 
                type="button"
                onClick={() => openWhatsApp('+201014046106')}
                className="bg-[#111111] hover:bg-zinc-800 text-white hover:text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-zinc-200/50 cursor-pointer"
                id="btn-nav-start"
                aria-label="تواصل معانا"
              >
                تواصل معانا
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 text-zinc-600 hover:text-primary focus:outline-none"
              aria-label="Toggle menu"
              id="mobile-menu-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" id="icon-menu-close" /> : <Menu className="w-6 h-6" id="icon-menu-open" />}
            </button>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-zinc-100 px-6 py-6 space-y-4 shadow-xl transition-all duration-300" id="mobile-nav-panel">
            <div className="flex flex-col gap-4">
              <a 
                href="#hero" 
                onClick={(e) => { e.preventDefault(); navigateToSection('#hero'); }} 
                className="py-2 text-[15px] font-bold text-zinc-800 border-b border-zinc-100 hover:text-primary"
              >
                الرئيسية
              </a>
              <a 
                href="#services" 
                onClick={(e) => { e.preventDefault(); navigateToSection('#services'); }} 
                className="py-2 text-[15px] font-bold text-zinc-800 border-b border-zinc-100 hover:text-primary"
              >
                الخدمات والمميزات
              </a>
              <a 
                href="#why-ventaria" 
                onClick={(e) => { e.preventDefault(); navigateToSection('#why-ventaria'); }} 
                className="py-2 text-[15px] font-bold text-zinc-800 border-b border-zinc-100 hover:text-primary"
              >
                لماذا نحن؟
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => { e.preventDefault(); navigateToSection('#portfolio'); }} 
                className="py-2 text-[15px] font-bold text-zinc-800 border-b border-zinc-100 hover:text-primary"
              >
                معرض أعمالنا
              </a>
              <a 
                href="#calculator" 
                onClick={(e) => { e.preventDefault(); navigateToSection('#calculator'); }} 
                className="py-2 text-[15px] font-bold text-[#00bc7d] border-b border-zinc-100 flex items-center justify-between"
              >
                <span>حاسبة أرباح المتاجر الإلكترونية</span>
                <span className="bg-primary/15 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">مجاناً</span>
              </a>
              <a 
                href="#tools" 
                onClick={(e) => { e.preventDefault(); setMobileMenuOpen(false); setActivePage('tools'); window.location.hash = '#tools'; }} 
                className="py-2 text-[15px] font-bold text-[#00bc7d] border-b border-zinc-100 flex items-center justify-between hover:text-primary"
              >
                <span>الأدوات المجانية</span>
                <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full font-bold">جديد</span>
              </a>
              <a 
                href="#faqs" 
                onClick={(e) => { e.preventDefault(); navigateToSection('#faqs'); }} 
                className="py-2 text-[15px] font-bold text-zinc-800 border-b border-zinc-100 hover:text-primary"
              >
                الأسئلة الشائعة
              </a>
            </div>
            
            <div className="pt-4 flex flex-col gap-3">
              <button 
                onClick={() => openWhatsApp('+201014046106')}
                className="w-full bg-primary hover:bg-[#009e68] text-white py-3 rounded-xl font-bold text-center transition-all"
                id="btn-mobile-nav-cta-primary"
              >
                اطلب استشارة مجانية
              </button>
              <button 
                onClick={() => navigateToSection('#calculator')}
                className="w-full border border-zinc-200 text-zinc-700 py-3 rounded-xl font-bold text-center hover:bg-zinc-50 transition-all"
                id="btn-mobile-nav-cta-secondary"
              >
                احسب أرباح متجرك الآن
              </button>
            </div>
          </div>
        )}
      </header>

      {/* SPACE FILLER FOR FIXED NAVBAR */}
      <div className="h-20"></div>

      {activePage === 'home' ? (
        <>
          {/* HERO SECTION */}
          <section id="hero" className="relative py-12 md:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-zinc-50/70 via-white to-white">
        
        {/* Subtle decorative background spots */}
        <div id="hero-spot-1" className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>
        <div id="hero-spot-2" className="absolute bottom-10 left-10 w-80 h-80 bg-emerald-400/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Copy (7 cols on desktop) */}
            <div className="lg:col-span-7 flex flex-col items-start text-right" id="hero-text-container">
              
              {/* Trust Badge */}
              <div 
                className="inline-flex items-center gap-2 bg-zinc-900 text-white rounded-full pl-4 pr-1.5 py-1.5 text-xs font-semibold mb-6 shadow-sm shadow-zinc-200/50"
                id="hero-trust-badge"
              >
                <span className="bg-primary text-zinc-950 px-2.5 py-0.5 rounded-full font-bold">جديد</span>
                <span className="text-zinc-200">نبني المواقع والمتاجر لتنمو وتبيع بكفاءة</span>
              </div>

              {/* Headline */}
              <h1 
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-900 leading-[1.2] sm:leading-[1.15]"
                id="hero-main-title"
              >
                نبني مواقع ومتاجر رقمية تساعدك على <span className="text-primary underline decoration-emerald-200 decoration-wavy decoration-2 underline-offset-8">النمو</span> وتحقيق المزيد من المبيعات
              </h1>

              {/* Subtitle */}
              <p 
                className="mt-6 text-zinc-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl"
                id="hero-subtitle"
              >
                من المواقع التعريفية الفخمة للشركات والمؤسسات إلى المتاجر الإلكترونية الاحترافية على سلة، زد، وShopify مع تصميم هوية بصرية مذهلة. نوفر كل ما يلزم أعمالك للتفوق.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto" id="hero-actions">
                <button 
                  onClick={() => navigateToSection('#contact')}
                  className="bg-primary hover:bg-[#009e68] text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-0.5 cursor-pointer"
                  id="hero-primary-cta"
                >
                  اطلب استشارة مجانية
                  <ArrowLeft className="w-5 h-5 shrink-0" id="icon-arrow-left" />
                </button>
                <button 
                  onClick={() => navigateToSection('#calculator')}
                  className="bg-zinc-50 hover:bg-zinc-100 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2"
                  id="hero-secondary-cta"
                >
                  احسب أرباح متجرك
                  <span className="text-[11px] bg-primary/10 text-primary font-bold px-2 py-0.5 rounded-full text-center">أداة مجانية</span>
                </button>
              </div>

              {/* Key Trust Stats Indicator */}
              <div className="mt-12 pt-8 border-t border-zinc-100 flex items-center gap-8 w-full" id="hero-trust-metrics">
                <div>
                  <span className="block font-display font-black text-2xl sm:text-3xl text-zinc-900">+50</span>
                  <span className="text-zinc-500 text-xs sm:text-sm">مشروع رقمي تم إطلاقه</span>
                </div>
                <div className="w-px h-8 bg-zinc-200"></div>
                <div>
                  <span className="block font-display font-black text-2xl sm:text-3xl text-[#00bc7d]">%98.4</span>
                  <span className="text-zinc-500 text-xs sm:text-sm">معدل رضا وسعادة الشركاء</span>
                </div>
                <div className="w-px h-8 bg-zinc-200"></div>
                <div>
                  <span className="block font-display font-black text-2xl sm:text-3xl text-zinc-900">3 دول</span>
                  <span className="text-zinc-500 text-xs sm:text-sm">المملكة السعودية، الخليج، ومصر</span>
                </div>
              </div>

            </div>

            {/* Interactive Mockup Container (5 cols on desktop) */}
            <div className="lg:col-span-5" id="hero-mockup-wrapper">
              <div className="relative mx-auto max-w-md lg:max-w-none bg-zinc-900 rounded-3xl p-3 sm:p-4 shadow-2xl shadow-zinc-900/30 border border-zinc-800">
                
                {/* Browser top indicators */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-zinc-800">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  </div>
                  <div className="bg-zinc-800 text-zinc-400 text-[10px] py-0.5 px-6 rounded-md select-none truncate max-w-xs font-mono ml-4">
                    ventaria.com/preview
                  </div>
                </div>

                {/* Simulated Tab options inside wireframe */}
                <div className="flex justify-around bg-zinc-900 border-b border-zinc-800 text-xs py-2 text-zinc-400">
                  <button 
                    onClick={() => setActiveMockupTab('corporate')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeMockupTab === 'corporate' ? 'bg-zinc-800 text-white' : 'hover:text-white'}`}
                    id="mockup-tab-corporate"
                  >
                    موقع تعريفي
                  </button>
                  <button 
                    onClick={() => setActiveMockupTab('salla')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeMockupTab === 'salla' ? 'bg-zinc-800 text-white' : 'hover:text-white'}`}
                    id="mockup-tab-salla"
                  >
                    متجر إلكتروني
                  </button>
                  <button 
                    onClick={() => setActiveMockupTab('dashboard')}
                    className={`px-3 py-1.5 rounded-lg font-bold transition-all ${activeMockupTab === 'dashboard' ? 'bg-zinc-800 text-white' : 'hover:text-white'}`}
                    id="mockup-tab-dashboard"
                  >
                    سلس للتحليلات
                  </button>
                </div>

                {/* Active Tab rendering */}
                <div className="bg-[#111111] rounded-2xl h-80 p-5 overflow-hidden flex flex-col justify-between text-right relative" id="mockup-screen-view">
                  
                  {activeMockupTab === 'corporate' && (
                    <div className="space-y-4 animate-fade-in" id="mockup-corporate-content">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[#00bc7d]"></div>
                          <span className="text-white text-xs font-bold">سمارت سوليوشنز</span>
                        </div>
                        <span className="text-[#00bc7d] text-[10px] font-bold border border-[#00bc7d]/20 px-2 py-0.5 rounded-full">جاهز للعملاء</span>
                      </div>
                      
                      <div className="space-y-2 pt-2">
                        <span className="text-[#00bc7d] text-[10px] font-black uppercase tracking-wider block">تميز بين منافسيك</span>
                        <h4 className="text-white font-display text-sm font-bold leading-relaxed">تكامل خدمات التحول الرقمي والاستشارات الاستراتيجية للشركات</h4>
                        <p className="text-zinc-500 text-[11px] leading-relaxed">نحن نصمم رحلة عميلك لزيادة طلب الخدمات بنقرة زر واحدة دون تعقيدات كلاسيكية.</p>
                      </div>

                      {/* Mock Interactive Interactive slider */}
                      <div className="pt-4 flex items-center justify-between">
                        <div className="flex gap-2">
                          <span className="w-16 h-8 bg-[#00bc7d] text-zinc-950 rounded-lg text-[10px] font-bold flex items-center justify-center">احجز موعدك</span>
                          <span className="w-16 h-8 border border-zinc-700 text-white rounded-lg text-[10px] font-semibold flex items-center justify-center">تصفح أعمالنا</span>
                        </div>
                        <div className="flex gap-1">
                          <span className="w-2.5 h-1 bg-primary rounded-full"></span>
                          <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                          <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeMockupTab === 'salla' && (
                    <div className="space-y-4 animate-fade-in" id="mockup-salla-content">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <span className="text-white text-xs font-bold">متجر قطرات النخبة الفاخر</span>
                        <span className="text-orange-400 text-[9px] font-extrabold bg-orange-400/10 px-2 py-0.5 rounded-md">🇸🇦 ثيم سلة معتمد</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl text-center space-y-1">
                          <div className="h-20 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600">🧴 عطر كلاسيكو</div>
                          <span className="block text-white text-[11px] font-bold">عطر كلاسيكو الملكي</span>
                          <span className="block text-primary text-[10px] font-bold">٢٤٩ ر.س</span>
                        </div>
                        <div className="bg-zinc-900 border border-zinc-800 p-2.5 rounded-xl text-center space-y-1">
                          <div className="h-20 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-600">💨 معطر نوبل</div>
                          <span className="block text-white text-[11px] font-bold">معطر أجواء الفنادق</span>
                          <span className="block text-primary text-[10px] font-bold">١٨٠ ر.س</span>
                        </div>
                      </div>

                      <button className="w-full bg-[#00bc7d] text-zinc-950 py-1.5 rounded-lg text-[10px] font-bold">أضف للسلة - إتمام الشراء السهل</button>
                    </div>
                  )}

                  {activeMockupTab === 'dashboard' && (
                    <div className="space-y-4 animate-fade-in" id="mockup-dashboard-content">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                        <span className="text-white text-xs font-bold">نظام فينتاريا لتتبع التحويل</span>
                        <span className="text-emerald-400 text-[10px] font-medium font-mono flex items-center gap-1">
                          ● متصل وحي
                        </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2 text-center">
                        <div className="bg-zinc-900 p-2 rounded-xl">
                          <span className="text-zinc-500 text-[9px] block">الزيارات</span>
                          <span className="text-white text-xs font-bold block mt-1">+١٢,٤٠٠</span>
                        </div>
                        <div className="bg-zinc-900 p-2 rounded-xl">
                          <span className="text-zinc-500 text-[9px] block">مبيعات اليوم</span>
                          <span className="text-[#00bc7d] text-xs font-bold block mt-1">٤,٨٥٠ ر.س</span>
                        </div>
                        <div className="bg-zinc-900 p-2 rounded-xl">
                          <span className="text-zinc-500 text-[9px] block">معدل التحويل</span>
                          <span className="text-emerald-400 text-xs font-bold block mt-1">٣.٨٪</span>
                        </div>
                      </div>

                      {/* Mini Bar diagram representing conversion path */}
                      <div className="bg-zinc-900/60 p-3 rounded-xl border border-zinc-800 space-y-1.5">
                        <div className="flex justify-between text-[9px] text-[#00bc7d]">
                          <span>سرعة تحميل المتجر بالمملكة</span>
                          <span>خطوات الشراء المحسنة</span>
                        </div>
                        <div className="flex gap-1 h-3.5 pt-1">
                          <div className="w-[85%] bg-[#00bc7d] rounded-sm"></div>
                          <div className="w-[15%] bg-zinc-700 rounded-sm"></div>
                        </div>
                        <span className="text-[10px] text-zinc-400 block mt-1">سرعة المتجر تزيد مبيعاتك بنسبة تزيد عن ٣٥٪ تلقائياً.</span>
                      </div>
                    </div>
                  )}

                  {/* Absolute premium label on wireframe */}
                  <div className="absolute bottom-2 left-2 bg-zinc-900/80 border border-zinc-800 px-2 py-1 rounded-md text-[9px] text-zinc-400 font-mono">
                    Ventaria Engine v1.4
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-20 lg:py-28 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-bold tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full">خدماتنا المتطورة</span>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl text-zinc-900 leading-tight">
              نبني ونطور الهياكل الرقمية للشركات والمتاجر الإلكترونية
            </h2>
            <p className="mt-4 text-zinc-500 text-base sm:text-lg">
              ركزنا على تصميم تجارب مستخدم حصرية تضمن تحويل الزوار إلى عملاء فعليين بأفضل التقنيات الحديثة.
            </p>

            {/* Service Search Bar */}
            <div className="mt-8 max-w-lg mx-auto relative" id="services-search-container">
              <span className="absolute inset-y-0 right-4 flex items-center pr-3 pointer-events-none text-zinc-400">
                <Search className="w-5 h-5" id="icon-search" />
              </span>
              <input 
                type="text" 
                placeholder="ابحث عن الخدمة التي تبحث عنها لمتجرك..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-50 hover:bg-zinc-100/70 focus:bg-white text-zinc-900 border border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary text-sm rounded-xl py-3.5 pr-12 pl-4 focus:outline-none transition-all duration-300"
                id="input-services-search"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 left-3 flex items-center text-xs text-zinc-400 hover:text-zinc-600"
                  id="btn-clear-search"
                >
                  إلغاء لجميع الخدمات
                </button>
              )}
            </div>
          </div>

          {/* Services Grid (Meticulously customized to show web design first) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-cards-grid">
            {filteredServices.map((service) => {
              const isPrimary = service.id === 'corporate-web';
              return (
                <div 
                  key={service.id} 
                  className={`bg-[#f8f9fa] border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1 ${isPrimary ? 'border-primary ring-1 ring-primary/20 bg-emerald-50/10' : 'border-zinc-100'}`}
                  id={`service-card-${service.id}`}
                >
                  <div>
                    {/* Header: icon & Badge */}
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className={`p-3 bg-white border border-zinc-100 rounded-xl shadow-sm ${service.platformColor}`}>
                        <IconComponent name={service.iconName} className="w-6 h-6" />
                      </div>
                      {service.badge && (
                        <span className={`text-[10px] sm:text-xs font-extrabold px-3 py-1 rounded-full ${isPrimary ? 'bg-primary text-white' : 'bg-white text-zinc-700 border border-zinc-100'}`}>
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-lg sm:text-xl text-[#111111] mb-2">{service.title}</h3>
                    <span className="text-zinc-400 text-xs font-semibold block mb-4">{service.subtitle}</span>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">{service.description}</p>

                    {/* Features checklist */}
                    <ul className="space-y-2.5 mb-8 border-t border-zinc-200/50 pt-5 text-right">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-700 font-medium">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" id={`check-icon-${service.id}-${idx}`} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing estimation / duration & actions */}
                  <div className="pt-4 border-t border-zinc-200/50 flex items-center justify-between mt-auto">
                    <div>
                      <span className="text-[10px] text-zinc-400 block uppercase font-bold tracking-wider mb-0.5">الوقت التقريبي</span>
                      <span className="text-zinc-800 font-bold text-xs flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-primary shrink-0" id={`duration-icon-${service.id}`} />
                        {service.duration}
                      </span>
                    </div>
                    <button 
                      onClick={() => navigateToSection('#contact', service.id)}
                      className={`text-xs font-black py-2.5 px-4 rounded-xl flex items-center gap-1.5 transition-all ${isPrimary ? 'bg-primary text-white hover:bg-[#009e68]' : 'bg-white border border-zinc-200 hover:border-zinc-400 text-zinc-800'}`}
                      id={`btn-order-service-${service.id}`}
                    >
                      طلب الخدمة
                      <ArrowLeft className="w-3.5 h-3.5" id={`arrow-icon-${service.id}`} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-12 bg-[#f8f9fa] rounded-2xl border border-zinc-100 max-w-lg mx-auto" id="no-services-found">
              <span className="block text-4xl mb-4">🔍</span>
              <h4 className="text-zinc-800 font-bold text-base mb-1">عذراً، لم نجد خدمة تطابق " {searchQuery} "</h4>
              <p className="text-zinc-500 text-xs mb-4">ولكن يمكننا تخصيص وتطوير أي مشروع إلكتروني مخصص حسب ميزانيتك.</p>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-primary hover:underline text-xs font-bold"
                id="btn-reset-search-fallback"
              >
                تصفح كافة الخدمات الافتراضية
              </button>
            </div>
          )}

        </div>
      </section>

      {/* WHY VENTARIA / BENTO GRID */}
      <section id="why-ventaria" className="py-20 lg:py-28 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-primary text-sm font-bold tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full">لماذا تختار فينتاريا؟</span>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl text-zinc-900">البساطة، الثقة، وجودة تحويل الزوار إلى عملاء</h2>
            <p className="mt-4 text-zinc-500 text-base">باقة مميزات تجعلنا شريك مبيعات حقيقي وليس مجرد مطور كود تقليدي.</p>
          </div>

          {/* Modern Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="bento-grid-container">
            
            {/* Bento Card 1: Conversion Focus */}
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 lg:col-span-2" id="bento-card-conversion">
              <div className="w-12 h-12 bg-[#00bc7d]/10 text-primary rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6" id="bento-icon-conversion" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900">هندسة وبناء تركز 100% على التحويل والمبيعات</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                نحن لا نهتم بجمال المظهر الفني وتزيينه فحسب، بل ندرس سيكولوجية العميل العربي ونعالج أماكن خسارة الزائر في سلات المتروكة. نصمم خيارات مريحة تعاقب المنافسين بزيادة مبيعاتك بنقرة زر واحدة.
              </p>
            </div>

            {/* Bento Card 2: Performance & Speed */}
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4" id="bento-card-speed">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6" id="bento-icon-speed" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900">تحميل بسرعة خارقة أقل من ثانية</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                في عالم السرعة، كل تأخير يعادل خسارة مبيعات. صفحات فينتاريا تأتي مضغوطة بالكامل لرفع نقاط التصفح وتقليل الارتداد في إعلانات سناب وتيك توك.
              </p>
            </div>

            {/* Bento Card 3: Mobile Experience First */}
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4" id="bento-card-mobile">
              <div className="w-12 h-12 bg-indigo-500/10 text-indigo-600 rounded-xl flex items-center justify-center">
                <Layout className="w-6 h-6" id="bento-icon-mobile" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900">رحلة متقنة للهواتف الذكية</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                أكثر من 85% من زوار المتاجر يتصفحون باستخدام هواتفهم. جميع أعمالنا مصممة "Mobile-First" لتوفير واجهة تصفيح لمسية مرنة وواضحة.
              </p>
            </div>

            {/* Bento Card 4: Continuous Support */}
            <div className="bg-white border border-zinc-100 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all space-y-4 lg:col-span-2" id="bento-card-support">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" id="bento-icon-support" />
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-zinc-900">دعم استشاري دائم وتدريب مستمر بعد التسليم</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                علاقتنا معك لا تنتهي بانتهاء سطر الكود وتسليم المشروع. نوفر لك جلسة تدريب مسجلة تشرح لك كيفية استخدام لوحة التحكم بالكامل، وجدولة مبيعاتك، ونتابع متجرك لضمان التشغيل الفعلي المستقر وحمايته.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-20 lg:py-28 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-bold tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full">نفخر بالمشاريع التي ساعدنا على إطلاقها وتنميتها</span>
            <h2 className="mt-4 font-display font-black text-3xl sm:text-4xl text-zinc-900 leading-tight">
              أعمال نسافر بها نحو الريادة الرقمية
            </h2>
            <p className="mt-4 text-zinc-500 text-base sm:text-lg">
              استعرض مجموعة من المواقع والمتاجر الإلكترونية التي قمنا بتصميمها وتطويرها لعملائنا.
            </p>
          </div>

          <PortfolioShowcase 
            portfolioItems={filteredPortfolio}
            portfolioFilter={portfolioFilter}
            setPortfolioFilter={setPortfolioFilter}
            onContactTrigger={(serviceId) => navigateToSection('#contact', serviceId)}
          />

        </div>
      </section>

      {/* PROFIT CALCULATOR SECTION - CENTER PIECE DEPLOYS HERE */}
      <section id="calculator" className="py-20 lg:py-28 bg-[#111111] text-white relative overflow-hidden">
        
        {/* Subtle glowing ring backgrounds */}
        <div id="calc-spot-1" className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl pointer-events-none"></div>
        <div id="calc-spot-2" className="absolute -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-xs sm:text-sm font-black tracking-widest uppercase bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
              أداة تسويقية مجانية بالكامل لأصحاب المتاجر 🇸🇦
            </span>
            <h2 className="mt-6 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
              حاسبة أرباح المتاجر الإلكترونية المتطورة
            </h2>
            <p className="mt-4 text-zinc-400 text-sm sm:text-base leading-relaxed">
              قم بتقدير ميزانية متجرك قبل التأسيس، حدد أسعار بيع منتجاتك بدقة مذهلة، واكشف أرباحك الصافية الحقيقية بعد عمولات بوابات الدفع والمنصات ومصاريف الإعلان.
            </p>
          </div>

          {/* Quick Saudi Presets Buttons */}
          <div className="mb-10" id="calculator-presets-wrapper">
            <span className="block text-zinc-400 text-xs font-bold mb-4 text-center">أو ابدأ فورا بتحميل نموذج تجاري حقيقي معتمد بالمملكة:</span>
            <div className="flex flex-wrap gap-3 justify-center" id="calculator-preset-tabs">
              {SAUDI_PRESETS.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleApplyPreset(idx)}
                  className={`px-4 sm:px-5 py-3 rounded-2xl text-xs font-bold transition-all text-right max-w-sm ${selectedPresetIdx === idx ? 'bg-primary text-zinc-950 shadow-md shadow-primary/20 scale-102 border border-primary/20' : 'bg-zinc-900 border border-zinc-800 text-zinc-300 hover:bg-zinc-800/80'}`}
                  id={`btn-preset-${idx}`}
                >
                  <span className="block font-bold">{preset.name}</span>
                  <span className="opacity-75 block text-[9px] font-normal mt-0.5 max-w-xs">{preset.description}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Left/Right Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch" id="calculator-main-grid">
            
            {/* INPUT PANEL (7 cols on desktop) */}
            <div className="lg:col-span-7 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6" id="calculator-inputs-panel">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                <h3 className="font-display font-extrabold text-base sm:text-lg text-white">١. مدخلات التكلفة والأسعار</h3>
                <span className="text-[10px] text-zinc-400">تعديل أي قيمة سيحدث النتائج تلقائياً</span>
              </div>

              {/* Sliders and fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" id="calculator-inputs-grid">
                
                {/* Selling Price */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-zinc-300">
                    <label htmlFor="input-selling-price" className="flex items-center gap-1.5">
                      سعر بيع المنتج
                      <span className="text-[10px] font-normal text-zinc-500">(سعر الرف بالمتجر)</span>
                    </label>
                    <span className="text-primary" id="val-selling-price">{inputs.sellingPrice} ر.س</span>
                  </div>
                  <input 
                    type="range"
                    min="10"
                    max="1000"
                    step="5"
                    value={inputs.sellingPrice}
                    onChange={(e) => handleInputChange('sellingPrice', Number(e.target.value))}
                    className="w-full accent-primary h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                    id="input-selling-price"
                  />
                  <input 
                    type="number"
                    value={inputs.sellingPrice}
                    onChange={(e) => handleInputChange('sellingPrice', Number(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary text-center"
                    id="input-num-selling-price"
                  />
                </div>

                {/* Product Cost */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-zinc-300">
                    <label htmlFor="input-product-cost" className="flex items-center gap-1.5">
                      تكلفة المنتج الأساسية
                      <span className="text-[10px] font-normal text-zinc-500">(سعر التوريد/الجملة)</span>
                    </label>
                    <span className="text-zinc-300" id="val-product-cost">{inputs.productCost} ر.س</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="800"
                    step="1"
                    value={inputs.productCost}
                    onChange={(e) => handleInputChange('productCost', Number(e.target.value))}
                    className="w-full accent-zinc-400 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                    id="input-product-cost"
                  />
                  <input 
                    type="number"
                    value={inputs.productCost}
                    onChange={(e) => handleInputChange('productCost', Number(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary text-center"
                    id="input-num-product-cost"
                  />
                </div>

                {/* Shipping Cost */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-zinc-300">
                    <label htmlFor="input-shipping-cost">تكلفة الشحن والتوصيل للعميل</label>
                    <span className="text-zinc-300" id="val-shipping-cost">{inputs.shippingCost} ر.س</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="150"
                    step="1"
                    value={inputs.shippingCost}
                    onChange={(e) => handleInputChange('shippingCost', Number(e.target.value))}
                    className="w-full accent-zinc-400 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                    id="input-shipping-cost"
                  />
                  <input 
                    type="number"
                    value={inputs.shippingCost}
                    onChange={(e) => handleInputChange('shippingCost', Number(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary text-center"
                    id="input-num-shipping-cost"
                  />
                </div>

                {/* Packaging & Gift Costs */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold text-zinc-300">
                    <label htmlFor="input-packaging-cost">تكلفة الصندوق والتغليف والهدايا</label>
                    <span className="text-zinc-300" id="val-packaging-cost">{inputs.packagingCost} ر.س</span>
                  </div>
                  <input 
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={inputs.packagingCost}
                    onChange={(e) => handleInputChange('packagingCost', Number(e.target.value))}
                    className="w-full accent-zinc-400 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                    id="input-packaging-cost"
                  />
                  <input 
                    type="number"
                    value={inputs.packagingCost}
                    onChange={(e) => handleInputChange('packagingCost', Number(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary text-center"
                    id="input-num-packaging-cost"
                  />
                </div>

                {/* Platform Fee Selector */}
                <div className="space-y-2 sm:col-span-2 border-t border-zinc-800 pt-5 mt-2">
                  <label className="block text-xs font-bold text-zinc-300">طريقة استقطاع رسوم وعمولة المنصة:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => handleInputChange('platformFeeType', 'salla_pro')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.platformFeeType === 'salla_pro' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-platform-salla-pro"
                    >
                      سلة بريميوم (لا عمولة مبيعات)
                    </button>
                    <button
                      onClick={() => handleInputChange('platformFeeType', 'zid_pro')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.platformFeeType === 'zid_pro' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-platform-zid-pro"
                    >
                      باقة زد برو (لا عمولة مبيعات)
                    </button>
                    <button
                      onClick={() => handleInputChange('platformFeeType', 'shopify_basic')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.platformFeeType === 'shopify_basic' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-platform-shopify-basic"
                    >
                      شوبيفاي أساسي (عمولة 2%)
                    </button>
                    <button
                      onClick={() => handleInputChange('platformFeeType', 'percentage')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.platformFeeType === 'percentage' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-platform-percentage"
                    >
                      عمولة مخصصة (نسبة ٪)
                    </button>
                  </div>

                  {inputs.platformFeeType === 'percentage' && (
                    <div className="grid grid-cols-2 gap-3 pt-3 animate-fade-in" id="custom-platform-fees-wrapper">
                      <div>
                        <span className="block text-[10px] text-zinc-400 mb-1">النسبة المئوية للمنصة (٪)</span>
                        <input 
                          type="number"
                          placeholder="مثال: 1"
                          value={inputs.platformFeePercent}
                          onChange={(e) => handleInputChange('platformFeePercent', Number(e.target.value))}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary text-center"
                          id="input-platform-fee-percent"
                        />
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-400 mb-1">الرسوم الثابتة ر.س</span>
                        <input 
                          type="number"
                          placeholder="مثال: 5"
                          value={inputs.platformFeeFixed}
                          onChange={(e) => handleInputChange('platformFeeFixed', Number(e.target.value))}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary text-center"
                          id="input-platform-fee-fixed"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Gateway Payment Selector */}
                <div className="space-y-2 sm:col-span-2 border-t border-zinc-800 pt-5">
                  <label className="block text-xs font-bold text-zinc-300">بوابة الدفع وبطاقة المتسوق المستخدمة:</label>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                    <button
                      onClick={() => handleInputChange('paymentGateway', 'mada')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.paymentGateway === 'mada' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-gateway-mada"
                    >
                      🇸🇦 بطاقة مدى (1.75% + 1 ر.س ثابت)
                    </button>
                    <button
                      onClick={() => handleInputChange('paymentGateway', 'visa')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.paymentGateway === 'visa' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-gateway-visa"
                    >
                      فيزا / ماستركارد (2.2% + 1 ر.س)
                    </button>
                    <button
                      onClick={() => handleInputChange('paymentGateway', 'tamara')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.paymentGateway === 'tamara' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-gateway-tamara"
                    >
                      تقسيط تمارا (5.5% + 1 ر.س ثابت)
                    </button>
                    <button
                      onClick={() => handleInputChange('paymentGateway', 'cod')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.paymentGateway === 'cod' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-gateway-cod"
                    >
                      الدفع عند الاستلام (تكلفة 12 ر.س)
                    </button>
                    <button
                      onClick={() => handleInputChange('paymentGateway', 'custom')}
                      className={`py-2 px-3 rounded-lg text-[10px] font-bold text-center border transition-all ${inputs.paymentGateway === 'custom' ? 'bg-primary/10 text-primary border-primary' : 'bg-zinc-950 border-zinc-800 text-zinc-400'}`}
                      id="opt-gateway-custom"
                    >
                      بوابة مخصصة ومعدلات مخصصة
                    </button>
                  </div>

                  {inputs.paymentGateway === 'custom' && (
                    <div className="grid grid-cols-2 gap-3 pt-3 animate-fade-in" id="custom-gateway-percentage-wrapper">
                      <div>
                        <span className="block text-[10px] text-zinc-400 mb-1">العمولة المئوية للبوابة (٪)</span>
                        <input 
                          type="number"
                          placeholder="مثال: 2.5"
                          value={inputs.gatewayFeePercent}
                          onChange={(e) => handleInputChange('gatewayFeePercent', Number(e.target.value))}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary text-center"
                          id="input-gateway-fee-percent"
                        />
                      </div>
                      <div>
                        <span className="block text-[10px] text-zinc-400 mb-1">الرسوم الثابتة ر.س للعملية</span>
                        <input 
                          type="number"
                          placeholder="مثال: 1"
                          value={inputs.gatewayFeeFixed}
                          onChange={(e) => handleInputChange('gatewayFeeFixed', Number(e.target.value))}
                          className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2 text-xs text-white focus:outline-none focus:border-primary text-center"
                          id="input-gateway-fee-fixed"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Advertising Budget */}
                <div className="space-y-2 sm:col-span-2 border-t border-zinc-800 pt-5">
                  <div className="flex justify-between text-xs font-bold text-zinc-300">
                    <label htmlFor="input-ad-budget">ميزانية الإعلانات الكلية المقترحة لانطلاق المشروع</label>
                    <span className="text-[#00bc7d]" id="val-ad-budget">{inputs.advertisingCost} ر.س</span>
                  </div>
                  <input 
                    type="range"
                    min="500"
                    max="30000"
                    step="500"
                    value={inputs.advertisingCost}
                    onChange={(e) => handleInputChange('advertisingCost', Number(e.target.value))}
                    className="w-full accent-primary h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
                    id="input-ad-budget"
                  />
                  <input 
                    type="number"
                    value={inputs.advertisingCost}
                    onChange={(e) => handleInputChange('advertisingCost', Number(e.target.value))}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-primary text-center"
                    id="input-num-ad-budget"
                  />
                </div>

              </div>
            </div>

            {/* RESULTS PANEL (5 cols on desktop) */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-6" id="calculator-results-wrapper">
              
              {/* Core Output Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between" id="calculator-results-panel">
                
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <h3 className="font-display font-extrabold text-base text-zinc-300">٢. النتائج المالية والأرباح</h3>
                  <span className="text-[10px] bg-primary/10 text-primary px-2.5 py-0.5 rounded-full font-bold">محتسب تلقائياً ر.س</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-4" id="main-profit-results">
                  
                  {/* Result Item 1: Net Profit per order */}
                  <div className="bg-zinc-950 p-4 border border-zinc-800 rounded-2xl flex flex-col justify-between">
                    <span className="text-[10px] text-zinc-400 block mb-1">صافي الربح الفعلي للطلب</span>
                    <div>
                      <span className={`font-display font-black text-2xl tracking-tight block ${outputs.netProfit > 0 ? 'text-[#00bc7d]' : 'text-red-400'}`}>
                        {outputs.netProfit} ر.س
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono mt-1 block">للقطعة الواحدة</span>
                    </div>
                  </div>

                  {/* Result Item 2: Profit Margin % */}
                  <div className="bg-zinc-950 p-4 border border-zinc-800 rounded-2xl flex flex-col justify-between">
                    <span className="text-[10px] text-zinc-400 block mb-1">هامش الأرباح</span>
                    <div>
                      <span className={`font-display font-black text-2xl tracking-tight block ${outputs.profitMargin > 0 ? 'text-[#00bc7d]' : 'text-red-400'}`}>
                        {outputs.profitMargin} ٪
                      </span>
                      <span className="text-[9px] text-zinc-500 font-mono mt-1 block">نسبة من إجمالي السعر</span>
                    </div>
                  </div>

                </div>

                {/* Break even estimation */}
                <div className="bg-zinc-950 p-4 border border-zinc-800 rounded-2xl space-y-3" id="break-even-results">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-zinc-400">نقطة التعادل المطلوبة:</span>
                    <span className="font-mono text-zinc-500">ميزانية إعلان {inputs.advertisingCost} ر.س</span>
                  </div>
                  {outputs.netProfit > 0 ? (
                    <div className="flex justify-between items-baseline gap-2">
                      <span className="font-display font-extrabold text-white text-lg">
                        <span className="text-[#00bc7d] text-2xl font-black">{outputs.breakEvenOrders}</span> طلب
                      </span>
                      <span className="text-zinc-400 text-[11px]">
                        لتغطية ميزانية الإعلان بمبيعات إجمالية (<span className="text-white font-bold">{outputs.breakEvenSales} ر.س</span>)
                      </span>
                    </div>
                  ) : (
                    <div className="text-xs text-red-400 font-semibold py-1 flex items-start gap-1 pb-2">
                      <TrendingDown className="w-4 h-4 shrink-0 mt-0.5" id="icon-calc-error" />
                      <span>غير قابلة للاحتساب لأن الطلب خاسر حالياً. يرجى رفع السعر أو تقليل تكلفة التوريد والشحن.</span>
                    </div>
                  )}
                </div>

                {/* Profit Projections for 100 & 1000 orders */}
                <div className="grid grid-cols-2 gap-4" id="projected-profit-projections">
                  
                  {/* Projection: 100 orders */}
                  <div className="bg-zinc-950 p-4 border border-zinc-800 rounded-2xl text-right">
                    <span className="text-[10px] text-zinc-400 block mb-1">الربح المتوقع لعملية (١٠٠ طلب)</span>
                    <span className={`font-display font-medium text-lg block ${outputs.profit100 > 0 ? 'text-white' : 'text-red-400'}`}>
                      {outputs.profit100 > 0 ? '+' : ''}{outputs.profit100.toLocaleString()} ر.س
                    </span>
                    <span className="text-[9px] text-zinc-500 block mt-1">بعد استقطاع التكاليف والإعلان</span>
                  </div>

                  {/* Projection: 1000 orders */}
                  <div className="bg-zinc-950 p-4 border border-zinc-800 rounded-2xl text-right">
                    <span className="text-[10px] text-zinc-400 block mb-1">الربح المتوقع لعملية (١٠٠٠ طلب)</span>
                    <span className={`font-display font-black text-xl block ${outputs.profit1000 > 0 ? 'text-[#00bc7d]' : 'text-red-400'}`}>
                      {outputs.profit1000 > 0 ? '+' : ''}{outputs.profit1000.toLocaleString()} ر.س
                    </span>
                    <span className="text-[9px] text-zinc-500 block mt-1">إمكانية التوسع فخمة</span>
                  </div>

                </div>

                {/* Custom Stacked dynamic breakdown bar chart */}
                <div className="space-y-2 border-t border-zinc-800 pt-5 mt-4" id="cost-stacked-chart-container">
                  <div className="flex justify-between text-[10px] text-zinc-400">
                    <span>توزيع هيكل ميزانية سعر البيع ({inputs.sellingPrice} ر.س)</span>
                    <span>تفاعلي ٪</span>
                  </div>
                  
                  <div className="flex h-5 bg-zinc-950 rounded-full overflow-hidden border border-zinc-800" id="cost-category-bar">
                    {outputs.costBreakdown.map((item, idx) => (
                      <div 
                        key={idx} 
                        style={{ width: `${item.percent}%` }}
                        className={`${item.color} h-full transition-all duration-300 relative group cursor-pointer`}
                        title={`${item.category}: ${item.percent.toFixed(1)}%`}
                        id={`bar-slice-${idx}`}
                      >
                        <span className="absolute hidden group-hover:block bottom-6 left-1/2 transform -translate-x-1/2 bg-zinc-900 border border-zinc-700 text-[10px] text-white py-1 px-2.5 rounded-lg whitespace-nowrap z-30 shadow-xl">
                          {item.category}: {item.amount.toFixed(1)} ر.س ({item.percent.toFixed(1)}%)
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Legends list */}
                  <div className="flex flex-wrap gap-2.5 pt-2" id="cost-category-chart-legend">
                    {outputs.costBreakdown.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-[9px] text-zinc-400">
                        <span className={`w-2 h-2 rounded-full ${item.color}`}></span>
                        <span>{item.category} ({item.percent.toFixed(0)}%)</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Dynamic Advisor Alert Card based on margins */}
              <div 
                className={`border p-5 rounded-2xl text-right animate-fade-in ${
                  mathAdvice.type === 'success' ? 'bg-[#00bc7d]/5 border-primary/20 text-[#00bc7d]' :
                  mathAdvice.type === 'warn' ? 'bg-amber-400/5 border-amber-400/20 text-amber-500' :
                  mathAdvice.type === 'danger' ? 'bg-red-400/5 border-red-400/20 text-red-400' :
                  'bg-zinc-900/45 border-zinc-800 text-zinc-300'
                }`}
                id="advisor-message-box"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <Info className="w-5 h-5 shrink-0" id="icon-advisor" />
                  </div>
                  <div className="space-y-1">
                    <h5 className="font-bold text-xs sm:text-sm">{mathAdvice.title}</h5>
                    <p className="text-zinc-400 text-xs leading-relaxed">{mathAdvice.description}</p>
                    <div className="pt-2">
                      <a 
                        href={mathAdvice.actionTarget}
                        onClick={(e) => {
                          e.preventDefault();
                          navigateToSection(mathAdvice.actionTarget);
                        }}
                        className={`text-xs font-black underline hover:opacity-80 transition-opacity block ${
                          mathAdvice.type === 'success' ? 'text-primary' :
                          mathAdvice.type === 'warn' ? 'text-amber-500' :
                          mathAdvice.type === 'danger' ? 'text-red-400' :
                          'text-white'
                        }`}
                        id="advisor-action-btn"
                      >
                        {mathAdvice.actionText} ←
                      </a>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FAQs ACCORDION SECTION */}
      <section id="faqs" className="py-20 lg:py-28 bg-[#f8f9fa] border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary text-sm font-bold tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full">الأسئلة الأكثر حيرة وشيوعاً</span>
            <h2 className="mt-4 font-display font-black text-3xl text-zinc-900 leading-tight">نجيب على الشبهات والتساؤلات التي تدور ببالك</h2>
            <p className="mt-2 text-zinc-500 text-sm">نحن نؤمن بالشفافية الكاملة والوضوح مع شركاء النجاح.</p>
          </div>

          <div className="space-y-4" id="faqs-accordion-list">
            {FAQS.map((faq) => {
              const isExpanded = faqExpanded === faq.id;
              return (
                <div 
                  key={faq.id} 
                  className="bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                  id={`faq-item-${faq.id}`}
                >
                  <button
                    onClick={() => setFaqExpanded(isExpanded ? null : faq.id)}
                    className="w-full text-right px-6 py-5 sm:px-8 flex items-center justify-between gap-4 focus:outline-none hover:bg-zinc-50"
                    id={`btn-toggle-faq-${faq.id}`}
                  >
                    <span className="font-display font-bold text-sm sm:text-base text-zinc-900">{faq.question}</span>
                    <span className={`p-1.5 rounded-lg bg-zinc-100 text-zinc-500 transition-transform duration-300 transform ${isExpanded ? 'rotate-180 text-primary' : ''}`}>
                      <ChevronDown className="w-4 h-4" id={`icon-chevron-${faq.id}`} />
                    </span>
                  </button>
                  
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-1 sm:px-8 text-zinc-600 text-xs sm:text-sm leading-relaxed border-t border-dashed border-zinc-100 animate-fade-in" id={`faq-answer-${faq.id}`}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-lg mx-auto mb-16">
            <span className="text-primary text-sm font-bold tracking-widest uppercase bg-primary/10 px-4 py-1.5 rounded-full">شركاء وثقوا بنا ونموا معنا</span>
            <h2 className="mt-4 font-display font-black text-3xl text-zinc-900 leading-tight">قصص نجاح من صناع التجارة الحقيقيين</h2>
            <p className="mt-2 text-zinc-500 text-sm">شاهد كيف ساعدنا الماركات ورواد الأعمال على النهوض وتقليص العقبات.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <div 
                key={t.id} 
                className="bg-[#f8f9fa] border border-zinc-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6"
                id={`testimonial-card-${t.id}`}
              >
                <div className="space-y-4">
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star className="w-4 h-4 fill-current text-amber-500" />
                    <Star className="w-4 h-4 fill-current text-amber-500" />
                    <Star className="w-4 h-4 fill-current text-amber-500" />
                    <Star className="w-4 h-4 fill-current text-amber-500" />
                    <Star className="w-4 h-4 fill-current text-amber-500" />
                  </div>
                  
                  {/* Feedback description text */}
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed text-right font-medium">
                    " {t.content} "
                  </p>
                </div>

                {/* Profile client details */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-200/50">
                  <img 
                    src={t.avatar} 
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-zinc-200 shrink-0" 
                    loading="lazy"
                  />
                  <div className="flex flex-col items-start text-right leading-tight">
                    <span className="font-bold text-zinc-800 text-sm">{t.name}</span>
                    <span className="text-zinc-400 text-[10px] mt-1">{t.title} - <span className="text-primary font-semibold">{t.storeName}</span></span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT / CTA RESERVATION FORM SECTION */}
      <section id="contact" className="py-20 lg:py-28 bg-[#f8f9fa] border-t border-zinc-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Context Sidebar removed per request; form expanded to full width below */}

            {/* Leading Form block (full width) */}
            <div className="lg:col-span-12" id="contact-form-panel">
              <div className="bg-white border border-zinc-100 rounded-3xl p-6 sm:p-8 shadow-xl shadow-zinc-200/50 relative">
                
                {submitSuccess ? (
                  <div className="text-center py-12 space-y-6 animate-fade-in" id="contact-form-success-view">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" id="icon-booking-success-checkmark" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-display font-black text-xl text-zinc-900">تم استقبال طلبك واستشارتك بنجاح!</h4>
                      <p className="text-zinc-500 text-xs sm:text-sm max-w-md mx-auto">
                        سعداء جداً بثقتك في فينتاريا. لقد قمنا بجدولة الطلب وربطه بمهندس مبيعاتنا المتخصص. سيتواصل معك فريق الاستشارات بمكالمة هاتفية أو عبر بريدك خلال أقل من ٢٤ ساعة.
                      </p>
                    </div>

                    <div className="bg-[#f8f9fa] border border-zinc-100 p-4 rounded-2xl max-w-xs mx-auto space-y-1.5 text-center">
                      <span className="text-[10px] text-zinc-400 uppercase tracking-widest font-black block">رقم وتوثيق طلبك الدولي</span>
                      <span className="font-mono text-lg font-black text-primary hover:underline block">{submissionCode}</span>
                      <span className="block text-[9px] text-[#00bc7d]">يرجى الاحتفاظ بهذا الرقم للتأكيد</span>
                    </div>

                    <button 
                      onClick={handleResetForm}
                      className="bg-zinc-50 hover:bg-zinc-100 text-zinc-800 text-xs font-semibold px-4 py-2 sm:px-6 rounded-xl border border-zinc-200 transition-all"
                      id="btn-re-submit-form"
                    >
                      إرسال طلب استشارة آخر
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleLeadSubmit} className="space-y-5 text-right" id="lead-intake-form">
                    
                    <div className="border-b border-zinc-100 pb-3 flex justify-between items-center bg-white">
                      <span className="font-display font-black text-zinc-800 text-base">استمارة تهيئة طلب الاستشارة</span>
                      <span className="text-[10px] text-[#00bc7d] font-bold bg-[#00bc7d]/10 px-2 py-0.5 rounded-full">استجابة فائقة السرعة</span>
                    </div>

                    {/* Client Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-client-name" className="text-xs font-bold text-zinc-700">الاسم الكريم بالكامل *</label>
                      <input 
                        type="text"
                        placeholder="الأستاذ / الأستاذة..."
                        required
                        value={leadForm.name}
                        onChange={(e) => setLeadForm({...leadForm, name: e.target.value})}
                        className="w-full bg-[#f8f9fa] border border-zinc-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl text-xs text-zinc-900 focus:outline-none"
                        id="form-client-name"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Phone Code */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-client-phone" className="text-xs font-bold text-zinc-700">رقم الجوال الفعال *</label>
                        <div className="flex gap-2" dir="ltr" id="phone-container">
                          
                          {/* State drop for codes */}
                          <select 
                            value={leadForm.countryCode}
                            onChange={(e) => setLeadForm({...leadForm, countryCode: e.target.value})}
                            className="bg-[#f8f9fa] border border-zinc-200 rounded-xl px-2 text-xs font-bold focus:outline-none text-zinc-800"
                            id="form-country-code"
                          >
                            <option value="+966">🇸🇦 +966</option>
                            <option value="+971">🇦🇪 +971</option>
                            <option value="+965">🇰🇼 +965</option>
                            <option value="+20">🇪🇬 +20</option>
                          </select>

                          <input 
                            type="tel"
                            placeholder="50000000"
                            required
                            value={leadForm.mobile}
                            onChange={(e) => setLeadForm({...leadForm, mobile: e.target.value})}
                            className="w-full bg-[#f8f9fa] border border-zinc-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl text-xs text-zinc-900 focus:outline-none placeholder-right"
                            dir="ltr"
                            id="form-client-phone"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-client-email" className="text-xs font-bold text-zinc-700">البريد الإلكتروني المهني *</label>
                        <input 
                          type="email"
                          placeholder="client@company.com"
                          required
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({...leadForm, email: e.target.value})}
                          className="w-full bg-[#f8f9fa] border border-zinc-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl text-xs text-zinc-900 focus:outline-none text-right"
                          id="form-client-email"
                        />
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      
                      {/* Requested Service */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-requested-service" className="text-xs font-bold text-zinc-700">الخدمة المطلوبة والأساسية</label>
                        <select 
                          value={selectedServiceForForm}
                          onChange={(e) => setSelectedServiceForForm(e.target.value)}
                          className="w-full bg-[#f8f9fa] border border-zinc-200 focus:border-primary focus:bg-white px-3 py-3 rounded-xl text-xs text-zinc-800 focus:outline-none"
                          id="form-requested-service"
                        >
                          <option value="corporate-web">تصميم وتطوير المواقع التعريفية للشركات</option>
                          <option value="business-sites">تصميم مواقع الخدمات والأعمال التجارية</option>
                          <option value="landing-pages">تصميم صفحات الهبوط عالية التحويل</option>
                          <option value="salla">تأسيس متاجر سلة بكافة الميزات</option>
                          <option value="zid">تأسيس وتكامل متاجر وعلامات زد</option>
                          <option value="shopify">تطوير متاجر Shopify المخصصة</option>
                          <option value="branding">تصميم الهوية البصرية ودليل البراند</option>
                          <option value="logos">تصميم الهوية والشعارات الاحترافية</option>
                          <option value="uiux">تصميم واجهات وتجربة المستخدم UI/UX</option>
                          <option value="optimization">تحسين أداء وسيو وسرعة التحميل</option>
                        </select>
                      </div>

                      {/* Approximate Budget */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-project-budget" className="text-xs font-bold text-zinc-700">ميزانية المشروع التقريبية المتوقعة</label>
                        <select 
                          value={leadForm.budget}
                          onChange={(e) => setLeadForm({...leadForm, budget: e.target.value})}
                          className="w-full bg-[#f8f9fa] border border-zinc-200 focus:border-primary focus:bg-white px-3 py-3 rounded-xl text-xs text-zinc-800 focus:outline-none"
                          id="form-project-budget"
                        >
                          <option value="3000-5000">٣,٠٠٠ - ٥,٠٠٠ ر.س</option>
                          <option value="5000-10000">٥,٠٠٠ - ١٠,٠٠٠ ر.س</option>
                          <option value="10000-20000">١٠,٠٠٠ - ٢٠,٠٠٠ ر.س</option>
                          <option value="20000+">أكثر من ٢٠,٠٠٠ ر.س</option>
                        </select>
                      </div>

                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-1.5">
                      <label htmlFor="form-client-notes" className="text-xs font-bold text-zinc-700">اكتب لنا تفاصيل مشروعك أو فكرتك (اختياري)</label>
                      <textarea 
                        rows={3}
                        placeholder="نرغب في بناء موقع تعريفي للشركة الفاخرة مع نظام حجز واستشارات لـ ٢٤ عميل يومياً..."
                        value={leadForm.notes}
                        onChange={(e) => setLeadForm({...leadForm, notes: e.target.value})}
                        className="w-full bg-[#f8f9fa] border border-zinc-200 focus:border-primary focus:bg-white px-4 py-3 rounded-xl text-xs text-zinc-900 focus:outline-none text-right"
                        id="form-client-notes"
                      />
                    </div>

                    {/* Submit CTA button */}
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary hover:bg-[#009e68] text-white py-4 rounded-xl font-black text-sm sm:text-base hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer pt-4 mt-2"
                      id="btn-submit-lead-form"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin shrink-0" id="icon-submit-loader" />
                          <span>جاري تأمين اتصالك وتثبيت طلبك المحاسبي...</span>
                        </>
                      ) : (
                        <>
                          <span>أرسل متطلبات الاستشارة المجانية الفورية</span>
                          <ArrowLeft className="w-5 h-5 shrink-0" id="icon-arrow-left-form" />
                        </>
                      )}
                    </button>

                    <span className="block text-center text-[10px] text-zinc-400">
                      🔒 بياناتك آمنة بالكامل ومتوافقة مع المعايير السعودية لحماية البيانات الشخصية.
                    </span>

                  </form>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>
        </>
      ) : (
        <FreeTools 
          onNavigateHome={() => {
            setActivePage('home');
            window.location.hash = '';
          }}
          onContactClick={() => openWhatsApp('+201014046106')}
        />
      )}

      {/* FOOTER SECTION */}
      <footer id="ventaria-footer" className="bg-[#111111] text-zinc-400 pt-16 pb-8 border-t border-zinc-800 text-right">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
            
            {/* Column 1: Brand Info */}
            <div className="space-y-4" id="footer-col-1">
              <div className="flex items-center gap-3">
                <img src={logo} alt="Ventaria Logo" className="w-8 h-8 object-contain" />
                <span className="font-display font-extrabold text-xl text-white">Ventaria</span>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
                شركة تقنية رائدة واستوديو تصميم وتطوير متكامل مخصص لبناء المواقع الاستراتيجية والمتاجر الأكثر تصفحاً. نضمن لعلامتك مظهر فخم ومبيعات واسعة.
              </p>
              <div className="flex items-center gap-4 text-xs font-semibold text-zinc-300">
                <span>المقر الرئيسي:</span>
                <span className="text-white">الرياض، المملكة العربية السعودية</span>
              </div>
            </div>

            {/* Column 2: Quick Navigation Links */}
            <div className="space-y-4" id="footer-col-2">
              <h4 className="font-display font-bold text-white text-sm">روابط الوصول السريع</h4>
              <ul className="space-y-2 text-xs">
                <li>
                  <a href="#hero" onClick={(e) => { e.preventDefault(); navigateToSection('#hero'); }} className="hover:text-[#00bc7d] transition-colors">الرئيسية</a>
                </li>
                <li>
                  <a href="#services" onClick={(e) => { e.preventDefault(); navigateToSection('#services'); }} className="hover:text-[#00bc7d] transition-colors">الخدمات والحول</a>
                </li>
                <li>
                  <a href="#why-ventaria" onClick={(e) => { e.preventDefault(); navigateToSection('#why-ventaria'); }} className="hover:text-[#00bc7d] transition-colors">لماذا فينتاريا؟</a>
                </li>
                <li>
                  <a href="#portfolio" onClick={(e) => { e.preventDefault(); navigateToSection('#portfolio'); }} className="hover:text-[#00bc7d] transition-colors">أعمالنا السابقة</a>
                </li>
                <li>
                  <a href="#calculator" onClick={(e) => { e.preventDefault(); navigateToSection('#calculator'); }} className="hover:text-[#00bc7d] transition-colors text-primary font-bold">حاسبة الأرباح المجانية 🇸🇦</a>
                </li>
              </ul>
            </div>

            {/* Column 3: Platform Integrations */}
            <div className="space-y-4" id="footer-col-3">
              <h4 className="font-display font-bold text-white text-sm">متكاملو المنصات وتخصصاتها</h4>
              <ul className="space-y-2 text-xs">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00bc7d]"></span>
                  <span>تخصيص ثيم سلة (Salla Dev)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff4522]"></span>
                  <span>تهيئة وتكامل زد برو (Zid Developer)</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#96bf48]"></span>
                  <span>هندسة وتطوير قوالب Shopify</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                  <span>أدوات Figma و نظام التصميم الشامل</span>
                </li>
              </ul>
            </div>

            {/* Column 4: Newsletter or contact pitch */}
            <div className="space-y-4" id="footer-col-4">
              <h4 className="font-display font-bold text-white text-sm">التزام وشريك ذكي</h4>
              <p className="text-xs text-zinc-400">نحن مسجلون ومرخصون بالكامل لخدمة أصحاب الأعمال في السعودية والخليج.</p>
              <div className="pt-2">
                <button 
                  onClick={() => openWhatsApp('+201014046106')}
                  className="bg-primary hover:bg-[#009e68] text-zinc-950 font-black text-xs px-4 py-2.5 rounded-lg w-full text-center transition-all cursor-pointer"
                  id="btn-footer-start-now"
                >
                  تواصل معانا
                </button>
              </div>
            </div>

          </div>

          {/* Under copyright section */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4" id="footer-under-copyright">
            <span>جميع الحقوق محفوظة © {new Date().getFullYear()} فينتاريا (Ventaria) — شريك نمو الشركات والمتاجر الإلكترونية.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">شروط الاستخدام</a>
              <a href="#" className="hover:text-white transition-colors">سياسة الخصوصية وحماية البيانات</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
