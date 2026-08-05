import React from 'react';
import { EDUCATION } from '../../data/portfolioData';
import { GraduationCap, Award, Calendar } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <GraduationCap className="w-3.5 h-3.5" /> ACADEMIC BACKGROUND
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-100">
          Education & <span className="text-gradient-cyan">Degrees</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Strong academic foundations in Computer Science & Systems Engineering.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {EDUCATION.map((item, idx) => (
          <div
            key={idx}
            className="group glass-panel p-8 rounded-3xl border border-slate-800 hover:border-emerald-400/50 transition-all duration-300 space-y-6 relative overflow-hidden shadow-cyber-neon"
          >
            {/* Floating Animated Graduation Cap */}
            <div className="absolute top-4 right-4 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:scale-125 transition-transform">
              <GraduationCap className="w-6 h-6 animate-bounce" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {item.period}
              </span>
              <h3 className="text-xl font-bold font-heading text-slate-100 group-hover:text-emerald-300 transition-colors pr-12">
                {item.degree}
              </h3>
              <p className="text-xs text-slate-400">{item.institution}</p>
            </div>

            <div className="inline-block px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-mono text-xs font-bold border border-emerald-500/30">
              Grade: {item.score}
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-800">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                Academic Highlights:
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Award className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
