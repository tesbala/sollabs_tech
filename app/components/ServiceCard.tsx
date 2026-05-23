"use client";

const icons: Record<string, React.ReactNode> = {
  "📱": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#0A84FF]">
      <rect x="5" y="2" width="14" height="20" rx="2"/>
      <circle cx="12" cy="17" r="1"/>
    </svg>
  ),
  "🌐": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#0A84FF]">
      <circle cx="12" cy="12" r="10"/>
      <path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/>
    </svg>
  ),
  "⚡": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#0A84FF]">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  "🖥️": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#0A84FF]">
      <rect x="2" y="3" width="20" height="14" rx="2"/>
      <path d="M8 21h8M12 17v4"/>
    </svg>
  ),
  "🔗": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#0A84FF]">
      <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"/>
      <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"/>
    </svg>
  ),
  "🧠": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#0A84FF]">
      <path d="M9.5 2A2.5 2.5 0 017 4.5v1A2.5 2.5 0 014.5 8h-1a2.5 2.5 0 000 5h1A2.5 2.5 0 017 15.5v1a2.5 2.5 0 002.5 2.5"/>
      <path d="M14.5 2A2.5 2.5 0 0117 4.5v1A2.5 2.5 0 0119.5 8h1a2.5 2.5 0 010 5h-1a2.5 2.5 0 00-2.5 2.5v1a2.5 2.5 0 01-2.5 2.5"/>
      <line x1="12" y1="2" x2="12" y2="22"/>
    </svg>
  ),
};

interface ServiceCardProps {
  icon: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  index: number;
}

export default function ServiceCard({ icon, title, tagline, description, tags, index }: ServiceCardProps) {
  return (
    <div
      className="sol-card rounded p-6 clip-corner group cursor-default reveal"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-[#0A84FF] opacity-0 group-hover:opacity-60 transition-all duration-500" />

      {/* Icon */}
      <div className="w-12 h-12 rounded flex items-center justify-center mb-5 bg-[#0A84FF]/10 border border-[#0A84FF]/20 group-hover:border-[#0A84FF]/50 group-hover:bg-[#0A84FF]/15 transition-all duration-300">
        {icons[icon] ?? <span className="text-[#0A84FF] text-lg font-bold">S</span>}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-lg text-white mb-1 tracking-wide group-hover:text-[#38B6FF] transition-colors duration-300">
        {title}
      </h3>

      {/* Tagline */}
      <p className="text-xs font-mono text-[#0A84FF] tracking-widest mb-3 uppercase">
        {tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-[#8899AA] leading-relaxed mb-5">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0A1525] text-[#8899AA] border border-[#0A84FF]/10 group-hover:border-[#0A84FF]/25 transition-all duration-300 tracking-wider uppercase"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Arrow */}
      <div className="mt-5 flex items-center gap-2 text-xs font-mono text-transparent group-hover:text-[#0A84FF] transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
        <span>Explore</span>
        <span>→</span>
      </div>
    </div>
  );
}
