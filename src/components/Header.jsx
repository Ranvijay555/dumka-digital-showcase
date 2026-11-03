import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { companyInfo } from "./data";
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  Sparkles,
  MessageCircle,
  Clock,
  Globe2
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      {/* Top Bar (Web Expert Technology style) */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          {/* Left Info */}
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition">
              <Globe2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Pan-India Digital Agency • Nationwide Delivery</span>
            </span>
            <a
              href={`tel:${companyInfo.phone}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-white transition"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{companyInfo.phone}</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mon-Sat 9AM-7:30PM</span>
            </span>
          </div>

          {/* Right Links & Quick Actions */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href={`mailto:${companyInfo.email}`}
              className="hidden lg:flex items-center gap-1.5 text-slate-300 hover:text-white transition"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyInfo.email}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-emerald-600/90 hover:bg-emerald-600 text-white px-2.5 py-0.5 rounded-full text-[11px] font-medium transition"
            >
              <MessageCircle className="w-3 h-3" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-slate-900/95 backdrop-blur-md text-white border-b border-slate-800">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-amber-500 text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-xl sm:text-2xl font-black tracking-tight leading-none text-white">
                Web<span className="text-amber-400">Tech</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold">
                Premier IT & Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-semibold text-slate-200 hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-400 after:transition-all"
                activeProps={{ className: "text-amber-400 font-bold after:w-full" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 transition"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Call Us</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary text-xs !py-2.5 !px-5"
            >
              <span>Get Free Quote</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 text-slate-200 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 animate-in slide-in-from-top-2 text-white">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition"
                activeProps={{ className: "bg-slate-800/80 text-amber-400 font-bold" }}
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
          </nav>

          <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-col gap-3">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary w-full text-center text-sm py-3"
            >
              Get Free Consultation & Quote
            </Link>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a
                href={`tel:${companyInfo.phone}`}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-slate-800 py-2.5 text-slate-200 font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Directly</span>
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600/90 py-2.5 text-white font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
            <div className="text-[11px] text-slate-400 text-center mt-1">
              📍 {companyInfo.address}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
