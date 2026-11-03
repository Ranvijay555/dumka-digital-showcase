import { whyChooseUs, stats } from "./data";
import { Sparkles, ShieldCheck, CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 border-y border-slate-200/80 py-20">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>The WebTech Advantage</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Why Fast-Growing Businesses Across India <span className="text-blue-600">Choose Us</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            We don't just deliver lines of code. We partner with you to grow your business, increase your revenue, and establish market dominance.
          </p>
        </div>

        {/* 6 Advantages Colorful Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const whyThemes = [
              {
                bg: "bg-gradient-to-br from-amber-50/90 via-white to-orange-50/60",
                border: "border-amber-200/90 hover:border-amber-400 hover:shadow-amber-500/20",
                iconBg: "bg-amber-100/90 text-amber-700 shadow-sm",
                hoverText: "group-hover:text-amber-600",
                accentLine: "from-amber-400 to-orange-500",
              },
              {
                bg: "bg-gradient-to-br from-blue-50/90 via-white to-indigo-50/60",
                border: "border-blue-200/90 hover:border-blue-400 hover:shadow-blue-500/20",
                iconBg: "bg-blue-100/90 text-blue-700 shadow-sm",
                hoverText: "group-hover:text-blue-600",
                accentLine: "from-blue-500 to-indigo-600",
              },
              {
                bg: "bg-gradient-to-br from-emerald-50/90 via-white to-teal-50/60",
                border: "border-emerald-200/90 hover:border-emerald-400 hover:shadow-emerald-500/20",
                iconBg: "bg-emerald-100/90 text-emerald-700 shadow-sm",
                hoverText: "group-hover:text-emerald-600",
                accentLine: "from-emerald-400 to-teal-600",
              },
              {
                bg: "bg-gradient-to-br from-rose-50/90 via-white to-pink-50/60",
                border: "border-rose-200/90 hover:border-rose-400 hover:shadow-rose-500/20",
                iconBg: "bg-rose-100/90 text-rose-700 shadow-sm",
                hoverText: "group-hover:text-rose-600",
                accentLine: "from-rose-400 to-pink-600",
              },
              {
                bg: "bg-gradient-to-br from-purple-50/90 via-white to-fuchsia-50/60",
                border: "border-purple-200/90 hover:border-purple-400 hover:shadow-purple-500/20",
                iconBg: "bg-purple-100/90 text-purple-700 shadow-sm",
                hoverText: "group-hover:text-purple-600",
                accentLine: "from-purple-400 to-fuchsia-600",
              },
              {
                bg: "bg-gradient-to-br from-cyan-50/90 via-white to-sky-50/60",
                border: "border-cyan-200/90 hover:border-cyan-400 hover:shadow-cyan-500/20",
                iconBg: "bg-cyan-100/90 text-cyan-700 shadow-sm",
                hoverText: "group-hover:text-cyan-600",
                accentLine: "from-cyan-400 to-sky-600",
              },
            ];
            const theme = whyThemes[i % whyThemes.length];

            return (
              <div
                key={i}
                className={`group relative rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${theme.bg} ${theme.border}`}
              >
                {/* Top colored accent line */}
                <div className={`absolute top-0 left-8 right-8 h-1.5 rounded-b-full bg-gradient-to-r ${theme.accentLine}`} />

                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-3xl mb-5 group-hover:scale-110 transition-all duration-300 ${theme.iconBg}`}>
                  {item.icon}
                </div>
                <h3 className={`font-display text-xl font-black text-slate-900 transition-colors ${theme.hoverText}`}>
                  {item.title}
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner */}
        <div className="mt-14 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-950 p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Quality & Timely Delivery Guarantee</span>
            </div>
            <h4 className="font-display text-xl sm:text-2xl font-black">
              Zero Delays. Direct Communication. Guaranteed Results.
            </h4>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Every project comes with milestone-based signoffs, so you have complete visibility from wireframe to launch.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 shrink-0">
            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 text-center border border-white/10">
              <p className="font-display text-2xl sm:text-3xl font-black text-amber-400">100%</p>
              <p className="text-[11px] text-slate-300 font-medium">Responsive Design</p>
            </div>
            <div className="rounded-2xl bg-white/10 backdrop-blur-md p-4 text-center border border-white/10">
              <p className="font-display text-2xl sm:text-3xl font-black text-emerald-400">&lt;2s</p>
              <p className="text-[11px] text-slate-300 font-medium">Page Load Speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
