import React from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Briefcase, ExternalLink, Github, Sparkles, Layers } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
          <Briefcase className="w-3.5 h-3.5" /> FEATURED CREATIONS
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-100">
          3D & Full-Stack <span className="text-gradient-cyan">Projects</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Explore cutting-edge applications built with modern web technologies, AI integrations, and 3D graphics.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="group glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-400/50 transition-all duration-300 flex flex-col h-full"
          >
            {/* Laptop Mockup Image Header */}
            <div className="relative h-52 w-full overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent"></div>

              {/* Hover Badge */}
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#050816]/80 backdrop-blur-md border border-cyan-400/40 text-[10px] font-mono text-cyan-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-pink-400" /> Featured
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <h3 className="font-heading font-bold text-xl text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features Pill */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {project.features.map((feat, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-[10px] text-slate-300 font-mono"
                    >
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Tags */}
              <div className="space-y-4 pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono text-cyan-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Live Demo & GitHub Action Buttons */}
                <div className="flex items-center justify-between gap-3 pt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#6C63FF] text-[#050816] font-bold text-xs hover:shadow-cyber-neon transition-all"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
                    title="View Source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
