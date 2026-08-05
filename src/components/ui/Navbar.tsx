import React, { useState, useEffect } from 'react';
import { Terminal, Command, Music, VolumeX, Sparkles, FileText, Menu, X, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
  onOpenAiChat: () => void;
  audioPlaying: boolean;
  onToggleAudio: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenTerminal,
  onOpenCommandPalette,
  onOpenResume,
  onOpenAiChat,
  audioPlaying,
  onToggleAudio,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#050816]/80 backdrop-blur-xl border-b border-[#00F5FF]/15 shadow-cyber-neon'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00F5FF] via-[#6C63FF] to-[#FF4D9D] p-[2px] shadow-cyber-neon transition-transform group-hover:scale-105">
            <div className="w-full h-full bg-[#050816] rounded-[10px] flex items-center justify-center font-bold text-cyan-400 text-lg">
              KY
            </div>
          </div>
          <div>
            <div className="font-heading font-bold text-base text-slate-100 flex items-center gap-1.5">
              <span>Kurmapu Yaswanth</span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            </div>
            <p className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">
              Full-Stack 3D Architect
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-[#00F5FF] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#00F5FF] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons & Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Command Palette Button */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:border-[#00F5FF]/50 hover:text-cyan-400 transition-all text-xs font-mono"
            title="Command Palette (Ctrl + K)"
          >
            <Command className="w-3.5 h-3.5 text-cyan-400" />
            <span>Cmd+K</span>
          </button>

          {/* Terminal Button */}
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:border-[#00F5FF]/50 hover:text-cyan-400 transition-all"
            title="Open CLI Terminal (/)"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
          </button>

          {/* AI Assistant Button */}
          <button
            onClick={onOpenAiChat}
            className="p-2 rounded-lg bg-slate-900/80 border border-slate-700/60 text-slate-300 hover:border-[#FF4D9D]/50 hover:text-pink-400 transition-all"
            title="AI Chat Assistant"
          >
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            onClick={onToggleAudio}
            className={`p-2 rounded-lg border transition-all ${
              audioPlaying
                ? 'bg-cyan-500/20 border-cyan-400 text-cyan-400'
                : 'bg-slate-900/80 border-slate-700/60 text-slate-400 hover:text-slate-200'
            }`}
            title={audioPlaying ? 'Mute Ambient Audio' : 'Play Ambient Cyber Synth'}
          >
            {audioPlaying ? <Music className="w-4 h-4 animate-spin-slow" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Resume CTA Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-[#00F5FF] to-[#6C63FF] text-[#050816] font-bold text-xs hover:shadow-cyber-neon hover:scale-105 transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-cyan-400"
          >
            <Command className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cyan-500/20 px-6 py-6 mt-2 space-y-4">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-200 hover:text-cyan-400 py-1 text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
            <button
              onClick={() => {
                onOpenTerminal();
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 text-xs font-mono text-cyan-400"
            >
              <Terminal className="w-4 h-4" /> CLI Terminal
            </button>
            <button
              onClick={() => {
                onOpenResume();
                setMobileMenuOpen(false);
              }}
              className="px-4 py-2 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              Resume PDF
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
