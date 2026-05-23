"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 50, suffix: "+", label: "Expert Members" },
  { value: 10, suffix: "+", label: "Years Experience" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const duration = 2000;
        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(ease * value));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#0A84FF]/8 blur-[120px] animate-float" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#38B6FF]/6 blur-[100px] animate-float-delay" />
        <div className="absolute bottom-1/4 left-1/2 w-64 h-64 rounded-full bg-[#0A84FF]/5 blur-[80px] animate-float-delay2" />

        {/* Corner decorations */}
        <div className="absolute top-20 left-8 opacity-20">
          <div className="w-16 h-16 border-l-2 border-t-2 border-[#0A84FF]" />
        </div>
        <div className="absolute top-20 right-8 opacity-20">
          <div className="w-16 h-16 border-r-2 border-t-2 border-[#0A84FF]" />
        </div>
        <div className="absolute bottom-20 left-8 opacity-20">
          <div className="w-16 h-16 border-l-2 border-b-2 border-[#0A84FF]" />
        </div>
        <div className="absolute bottom-20 right-8 opacity-20">
          <div className="w-16 h-16 border-r-2 border-b-2 border-[#0A84FF]" />
        </div>

        {/* Floating dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#0A84FF] opacity-30"
            style={{
              top: `${10 + (i * 7) % 80}%`,
              left: `${5 + (i * 13) % 90}%`,
              animationDelay: `${i * 0.5}s`,
              animation: `float ${4 + (i % 3)}s ease-in-out ${i * 0.4}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#0A84FF]/30 bg-[#0A84FF]/5 mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
          <span className="section-badge text-[11px]">Digital Solutions Studio</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-8xl leading-none tracking-tight mb-6">
          <span
            className="block text-white opacity-0 animate-slide-up"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            WE BUILD.
          </span>
          <span
            className="block sol-blue-text opacity-0 animate-slide-up"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            YOU GROW.
          </span>
          <span
            className="block sol-gradient-text opacity-0 animate-slide-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            TOGETHER WE SCALE.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          className="max-w-2xl mx-auto text-lg sm:text-xl text-[#8899AA] font-body leading-relaxed mb-12 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
        >
          From strategy to execution, we deliver digital products that make an impact.
          Solutions + Labs + Technology = <span className="text-[#0A84FF] font-semibold">SolLabs Tech</span>
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
        >
          <button
            className="sol-btn-primary px-8 py-4 rounded text-sm w-full sm:w-auto"
            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Our Services
          </button>
          <button
            className="sol-btn-outline px-8 py-4 rounded text-sm w-full sm:w-auto"
            onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Portfolio
          </button>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0A1525] rounded overflow-hidden opacity-0 animate-fade-in"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-[#020408] px-6 py-8 text-center relative group hover:bg-[#060C14] transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-[#0A84FF]/0 group-hover:bg-[#0A84FF]/3 transition-all duration-300" />
              <div className="font-display font-black text-3xl sm:text-4xl text-white mb-1 relative z-10">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs font-mono tracking-widest text-[#8899AA] uppercase relative z-10">
                {stat.label}
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-0 group-hover:w-full bg-[#0A84FF]/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-60">
          <span className="text-xs font-mono tracking-widest text-[#8899AA] uppercase">Scroll</span>
          <div className="w-px h-12 bg-[#0A84FF]/30 relative overflow-hidden">
            <div className="absolute top-0 w-full h-4 bg-[#0A84FF] animate-scan" />
          </div>
        </div>
      </div>
    </section>
  );
}
