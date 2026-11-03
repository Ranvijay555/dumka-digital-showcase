import { Link } from "@tanstack/react-router";
import { companyInfo, services, team } from "./data";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
  MessageCircle,
  Heart,
  ShieldCheck
} from "lucide-react";

export default function Footer() {
  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Pre-footer Callout Banner */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border-b border-slate-800 py-10 px-4">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3 py-1 text-xs font-semibold text-amber-300 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready to transform your business digitally?</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
              Let's build your dream website or mobile app today
            </h3>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Get in touch with India's premier tech agency. Fast delivery, transparent pricing, and 100% satisfaction guaranteed.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-primary text-sm shadow-xl">
              Get Started Now
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: About WebTech */}
        <div className="space-y-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-amber-500 text-white shadow-md">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black text-white">
                Web<span className="text-amber-400">Tech</span>
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 font-semibold uppercase">
                Pan-India IT Agency
              </span>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            {companyInfo.shortDesc}
          </p>
          <div className="pt-2 text-xs text-slate-400 space-y-1">
            <div className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted Pan-India Digital Partner</span>
            </div>
            <p className="text-slate-500">
              Founded & managed by <strong>{companyInfo.founder}</strong> (Founder) and <strong>Sreya Arora</strong> (Founder & Sales Head), with <strong>{companyInfo.techHead}</strong> (Tech Head) and <strong>{companyInfo.marketingHead}</strong> (Marketing Head).
            </p>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h4 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>Our Services</span>
            <div className="h-0.5 w-6 bg-amber-400"></div>
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            {services.slice(0, 6).map((service) => (
              <li key={service.id}>
                <Link
                  to="/services"
                  className="flex items-center gap-2 hover:text-amber-400 transition-colors group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 group-hover:translate-x-0.5 transition" />
                  <span>{service.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Quick Links & Team */}
        <div>
          <h4 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>Quick Links & Team</span>
            <div className="h-0.5 w-6 bg-amber-400"></div>
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-400">
            <li>
              <Link to="/" className="flex items-center gap-2 hover:text-amber-400 transition group">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition" />
                <span>Home Showcase</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center gap-2 hover:text-amber-400 transition group">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition" />
                <span>About Our Agency</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="flex items-center gap-2 hover:text-amber-400 transition group">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition" />
                <span>Services & Pricing</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="flex items-center gap-2 hover:text-amber-400 transition group">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition" />
                <span>Portfolio & Work</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="flex items-center gap-2 hover:text-amber-400 transition group">
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-amber-400 transition" />
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>

          <div className="mt-5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <span className="font-semibold text-slate-200 block mb-1">Key Leadership:</span>
            <div className="space-y-1 text-slate-400">
              <div>• {companyInfo.founder} (Founder)</div>
              <div>• Sreya Arora (Founder & Sales Head)</div>
              <div>• {companyInfo.techHead} (Technical Head)</div>
              <div>• {companyInfo.marketingHead.includes("(") ? companyInfo.marketingHead : `${companyInfo.marketingHead} (Founder & Marketing Head)`}</div>
            </div>
          </div>
        </div>

        {/* Col 4: Registered Corporate Office & Contact */}
        <div>
          <h4 className="font-display text-base font-bold text-white mb-4 flex items-center gap-2">
            <span>Registered Corporate Office</span>
            <div className="h-0.5 w-6 bg-amber-400"></div>
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
              <span>{companyInfo.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-400 shrink-0" />

              <div>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="hover:text-white transition block text-sm text-slate-400"
                >
                  {companyInfo.phone}
                </a>

                <a
                  href={`tel:${companyInfo.secondaryPhone}`}
                  className="hover:text-white transition block text-sm text-slate-400 mt-0.5"
                >
                  {companyInfo.secondaryPhone}
                </a>
              </div>

            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-white transition break-all">
                {companyInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-xs">{companyInfo.workingHours}</span>
            </li>
          </ul>

          <div className="mt-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600/20 text-emerald-300 border border-emerald-500/30 px-3 py-2 text-xs font-semibold hover:bg-emerald-600/30 transition w-full justify-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Direct WhatsApp: {companyInfo.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-slate-950/80 px-4 py-6 text-center text-xs text-slate-500">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} <strong>WebTech</strong>. All rights reserved. Pan-India IT & Digital Solutions.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
            <span>for ambitious businesses across India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
