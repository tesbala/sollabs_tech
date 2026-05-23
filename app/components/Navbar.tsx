"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const links = ["Services", "Portfolio", "Tech Stack", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (link: string) => {
    const id = link.toLowerCase().replace(" ", "-");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#020408]/95 backdrop-blur-xl border-b border-[#0A1525]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* Logo image from public/logo.png */}
          <div className="relative w-9 h-9">
            <Image
              src="/logo.png"
              alt="SolLabs Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div>
            <span className="font-display font-bold text-lg tracking-widest text-white">
              SOL<span className="sol-blue-text">LABS</span>
            </span>
            <div className="text-[9px] tracking-[0.3em] text-[#8899AA] font-mono -mt-0.5">TECH</div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="text-sm font-display font-medium tracking-widest text-[#8899AA] hover:text-white transition-colors duration-200 uppercase relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#0A84FF] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => handleNav("Contact")}
            className="sol-btn-primary px-5 py-2.5 text-xs rounded clip-corner"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
          <span className={`block h-0.5 bg-[#0A84FF] transition-all duration-300 ${menuOpen ? "opacity-0 w-0" : "w-4"}`} />
          <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mobile-menu-enter bg-[#020408]/98 backdrop-blur-xl border-t border-[#0A1525] px-6 py-8 space-y-6">
          {links.map((link) => (
            <button
              key={link}
              onClick={() => handleNav(link)}
              className="block w-full text-left text-lg font-display font-semibold tracking-widest text-[#C8D6E5] hover:text-white hover:sol-blue-text uppercase"
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => handleNav("Contact")}
            className="sol-btn-primary w-full py-3 text-sm rounded mt-4"
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}