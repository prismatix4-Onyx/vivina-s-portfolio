import React, { useState, useRef } from 'react';
import { 
  Mail, 
  Send, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Copy, 
  Check, 
  Bot,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { PROFILE } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.links.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      setStatus('error');
      setErrorMessage(
        'EmailJS credentials are not configured yet in .env. Click below to launch your email client directly.'
      );
      return;
    }

    try {
      if (formRef.current) {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus('success');
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#F59E0B', '#FBBF24', '#FDE68A']
        });
        setFormData({ user_name: '', user_email: '', subject: '', message: '' });
      }
    } catch (err: unknown) {
      console.error('Email sending error:', err);
      setStatus('error');
      setErrorMessage('Failed to transmit message. Please send an email directly using the mail client link below.');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-xs font-mono text-amber-400 mb-3">
            <Mail size={13} />
            <span>// 05. CONTACT & DISPATCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-white tracking-tight">
            Connect with Vivina S
          </h2>
          <p className="text-slate-400 text-sm font-sans mt-2 max-w-2xl">
            Available for Machine Learning consultations, voice AI research collaborations, and Rotractor community initiatives.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-transparent mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Links & Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/20 space-y-6">
              <h3 className="text-lg font-bold font-sans text-white flex items-center gap-2">
                <Bot size={18} className="text-amber-400" />
                <span>Direct Communications</span>
              </h3>
              
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Whether you want to explore neural audio pipelines, LLM reasoning loops, or community impact projects, feel free to reach out.
              </p>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-obsidian-950/80 border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Direct Mailbox</span>
                    <span className="text-xs font-mono text-white select-all">{PROFILE.links.email}</span>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-amber-400 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                </button>
              </div>

              {/* Social Profiles Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={PROFILE.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-950/70 border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all flex items-center gap-2.5 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Linkedin size={16} className="text-amber-400" />
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="ml-auto text-slate-500" />
                </a>

                <a
                  href={PROFILE.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-obsidian-950/70 border border-white/10 hover:border-amber-500/40 hover:bg-amber-500/5 transition-all flex items-center gap-2.5 text-xs font-mono text-slate-300 hover:text-white"
                >
                  <Github size={16} className="text-amber-400" />
                  <span>GitHub</span>
                  <ExternalLink size={12} className="ml-auto text-slate-500" />
                </a>
              </div>
            </div>

            {/* Direct Mailto Fallback Action */}
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-300">Prefer desktop mail app?</span>
              <a
                href={`mailto:${PROFILE.links.email}?subject=ML%20Collaboration%20Inquiry`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-amber-300 bg-amber-500/20 hover:bg-amber-500/30 transition-colors"
              >
                <span>Launch Mailto</span>
                <ExternalLink size={12} />
              </a>
            </div>

          </div>

          {/* Right Column: Contact Dispatch Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-amber-500/25 shadow-xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name / Organization *
                    </label>
                    <input
                      type="text"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      placeholder="e.g. Taylor Morgan"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs font-mono transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email Address *
                    </label>
                    <input
                      type="email"
                      name="user_email"
                      required
                      value={formData.user_email}
                      onChange={handleChange}
                      placeholder="e.g. taylor@ai-lab.com"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs font-mono transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Research Scope *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Voice AI Pipeline Research / Rotractor"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message Payload *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe research inquiry, voice AI requirements, or partnership opportunities..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 focus:border-amber-400 focus:outline-none text-white text-xs font-sans transition-colors resize-none"
                  />
                </div>

                {/* Status Messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
                    <ShieldCheck size={16} />
                    <span>Transmission successful. Vivina will review and respond shortly.</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono flex items-start gap-2">
                    <AlertCircle size={16} className="shrink-0 mt-0.5" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3.5 rounded-xl font-sans font-semibold text-sm text-[#080704] bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={15} />
                  <span>{status === 'sending' ? 'Transmitting Dispatch...' : 'Send Message'}</span>
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};