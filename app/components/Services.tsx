"use client";
import { useEffect, useRef } from "react";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const reveals = sectionRef.current?.querySelectorAll(".reveal");
    reveals?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-[#0A84FF]/20" />
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#0A84FF]/4 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <p className="section-badge mb-4">// What We Do</p>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Digital Services That{" "}
            <span className="sol-blue-text">Drive Results</span>
          </h2>
          <p className="max-w-xl mx-auto text-[#8899AA] text-base sm:text-lg">
            From mobile apps to AI integrations, we build products end-to-end.
          </p>
        </div>

        <div className="sol-divider mb-16" />

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.id} {...service} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-[#8899AA] text-sm mb-4 font-mono">
            Have a custom requirement?
          </p>
          <button
            className="sol-btn-outline px-8 py-3 rounded text-sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Let's Talk
          </button>
        </div>
      </div>
    </section>
  );
}
