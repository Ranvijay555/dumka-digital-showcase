import { createFileRoute } from "@tanstack/react-router";
import PortfolioSection from "../components/PortfolioSection";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio & Recent Projects — WebTech" },
      { name: "description", content: "Explore our recent websites, mobile applications, and software projects delivered for startups and enterprises across India." },
      { property: "og:title", content: "Portfolio — WebTech IT Agency" },
      { property: "og:description", content: "Featured web, app, and e-commerce development showcase." },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <>
      <section className="bg-hero py-20 text-center text-dark-foreground border-b border-slate-800">
        <h1 className="text-4xl font-bold md:text-5xl font-display">Our Portfolio & Work</h1>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-300 px-4">
          Explore our client success stories, custom websites, mobile applications, and e-commerce platforms built for fast-growing businesses across India.
        </p>
      </section>
      <div className="py-6">
        <PortfolioSection />
      </div>
    </>
  );
}
