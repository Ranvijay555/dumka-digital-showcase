import { createFileRoute, Link } from "@tanstack/react-router";
import ServiceGrid from "../components/ServiceGrid";
import Team from "../components/Team";
import PricingSection from "../components/PricingSection";
import CostCalculator from "../components/CostCalculator";
import WhyChooseUs from "../components/WhyChooseUs";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FaqSection from "../components/FaqSection";
import { stats, companyInfo } from "../components/data";
import { 
  Sparkles, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck, 
  MapPin, 
  Star,
  ChevronRight,
  Zap,
  Globe2
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WebTech — Premier Website, Mobile App & Digital Growth Agency in India" },
      { name: "description", content: "WebTech is India's leading IT agency for modern website designing, Android & iOS mobile apps, custom web applications, e-commerce stores, and high-ROI digital marketing." },
      { property: "og:title", content: "WebTech — Premier Website & Mobile App Agency" },
      { property: "og:description", content: "Engineering scalable websites, native apps, and digital growth engines for ambitious businesses nationwide." },
    ],
  }),
  component: Home,
});

function Home() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <>
      {/* TOP FULL-WIDTH IT TECHNOLOGY HERO BANNER */}
      <section className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800">
        <div className="relative w-full h-[280px] sm:h-[420px] md:h-[500px] lg:h-[560px]">
          <img
            src="/images/it-tech-full-hero.jpg"
            alt="WebTech IT Agency — Software, Web & App Development in India"
            className="w-full h-full object-cover object-center brightness-95 contrast-105"
            loading="eager"
          />
          {/* Subtle gradient overlays to blend top and bottom smoothly */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-black/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/50 via-transparent to-slate-950/50 pointer-events-none" />

          {/* Floating Badge on the image */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 w-full px-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 py-2 text-xs sm:text-sm font-semibold text-white border border-slate-700/80 shadow-2xl">
              <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-amber-400 font-bold">India's Leading Next-Gen IT Agency</span>
              <span className="text-slate-400 hidden sm:inline">|</span>
              <span className="text-slate-200 hidden sm:inline">Web, Mobile Apps & Enterprise Software</span>
            </div>
          </div>
        </div>
      </section>

      {/* HERO WRITTEN CONTENT & CTAs (BELOW THE IMAGE) */}
      <section className="relative overflow-hidden bg-hero text-dark-foreground pt-14 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
        {/* Glow ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 px-4 py-1.5 text-xs font-semibold text-slate-200 border border-slate-700/80 shadow-inner mb-6 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-slate-300">Inspired by World-Class Technology Standards</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-black tracking-tight leading-[1.12]">
            We Build Websites & Mobile Apps That{" "}
            <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-500 bg-clip-text text-transparent">
              Grow Your Business
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            Website designing, Android & iOS app development, e-commerce stores, and high-ROI digital marketing for <strong className="text-white">startups, growing brands, and enterprises across India</strong>.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary text-sm sm:text-base !px-8 !py-4 shadow-xl">
              <span>Get Free Quote & Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm sm:text-base !px-6 !py-4 flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400" />
              <span>WhatsApp Us: {companyInfo.phone}</span>
            </a>
          </div>

          {/* Quick Trust Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-medium text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Mobile-First & Ultra Fast</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Direct Tech Lead Access</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Transparent Milestone Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-amber-400" />
              <span>Pan-India Remote & On-Ground Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS COUNTER STRIP */}
      <section className="relative z-10 mx-auto -mt-10 max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 rounded-3xl bg-white p-6 sm:p-8 shadow-2xl border border-slate-200/80">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-3 border-r last:border-r-0 border-slate-100">
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-blue-600 tracking-tight">
                {s.value}
              </p>
              <p className="text-xs sm:text-sm font-bold text-slate-800 mt-1">{s.label}</p>
              <p className="text-[11px] text-slate-500 hidden sm:block mt-0.5">{s.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPREHENSIVE SERVICES SECTION */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Full-Spectrum Digital Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Digital Services for <span className="text-blue-600">Your Growth</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            From modern responsive website designing to custom Android/iOS apps, e-commerce stores, and Google SEO domination — we provide everything your business needs to scale nationwide.
          </p>
        </div>

        <ServiceGrid showAll={true} limit={8} />
      </section>

      {/* INTERACTIVE COST CALCULATOR */}
      <CostCalculator />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* PACKAGES & PRICING */}
      <PricingSection />

      {/* PORTFOLIO & WORK SHOWCASE */}
      <PortfolioSection />

      {/* LEADERSHIP TEAM */}
      <Team />

      {/* CLIENT TESTIMONIALS */}
      <TestimonialsSection />

      {/* FREQUENTLY ASKED QUESTIONS */}
      <FaqSection />

      {/* FINAL CALL TO ACTION */}
      <section className="mx-auto mb-20 max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-3xl bg-hero p-8 sm:p-16 text-center text-dark-foreground shadow-2xl border border-slate-800">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let's Discuss Your Project Today</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-white">
              Have a Project in Mind? Let's Build Something Exceptional Together.
            </h2>
            <div className="inline-flex items-center gap-3 bg-slate-900/80 border border-slate-700/80 rounded-full py-1.5 px-4 backdrop-blur-md">
              <img
                src={companyInfo.founderImage}
                alt={companyInfo.founder}
                className="w-10 h-10 rounded-full object-cover border-2 border-amber-400 shadow-md"
              />
              <div className="text-left text-xs">
                <span className="font-bold text-white block">{companyInfo.founder}</span>
                <span className="text-amber-400 font-medium text-[11px]">Founder & Managing Director</span>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl mx-auto">
              Partner with Founders <strong>Ranvijay Kumar</strong> & <strong>Sreya Arora</strong> (+91 95899 11153), Technical Head <strong>Digvijay Kumar</strong>, and Marketing Head <strong>Mahesh Yaduvanshi</strong> for your next high-growth digital launch.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link to="/contact" className="btn-primary text-sm sm:text-base">
                Get Your Free Consultation
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm sm:text-base flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: {companyInfo.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
