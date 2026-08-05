import React, { useState, useEffect, useRef } from 'react';
import { Terminal, X, Minimize2, Maximize2 } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS } from '../../data/portfolioData';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const TerminalModal: React.FC<TerminalModalProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-cyan-400">
          <p className="font-bold text-pink-400">⚡ Kurmapu Yaswanth (Yash) Cyber Terminal v2.5.0</p>
          <p className="text-xs text-slate-400 mt-1">
            Type <span className="text-yellow-400 font-bold">help</span> to list available commands.
          </p>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        response = (
          <div className="space-y-1 text-slate-300">
            <p><span className="text-cyan-400 font-bold">about</span> - Display developer bio & roles</p>
            <p><span className="text-cyan-400 font-bold">skills</span> - List tech stack & proficiencies</p>
            <p><span className="text-cyan-400 font-bold">projects</span> - View featured 3D & full-stack projects</p>
            <p><span className="text-cyan-400 font-bold">contact</span> - Show email, LinkedIn, and social handles</p>
            <p><span className="text-cyan-400 font-bold">clear</span> - Clear terminal output history</p>
            <p><span className="text-cyan-400 font-bold">sudo</span> - Run with superuser privileges 🚀</p>
            <p><span className="text-cyan-400 font-bold">exit</span> - Close terminal window</p>
          </div>
        );
        break;

      case 'about':
        response = (
          <div className="text-slate-300 leading-relaxed">
            <p className="text-cyan-400 font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.alias})</p>
            <p className="text-xs text-pink-400 mb-2">MERN Stack Developer & Frontend Engineer</p>
            <p className="text-xs">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'skills':
        response = (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
            {SKILLS.map((s) => (
              <div key={s.name} className="flex justify-between border-b border-slate-800 pb-1">
                <span className="text-cyan-300 font-medium">{s.name}</span>
                <span className="text-slate-500">{s.level}%</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-2 text-xs">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="p-2 rounded bg-slate-900/80 border border-slate-800">
                <span className="text-pink-400 font-bold">[{i + 1}] {p.title}</span>
                <p className="text-slate-400">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs">
            <p>📧 Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>💼 LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.linkedin}</a></p>
            <p>📸 Instagram: <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="text-pink-400 underline">@yash_.06.__</a></p>
            <p>🐙 GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-cyan-400 underline">{PERSONAL_INFO.github}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      case 'sudo':
        response = (
          <div className="text-emerald-400 font-bold">
            🚀 Access Granted! You are now operating with ROOT privilege in Yash's Cyber Matrix.
          </div>
        );
        break;

      case 'exit':
        onClose();
        return;

      default:
        if (cmd !== '') {
          response = (
            <div className="text-red-400">
              Command not recognized: '<span className="font-bold">{cmd}</span>'. Type '<span className="text-yellow-400">help</span>' for available commands.
            </div>
          );
        }
        break;
    }

    setHistory((prev) => [...prev, { command: input, output: response }]);
    setInput('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-2xl h-[480px] glass-panel rounded-2xl border border-cyan-500/30 flex flex-col overflow-hidden shadow-2xl">
        {/* Terminal Header */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="ml-2 font-mono text-xs text-cyan-400 flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" /> yash@cyber-workspace:~
            </span>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-100">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Content Window */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-4 bg-[#050816]/90">
          {history.map((item, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-pink-500 font-bold">➜</span>
                <span className="text-emerald-400 font-bold">yash@matrix</span>
                <span className="text-slate-400">$</span>
                <span className="text-slate-100">{item.command}</span>
              </div>
              {item.output && <div className="pl-4">{item.output}</div>}
            </div>
          ))}

          {/* Prompt Form */}
          <form onSubmit={handleCommand} className="flex items-center gap-2 pt-2">
            <span className="text-pink-500 font-bold">➜</span>
            <span className="text-emerald-400 font-bold">yash@matrix</span>
            <span className="text-slate-400">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-cyan-300 focus:outline-none font-mono"
              autoFocus
            />
          </form>
          <div ref={bottomRef} />
        </div>
      </div>
    </div>
  );
};
