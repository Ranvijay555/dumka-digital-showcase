import { portfolioProjects, companyInfo } from "./data";
import { Sparkles, ArrowRight, ExternalLink, MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Proven Track Record</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Featured Projects & <span className="text-blue-600">Client Showcases</span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-600">
          Discover how WebTech has helped local stores, educational institutes, clinics, and enterprises scale digitally.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {portfolioProjects.map((project) => (
          <div
            key={project.id}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-white shadow-md border border-slate-200/80 hover:shadow-2xl hover:border-blue-400 transition-all duration-300"
          >
            {/* Visual Top Area with Gradient & Badge */}
            <div className={`h-48 sm:h-56 bg-gradient-to-tr ${project.imageBg} p-6 flex flex-col justify-between relative overflow-hidden`}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-105 transition-transform duration-500"
                />
              )}
              {/* Subtle background decorative shapes */}
              <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-full bg-white/10 blur-xl"></div>
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <span className="rounded-full bg-black/30 backdrop-blur-md px-3 py-1 text-xs font-bold text-white border border-white/20">
                  {project.category}
                </span>
              </div>
              <div className="relative z-10 mt-auto">
                <span className="rounded-lg bg-white/20 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white">
                  {project.results}
                </span>
                <h3 className="font-display text-2xl font-black text-white mt-2">
                  {project.title}
                </h3>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-600">
                  ✓ Verified Client Launch
                </span>
                <a
                  href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(`Hello WebTech, I loved your work on "${project.title}". Can you build something similar for my business?`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition group-hover:translate-x-1"
                >
                  <span>Build Something Like This</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="mt-12 text-center">
        <Link
          to="/contact"
          className="btn-primary text-sm shadow-xl"
        >
          <span>View All Case Studies & Start Yours</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
