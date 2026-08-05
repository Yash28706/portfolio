import React from 'react';
import { FloatingSkillsCanvas } from '../3d/FloatingSkillsCanvas';
import { SKILLS } from '../../data/portfolioData';
import { Cpu, Code, Database, Wrench } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono">
          <Cpu className="w-3.5 h-3.5" /> TECH MATRIX
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-100">
          Skills & <span className="text-gradient-pink">3D Spheres</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Interactive 3D Skill Orbs coupled with progress matrix across full-stack development.
        </p>
      </div>

      {/* 3D Floating Skill Orbs Canvas */}
      <FloatingSkillsCanvas />

      {/* Grid of Animated Progress Rings */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
        {/* Frontend Group */}
        <div className="glass-panel p-6 rounded-2xl border border-cyan-500/20 space-y-4">
          <h3 className="font-heading font-bold text-sm text-cyan-400 flex items-center gap-2">
            <Code className="w-4 h-4" /> Frontend Technologies
          </h3>
          <div className="space-y-3">
            {SKILLS.filter((s) => s.category === 'frontend').map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#00F5FF] to-[#6C63FF] transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Group */}
        <div className="glass-panel p-6 rounded-2xl border border-pink-500/20 space-y-4">
          <h3 className="font-heading font-bold text-sm text-pink-400 flex items-center gap-2">
            <Database className="w-4 h-4" /> Backend & Databases
          </h3>
          <div className="space-y-3">
            {SKILLS.filter((s) => s.category === 'backend').map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="text-pink-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#FF4D9D] to-[#6C63FF] transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages Group */}
        <div className="glass-panel p-6 rounded-2xl border border-purple-500/20 space-y-4">
          <h3 className="font-heading font-bold text-sm text-purple-400 flex items-center gap-2">
            <Cpu className="w-4 h-4" /> Core Languages
          </h3>
          <div className="space-y-3">
            {SKILLS.filter((s) => s.category === 'languages').map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="text-purple-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#6C63FF] to-[#00F5FF] transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tools & DevOps */}
        <div className="glass-panel p-6 rounded-2xl border border-emerald-500/20 space-y-4">
          <h3 className="font-heading font-bold text-sm text-emerald-400 flex items-center gap-2">
            <Wrench className="w-4 h-4" /> Tools & DevOps
          </h3>
          <div className="space-y-3">
            {SKILLS.filter((s) => s.category === 'tools').map((skill) => (
              <div key={skill.name} className="space-y-1">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-200">{skill.name}</span>
                  <span className="text-emerald-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#22C55E] to-[#00F5FF] transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
