import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-lab-ink border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5">
              <img
                src="/images/Design_Play_Labs_logo.png"
                alt="Design Play Labs"
                className="h-16 w-auto"
              />
            </div>
            <p className="font-mono text-sm text-white/40 leading-relaxed max-w-xs">
              An indie board &amp; card game studio treating fun like the serious
              science it deserves to be.
            </p>
          </div>

          {/* Links */}
          <div>
            <span className="font-mono text-sm font-medium text-white/30 tracking-[0.1em] uppercase block mb-4">
              Lab Sections
            </span>
            <div className="flex flex-col gap-3">
              {['About', 'Games', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="font-mono text-sm text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <span className="font-mono text-sm font-medium text-white/30 tracking-[0.1em] uppercase block mb-4">
              Field Notes
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="https://www.instagram.com/designplaylabs"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-white/50 hover:text-white transition-colors duration-200"
              >
                Instagram
              </a>
              <span className="font-mono text-sm text-white/50 hover:text-white transition-colors duration-200 cursor-pointer">
                BoardGameGeek
              </span>
              <span className="font-mono text-sm text-white/50 hover:text-white transition-colors duration-200 cursor-pointer">
                Discord
              </span>
            </div>
          </div>

          {/* Status */}
          <div>
            <span className="font-mono text-sm font-medium text-white/30 tracking-[0.1em] uppercase block mb-4">
              Lab Status
            </span>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="font-mono text-sm text-accent">All Systems Operational</span>
            </div>
            <span className="font-mono text-sm text-white/30 block">
              Experiments running 24/7
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <span className="font-mono text-xs sm:text-sm text-white/25 tracking-wide">
            &copy; 2026 DESIGN PLAY LABS. ALL RIGHTS RESERVED.
          </span>
          <span className="font-mono text-xs sm:text-sm text-white/15 tracking-wider hidden sm:block">
            BUILT WITH OBSESSIVE ATTENTION TO DETAIL
          </span>
        </div>
      </div>
    </footer>
  )
}
