import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2, Award, Briefcase, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, EDUCATION } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate text/markdown resume download or trigger print
    const element = document.createElement("a");
    const file = new Blob([
      `KURMAPU YASWANTH (YASH) - RESUME\nEmail: ${PERSONAL_INFO.email}\nLinkedIn: ${PERSONAL_INFO.linkedin}\nGitHub: ${PERSONAL_INFO.github}\n\nSUMMARY:\n${PERSONAL_INFO.bio}\n\nSKILLS:\n${SKILLS.map(s => s.name).join(', ')}\n\nEXPERIENCE:\n${EXPERIENCE.map(e => `${e.role} at ${e.company} (${e.period})\n- ${e.description}`).join('\n')}\n`
    ], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "Kurmapu_Yaswanth_Resume.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="w-full max-w-3xl h-[85vh] glass-panel rounded-2xl border border-cyan-500/30 flex flex-col overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-base text-slate-100">
                {PERSONAL_INFO.name} — Curriculum Vitae
              </h2>
              <p className="text-xs text-slate-400 font-mono">Full-Stack MERN & 3D Web Developer</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F5FF] to-[#6C63FF] text-[#050816] font-bold text-xs hover:scale-105 transition-all shadow-cyber-neon"
            >
              <Download className="w-4 h-4" /> Download Resume
            </button>
            <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-100 bg-slate-800">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="flex-1 p-6 overflow-y-auto space-y-6 text-sm text-slate-300 font-sans bg-[#050816]/90">
          {/* Header Info */}
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-2">
            <h3 className="text-xl font-bold text-cyan-400">{PERSONAL_INFO.name}</h3>
            <p className="text-xs text-pink-400 font-mono">
              {PERSONAL_INFO.roleTitles.join(' • ')}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed pt-2">{PERSONAL_INFO.bio}</p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-cyan-300">
              <span>📧 {PERSONAL_INFO.email}</span>
              <span>💼 LinkedIn: {PERSONAL_INFO.linkedin}</span>
              <span>🐙 GitHub: {PERSONAL_INFO.github}</span>
            </div>
          </div>

          {/* Experience Section */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-base text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Briefcase className="w-4 h-4 text-pink-400" /> Work Experience
            </h4>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-cyan-400">{exp.role}</h5>
                    <span className="text-xs text-slate-400">{exp.company}</span>
                  </div>
                  <span className="text-xs font-mono text-pink-400 bg-pink-500/10 px-2 py-1 rounded">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-300 space-y-1 pt-1">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-base text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" /> Education
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-1">
                  <span className="text-xs font-mono text-cyan-400">{edu.period}</span>
                  <h5 className="font-bold text-slate-100">{edu.degree}</h5>
                  <p className="text-xs text-slate-400">{edu.institution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-base text-slate-100 flex items-center gap-2 border-b border-slate-800 pb-2">
              <Award className="w-4 h-4 text-emerald-400" /> Tech Stack & Competencies
            </h4>
            <div className="flex flex-wrap gap-2">
              {SKILLS.map((s) => (
                <span
                  key={s.name}
                  className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300"
                >
                  {s.name} ({s.level}%)
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
