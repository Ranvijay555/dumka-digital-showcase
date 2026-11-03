import { useState } from "react";
import { faqs, companyInfo } from "./data";
import { ChevronDown, HelpCircle, MessageCircle, Phone } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200 mb-3">
          <HelpCircle className="w-3.5 h-3.5 text-blue-600" />
          <span>Got Questions? We Have Answers</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          Everything you need to know about partnering with WebTech for your web, app, and digital growth.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl transition-all duration-200 border ${
                isOpen
                  ? "bg-white border-blue-400 shadow-md ring-1 ring-blue-400/20"
                  : "bg-white border-slate-200 hover:border-slate-300 shadow-sm"
              }`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base sm:text-lg font-bold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                    isOpen ? "bg-blue-600 text-white rotate-180" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              {isOpen && (
                <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-in fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions */}
      <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-left">
          <p className="font-bold text-slate-900 text-sm">Have a question that's not answered here?</p>
          <p className="text-xs text-slate-500">Founder Ranvijay Kumar & the team are just a phone call or WhatsApp message away.</p>
        </div>
        <div className="flex gap-2 shrink-0">
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-1.5 rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-blue-700 transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call Us</span>
          </a>
          <a
            href={`https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20WebTech%2C%20I%20have%20a%20question.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
