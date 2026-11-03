import { pricingPlans, companyInfo } from "./data";
import { Check, Sparkles, MessageCircle, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function PricingSection() {
  const getPlanWhatsapp = (plan) => {
    const text = `Hello WebTech! I want to choose the "${plan.name}" plan (${plan.price}) for my business website/app. Please share next steps.`;
    return `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3.5 py-1 text-xs font-bold text-amber-700 border border-amber-200 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Affordable & Transparent Packages</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Web & App Packages Built for <span className="text-blue-600">Every Budget</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600">
          Zero hidden costs. 100% transparent milestones, enterprise-grade engineering, and dedicated priority support across India.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid gap-8 lg:grid-cols-3 items-stretch">
        {pricingPlans.map((plan, idx) => {
          const planStyles = [
            {
              card: "bg-gradient-to-b from-teal-50/90 via-white to-cyan-50/60 border-2 border-teal-300 hover:border-teal-500 shadow-lg shadow-teal-500/10 hover:shadow-2xl hover:shadow-teal-500/20 text-slate-900",
              tag: "bg-teal-100 text-teal-800 border border-teal-300 font-extrabold",
              accentBar: "from-teal-400 to-emerald-500",
              priceColor: "text-teal-900",
              checkBg: "bg-teal-100 text-teal-700",
              btnWhatsapp: "bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-md shadow-teal-600/30",
              btnQuote: "text-teal-700 hover:text-teal-900 hover:underline",
            },
            {
              card: "bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-900 border-2 border-amber-400 shadow-2xl shadow-blue-900/40 text-white lg:-translate-y-3",
              tag: "bg-amber-400/20 text-amber-300 border border-amber-400/40 font-extrabold",
              accentBar: "from-amber-400 via-orange-400 to-amber-500",
              priceColor: "text-amber-400",
              checkBg: "bg-amber-400/20 text-amber-300",
              btnWhatsapp: "bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-slate-950 hover:from-amber-300 hover:to-amber-400 font-black shadow-lg shadow-amber-500/30",
              btnQuote: "text-slate-300 hover:text-white hover:underline",
            },
            {
              card: "bg-gradient-to-b from-purple-50/90 via-white to-violet-50/60 border-2 border-purple-300 hover:border-purple-500 shadow-lg shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20 text-slate-900",
              tag: "bg-purple-100 text-purple-800 border border-purple-300 font-extrabold",
              accentBar: "from-purple-500 to-violet-600",
              priceColor: "text-purple-900",
              checkBg: "bg-purple-100 text-purple-700",
              btnWhatsapp: "bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-md shadow-purple-600/30",
              btnQuote: "text-purple-700 hover:text-purple-900 hover:underline",
            },
          ];
          const style = planStyles[idx % planStyles.length];

          return (
            <div
              key={plan.name}
              className={`relative flex flex-col justify-between rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 ${style.card}`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-8 right-8 h-2 rounded-b-full bg-gradient-to-r ${style.accentBar}`} />

              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 via-orange-500 to-amber-500 px-5 py-1 text-xs font-black uppercase tracking-wider text-slate-950 shadow-xl border border-amber-200">
                  ★ Most Popular Choice Nationwide
                </div>
              )}

              <div>
                {/* Header */}
                <div className="border-b pb-6 border-slate-200/40">
                  <span className={`text-[11px] uppercase tracking-wider px-3 py-1 rounded-full ${style.tag}`}>
                    {plan.tag}
                  </span>
                  <h3 className="font-display text-2xl font-black mt-3">
                    {plan.name}
                  </h3>
                  <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${plan.popular ? "text-slate-300" : "text-slate-600"}`}>
                    {plan.description}
                  </p>

                  {/* Pricing Number */}
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className={`font-display text-4xl sm:text-5xl font-black tracking-tight ${style.priceColor}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm line-through ${plan.popular ? "text-slate-500" : "text-slate-400"}`}>
                      {plan.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      One-time
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mt-6 space-y-3">
                  <p className={`text-xs font-extrabold uppercase tracking-wider ${plan.popular ? "text-amber-400/90" : "text-slate-500"}`}>
                    What's Included:
                  </p>
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full mt-0.5 ${style.checkBg}`}>
                        <Check className="h-3 w-3 stroke-[3]" />
                      </div>
                      <span className={plan.popular ? "text-slate-200" : "text-slate-700"}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 pt-6 border-t border-slate-200/30 space-y-2.5">
                <a
                  href={getPlanWhatsapp(plan)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full flex items-center justify-center gap-2 rounded-2xl py-3.5 px-4 text-xs sm:text-sm font-bold transition-all hover:scale-105 active:scale-95 ${style.btnWhatsapp}`}
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book This Plan on WhatsApp</span>
                </a>

                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center gap-1.5 rounded-2xl py-2 px-4 text-xs font-bold transition ${style.btnQuote}`}
                >
                  <span>Request Custom Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Package Disclaimer Note */}
      <div className="mt-10 text-center text-xs text-slate-500">
        💡 All packages include free domain/hosting configuration guidance and SSL certification. Custom enterprise solutions available upon inquiry.
      </div>
    </section>
  );
}
