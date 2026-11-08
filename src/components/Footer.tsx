import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-amber-500/15 bg-obsidian-950/80 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Monogram & Info */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400">
              VS
            </div>
            <div>
              <span className="font-bold text-white text-sm block font-sans">
                {PROFILE.name}
              </span>
              <span className="text-[10px] text-slate-400">
                Co-Founder & ML/R&D Lead • PRISMATIX4 • Rotractor
              </span>
            </div>
          </div>

          {/* Nav Anchors */}
          <div className="flex items-center gap-6 text-slate-400">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Systems</a>
            <a href="#leadership" className="hover:text-amber-400 transition-colors">Collective</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-amber-500/40 text-slate-400 hover:text-amber-300 transition-all flex items-center gap-1.5"
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={14} />
          </button>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
          <span>© {new Date().getFullYear()} Vivina S. Engineered under PRISMATIX4.</span>
          <span className="flex items-center gap-1 text-slate-400">
            Researched with <Heart size={12} className="text-amber-400" /> for humane machine intelligence
          </span>
        </div>
      </div>
    </footer>
  );
};