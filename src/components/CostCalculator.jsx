import { useState } from "react";
import { companyInfo } from "./data";
import { Calculator, Check, MessageCircle, Sparkles, Phone } from "lucide-react";

export default function CostCalculator() {
  const [projectType, setProjectType] = useState("website");
  const [pages, setPages] = useState(5);
  const [addons, setAddons] = useState({
    paymentGateway: false,
    adminPanel: true,
    whatsappBot: true,
    localSeo: true,
    multiLanguage: false,
    expressDelivery: false,
  });

  const basePrices = {
    website: 5999,
    ecommerce: 18999,
    mobileApp: 23999,
    marketing: 6999,
  };

  const projectLabels = {
    website: "Custom Business Website",
    ecommerce: "E-Commerce Online Store",
    mobileApp: "Android & iOS Mobile App",
    marketing: "SEO & Digital Ads Campaign",
  };

  const addonPrices = {
    paymentGateway: { name: "UPI & Online Payment Gateway", price: 3000 },
    adminPanel: { name: "Custom Admin Dashboard", price: 4500 },
    whatsappBot: { name: "WhatsApp Chat & Leads Integration", price: 1500 },
    localSeo: { name: "Google Business & Pan-India SEO", price: 3500 },
    multiLanguage: { name: "Multi-Language (Hindi & English)", price: 2500 },
    expressDelivery: { name: "Express Turnaround (3-5 Days)", price: 3000 },
  };

  const calculateTotal = () => {
    let total = basePrices[projectType];
    
    // Per page addition beyond initial 3
    if (pages > 3) {
      total += (pages - 3) * 600;
    }

    // Add selected add-ons
    Object.keys(addons).forEach((key) => {
      if (addons[key]) {
        total += addonPrices[key].price;
      }
    });

    return total;
  };

  const toggleAddon = (key) => {
    setAddons((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const estimatedCost = calculateTotal();

  const getWhatsappQuote = () => {
    const selectedAddonNames = Object.keys(addons)
      .filter((k) => addons[k])
      .map((k) => addonPrices[k].name)
      .join(", ");

    const text = `Hello WebTech! I used your Project Cost Calculator on your website:
• Project: ${projectLabels[projectType]}
• Pages/Screens: ${pages}
• Selected Features: ${selectedAddonNames || "Standard"}
• Estimated Budget: ₹${estimatedCost.toLocaleString("en-IN")}
Please confirm details and availability.`;

    return `https://wa.me/${companyInfo.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-20">
      <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-12 shadow-2xl border border-slate-800">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-3.5 py-1 text-xs font-bold text-blue-300 border border-blue-500/30 mb-3">
            <Calculator className="w-3.5 h-3.5 text-amber-400" />
            <span>Instant Project Estimator</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Calculate Your Project Cost in <span className="text-amber-400">Seconds</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Select your requirements below to see an instant, transparent estimate for your business.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {/* 1. Project Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Project Type
              </label>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-2">
                {[
                  { id: "website", label: "Business Website", icon: "💻" },
                  { id: "ecommerce", label: "E-Commerce Store", icon: "🛒" },
                  { id: "mobileApp", label: "Mobile App", icon: "📱" },
                  { id: "marketing", label: "SEO & Ads Campaign", icon: "📈" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id)}
                    className={`flex items-center gap-3 rounded-2xl p-4 text-left transition-all cursor-pointer border ${
                      projectType === item.id
                        ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-600/30 ring-2 ring-blue-400/50"
                        : "bg-slate-800/70 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs sm:text-sm font-bold">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Number of Pages / Screens */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Number of Pages / Screens
                </label>
                <span className="rounded-lg bg-blue-500/20 px-3 py-1 text-sm font-bold text-blue-300 border border-blue-500/30">
                  {pages} {pages === 1 ? "Page" : "Pages"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={pages}
                onChange={(e) => setPages(parseInt(e.target.value, 10))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1 Page (Landing)</span>
                <span>5 Pages (Standard)</span>
                <span>15+ Pages (Portal)</span>
              </div>
            </div>

            {/* 3. Add-on Features */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                3. Choose Optional Features & Add-ons
              </label>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {Object.keys(addonPrices).map((key) => {
                  const item = addonPrices[key];
                  const isChecked = addons[key];
                  return (
                    <div
                      key={key}
                      onClick={() => toggleAddon(key)}
                      className={`flex items-center justify-between rounded-xl p-3 border transition cursor-pointer ${
                        isChecked
                          ? "bg-blue-950/60 border-blue-500/60 text-white"
                          : "bg-slate-800/40 border-slate-700/60 text-slate-400 hover:bg-slate-800"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`flex h-4 w-4 items-center justify-center rounded transition ${
                            isChecked ? "bg-amber-400 text-slate-950" : "border border-slate-600"
                          }`}
                        >
                          {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-semibold">{item.name}</span>
                      </div>
                      <span className="text-[11px] font-bold text-amber-400 shrink-0">
                        +₹{item.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Estimate Summary Column (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-950 p-6 sm:p-8 border border-slate-700 shadow-xl space-y-6">
            <div className="border-b border-slate-700 pb-4">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Estimated Project Investment
              </span>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-4xl sm:text-5xl font-black text-amber-400">
                  ₹{estimatedCost.toLocaleString("en-IN")}*
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  (Estimated)
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                *Approximate cost based on selected specifications. Final quotation confirmed after brief project discovery.
              </p>
            </div>

            {/* Selected Breakdown */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex justify-between">
                <span>Selected Architecture:</span>
                <span className="font-bold text-white">{projectLabels[projectType]}</span>
              </div>
              <div className="flex justify-between">
                <span>Pages / Views:</span>
                <span className="font-bold text-white">{pages} Pages</span>
              </div>
              <div className="flex justify-between">
                <span>Hosting & Security:</span>
                <span className="font-bold text-emerald-400">Free Setup Assistance</span>
              </div>
              <div className="flex justify-between">
                <span>Support Guarantee:</span>
                <span className="font-bold text-amber-400">3-6 Months Included</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 space-y-3">
              <a
                href={getWhatsappQuote()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 py-3.5 px-4 text-xs sm:text-sm font-bold text-white hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/25"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Estimate to WhatsApp</span>
              </a>

              <a
                href={`tel:${companyInfo.phone}`}
                className="w-full flex items-center justify-center gap-2 rounded-2xl border border-slate-700 py-3 px-4 text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Founders (Ranvijay & Sreya): {companyInfo.phone}</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400 text-center">
              📍 WebTech • Pan-India Delivery • GST Compliant Invoicing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
