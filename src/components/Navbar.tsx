import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, ExternalLink, HeartHandshake } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '// 01. About', href: '#about' },
    { name: '// 02. Skills', href: '#skills' },
    { name: '// 03. Systems', href: '#projects' },
    { name: '// 04. Collective', href: '#leadership' },
    { name: '// 05. Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#080704]/85 backdrop-blur-md border-b border-amber-500/20 py-3 shadow-lg shadow-amber-950/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Monogram */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono font-bold text-amber-400 group-hover:bg-amber-500/20 group-hover:border-amber-400 transition-all">
              VS
            </div>
            <div className="flex flex-col">
              <span className="font-bold font-sans text-sm tracking-wide text-white group-hover:text-amber-300 transition-colors">
                {PROFILE.name}
              </span>
              <span className="font-mono text-[10px] text-amber-400/80">
                ML / R&D Lead @ PRISMATIX4
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-xs text-slate-300 hover:text-amber-400 transition-colors tracking-wider"
              >
                {link.name}
              </a>
            ))}

            {/* Rotractor Honor Pill */}
            <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[11px] font-mono text-amber-300">
              <HeartHandshake size={12} className="text-amber-400" />
              <span>Rotractor</span>
            </div>

            {/* External Collective Link */}
            <a
              href={PROFILE.links.prismatix4}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-amber-400 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400 transition-all"
            >
              <Cpu size={13} />
              <span>PRISMATIX4</span>
              <ExternalLink size={12} />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#120F08]/95 backdrop-blur-xl border border-amber-500/25 flex flex-col gap-3 shadow-2xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-mono text-xs text-slate-200 hover:text-amber-400 py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 flex items-center justify-between">
              <span className="text-[11px] font-mono text-amber-400">Rotractor & ML Lead</span>
              <a
                href={PROFILE.links.prismatix4}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-amber-400 flex items-center gap-1"
              >
                PRISMATIX4 <ExternalLink size={12} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};