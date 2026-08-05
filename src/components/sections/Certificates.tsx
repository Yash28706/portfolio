import React from 'react';
import { CERTIFICATES } from '../../data/portfolioData';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono">
          <Award className="w-3.5 h-3.5" /> VERIFIED CREDENTIALS
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-100">
          Certificates & <span className="text-gradient-pink">Accreditations</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Industry certified in Data Analytics, Prompt Engineering, Python AI, and Generative AI.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CERTIFICATES.map((cert, idx) => (
          <div
            key={idx}
            className="group glass-card p-6 rounded-3xl border border-slate-800 hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden"
          >
            {/* Top Badge Accent */}
            <div className="flex items-center justify-between">
              <div
                className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg"
                style={{ backgroundColor: cert.badgeColor }}
              >
                <Award className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                {cert.date}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="font-heading font-bold text-base text-slate-100 group-hover:text-pink-300 transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-slate-400 font-mono flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Issued by {cert.issuer}
              </p>
            </div>

            <a
              href={cert.verifyUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between pt-4 border-t border-slate-800/80 text-xs font-mono text-cyan-400 group-hover:text-pink-400 transition-colors"
            >
              <span>Verify Credential</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};
