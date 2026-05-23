"use client";

const footerLinks = {
  Services: ["Mobile App", "Web App", "Website", "Windows App", "Integrations", "AI Solutions"],
  Company: ["About Us", "Portfolio", "Tech Stack", "Testimonials", "Blog", "Careers"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "NDA"],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-[#0A1525] py-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#0A84FF]/3 blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-9 h-9">
                <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <polygon points="6,2 30,2 30,14 18,14 18,22 30,22 30,34 6,34 6,22 18,22 18,14 6,14" fill="url(#sGradF)" />
                  <defs>
                    <linearGradient id="sGradF" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#38B6FF"/>
                      <stop offset="60%" stopColor="#0A84FF"/>
                      <stop offset="100%" stopColor="#C8D6E5"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg tracking-widest text-white">SOL<span className="sol-blue-text">LABS</span></span>
                <div className="text-[9px] tracking-[0.3em] text-[#8899AA] font-mono -mt-0.5">TECH</div>
              </div>
            </div>
            <p className="text-sm text-[#8899AA] leading-relaxed mb-6 max-w-xs">
              Building powerful digital solutions that drive business growth and innovation.
            </p>
            <div className="flex items-center gap-1 text-xs font-mono text-[#8899AA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0A84FF] animate-pulse" />
              <span className="ml-1">Available for new projects</span>
            </div>

            {/* Socials */}
            <div className="flex gap-3 mt-6">
              {["𝕏", "in", "GH", "BE"].map((icon) => (
                <button
                  key={icon}
                  className="w-8 h-8 rounded border border-[#0A1525] bg-[#060C14] hover:border-[#0A84FF]/40 hover:text-[#0A84FF] text-[#8899AA] text-xs font-mono flex items-center justify-center transition-all duration-300"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-mono tracking-widest text-[#0A84FF] uppercase mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#8899AA] hover:text-white transition-colors duration-200 font-body"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="sol-divider mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#8899AA] tracking-wider">
            © {new Date().getFullYear()} SolLabs Tech. All rights reserved.
          </p>
          <p className="text-xs font-mono text-[#8899AA]">
            SOLUTIONS + LABS + TECHNOLOGY ={" "}
            <span className="text-[#0A84FF]">SOLLABS TECH</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
