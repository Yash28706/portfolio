import React, { useState, useEffect } from 'react';
import { ACHIEVEMENTS } from '../../data/portfolioData';
import { Sparkles, Code2, FolderGit2, Award, Terminal } from 'lucide-react';

export const Achievements: React.FC = () => {
  const icons = [FolderGit2, Code2, Award, Terminal];

  return (
    <section className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-cyan-500/30 shadow-cyber-neon grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {ACHIEVEMENTS.map((item, idx) => {
          const IconComp = icons[idx % icons.length];
          return (
            <div key={idx} className="space-y-3 group">
              <div className="mx-auto w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-all">
                <IconComp className="w-6 h-6" />
              </div>
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-slate-100 flex items-center justify-center">
                <span>{item.value}</span>
                <span className="text-pink-500">{item.suffix}</span>
              </div>
              <div>
                <h4 className="font-bold text-sm text-cyan-300">{item.label}</h4>
                <p className="text-[11px] font-mono text-slate-400 mt-1">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
