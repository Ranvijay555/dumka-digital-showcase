import { createFileRoute } from "@tanstack/react-router";
import ServiceGrid from "../components/ServiceGrid";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — WebTech" },
      { name: "description", content: "Website development, app development, e-commerce, SEO, digital marketing and graphic design." },
      { property: "og:title", content: "WebTech Services" },
      { property: "og:description", content: "Everything your business needs to grow online." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <section className="bg-hero py-20 text-center text-dark-foreground">
        <h1 className="text-4xl font-bold md:text-5xl">Our Services</h1>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <ServiceGrid />
      </section>
    </>
  );
}
