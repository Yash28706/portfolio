import React, { useState } from 'react';
import { Bot, Send, X, Sparkles, User, Cpu } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, PROJECTS } from '../../data/portfolioData';

interface Message {
  sender: 'ai' | 'user';
  text: string;
}

interface AiChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AiChatAssistant: React.FC<AiChatAssistantProps> = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'ai',
      text: "👋 Hi! I'm Yash's AI Assistant. Ask me anything about Yaswanth's skills, projects, experience, or tech stack!",
    },
  ]);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userText = input.trim();
    const newMessages: Message[] = [...messages, { sender: 'user', text: userText }];
    setMessages(newMessages);
    setInput('');

    // Generate intelligent AI response based on query keywords
    setTimeout(() => {
      let reply = "Yaswanth is a highly skilled MERN Stack & Frontend Engineer passionate about building scalable, 3D interactive web applications!";
      const q = userText.toLowerCase();

      if (q.includes('skill') || q.includes('tech') || q.includes('stack')) {
        reply = `Yaswanth specializes in React 19, Next.js, TypeScript, Node.js, Express, MongoDB, Tailwind CSS, Three.js, and Java Spring Boot.`;
      } else if (q.includes('project') || q.includes('work') || q.includes('app')) {
        reply = `Yaswanth has built projects like the AI Driven Service Marketplace, Amazon Clone, 3D Cyberpunk Portfolio, DBT Awareness Application, and SQL Employee Management System!`;
      } else if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('linkedin')) {
        reply = `You can email Yaswanth directly at ${PERSONAL_INFO.email} or connect on LinkedIn: ${PERSONAL_INFO.linkedin}`;
      } else if (q.includes('experience') || q.includes('job') || q.includes('apex')) {
        reply = `Yaswanth worked as a Data Specialist at Apex Solutions LTD, verifying and auditing over 1000+ records with 99.8% precision.`;
      } else if (q.includes('education') || q.includes('btech') || q.includes('diploma')) {
        reply = `Yaswanth completed his Diploma in CSE and is currently pursuing B.Tech in Computer Science & Engineering.`;
      }

      setMessages((prev) => [...prev, { sender: 'ai', text: reply }]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm glass-panel rounded-2xl border border-[#FF4D9D]/30 shadow-cyber-pink overflow-hidden flex flex-col h-[460px] animate-in slide-in-from-bottom-5 duration-300">
      {/* Header */}
      <div className="px-4 py-3 bg-gradient-to-r from-[#6C63FF]/30 to-[#FF4D9D]/30 border-b border-pink-500/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400">
            <Bot className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-xs text-slate-100 flex items-center gap-1">
              Yash AI Copilot <Sparkles className="w-3 h-3 text-pink-400" />
            </h3>
            <span className="text-[10px] text-emerald-400 font-mono">● Online & Ready</span>
          </div>
        </div>
        <button onClick={onClose} className="text-slate-400 hover:text-slate-100">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Messages Window */}
      <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-[#050816]/90 text-xs">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {m.sender === 'ai' && (
              <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 shrink-0">
                <Bot className="w-3.5 h-3.5" />
              </div>
            )}
            <div
              className={`max-w-[80%] p-3 rounded-2xl ${
                m.sender === 'user'
                  ? 'bg-gradient-to-r from-[#00F5FF] to-[#6C63FF] text-[#050816] font-medium rounded-br-none'
                  : 'bg-slate-900 border border-slate-800 text-slate-200 rounded-bl-none'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSend} className="p-3 border-t border-slate-800 bg-slate-950 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask AI about Yaswanth..."
          className="flex-1 bg-slate-900 text-slate-100 text-xs rounded-xl px-3 py-2 border border-slate-800 focus:outline-none focus:border-pink-500"
        />
        <button
          type="submit"
          className="p-2 rounded-xl bg-gradient-to-r from-[#FF4D9D] to-[#6C63FF] text-white hover:scale-105 transition-transform"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
