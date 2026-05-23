"use client";
import { useEffect, useRef } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
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
    <section id="portfolio" ref={sectionRef} className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full bg-[#38B6FF]/4 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="reveal">
            <p className="section-badge mb-4">// Our Work</p>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Projects That{" "}
              <span className="sol-blue-text">Speak Results</span>
            </h2>
          </div>
          <p className="text-[#8899AA] max-w-xs text-sm reveal reveal-delay-2">
            150+ projects delivered across industries. Here's a glimpse of what we build.
          </p>
        </div>

        <div className="sol-divider mb-16" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} {...project} index={i} />
          ))}
        </div>

        <div className="text-center mt-14 reveal">
          <button
            className="sol-btn-primary px-10 py-4 rounded text-sm"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
