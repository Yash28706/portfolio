import React, { useState, useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { Navbar } from './components/ui/Navbar';
import { CustomCursor } from './components/ui/CustomCursor';
import { CommandPalette } from './components/ui/CommandPalette';
import { TerminalModal } from './components/ui/TerminalModal';
import { AiChatAssistant } from './components/ui/AiChatAssistant';
import { ResumeModal } from './components/ui/ResumeModal';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Certificates } from './components/sections/Certificates';
import { Achievements } from './components/sections/Achievements';
import { GithubStats } from './components/sections/GithubStats';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';

export function App() {
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Global '/' key listener to open Terminal
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !terminalOpen && !commandPaletteOpen) {
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setTerminalOpen(true);
        }
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);

    return () => {
      lenis.destroy();
      window.removeEventListener('keydown', handleGlobalKeyDown);
    };
  }, [terminalOpen, commandPaletteOpen]);

  // Audio Synthesizer toggle
  const toggleAudio = () => {
    setAudioPlaying(!audioPlaying);
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 overflow-x-hidden selection:bg-[#00F5FF]/30 selection:text-[#00F5FF]">
      {/* Animated Glowing Custom Cursor */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
        onOpenAiChat={() => setAiChatOpen(true)}
        audioPlaying={audioPlaying}
        onToggleAudio={toggleAudio}
      />

      {/* Main Page Sections */}
      <main className="space-y-12">
        <Hero
          onOpenResume={() => setResumeOpen(true)}
          onOpenTerminal={() => setTerminalOpen(true)}
        />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certificates />
        <Achievements />
        <GithubStats />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <TerminalModal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenTerminal={() => setTerminalOpen(true)}
        onOpenResume={() => setResumeOpen(true)}
      />
      <AiChatAssistant isOpen={aiChatOpen} onClose={() => setAiChatOpen(false)} />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}

export default App;
