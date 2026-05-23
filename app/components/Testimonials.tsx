"use client";
import { useEffect, useRef } from "react";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-[#0A84FF]/4 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="section-badge mb-4">// Client Stories</p>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            What Our{" "}
            <span className="sol-blue-text">Clients Say</span>
          </h2>
          <p className="max-w-md mx-auto text-[#8899AA]">
            98% client satisfaction isn't a stat — it's a standard we never compromise.
          </p>
        </div>

        <div className="sol-divider mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="sol-card rounded p-6 reveal group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <span key={j} className="text-[#0A84FF] text-base">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-[#C8D6E5] leading-relaxed mb-6 relative">
                <span className="absolute -top-2 -left-1 text-3xl text-[#0A84FF]/25 font-serif leading-none">"</span>
                <span className="relative z-10">{t.quote}</span>
                <span className="absolute -bottom-4 right-0 text-3xl text-[#0A84FF]/25 font-serif leading-none">"</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-[#0A1525]">
                <div className="w-10 h-10 rounded-full bg-[#0A84FF]/15 border border-[#0A84FF]/30 flex items-center justify-center font-display font-bold text-xs text-[#38B6FF] flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-display font-bold text-white">{t.name}</div>
                  <div className="text-xs text-[#8899AA] font-mono">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
