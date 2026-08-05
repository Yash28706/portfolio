import React from 'react';
import { PERSONAL_INFO, TIMELINE } from '../../data/portfolioData';
import { User, Code2, Sparkles, CheckCircle2, Calendar, Award } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <User className="w-3.5 h-3.5" /> ABOUT ME
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-100">
          Architecting <span className="text-gradient-cyan">Digital Experiences</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto font-sans">
          Blending modern frontend engineering with interactive 3D web design and robust backend algorithms.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Animated Glass Card with JSON Spec */}
        <div className="lg:col-span-6 glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-cyber-neon space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <span className="ml-2 font-mono text-xs text-slate-400">developer_spec.json</span>
            </div>
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
          </div>

          <div className="font-mono text-xs leading-relaxed text-slate-300 space-y-2 bg-[#050816]/90 p-4 rounded-2xl border border-slate-800">
            <p><span className="text-pink-400">const</span> <span className="text-cyan-300">developer</span> = &#123;</p>
            <p className="pl-4"><span className="text-purple-400">name</span>: <span className="text-emerald-400">"{PERSONAL_INFO.name}"</span>,</p>
            <p className="pl-4"><span className="text-purple-400">alias</span>: <span className="text-emerald-400">"{PERSONAL_INFO.alias}"</span>,</p>
            <p className="pl-4"><span className="text-purple-400">location</span>: <span className="text-emerald-400">"{PERSONAL_INFO.location}"</span>,</p>
            <p className="pl-4"><span className="text-purple-400">specialization</span>: <span className="text-emerald-400">"MERN Stack & 3D Web Architect"</span>,</p>
            <p className="pl-4"><span className="text-purple-400">passions</span>: [<span className="text-yellow-300">"React 19"</span>, <span className="text-yellow-300">"Three.js"</span>, <span className="text-yellow-300">"DSA"</span>, <span className="text-yellow-300">"Spring Boot"</span>],</p>
            <p className="pl-4"><span className="text-purple-400">openToWork</span>: <span className="text-pink-400">true</span></p>
            <p>&#125;;</p>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            "{PERSONAL_INFO.bio}"
          </p>

          <div className="grid grid-cols-2 gap-4 pt-2 border-t border-slate-800">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              <div>
                <div className="font-bold text-xs text-slate-100">Clean Architecture</div>
                <div className="text-[10px] text-slate-400">Scalable & Modular</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <Award className="w-5 h-5 text-pink-400" />
              <div>
                <div className="font-bold text-xs text-slate-100">Problem Solver</div>
                <div className="text-[10px] text-slate-400">450+ DSA Solutions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Vertical Timeline */}
        <div className="lg:col-span-6 space-y-6">
          <h3 className="text-xl font-bold font-heading text-slate-100 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" /> Journey Timeline
          </h3>

          <div className="relative pl-6 space-y-8 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#00F5FF] via-[#6C63FF] to-[#FF4D9D]">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[30px] top-1 w-4 h-4 rounded-full bg-[#050816] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all shadow-cyber-neon"></div>

                <div className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-cyan-500/40 transition-all space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      {item.year}
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
