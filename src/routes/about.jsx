import { createFileRoute } from "@tanstack/react-router";
import Team from "../components/Team";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — WebTech | Premier IT Agency in India" },
      { name: "description", content: "Learn about WebTech — India's premier IT agency for website development, mobile apps, and digital growth." },
      { property: "og:title", content: "About WebTech — Leading IT & Web Agency" },
      { property: "og:description", content: "Our story, mission, and national digital capabilities." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-hero py-20 text-center text-dark-foreground">
        <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            WebTech is an industry-leading IT and digital agency delivering enterprise-grade web development, native mobile applications, e-commerce stores, and high-ROI digital growth strategies to ambitious businesses across India.
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
