import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { services, companyInfo } from "./data";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ExternalLink,
  MessageCircle
} from "lucide-react";

export default function ServiceGrid({ showAll = true, limit = 8 }) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const categories = ["All", "Design & Frontend", "Web Development", "App Development", "Online Store", "Search Optimization", "Growth & PPC"];

  const filteredServices = services
    .filter((s) => activeCategory === "All" || s.category === activeCategory)
    .slice(0, limit);

  const getWhatsappUrl = (serviceTitle) => {
    const text = `Hello WebTech! I am interested in your "${serviceTitle}" service for my business. Please share details and pricing.`;
    return `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      {showAll && (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Services Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredServices.map((service, idx) => {
          const serviceThemes = [
            {
              cardBg: "bg-gradient-to-br from-blue-50/90 via-white to-sky-50/50",
              border: "border-blue-200 hover:border-blue-400 hover:shadow-blue-500/20",
              iconBg: "bg-blue-100 text-blue-600 shadow-sm",
              accentBar: "from-blue-500 via-sky-400 to-indigo-500",
              badge: "bg-blue-100 text-blue-800 border-blue-200",
              hoverText: "group-hover:text-blue-600",
              tag: "bg-blue-50 text-blue-700 border border-blue-200/70",
              btn: "text-blue-600 hover:text-blue-800",
            },
            {
              cardBg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/50",
              border: "border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20",
              iconBg: "bg-purple-100 text-purple-600 shadow-sm",
              accentBar: "from-purple-500 via-fuchsia-400 to-pink-500",
              badge: "bg-purple-100 text-purple-800 border-purple-200",
              hoverText: "group-hover:text-purple-600",
              tag: "bg-purple-50 text-purple-700 border border-purple-200/70",
              btn: "text-purple-600 hover:text-purple-800",
            },
            {
              cardBg: "bg-gradient-to-br from-indigo-50/90 via-white to-cyan-50/50",
              border: "border-indigo-200 hover:border-indigo-400 hover:shadow-indigo-500/20",
              iconBg: "bg-indigo-100 text-indigo-600 shadow-sm",
              accentBar: "from-indigo-500 via-cyan-400 to-blue-500",
              badge: "bg-indigo-100 text-indigo-800 border-indigo-200",
              hoverText: "group-hover:text-indigo-600",
              tag: "bg-indigo-50 text-indigo-700 border border-indigo-200/70",
              btn: "text-indigo-600 hover:text-indigo-800",
            },
            {
              cardBg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/50",
              border: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/20",
              iconBg: "bg-emerald-100 text-emerald-600 shadow-sm",
              accentBar: "from-emerald-500 via-teal-400 to-green-500",
              badge: "bg-emerald-100 text-emerald-800 border-emerald-200",
              hoverText: "group-hover:text-emerald-600",
              tag: "bg-emerald-50 text-emerald-700 border border-emerald-200/70",
              btn: "text-emerald-600 hover:text-emerald-800",
            },
            {
              cardBg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/50",
              border: "border-amber-200 hover:border-amber-400 hover:shadow-amber-500/20",
              iconBg: "bg-amber-100 text-amber-600 shadow-sm",
              accentBar: "from-amber-500 via-orange-400 to-yellow-500",
              badge: "bg-amber-100 text-amber-800 border-amber-200",
              hoverText: "group-hover:text-amber-600",
              tag: "bg-amber-50 text-amber-700 border border-amber-200/70",
              btn: "text-amber-600 hover:text-amber-800",
            },
            {
              cardBg: "bg-gradient-to-br from-rose-50/90 via-white to-pink-50/50",
              border: "border-rose-200 hover:border-rose-400 hover:shadow-rose-500/20",
              iconBg: "bg-rose-100 text-rose-600 shadow-sm",
              accentBar: "from-rose-500 via-pink-400 to-orange-400",
              badge: "bg-rose-100 text-rose-800 border-rose-200",
              hoverText: "group-hover:text-rose-600",
              tag: "bg-rose-50 text-rose-700 border border-rose-200/70",
              btn: "text-rose-600 hover:text-rose-800",
            },
            {
              cardBg: "bg-gradient-to-br from-teal-50/90 via-white to-emerald-50/50",
              border: "border-teal-200 hover:border-teal-400 hover:shadow-teal-500/20",
              iconBg: "bg-teal-100 text-teal-600 shadow-sm",
              accentBar: "from-teal-500 via-emerald-400 to-cyan-500",
              badge: "bg-teal-100 text-teal-800 border-teal-200",
              hoverText: "group-hover:text-teal-600",
              tag: "bg-teal-50 text-teal-700 border border-teal-200/70",
              btn: "text-teal-600 hover:text-teal-800",
            },
            {
              cardBg: "bg-gradient-to-br from-violet-50/90 via-white to-purple-50/50",
              border: "border-violet-200 hover:border-violet-400 hover:shadow-violet-500/20",
              iconBg: "bg-violet-100 text-violet-600 shadow-sm",
              accentBar: "from-violet-500 via-purple-400 to-fuchsia-500",
              badge: "bg-violet-100 text-violet-800 border-violet-200",
              hoverText: "group-hover:text-violet-600",
              tag: "bg-violet-50 text-violet-700 border border-violet-200/70",
              btn: "text-violet-600 hover:text-violet-800",
            },
          ];
          const theme = serviceThemes[idx % serviceThemes.length];

          return (
            <div
              key={service.id}
              className={`group relative flex flex-col justify-between rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 ${theme.cardBg} ${theme.border}`}
            >
              {/* Top Accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${theme.accentBar} rounded-t-2xl shadow-sm`} />

              <div>
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between mb-4 pt-1">
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl group-hover:scale-110 transition-all duration-300 ${theme.iconBg}`}>
                    {service.icon}
                  </span>
                  {service.badge && (
                    <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-bold border shadow-xs ${theme.badge}`}>
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Short Description */}
                <h3 className={`font-display text-lg font-bold text-slate-900 transition-colors ${theme.hoverText}`}>
                  {service.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortText}
                </p>

                {/* Feature Highlights */}
                <div className="mt-4 space-y-1.5 border-t border-slate-200/70 pt-4">
                  {service.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {service.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-md px-2 py-0.5 text-[10px] font-semibold ${theme.tag}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between gap-2">
                <a
                  href={getWhatsappUrl(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className={`inline-flex items-center gap-1 text-xs font-bold transition group-hover:underline ${theme.btn}`}
                >
                  <span>Get Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Service Consultation Banner */}
      <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50 to-amber-50 p-6 sm:p-8 border border-blue-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <h4 className="font-display text-lg font-bold text-slate-900">
            Need a custom digital service or project combination?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            We engineer custom web apps, ERP software, and multi-channel marketing campaigns tailored for high-growth businesses and enterprises across India.
          </p>
        </div>
        <Link
          to="/contact"
          className="btn-brand text-xs sm:text-sm whitespace-nowrap shrink-0"
        >
          Talk to Tech Lead Digvijay
        </Link>
      </div>
    </div>
  );
}
