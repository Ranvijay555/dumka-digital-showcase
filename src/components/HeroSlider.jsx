import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export const heroSlides = [
  {
    id: 1,
    image: "/images/hero-new.jpg",
    alt: "WebTech IT Agency — Next-Gen Software, Web & App Development",
    tag: "Next-Gen IT Agency",
    tagColor: "bg-emerald-400",
    title: "India's Leading IT & Digital Growth Agency",
    subtitle: "Web, Mobile Apps & Enterprise Software",
  },
  {
    id: 2,
    image: "/images/slide-2.jpg",
    alt: "WebTech Modern Website Design and Full-Stack Engineering",
    tag: "Web Engineering",
    tagColor: "bg-blue-400",
    title: "Bespoke Website Designing & Web Apps",
    subtitle: "Sub-Second Speed & Responsive UI/UX",
  },
  {
    id: 3,
    image: "/images/slide-3.jpg",
    alt: "WebTech Native Android & iOS Mobile Application Development",
    tag: "Mobile Apps",
    tagColor: "bg-amber-400",
    title: "Android & iOS Native Mobile Applications",
    subtitle: "Smooth 60FPS UI & Scalable Cloud Backend",
  },
  {
    id: 4,
    image: "/images/slide-4.jpg",
    alt: "WebTech E-Commerce Platforms & Revenue Growth Marketing",
    tag: "E-Commerce & Scale",
    tagColor: "bg-rose-400",
    title: "High-Converting E-Commerce Stores & Funnels",
    subtitle: "Integrated Indian Gateways & Automated Order Tracking",
  },
  {
    id: 5,
    image: "/images/slide-1.jpg",
    alt: "WebTech Collaborative Software Leadership Team in Dumka, Jharkhand",
    tag: "Client-First Execution",
    tagColor: "bg-cyan-400",
    title: "Dedicated Pan-India Tech & Marketing Team",
    subtitle: "Direct Founder Access & Transparent Milestone Delivery",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  // Auto-play interval (every 4.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  // Touch swipe handling
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      aria-label="WebTech Hero Showcase Slider"
      className="relative w-full overflow-hidden bg-slate-950 border-b border-slate-800 select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slider Viewport Container */}
      <div className="relative w-full h-[320px] sm:h-[440px] md:h-[520px] lg:h-[580px]">
        {heroSlides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                loading={index === 0 ? "eager" : "lazy"}
                className={`w-full h-full object-cover object-center transition-transform duration-7000 ease-out ${
                  isActive ? "scale-105" : "scale-100"
                } brightness-90 contrast-105`}
              />
            </div>
          );
        })}

        {/* Ambient Overlay Gradients */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-slate-950 via-slate-950/25 to-black/30 pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-gradient-to-r from-slate-950/60 via-transparent to-slate-950/60 pointer-events-none" />

        {/* Navigation Arrow Left */}
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md border border-slate-700/80 shadow-xl opacity-75 hover:opacity-100 hover:bg-slate-900/90 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Navigation Arrow Right */}
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-slate-900/60 text-white backdrop-blur-md border border-slate-700/80 shadow-xl opacity-75 hover:opacity-100 hover:bg-slate-900/90 hover:scale-110 active:scale-95 transition-all"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Floating Slide Details & Badge */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 w-full px-4 text-center max-w-4xl">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-2xl sm:rounded-full bg-slate-900/90 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-2 text-xs sm:text-sm font-semibold text-white border border-slate-700/80 shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-2">
              <span className={`flex h-2.5 w-2.5 rounded-full ${heroSlides[current].tagColor} animate-pulse`} />
              <span className="text-amber-400 font-bold">{heroSlides[current].title}</span>
            </div>
            <span className="text-slate-500 hidden sm:inline">|</span>
            <span className="text-slate-300 text-[11px] sm:text-xs">
              {heroSlides[current].subtitle}
            </span>
          </div>

          {/* Dots Indicator / Slide Navigation */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 transition-all duration-300 rounded-full ${
                  idx === current
                    ? "w-8 bg-amber-400 shadow-md shadow-amber-400/50"
                    : "w-2 bg-slate-600/80 hover:bg-slate-400"
                }`}
              />
            ))}
            <span className="ml-2 text-[10px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded-full border border-slate-800">
              0{current + 1} / 0{heroSlides.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
