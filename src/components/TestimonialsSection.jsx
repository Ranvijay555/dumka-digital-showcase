import { testimonials } from "./data";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900 text-white py-20 border-y border-slate-800">
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-bold text-amber-300 border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Satisfaction</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            What Business Owners & Founders <span className="text-amber-400">Say About Us</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Real feedback from fast-growing retail enterprises, healthcare networks, and D2C brands that scaled with WebTech.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => {
            const testimonialThemes = [
              {
                border: "border-amber-500/40 hover:border-amber-400 hover:shadow-amber-500/20",
                topBar: "from-amber-400 to-orange-500",
                badge: "text-amber-400",
              },
              {
                border: "border-blue-500/40 hover:border-blue-400 hover:shadow-blue-500/20",
                topBar: "from-blue-400 to-cyan-500",
                badge: "text-cyan-400",
              },
              {
                border: "border-emerald-500/40 hover:border-emerald-400 hover:shadow-emerald-500/20",
                topBar: "from-emerald-400 to-teal-500",
                badge: "text-emerald-400",
              },
            ];
            const theme = testimonialThemes[i % testimonialThemes.length];

            return (
              <div
                key={i}
                className={`group relative flex flex-col justify-between rounded-3xl bg-slate-800/90 p-8 border-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${theme.border}`}
              >
                {/* Top colored accent line */}
                <div className={`absolute top-0 left-8 right-8 h-1.5 rounded-b-full bg-gradient-to-r ${theme.topBar}`} />

                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1 text-amber-400 mb-4 pt-1">
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-slate-300 ml-1">5.0 / 5.0</span>
                  </div>

                  {/* Comment */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between">
                  <div>
                    <h4 className="font-display text-base font-bold text-white">
                      {t.name}
                    </h4>
                    <p className={`text-xs font-semibold ${theme.badge}`}>
                      {t.role}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      📍 {t.location}
                    </p>
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 shadow-inner">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-14 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-around gap-6 text-slate-400 text-xs sm:text-sm font-semibold">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-bold">★ 4.9/5</span>
            <span>Google Reviews Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">✓ 24/7</span>
            <span>Dedicated Pan-India Support</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-400 font-bold">✓ 150+</span>
            <span>Delivered Implementations</span>
          </div>
        </div>
      </div>
    </section>
  );
}
