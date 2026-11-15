import { createFileRoute } from "@tanstack/react-router";
import Team from "../components/Team";
import { companyInfo } from "../components/data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — WebTech | Premier IT Agency in India" },
      { name: "description", content: "Learn about WebTech — India's premier IT agency for website development, mobile apps, and digital growth." },
      { property: "og:title", content: "About WebTech — Leading IT & Web Agency" },
      { property: "og:description", content: "Our story, mission, and national digital capabilities." },
      { property: "og:image", content: "/images/webtech-logo.jpg" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-hero py-20 text-center text-dark-foreground border-b border-slate-800">
        <h1 className="text-4xl font-black md:text-5xl text-white">About Us</h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
          {companyInfo.tagline}
        </p>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={companyInfo.logo}
              alt="WebTech Logo"
              className="h-20 w-20 rounded-full object-cover border-2 border-amber-400/80 shadow-2xl shadow-amber-400/20 shrink-0"
            />
            <div>
              <h2 className="text-3xl font-black text-foreground">Who We Are</h2>
              <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                {companyInfo.tagline}
              </p>
            </div>
          </div>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            WebTech is an industry-leading IT and digital agency delivering enterprise-grade web development, native mobile applications, e-commerce stores, and high-ROI digital growth strategies to ambitious businesses across India.
          </p>
          <p className="mt-3 text-muted-foreground leading-relaxed text-sm">
            Headquartered in Dumka, Jharkhand and powered by direct leadership from Founders Ranvijay Kumar & Sreya Arora, we bring Silicon-Valley grade engineering directly to startups and enterprises across the nation.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="text-xl font-semibold text-primary">Our Mission</h3>
            <p className="mt-2 text-muted-foreground">Affordable, high-quality digital services for every business.</p>
          </div>
          <div className="rounded-2xl border bg-card p-6">
            <h3 className="text-xl font-semibold text-primary">Our Vision</h3>
            <p className="mt-2 text-muted-foreground">To be the most trusted technology innovation partner for growing enterprises across India and beyond.</p>
          </div>
        </div>
      </section>
      <Team />
    </>
  );
}
