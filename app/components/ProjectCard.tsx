"use client";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  result: string;
  metric: string;
  tags: string[];
  color: string;
  index: number;
}

export default function ProjectCard({ title, category, description, result, metric, tags, index }: ProjectCardProps) {
  return (
    <div
      className="sol-card rounded p-6 group cursor-default reveal relative overflow-hidden"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(rgba(10,132,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(10,132,255,0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      {/* Category badge */}
      <div className="flex items-center justify-between mb-5 relative z-10">
        <span className="text-[10px] font-mono tracking-widest text-[#0A84FF] uppercase px-3 py-1 rounded-full border border-[#0A84FF]/25 bg-[#0A84FF]/5">
          {category}
        </span>
        <div className="text-sm font-display font-bold text-[#38B6FF]">
          {result}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-xl text-white mb-2 relative z-10 group-hover:text-[#38B6FF] transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#8899AA] leading-relaxed mb-4 relative z-10">
        {description}
      </p>

      {/* Metric */}
      <div className="flex items-center gap-2 mb-5 relative z-10">
        <span className="w-2 h-2 rounded-full bg-[#0A84FF] animate-pulse" />
        <span className="text-xs font-mono text-[#C8D6E5] tracking-wide">{metric}</span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 relative z-10">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono px-2.5 py-1 rounded bg-[#0A1525] text-[#8899AA] border border-[#0A84FF]/10 tracking-wider"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-[#0A84FF]/50 transition-all duration-700" />
    </div>
  );
}
