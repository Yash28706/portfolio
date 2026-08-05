import React, { useState, useEffect } from 'react';
import { Search, Code, User, Briefcase, Award, Github, FileText, Terminal, X } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenTerminal,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open command palette
          // handled by parent listener
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { name: 'Go to Hero Section', category: 'Navigation', icon: User, action: () => (window.location.hash = '#hero') },
    { name: 'Go to About Me', category: 'Navigation', icon: User, action: () => (window.location.hash = '#about') },
    { name: 'View 3D Skill Orbs', category: 'Navigation', icon: Code, action: () => (window.location.hash = '#skills') },
    { name: 'Explore Projects', category: 'Navigation', icon: Briefcase, action: () => (window.location.hash = '#projects') },
    { name: 'View Experience & Work', category: 'Navigation', icon: Briefcase, action: () => (window.location.hash = '#experience') },
    { name: 'View Certificates', category: 'Navigation', icon: Award, action: () => (window.location.hash = '#certificates') },
    { name: 'GitHub Profile & Stats', category: 'Social', icon: Github, action: () => window.open(PERSONAL_INFO.github, '_blank') },
    { name: 'Launch CLI Terminal Mode', category: 'System', icon: Terminal, action: () => { onClose(); onOpenTerminal(); } },
    { name: 'Download / View Resume', category: 'System', icon: FileText, action: () => { onClose(); onOpenResume(); } },
  ];

  const filteredActions = actions.filter((a) =>
    a.name.toLowerCase().includes(query.toLowerCase()) || a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-slate-950/80 backdrop-blur-md">
      <div className="w-full max-w-xl glass-panel rounded-2xl border border-cyan-500/30 overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Search Header */}
        <div className="flex items-center px-4 py-3 border-b border-slate-800 bg-slate-900/60">
          <Search className="w-5 h-5 text-cyan-400 mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search section..."
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 focus:outline-none text-sm font-mono"
            autoFocus
          />
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-slate-100">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-slate-500 text-xs font-mono">No matching commands found.</div>
          ) : (
            filteredActions.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <button
                  key={idx}
                  onClick={() => {
                    item.action();
                    onClose();
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-cyan-500/15 hover:border hover:border-cyan-400/30 text-left group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-800 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-200 group-hover:text-cyan-300">
                        {item.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">{item.category}</div>
                    </div>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">Select ↵</span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex justify-between">
          <span>Navigation: <kbd className="text-cyan-400">Ctrl + K</kbd></span>
          <span>Close: <kbd className="text-pink-400">ESC</kbd></span>
        </div>
      </div>
    </div>
  );
};
