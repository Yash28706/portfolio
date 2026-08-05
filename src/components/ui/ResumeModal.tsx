import React from 'react';
import { X, Download, Mail, Phone, Linkedin, Github, ExternalLink, Award, Briefcase, GraduationCap, Code2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCE, EDUCATION, PROJECTS, CERTIFICATES } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    const textContent = `
================================================================================
                              KURMAPU YASWANTH
Email: ketchumyash6@gmail.com | Phone: 9347391803 | LinkedIn: kurmapu-yaswanth | GitHub: yaswanth
================================================================================

PROFESSIONAL SUMMARY
--------------------------------------------------------------------------------
B.Tech Computer Science student skilled in Java, React, and MySQL. To secure a 
challenging position as a Full Stack Developer with a strong foundation in 
programming, data structures and problem solving. Seeking an opportunity to 
contribute to a dynamic development team, enhance my technical skills, gain 
hands-on experience in building efficient software solutions.

ACADEMICS
--------------------------------------------------------------------------------
• B.Tech in Computer Science & Engineering | CGPA: 8.2/10 | Expected 2027
  GMR Institute of Technology, Rajam
• Diploma in Engineering | 87% | 2024
  M.B.T.S. Govt. Polytechnic, Guntur
• SSC | 100% | 2024
  Visakha High School, Srikakulam

EXPERIENCE
--------------------------------------------------------------------------------
Apex Solutions Limited, Guntur — Data Specialist Intern (ECOR), On-Site (June-Nov 2023)
• Verified and validated 1,000+ handwritten data records for the 22245 project, 
  ensuring high accuracy and consistency in XML field submissions.
• Performed error correction and quality checks by comparing entered data with 
  source document images.
• Identified and reported data-entry mistakes to team members during final-stage validation.
• Maintained data quality standards and handled responsibility for final batch 
  verification before submission.

PROJECTS
--------------------------------------------------------------------------------
1. DBTConnect | Unified Digital Awareness Platform (Sept-Dec 2025)
   • Built a responsive full-stack web application enabling citizens to understand 
     Aadhaar seeding and Direct Benefit Transfer (DBT) through interactive verification 
     tools, AI chatbot support, and grievance services.
   • Developed secure backend services with Express.js, JWT, RBAC, and Prisma ORM, 
     protecting authentication and authorization across multiple REST endpoints.
   • Integrated analytics dashboards, OCR simulation, and automated grievance letter generation.

2. AI Based Food Nutrition Estimation System (Jan–May 2026)
   • Built an AI-powered application to estimate food nutrition from images using 
     computer vision and deep learning.
   • Integrated image and ingredient features using Visual-Ingredient Feature Fusion (VIF²).
   • Optimized model performance through preprocessing, feature extraction, and evaluation.

CERTIFICATIONS
--------------------------------------------------------------------------------
• Web Development — L&T EduTech (Jan 2026)
• Python Essentials — Coursera (Dec 2024)
• Prompt Engineering for ChatGPT — Coursera (Dec 2024)
• Introduction to Generative AI — Coursera (Nov 2024)

TECHNICAL SKILLS
--------------------------------------------------------------------------------
• Core Skills: HTML5, CSS3, JavaScript, MongoDB, Express, React, NodeJS, SQL, Operating Systems
• Additional Skills: Python, Data Structures & Algorithms, C, Java, DBMS
• Tools & Platforms: MySQL, Git/GitHub, VS Code, Anti-Gravity
• Soft Skills: Problem-solving, teamwork, and attention to detail

ACADEMIC ACHIEVEMENTS
--------------------------------------------------------------------------------
• Practiced and solved 100+ coding problems on platforms like CodeChef, HackerRank, 
  and GeeksforGeeks in Java, strengthening problem-solving and DSA skills.
• Led a 2-member volunteer team in delivering digital literacy sessions covering 
  MS Office and MS Excel to 25+ underprivileged students.
================================================================================
`;

    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Kurmapu_Yaswanth_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md">
      <div className="w-full max-w-4xl h-[90vh] glass-panel rounded-2xl border border-cyan-500/30 flex flex-col overflow-hidden shadow-2xl">
        {/* Header Toolbar */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 cursor-pointer" onClick={onClose}></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="font-mono text-xs text-cyan-400 font-bold ml-2 hidden sm:inline">
              Kurmapu_Yaswanth_Resume.pdf
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-[#00F5FF] via-[#6C63FF] to-[#FF4D9D] text-[#050816] font-bold text-xs shadow-cyber-neon hover:scale-105 transition-all"
            >
              <Download className="w-4 h-4" /> Download Resume
            </button>
            <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-slate-100 bg-slate-800">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Paper Document Preview Container */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto bg-slate-950/95 font-sans">
          <div className="max-w-3xl mx-auto bg-[#0a0f1d] text-slate-100 p-8 sm:p-12 rounded-xl border border-slate-800 shadow-2xl space-y-6">
            
            {/* RESUME HEADER */}
            <div className="text-center border-b border-slate-800 pb-6 space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading text-slate-100">
                Kurmapu Yaswanth
              </h1>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-cyan-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-pink-400" /> ketchumyash6@gmail.com
                </span>
                <span>|</span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" /> 9347391803
                </span>
                <span>|</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" /> kurmapu-yaswanth
                </a>
                <span>|</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                  <Github className="w-3.5 h-3.5 text-slate-200" /> yaswanth
                </a>
              </div>
            </div>

            {/* PROFESSIONAL SUMMARY */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                B.Tech Computer Science student skilled in Java, React, and MySQL. To secure a challenging position as a Full Stack Developer with a strong foundation in programming, data structures and problem solving. Seeking an opportunity to contribute to a dynamic development team, enhance my technical skills, gain hands-on experience in building efficient software solutions.
              </p>
            </div>

            {/* ACADEMICS */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1">
                Academics
              </h2>
              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-100">B.Tech in Computer Science & Engineering</h3>
                    <p className="text-slate-400 text-xs italic">GMR Institute of Technology, Rajam</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="text-emerald-400 font-bold">CGPA: 8.2/10</span>
                    <span className="text-slate-400 font-bold ml-2">| 2027</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-100">Diploma in Engineering</h3>
                    <p className="text-slate-400 text-xs italic">M.B.T.S. Govt. Polytechnic, Guntur</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="text-emerald-400 font-bold">87%</span>
                    <span className="text-slate-400 font-bold ml-2">| 2024</span>
                  </div>
                </div>

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-100">SSC</h3>
                    <p className="text-slate-400 text-xs italic">Visakha High School, Srikakulam</p>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="text-emerald-400 font-bold">100%</span>
                    <span className="text-slate-400 font-bold ml-2">| 2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* EXPERIENCE */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold font-mono text-pink-400 uppercase tracking-widest border-b border-pink-500/30 pb-1">
                Experience
              </h2>
              <div className="space-y-2 text-xs sm:text-sm">
                <div className="flex flex-wrap justify-between items-baseline">
                  <h3 className="font-bold text-slate-100">
                    Apex Solutions Limited, Guntur. <span className="text-pink-400 font-medium">Data Specialist Intern (ECOR), On-Site</span>
                  </h3>
                  <span className="font-mono text-xs text-slate-400">(June-Nov 2023)</span>
                </div>
                <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-300">
                  <li>Verified and validated 1,000+ handwritten data records for the 22245 project, ensuring high accuracy and consistency in XML field submissions.</li>
                  <li>Performed error correction and quality checks by comparing entered data with source document images.</li>
                  <li>Identified and reported data-entry mistakes to team members during final-stage validation.</li>
                  <li>Maintained data quality standards and handled responsibility for final batch verification before submission.</li>
                </ul>
              </div>
            </div>

            {/* PROJECTS */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold font-mono text-purple-400 uppercase tracking-widest border-b border-purple-500/30 pb-1">
                Projects
              </h2>
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-cyan-300">
                      DBTConnect | Unified Digital Awareness Platform
                    </h3>
                    <span className="font-mono text-xs text-slate-400">(Sept-Dec 2025)</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-300">
                    <li>Built a responsive full-stack web application enabling citizens to understand Aadhaar seeding and Direct Benefit Transfer (DBT) through interactive verification tools, AI chatbot support, and grievance services.</li>
                    <li>Developed secure backend services with <strong>Express.js, JWT, RBAC, and Prisma ORM</strong>, protecting authentication and authorization across multiple REST endpoints.</li>
                    <li>Integrated analytics dashboards, OCR simulation, and automated grievance letter generation, reducing manual verification efforts and improving accessibility for scholarship applicants.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-pink-300">
                      AI Based Food Nutrition Estimation System
                    </h3>
                    <span className="font-mono text-xs text-slate-400">(Jan–May 2026)</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-300">
                    <li>Built an AI-powered application to estimate food nutrition from images using computer vision and deep learning.</li>
                    <li>Integrated image and ingredient features using the Visual-Ingredient Feature Fusion (VIF²) approach for enhanced prediction accuracy.</li>
                    <li>Optimized model performance through preprocessing, feature extraction, and evaluation.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div className="space-y-3">
              <h2 className="text-sm font-bold font-mono text-emerald-400 uppercase tracking-widest border-b border-emerald-500/30 pb-1">
                Certifications
              </h2>
              <div className="grid sm:grid-cols-2 gap-2 text-xs font-mono">
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-200">Web development</span>
                  <span className="text-cyan-400">L&T EduTech, Jan 2026</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-200">Python Essentials</span>
                  <span className="text-cyan-400">Coursera, Dec 2024</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-200">Prompt Engineering for ChatGPT</span>
                  <span className="text-pink-400">Coursera, Dec 2024</span>
                </div>
                <div className="flex justify-between p-2 rounded bg-slate-900 border border-slate-800">
                  <span className="text-slate-200">Introduction to Generative AI</span>
                  <span className="text-purple-400">Coursera, Nov 2024</span>
                </div>
              </div>
            </div>

            {/* TECHNICAL SKILLS */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold font-mono text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-1">
                Technical Skills
              </h2>
              <div className="space-y-1 text-xs text-slate-300">
                <p><strong className="text-slate-100">Core skills:</strong> HTML5, CSS3, JavaScript, MongoDB, Express, React, NodeJS, SQL, Operating systems.</p>
                <p><strong className="text-slate-100">Additional Skills:</strong> Python, Data Structures & Algorithms, C, Java, DBMS.</p>
                <p><strong className="text-slate-100">Tools & Platforms:</strong> MySQL, Git/GitHub, VS Code, Anti-Gravity.</p>
                <p><strong className="text-slate-100">Soft skills:</strong> Problem-solving, teamwork and attention to detail.</p>
              </div>
            </div>

            {/* ACADEMIC ACHIEVEMENTS */}
            <div className="space-y-2">
              <h2 className="text-sm font-bold font-mono text-pink-400 uppercase tracking-widest border-b border-pink-500/30 pb-1">
                Academic Achievements
              </h2>
              <ul className="list-disc list-outside ml-4 space-y-1 text-xs text-slate-300">
                <li>Practiced and solved 100+ coding problems on platforms like CodeChef, HackerRank, and GeeksforGeeks in Java, strengthening problem-solving and DSA skills.</li>
                <li>Led a 2-member volunteer team in delivering digital literacy sessions covering MS Office and MS Excel to 25+ underprivileged students.</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
