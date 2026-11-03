import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — WebTech | Pan-India IT Agency" },
      { name: "description", content: "Get in touch with WebTech for modern websites, mobile apps, and growth marketing across India." },
      { property: "og:title", content: "Contact WebTech — Pan-India IT Agency" },
      { property: "og:description", content: "Schedule a consultation for your next website, app or software project." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const input = "w-full rounded-lg border bg-card px-4 py-3 outline-none focus:border-primary";

  return (
    <>
      <section className="bg-hero py-20 text-center text-dark-foreground">
        <h1 className="text-4xl font-bold md:text-5xl">Contact Us</h1>
      </section>
      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">Let's Talk</h2>
          <p className="mt-4 text-muted-foreground">Tell us about your project requirements and our leadership team will connect with you within 24 hours.</p>
          <div className="mt-6 rounded-2xl border bg-card p-6">
            <p className="font-semibold text-primary">📍 Registered Corporate Office</p>
            <p className="text-muted-foreground mt-1">Main Road, Dumka, Jharkhand - 814101</p>
            <p className="text-xs text-muted-foreground mt-2">Serving Clients Across Delhi, Mumbai, Bengaluru, Patna, Ranchi & Nationwide</p>
          </div>
        </div>
        <form
          className="space-y-4"
          onSubmit={(e) => { e.preventDefault(); setSent(true); e.target.reset(); }}
        >
          <input required placeholder="Your Name" className={input} />
          <input required type="email" placeholder="Your Email" className={input} />
          <input placeholder="Phone Number" className={input} />
          <textarea required rows="5" placeholder="Your Message" className={input} />
          <button type="submit" className="btn-primary">Send Message</button>
          {sent && <p className="text-primary">Thank you! We will contact you soon.</p>}
        </form>
      </section>
    </>
  );
}
