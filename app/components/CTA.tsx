"use client";
import { useState, useEffect, useRef } from "react";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const sectionRef = useRef<HTMLElement>(null);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0A84FF]/5 blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-[#0A84FF]/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left column */}
          <div>
            <div className="reveal">
              <p className="section-badge mb-4">// Let's Build</p>
              <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight mb-6">
                Ready to{" "}
                <span className="sol-blue-text">Start Building?</span>
              </h2>
              <p className="text-[#8899AA] text-base leading-relaxed mb-10">
                Tell us about your project and let's figure out how to bring your vision to life. We typically respond within 24 hours.
              </p>
            </div>

            {/* Info blocks */}
            <div className="space-y-4">
              {[
                { icon: "msg", label: "Response Time", value: "Within 24 hours" },
                { icon: "rocket", label: "Project Start", value: "As fast as 1 week" },
                { icon: "shield", label: "NDA Available", value: "Fully confidential" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded border border-[#0A1525] bg-[#060C14]/50 reveal"
                  style={{ transitionDelay: `${(i + 1) * 0.1}s` }}
                >
                  <span className="text-[#0A84FF]">
                    {item.icon === "msg" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>}
                    {item.icon === "rocket" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>}
                    {item.icon === "shield" && <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>}
                  </span>
                  <div>
                    <div className="text-xs font-mono text-[#8899AA] tracking-widest uppercase">{item.label}</div>
                    <div className="text-sm font-display font-semibold text-white">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pillars */}
            <div className="mt-12 p-6 rounded border border-[#0A84FF]/20 bg-[#0A84FF]/5 reveal">
              <p className="text-xs font-mono text-[#0A84FF] tracking-widest uppercase mb-3">Our Promise</p>
              <div className="grid grid-cols-3 gap-4 text-center">
                {["Smart Solutions", "Research & Labs", "Cutting-Edge Tech"].map((p) => (
                  <div key={p}>
                    <div className="text-[10px] font-mono tracking-wide text-[#8899AA] uppercase leading-relaxed">{p}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            <div className="sol-card rounded p-8 clip-corner-lg glow-border">
              {status === "sent" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#0A84FF]/15 border border-[#0A84FF]/40 flex items-center justify-center text-3xl mx-auto mb-6 animate-pulse-blue">
                    ✓
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">Message Sent!</h3>
                  <p className="text-[#8899AA] text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-[#8899AA] tracking-widest uppercase mb-2">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full bg-[#020408] border border-[#0A1525] focus:border-[#0A84FF] rounded px-4 py-3 text-sm text-white font-body placeholder-[#8899AA]/50 outline-none transition-colors duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-[#8899AA] tracking-widest uppercase mb-2">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full bg-[#020408] border border-[#0A1525] focus:border-[#0A84FF] rounded px-4 py-3 text-sm text-white font-body placeholder-[#8899AA]/50 outline-none transition-colors duration-300"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8899AA] tracking-widest uppercase mb-2">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-[#020408] border border-[#0A1525] focus:border-[#0A84FF] rounded px-4 py-3 text-sm text-white font-body outline-none transition-colors duration-300"
                    >
                      <option value="" className="bg-[#020408]">Select a service</option>
                      <option className="bg-[#020408]">Mobile App</option>
                      <option className="bg-[#020408]">Web App</option>
                      <option className="bg-[#020408]">Website</option>
                      <option className="bg-[#020408]">Windows App</option>
                      <option className="bg-[#020408]">Integrations</option>
                      <option className="bg-[#020408]">AI Solutions</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[#8899AA] tracking-widest uppercase mb-2">Project Details</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your project, goals, and timeline..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full bg-[#020408] border border-[#0A1525] focus:border-[#0A84FF] rounded px-4 py-3 text-sm text-white font-body placeholder-[#8899AA]/50 outline-none transition-colors duration-300 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="sol-btn-primary w-full py-4 rounded text-sm relative overflow-hidden"
                  >
                    {status === "sending" ? (
                      <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
