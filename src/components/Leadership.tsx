import React from 'react';
import { 
  Users2, 
  ExternalLink, 
  Cpu, 
  Network, 
  Server, 
  Layers, 
  Globe2 
} from 'lucide-react';
import { PRISMATIX4_INFO } from '../data/portfolioData';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 relative overflow-hidden bg-obsidian-950/60">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-400 mb-3">
            <Users2 size={13} />
            <span>// 04. COLLECTIVE ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Co-Founder of PRISMATIX4
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            {PRISMATIX4_INFO.statement}
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </div>

        {/* Collective Architecture Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* 4 Nodes Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Node 1: Vivina S */}
            <div className="glass-panel rounded-2xl p-5 border border-amber-500/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 px-2.5 py-0.5 rounded-bl-xl bg-amber-500/20 border-l border-b border-amber-500/30 text-[10px] font-mono text-amber-300 font-bold">
                CO-FOUNDER / ML &amp; R&amp;D
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-4">
                <Cpu size={20} />
              </div>
              <h3 className="text-base font-bold text-white font-sans">Vivina S</h3>
              <p className="text-xs font-mono text-amber-400 mb-2">ML &amp; R&amp;D Lead</p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Applied neural networks, duplex voice pipelines (STT/TTS), predictive agent workflows, and Rotractor.
              </p>
            </div>

            {/* Node 2: Systems & Architecture (Sanjay S) */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-4">
                <Network size={20} />
              </div>
              <h3 className="text-base font-bold text-white font-sans">Sanjay S</h3>
              <p className="text-xs font-mono text-purple-400 mb-2">Founder & Systems Architect</p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Autonomous voice loops, WebRTC signaling mesh, WebAssembly virtualization, and cross-discipline integration.
              </p>
            </div>

            {/* Node 3: Distributed Backend (Prithic P) */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 group">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 mb-4">
                <Server size={20} />
              </div>
              <h3 className="text-base font-bold text-white font-sans">Prithic P</h3>
              <p className="text-xs font-mono text-sky-400 mb-2">Co-Founder & Backend Lead</p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                NestJS microservices, ACID transaction reliability in PostgreSQL/Prisma, task queues, and Google Student Ambassador.
              </p>
            </div>

            {/* Node 4: Mobile & Frontend (Vasundara Devi G) */}
            <div className="glass-panel rounded-2xl p-5 border border-white/10 group">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <Layers size={20} />
              </div>
              <h3 className="text-base font-bold text-white font-sans">Vasundara Devi G</h3>
              <p className="text-xs font-mono text-emerald-400 mb-2">Co-Founder & Frontend Lead</p>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Accessibility-first senior interfaces, multilingual localization, reactive Flutter clients, and design token hierarchies.
              </p>
            </div>

          </div>

          {/* Collective Mission Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Globe2 size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-white font-sans text-lg">
                    The PRISMATIX4 Node Topology
                  </h3>
                  <p className="text-xs font-mono text-amber-400">Collaborative Engineering</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                In PRISMATIX4, research is not confined to isolated notebooks. We take experimental neural algorithms and embed them straight into production applications—enabling proactive telephone check-ins, automated fall detection, and intelligent circuit diagnostics.
              </p>

              <div className="p-4 rounded-xl bg-obsidian-950/80 border border-white/10 font-mono text-xs space-y-2 mb-6">
                <div className="flex justify-between text-slate-400">
                  <span>Topology:</span>
                  <span className="text-amber-300">4-Node Mesh</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>ML &amp; R&amp;D Lead Node:</span>
                  <span className="text-white">Vivina S</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Intelligence Status:</span>
                  <span className="text-emerald-400">Active Production</span>
                </div>
              </div>
            </div>

            <a
              href={PRISMATIX4_INFO.hubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-mono text-xs font-semibold text-amber-300 bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 transition-all w-full"
            >
              <span>Explore PRISMATIX4 Platform Hub</span>
              <ExternalLink size={14} />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};