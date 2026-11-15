import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { companyInfo } from "../components/data";
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — WebTech | Pan-India IT Agency" },
      { name: "description", content: "Get in touch with WebTech for modern websites, mobile apps, and growth marketing across India." },
      { property: "og:title", content: "Contact WebTech — Pan-India IT Agency" },
      { property: "og:description", content: "Schedule a consultation for your next website, app or software project." },
      { property: "og:image", content: "/images/webtech-logo.jpg" },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-xl border border-slate-200 dark:border-slate-800 bg-card px-4 py-3 outline-none focus:border-primary transition";

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const message = formData.get("message") || "";

    const text = `Hello WebTech! New Project Inquiry:%0A👤 *Name:* ${encodeURIComponent(name)}%0A📞 *Phone:* ${encodeURIComponent(phone)}%0A✉️ *Email:* ${encodeURIComponent(email)}%0A💬 *Message:* ${encodeURIComponent(message)}`;
    
    // Open WhatsApp directly with formatted lead details
    window.open(`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${text}`, "_blank");
    setSent(true);
    e.target.reset();
  };

  const whatsappUrl = `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(companyInfo.whatsappMessage)}`;

  return (
    <>
      <section className="bg-hero py-16 sm:py-20 text-center text-dark-foreground border-b border-slate-800">
        <div className="mx-auto max-w-4xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-400/20 px-3.5 py-1 text-xs font-semibold text-amber-300 mb-4 border border-amber-400/30">
            <span>Get In Touch</span>
          </div>
          <h1 className="text-4xl font-black md:text-5xl tracking-tight text-white">Let's Connect & Build</h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Discuss your next website, mobile application, or marketing campaign directly with our leadership team.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-2 items-start">
        {/* Left Information Card with WebTech Branding */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img
              src={companyInfo.logo}
              alt="WebTech Logo"
              className="h-16 w-16 rounded-full object-cover border-2 border-amber-400/80 shadow-xl shrink-0"
            />
            <div>
              <h2 className="text-2xl font-black text-foreground">WebTech</h2>
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                {companyInfo.tagline}
              </p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            Tell us about your project requirements and our leadership team will connect with you within 24 hours. Serving clients across Delhi, Mumbai, Bengaluru, Patna, Ranchi & nationwide.
          </p>

          <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-foreground">Registered Corporate Office</p>
                <p className="text-xs text-muted-foreground mt-0.5">{companyInfo.address}</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t">
              <Phone className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-foreground">Direct Call (Ranvijay Kumar)</p>
                <a href={`tel:${companyInfo.phone}`} className="text-xs text-primary font-semibold hover:underline block mt-0.5">
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-2 border-t">
              <Mail className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-foreground">Official Email</p>
                <a href={`mailto:${companyInfo.email}`} className="text-xs text-muted-foreground hover:text-foreground block mt-0.5">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-slate-800 px-4 py-3 text-xs font-bold shadow hover:bg-slate-800 transition"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {companyInfo.phone}</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 text-xs font-bold shadow transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Direct WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="rounded-3xl border bg-card p-6 sm:p-8 shadow-xl">
          <h3 className="text-xl font-bold text-foreground mb-1">Send Inquiry</h3>
          <p className="text-xs text-muted-foreground mb-6">
            Fill details below and click Send — it connects directly to our team on WhatsApp!
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">Your Full Name *</label>
              <input required name="name" placeholder="e.g. Rahul Sharma" className={input} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">Phone / Mobile *</label>
                <input required name="phone" placeholder="e.g. +91 98765 43210" className={input} />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground mb-1 block">Email Address *</label>
                <input required type="email" name="email" placeholder="e.g. rahul@example.com" className={input} />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground mb-1 block">Project Requirements / Message *</label>
              <textarea required name="message" rows="4" placeholder="Tell us about the website, app, or digital solution you need..." className={input} />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 py-3.5 shadow-lg">
              <Send className="w-4 h-4" />
              <span>Send Message to WhatsApp</span>
            </button>

            {sent && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Thank you! Your message was sent to our WhatsApp team. We will respond shortly.</span>
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
