import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Radio, 
  ShieldCheck, 
  RefreshCw, 
  HeartHandshake 
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'whisper' | 'llm' | 'tts'>('whisper');
  const [latency, setLatency] = useState(248);
  const [isInferring, setIsInferring] = useState(false);
  const [tokensPerSec, setTokensPerSec] = useState(84);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(now.toTimeString().split(' ')[0] + ' UTC+05:30');
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const triggerInference = () => {
    setIsInferring(true);
    setTimeout(() => {
      setLatency(Math.floor(Math.random() * 40) + 230);
      setTokensPerSec(Math.floor(Math.random() * 15) + 78);
      setIsInferring(false);
    }, 450);
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background ambient glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-orange-flare/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & CTAs (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Engineering & Rotractor Badges */}
            <div className="flex flex-wrap gap-2.5 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-mono font-semibold text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span>// CO-FOUNDER & ML/R&amp;D LEAD</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-xs font-mono font-semibold text-amber-300">
                <HeartHandshake size={13} className="text-amber-400" />
                <span>ROTACTOR COMMUNITY LEADER</span>
              </div>
            </div>

            {/* Main Punchy Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-white leading-[1.08] mb-4">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-200 glow-amber-text">{PROFILE.name}</span>
            </h1>

            {/* Tagline */}
            <h2 className="text-xl sm:text-2xl font-semibold font-sans text-slate-300 mb-6 leading-snug">
              {PROFILE.tagline}
            </h2>

            {/* Bio Paragraph */}
            <p className="text-base text-slate-400 leading-relaxed max-w-2xl font-sans mb-8">
              {PROFILE.bio}
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full mb-8 pt-4 border-t border-amber-500/15">
              {PROFILE.stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="text-2xl font-bold font-mono text-white tracking-tight flex items-center gap-1">
                    {stat.value}
                  </span>
                  <span className="text-xs font-mono text-slate-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sans font-semibold text-sm text-[#080704] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-lg shadow-amber-500/25 group"
              >
                <span>Explore ML & Research</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-sans font-medium text-sm text-slate-200 bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 hover:border-amber-400 transition-all"
              >
                <span>Initiate Dispatch</span>
              </a>

              <div className="flex items-center gap-2 pt-2 sm:pt-0 sm:ml-2">
                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github size={18} />
                </a>
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/80 border border-white/10 text-slate-300 hover:text-amber-400 hover:border-amber-500/40 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Live Neural & Audio Pipeline Simulator (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl p-6 border border-amber-500/30 shadow-2xl relative overflow-hidden">
              
              {/* Terminal Window Chrome */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-amber-500/20">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-amber-400/90 font-medium">
                    prismatix4.neural.voice-runtime
                  </span>
                </div>
                <div className="flex items-center gap-2 font-mono text-[11px] text-slate-400">
                  <Radio size={12} className="text-amber-400 animate-pulse" />
                  <span>{currentTime || 'RUNNING'}</span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className="flex items-center gap-2 mb-5 bg-[#120F08] p-1 rounded-lg border border-amber-500/20">
                <button
                  onClick={() => setActiveTab('whisper')}
                  className={`flex-1 py-1.5 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'whisper'
                      ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Whisper STT
                </button>
                <button
                  onClick={() => setActiveTab('llm')}
                  className={`flex-1 py-1.5 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'llm'
                      ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Reasoning LLM
                </button>
                <button
                  onClick={() => setActiveTab('tts')}
                  className={`flex-1 py-1.5 text-xs font-mono rounded-md transition-all ${
                    activeTab === 'tts'
                      ? 'bg-amber-500/20 text-amber-300 font-semibold border border-amber-500/30'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  Neural TTS
                </button>
              </div>

              {/* Tab 1: Whisper STT Stream */}
              {activeTab === 'whisper' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">VAD Voice Activity Chunking:</span>
                    <span className="text-amber-300 font-bold">120ms Chunks (Zero Jitter)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Audio Turnaround Latency:</span>
                    <span className="text-emerald-400 font-bold">{latency} ms (nominal)</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Acoustic Sampling Rate:</span>
                    <span className="text-amber-300 font-bold">16 kHz PCM Streaming</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Word Error Rate (WER):</span>
                    <span className="text-emerald-400 font-bold">&lt; 2.8% on Conversational</span>
                  </div>
                </div>
              )}

              {/* Tab 2: Reasoning LLM */}
              {activeTab === 'llm' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Token Generation Velocity:</span>
                    <span className="text-amber-300 font-bold">{tokensPerSec} tokens/sec</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Context Window Pruning:</span>
                    <span className="text-emerald-400 font-bold">Dynamic Compression Active</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Vector Memory Retrieval:</span>
                    <span className="text-amber-300 font-bold">Cosine Sim &gt; 0.88</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Structured Output Validation:</span>
                    <span className="text-emerald-400 font-bold">Pydantic / JSON Schema 100%</span>
                  </div>
                </div>
              )}

              {/* Tab 3: Neural TTS */}
              {activeTab === 'tts' && (
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Neural Vocoder Quality:</span>
                    <span className="text-amber-300 font-bold">24 kHz High-Fidelity Audio</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">First Audio Chunk Latency:</span>
                    <span className="text-emerald-400 font-bold">&lt; 140ms Streaming</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Interruption Detection:</span>
                    <span className="text-amber-300 font-bold">Instant Mute on User Voice</span>
                  </div>
                  <div className="flex justify-between items-center p-3 rounded-xl bg-obsidian-950/70 border border-white/5">
                    <span className="text-slate-400">Prosody Modulation:</span>
                    <span className="text-emerald-400 font-bold">Emotion & Cadence Adaptive</span>
                  </div>
                </div>
              )}

              {/* Benchmark Trigger Button */}
              <div className="mt-5 pt-4 border-t border-amber-500/20 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <ShieldCheck size={14} className="text-emerald-400" />
                  Neural Vocoder Nominal
                </span>
                <button
                  onClick={triggerInference}
                  disabled={isInferring}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-amber-300 bg-amber-500/15 border border-amber-500/30 hover:bg-amber-500/25 transition-all"
                >
                  <RefreshCw size={12} className={isInferring ? 'animate-spin' : ''} />
                  <span>{isInferring ? 'Benchmarking Turnaround...' : 'Run Voice Benchmark'}</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};