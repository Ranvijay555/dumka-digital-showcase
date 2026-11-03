import { useState } from "react";
import { companyInfo } from "./data";
import { MessageCircle, Phone, X } from "lucide-react";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      {open && (
        <div className="mb-3 w-72 rounded-2xl bg-card p-4 shadow-2xl border border-border animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between border-b pb-2">
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-foreground">WebTech Live Support</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground p-1 text-sm rounded-md"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="py-3 text-xs text-muted-foreground leading-relaxed">
            Namaste! 🙏 Welcome to <strong>WebTech</strong>. Need a website, app, or marketing consultation? Chat with our team directly on WhatsApp!
          </div>
          <div className="flex flex-col gap-2 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-md hover:bg-emerald-700 transition"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-2 text-xs font-semibold text-secondary-foreground hover:bg-muted transition"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              Call: {companyInfo.phone}
            </a>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-3">
        {!open && (
          <span className="hidden sm:inline-block rounded-full bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground shadow-lg border border-border">
            Chat with us 👋
          </span>
        )}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Contact on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-xl hover:bg-emerald-600 hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400"></span>
          </span>
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-7 h-7" />}
        </button>
      </div>
    </div>
  );
}
