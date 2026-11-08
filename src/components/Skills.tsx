import React, { useState } from 'react';
import { 
  Bot, 
  Mic, 
  BrainCircuit, 
  Search, 
  Cpu, 
  Layers 
} from 'lucide-react';
import { SKILLS, SKILL_CATEGORIES, SkillItem } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredSkills = selectedCategory === 'all'
    ? SKILLS
    : SKILLS.filter(skill => skill.category === selectedCategory);

  const getCategoryIcon = (cat: SkillItem['category']) => {
    switch (cat) {
      case 'ml': return <BrainCircuit size={15} className="text-amber-400" />;
      case 'voice': return <Mic size={15} className="text-orange-400" />;
      case 'nlp': return <Bot size={15} className="text-amber-300" />;
      case 'research': return <Search size={15} className="text-yellow-400" />;
      case 'integration': return <Cpu size={15} className="text-amber-200" />;
      default: return <Layers size={15} className="text-amber-400" />;
    }
  };

  const getLevelBadge = (level: string) => {
    if (level === 'Architect') {
      return (
        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300">
          ARCHITECT
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-orange-500/15 border border-orange-500/30 text-amber-300">
        ADVANCED
      </span>
    );
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-obsidian-950/40">
      {/* Background ambient mesh */}
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-400 mb-3">
            <Bot size={13} />
            <span>// 02. TECHNICAL DISCIPLINE MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Machine Learning, Voice AI & Research Depth
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            Core competencies across deep neural networks, duplex voice pipelines, LLM context reasoning, and applied experimentation.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 mb-10 pb-2">
          {SKILL_CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 ${
                selectedCategory === category.id
                  ? 'bg-amber-500 text-[#080704] font-bold shadow-lg shadow-amber-500/25'
                  : 'bg-obsidian-900 border border-white/10 text-slate-300 hover:border-amber-500/40 hover:text-white'
              }`}
            >
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                      {getCategoryIcon(skill.category)}
                    </div>
                    <h3 className="font-bold text-white text-base font-sans group-hover:text-amber-300 transition-colors">
                      {skill.name}
                    </h3>
                  </div>
                  {getLevelBadge(skill.level)}
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                  {skill.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-md text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};