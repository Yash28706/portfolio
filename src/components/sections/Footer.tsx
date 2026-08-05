import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Rocket, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 pt-16 pb-12 overflow-hidden bg-[#030612] border-t border-slate-800">
      {/* 3D Wave Banner Header */}
      <div className="w-full overflow-hidden leading-none mb-12 opacity-80">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#00F5FF"
            fillOpacity="0.15"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Side Info */}
        <div className="space-y-2 text-center md:text-left">
          <div className="font-heading font-extrabold text-xl text-slate-100 flex items-center justify-center md:justify-start gap-2">
            <span>{PERSONAL_INFO.name}</span>
            <span className="text-xs font-mono text-cyan-400">({PERSONAL_INFO.alias})</span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            Senior Full-Stack MERN Developer & 3D Web Architect based in India.
          </p>
        </div>

        {/* Center Social Links */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
            title="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-400 transition-all"
            title="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Right Side Rocket Back To Top */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#6C63FF] text-[#050816] font-bold text-xs shadow-cyber-neon hover:scale-110 transition-all group"
            title="Back to Top"
          >
            <span>Launch to Top</span>
            <Rocket className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-900 text-center text-xs font-mono text-slate-500 flex items-center justify-center gap-1">
        <span>Designed & Crafted with</span>
        <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500 inline animate-pulse" />
        <span>by {PERSONAL_INFO.name} © {new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
