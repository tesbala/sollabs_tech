"use client";
import { useState, useEffect, useRef } from "react";
import { techCategories, techStack } from "../data/techstack";

export default function TechStack() {
  const [active, setActive] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);

  const filtered = active === "All" ? techStack : techStack.filter((t) => t.category === active);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech-stack" ref={sectionRef} className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-80 h-80 rounded-full bg-[#0A84FF]/4 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 reveal">
          <p className="section-badge mb-4">// Our Arsenal</p>
          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-4">
            Powered By{" "}
            <span className="sol-blue-text">Modern Tech</span>
          </h2>
          <p className="max-w-lg mx-auto text-[#8899AA]">
            We use the latest, battle-tested stack to deliver fast, secure, and scalable applications.
          </p>
        </div>

        <div className="sol-divider mb-12" />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {techCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs font-mono tracking-widest uppercase px-4 py-2 rounded border transition-all duration-300 ${
                active === cat
                  ? "border-[#0A84FF] bg-[#0A84FF]/15 text-white"
                  : "border-[#0A1525] text-[#8899AA] hover:border-[#0A84FF]/40 hover:text-[#C8D6E5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {filtered.map((tech, i) => (
            <div
              key={tech.name}
              className="tech-pill px-4 py-2 rounded bg-[#060C14] text-[#C8D6E5] text-sm font-display font-medium cursor-default reveal"
              style={{ transitionDelay: `${i * 0.03}s` }}
            >
              {tech.name}
            </div>
          ))}
        </div>

        {/* Bottom label */}
        <div className="text-center mt-12 reveal">
          <p className="text-xs font-mono text-[#8899AA] tracking-widest">
            SOLUTIONS + LABS + TECHNOLOGY ={" "}
            <span className="text-[#0A84FF]">SOLLABS TECH</span>
          </p>
        </div>
      </div>
    </section>
  );
}
