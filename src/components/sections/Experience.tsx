import React from 'react';
import { EXPERIENCE } from '../../data/portfolioData';
import { Briefcase, Calendar, CheckCircle, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" /> PROFESSIONAL EXPERIENCE
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-100">
          Work & <span className="text-gradient-cyan">Industry Roles</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Delivering high-accuracy data operations and web engineering excellence.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {EXPERIENCE.map((exp, idx) => (
          <div
            key={idx}
            className="glass-panel p-8 rounded-3xl border border-purple-500/30 shadow-cyber-neon space-y-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-widest">
                  {exp.company}
                </span>
                <h3 className="text-2xl font-bold font-heading text-slate-100 mt-1">
                  {exp.role}
                </h3>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-pink-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.period}</span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              {exp.description}
            </p>

            {/* Accomplishments list */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Key Impact & Deliverables
              </h4>
              <ul className="grid md:grid-cols-2 gap-3 text-xs text-slate-300">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
              {exp.techUsed.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-xs font-mono text-purple-300">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
