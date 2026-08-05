import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, MessageSquare, User, AtSign, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // Simulate / Trigger EmailJS send
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSent(false), 6000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-400 text-xs font-mono">
          <Mail className="w-3.5 h-3.5" /> GET IN TOUCH
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-100">
          Let's Build <span className="text-gradient-pink">Together</span>
        </h2>
        <p className="text-slate-400 text-sm max-w-xl mx-auto">
          Have an exciting project, open source idea, or full-stack opportunity? Drop me a message!
        </p>
      </div>

      <div className="grid lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Left Side Info Card */}
        <div className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-pink-500/30 shadow-cyber-pink space-y-8">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold font-heading text-slate-100 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-pink-400" /> Start a Conversation
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              I'm always open to discussing new web apps, 3D graphics projects, or technical collaborations.
            </p>
          </div>

          <div className="space-y-4 text-xs font-mono">
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-pink-500/10 text-pink-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">DIRECT EMAIL</span>
                <p className="text-slate-200 font-bold text-xs">{PERSONAL_INFO.email}</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400">
                <User className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">LINKEDIN</span>
                <p className="text-slate-200 font-bold text-xs">kurmapu-yaswanth-b20281373</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400">
                <AtSign className="w-4 h-4" />
              </div>
              <div>
                <span className="text-slate-400 text-[10px]">INSTAGRAM</span>
                <p className="text-slate-200 font-bold text-xs">@yash_.06.__</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="lg:col-span-7 glass-panel p-8 rounded-3xl border border-cyan-500/30 shadow-cyber-neon relative">
          {sent ? (
            <div className="py-16 text-center space-y-4 animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-slate-100">Message Dispatched!</h3>
              <p className="text-xs text-slate-400 max-w-md mx-auto">
                Thank you for reaching out. Your transmission has been received; I will respond as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Kurmapu Yaswanth"
                    className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                    <AtSign className="w-3.5 h-3.5" /> Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yash@example.com"
                    className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" /> Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Full-Stack Role / Project Inquiry"
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-cyan-300 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5" /> Message Body
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or offer..."
                  className="w-full bg-slate-900/80 border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#00F5FF] via-[#6C63FF] to-[#FF4D9D] text-[#050816] font-bold text-sm shadow-cyber-neon hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Send Transmission</span>
                    <Send className="w-4 h-4 animate-pulse" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
