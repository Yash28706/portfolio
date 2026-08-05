import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Github, GitCommit, GitFork, Star, Users, ExternalLink } from 'lucide-react';

export const GithubStats: React.FC = () => {
  return (
    <section id="github" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Github className="w-3.5 h-3.5" /> GITHUB MATRIX
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-100">
          Open Source <span className="text-gradient-cyan">Analytics</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Live commit activity, top language breakdown, and repository stats for user <span className="font-mono text-cyan-400">@Yash28706</span>.
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8">
        {/* GitHub Stats Card */}
        <div className="lg:col-span-6 glass-panel p-6 rounded-3xl border border-cyan-500/20 shadow-cyber-neon space-y-6 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-cyan-400">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-slate-100 text-base">Kurmapu Yaswanth</h3>
                <span className="text-xs font-mono text-cyan-400">@Yash28706</span>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
            >
              <span>Follow</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-slate-400">Total Commits</span>
              <div className="text-2xl font-bold font-mono text-cyan-400">550+</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-slate-400">Public Repos</span>
              <div className="text-2xl font-bold font-mono text-pink-400">25+</div>
            </div>
          </div>

          {/* GitHub Stats Card Widget */}
          <div className="flex justify-center pt-2">
            <img
              src="https://github-readme-stats.vercel.app/api?username=Yash28706&show_icons=true&theme=tokyonight&hide_border=true"
              alt="Yash28706 Stats"
              className="rounded-xl w-full max-w-md shadow-lg"
            />
          </div>
        </div>

        {/* Top Languages & Contribution Streak */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          <div className="glass-panel p-6 rounded-3xl border border-pink-500/20 shadow-cyber-pink flex justify-center">
            <img
              src="https://github-readme-streak-stats.herokuapp.com/?user=Yash28706&theme=tokyonight&hide_border=true"
              alt="Yash28706 Streak"
              className="rounded-xl w-full max-w-md shadow-lg"
            />
          </div>

          <div className="glass-panel p-6 rounded-3xl border border-purple-500/20 flex justify-center">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=Yash28706&layout=compact&theme=tokyonight&hide_border=true"
              alt="Yash28706 Top Languages"
              className="rounded-xl w-full max-w-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
