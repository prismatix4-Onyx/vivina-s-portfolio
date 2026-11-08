import React from 'react';
import { Bot, Mic, Compass, HeartHandshake, BrainCircuit } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const About: React.FC = () => {
  const tenets = [
    {
      icon: Mic,
      title: "Duplex Low-Latency Conversational Pipelines",
      description:
        "Real human conversation does not tolerate multi-second waiting pauses. I architect voice streaming loops that pair chunked Whisper STT with neural vocoders to achieve natural sub-300ms speech-to-speech turnaround.",
      accent: "text-amber-400 border-amber-500/30 bg-amber-500/10",
    },
    {
      icon: BrainCircuit,
      title: "Context-Aware Agentic Reasoning",
      description:
        "Beyond generic chat completions, autonomous AI agents require structured reasoning: dynamic context compression, deterministic function calling, and vector memory retrieval that accurately remembers human priorities.",
      accent: "text-orange-400 border-orange-500/30 bg-orange-500/10",
    },
    {
      icon: Bot,
      title: "Applied AI Research with Real-World Utility",
      description:
        "Machine Learning must solve real human challenges: predictive fall detection for elderly care, intelligent circuit diagnostic hints for engineering students, and adaptive schedule forecasting that minimizes cognitive fatigue.",
      accent: "text-amber-300 border-amber-500/30 bg-amber-500/10",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-400 mb-3">
            <Compass size={13} />
            <span>// 01. RESEARCH & ENGINEERING PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Advancing Real-Time Machine Intelligence & Autonomous Voice Systems
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </div>

        {/* Narrative & Rotractor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Biography Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-5 text-slate-300 font-sans leading-relaxed border border-amber-500/20">
              <h3 className="text-xl font-bold text-white font-sans flex items-center gap-2.5">
                <BrainCircuit size={18} className="text-amber-400" />
                <span>The Research &amp; Intelligence Vision</span>
              </h3>
              
              <p>
                As Co-Founder and ML/R&D Lead at <strong className="text-white">PRISMATIX4</strong>, I focus on transforming theoretical machine learning into proactive, real-time software systems that interact naturally with people.
              </p>
              
              <p>
                In <strong className="text-white">SARA</strong>, I spearheaded the duplex voice intelligence pipeline—combining streaming speech recognition (Whisper STT), context vector retrieval, and low-latency neural speech synthesis to hold conversational phone check-ins under 300ms. In <strong className="text-white">SNAP</strong>, I researched sensor anomaly detection for fall prevention, and in <strong className="text-white">Student Space</strong>, I modeled predictive GPA trajectories.
              </p>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 mt-4">
                <p className="text-xs font-mono text-amber-300 italic">
                  "{PROFILE.philosophy}"
                </p>
              </div>
            </div>

            {/* Rotractor Community Leadership Banner */}
            <div className="glass-panel rounded-2xl p-6 border border-orange-500/30 bg-orange-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 shrink-0">
                  <HeartHandshake size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base font-sans">
                    Rotractor & Community Service Leader
                  </h4>
                  <p className="text-xs text-slate-400 font-sans mt-0.5">
                    Committed to social impact through technology, community youth development, ethical AI advocacy, and leadership initiatives.
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 shrink-0">
                ACTIVE ROTRACTOR
              </span>
            </div>
          </div>

          {/* 3 Engineering Tenets (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-4">
            {tenets.map((tenet, idx) => {
              const Icon = tenet.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/35 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl border ${tenet.accent}`}>
                      <Icon size={18} />
                    </div>
                    <h4 className="text-base font-bold text-white font-sans">
                      {tenet.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {tenet.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};