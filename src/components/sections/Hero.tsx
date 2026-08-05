import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { DeveloperRoomScene } from '../3d/DeveloperRoom';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowRight, Download, Mail, Github, Linkedin, Code2, ExternalLink, Sparkles, Terminal } from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = PERSONAL_INFO.roleTitles;
    const fullText = roles[roleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 40 : 90);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* 3D Developer Room Canvas Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 1.2, 5.2], fov: 48 }}>
          <DeveloperRoomScene />
        </Canvas>
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid lg:grid-cols-12 gap-8 items-center pointer-events-none">
        <div className="lg:col-span-7 space-y-6 pointer-events-auto">
          {/* Cyber Status Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00F5FF]/10 border border-[#00F5FF]/30 text-cyan-400 text-xs font-mono backdrop-blur-md shadow-cyber-neon">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>AVAILABLE FOR HIRE & FULL-STACK ROLES</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="text-xl sm:text-2xl font-mono text-pink-400 tracking-wide">
              Hi, I'm
            </h2>
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-slate-100 font-heading">
              <span className="text-gradient-cyan">{PERSONAL_INFO.name}</span>
            </h1>
          </div>

          {/* Typing Title */}
          <div className="h-12 flex items-center text-xl sm:text-3xl font-semibold font-mono text-cyan-300">
            <span className="text-pink-500 mr-2">&gt;</span>
            <span>{currentText}</span>
            <span className="animate-pulse text-[#00F5FF] font-bold">|</span>
          </div>

          {/* Subtitle Bio */}
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed glass-panel p-4 rounded-xl border border-slate-800">
            Specializing in building scalable MERN stack web applications, sleek 3D web interfaces, and high-performance developer tools.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00F5FF] via-[#6C63FF] to-[#FF4D9D] text-[#050816] font-bold text-sm shadow-cyber-neon hover:scale-105 transition-all"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel border border-[#00F5FF]/40 text-cyan-300 font-semibold text-sm hover:bg-[#00F5FF]/10 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl glass-panel border border-pink-500/40 text-pink-400 font-semibold text-sm hover:bg-pink-500/10 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Hire Me</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
            <span className="text-xs font-mono text-slate-400">CONNECT:</span>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-pink-400 transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-yellow-400 hover:border-yellow-400 transition-all font-mono text-xs font-bold"
              title="LeetCode"
            >
              LC
            </a>
            <a
              href={PERSONAL_INFO.codechef}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-amber-500 hover:border-amber-500 transition-all font-mono text-xs font-bold"
              title="CodeChef"
            >
              CC
            </a>
          </div>
        </div>

        {/* Right side floating controls hint */}
        <div className="lg:col-span-5 hidden lg:flex flex-col items-end gap-4 pointer-events-auto">
          <div className="glass-panel p-5 rounded-2xl border border-cyan-500/20 max-w-xs space-y-3 shadow-cyber-neon">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Sparkles className="w-4 h-4" /> 3D INTERACTIVE WORKSPACE
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Rotate the room using your mouse or drag directly on the screen. Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-pink-400 font-mono text-[10px] border border-slate-700">/</kbd> to launch the CLI terminal.
            </p>
            <button
              onClick={onOpenTerminal}
              className="w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs font-mono hover:bg-cyan-400 hover:text-slate-950 transition-colors"
            >
              <Terminal className="w-3.5 h-3.5" /> Launch Cyber CLI
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
