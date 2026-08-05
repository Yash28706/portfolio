export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  image: string;
  demoUrl: string;
  githubUrl: string;
  features: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'tools';
  level: number;
  iconColor: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  techUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  highlights: string[];
}

export interface CertificateItem {
  title: string;
  issuer: string;
  date: string;
  badgeColor: string;
  verifyUrl: string;
}

export interface AchievementItem {
  label: string;
  value: number;
  suffix: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: 'Kurmapu Yaswanth',
  alias: 'Yash',
  roleTitles: [
    'MERN Stack Developer',
    'Frontend Engineer',
    'React Developer',
    'Java Developer',
    'DSA Enthusiast',
    'Open Source Learner',
  ],
  bio: "I'm a passionate MERN Stack Developer specializing in React, JavaScript, HTML, CSS, and Spring Boot. I enjoy building beautiful web applications, solving DSA problems, and continuously learning modern technologies.",
  github: 'https://github.com/Yash28706',
  linkedin: 'https://www.linkedin.com/in/kurmapu-yaswanth-b20281373',
  instagram: 'https://instagram.com/yash_.06.__',
  medium: 'https://medium.com/@Yash28706',
  leetcode: 'https://leetcode.com/u/Yash28706/',
  codechef: 'https://www.codechef.com/users/yash28706',
  email: 'ketchumyash6@gmail.com',
  location: 'India',
};

export const TIMELINE = [
  {
    year: '2021',
    title: 'Started Diploma',
    description: 'Enrolled in Computer Science Engineering Diploma, mastering core programming, data structures, and computer fundamentals.',
  },
  {
    year: '2023',
    title: 'Data Specialist Internship',
    description: 'Joined Apex Solutions LTD, verifying 1000+ government records with high accuracy and precision.',
  },
  {
    year: '2024',
    title: 'Joined B.Tech CSE',
    description: 'Admitted to B.Tech Computer Science Engineering to deepen knowledge in algorithms, software engineering, and web development.',
  },
  {
    year: 'Current',
    title: 'Learning MERN Stack',
    description: 'Building full-stack web applications using React 19, Next.js, Node.js, Express, MongoDB, and Three.js.',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'frontend', level: 92, iconColor: '#61DAFB' },
  { name: 'Next.js', category: 'frontend', level: 88, iconColor: '#FFFFFF' },
  { name: 'JavaScript', category: 'languages', level: 90, iconColor: '#F7DF1E' },
  { name: 'TypeScript', category: 'languages', level: 85, iconColor: '#3178C6' },
  { name: 'HTML5', category: 'frontend', level: 95, iconColor: '#E34F26' },
  { name: 'CSS3', category: 'frontend', level: 92, iconColor: '#1572B6' },
  { name: 'Tailwind CSS', category: 'frontend', level: 90, iconColor: '#38B2AC' },
  { name: 'Bootstrap', category: 'frontend', level: 82, iconColor: '#7952B3' },
  { name: 'Java', category: 'languages', level: 86, iconColor: '#ED8B00' },
  { name: 'Spring Boot', category: 'backend', level: 78, iconColor: '#6DB33F' },
  { name: 'Node.js', category: 'backend', level: 85, iconColor: '#339933' },
  { name: 'Express.js', category: 'backend', level: 84, iconColor: '#E0E0E0' },
  { name: 'MongoDB', category: 'backend', level: 82, iconColor: '#47A248' },
  { name: 'Git', category: 'tools', level: 88, iconColor: '#F05032' },
  { name: 'GitHub', category: 'tools', level: 90, iconColor: '#FFFFFF' },
];

export const PROJECTS: Project[] = [
  {
    id: 'ai-service-marketplace',
    title: 'AI Driven Service Marketplace',
    description: 'AI-powered platform connecting clients with specialized freelancers using intelligent matching algorithms.',
    longDescription: 'An end-to-end full-stack marketplace integrating AI recommendations, real-time client-freelancer messaging, automated proposal scoring, and secure payment processing.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com/Yash28706',
    githubUrl: 'https://github.com/Yash28706',
    features: ['AI Proposal Scoring', 'Real-Time Chat', 'Smart Skill Matching', 'Stripe Payment Gateway'],
  },
  {
    id: 'amazon-clone',
    title: 'Amazon Clone Platform',
    description: 'Feature-complete e-commerce application with product catalog, cart, user checkout, and order history.',
    longDescription: 'A modern e-commerce web app replicating Amazon UI/UX with state management, stripe checkout simulation, authentication, and responsive grid layouts.',
    tags: ['React', 'Context API', 'Firebase', 'Tailwind CSS', 'Stripe API'],
    image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com/Yash28706',
    githubUrl: 'https://github.com/Yash28706',
    features: ['Authentication', 'Shopping Cart State', 'Simulated Checkout', 'Product Filtering'],
  },
  {
    id: '3d-portfolio',
    title: '3D Cyberpunk Developer Portfolio',
    description: 'Award-winning interactive 3D web experience built with Three.js, React Three Fiber, and Framer Motion.',
    longDescription: 'A cutting-edge developer workspace featuring a 3D animated room, floating skill spheres, glassmorphic UI cards, terminal CLI mode, and AI assistant.',
    tags: ['React 19', 'Three.js', 'R3F', 'Tailwind CSS', 'GSAP', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com/Yash28706',
    githubUrl: 'https://github.com/Yash28706/Yash28706',
    features: ['3D Interactive Room', 'Command Palette', 'CLI Terminal Mode', 'AI Chat Assistant'],
  },
  {
    id: 'dbt-awareness',
    title: 'DBT Awareness Application',
    description: 'Government scholarship verification and Aadhaar seeding awareness portal for students in India.',
    longDescription: 'A unified digital platform educating SC/ST scholarship applicants, featuring Aadhaar seeding checkers, complaint tracking, and regional AI support.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com/Yash28706/aadhar-seeded-dbt',
    githubUrl: 'https://github.com/Yash28706/aadhar-seeded-dbt',
    features: ['Aadhaar Status Verification', 'Multilingual Assistance', 'OCR Scanner', 'Admin Dashboard'],
  },
  {
    id: 'sql-employee-database',
    title: 'SQL Employee Management System',
    description: 'Backend CLI and web database manager for tracking departments, roles, and employee records.',
    longDescription: 'Robust relational database architecture implementing complex SQL joins, stored procedures, audit logs, and RESTful API endpoints.',
    tags: ['Java', 'Spring Boot', 'MySQL', 'Postgres', 'REST API'],
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com/Yash28706',
    githubUrl: 'https://github.com/Yash28706',
    features: ['Relational Schema', 'Stored Procedures', 'Role Access Control', 'Automated Reports'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Apex Solutions LTD',
    role: 'Data Specialist',
    period: '2023 - 2024',
    description: 'Verified and validated over 1000+ handwritten and digital records for high-stakes documentation projects.',
    bullets: [
      'Verified and validated over 1000+ handwritten records with 99.8% precision.',
      'Ensured high accuracy data transcription and schema consistency.',
      'Supported government documentation tasks and administrative verification workflows.',
      'Collaborated with cross-functional teams to streamline digital audit pipelines.',
    ],
    techUsed: ['Excel', 'SQL', 'Data Audit Pipelines', 'Validation Suite'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'B.Tech University',
    period: '2024 - Present',
    score: 'Pursuing (CSE)',
    highlights: ['Specializing in Software Engineering & Cloud Architectures', 'Active Open Source & Coding Club Leader'],
  },
  {
    degree: 'Diploma in Computer Science Engineering',
    institution: 'State Polytechnic Institute',
    period: '2021 - 2023',
    score: 'First Class with Distinction',
    highlights: ['Core Data Structures & Algorithms', 'Web Development Fundamentals'],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: '2023',
    badgeColor: '#4285F4',
    verifyUrl: 'https://coursera.org',
  },
  {
    title: 'Prompt Engineering & Generative AI Mastery',
    issuer: 'DeepLearning.AI',
    date: '2024',
    badgeColor: '#FF4D9D',
    verifyUrl: 'https://coursera.org',
  },
  {
    title: 'Python for Data Science & AI',
    issuer: 'IBM',
    date: '2023',
    badgeColor: '#052FAD',
    verifyUrl: 'https://coursera.org',
  },
  {
    title: 'Generative AI Fundamentals',
    issuer: 'Microsoft / LinkedIn',
    date: '2024',
    badgeColor: '#00F5FF',
    verifyUrl: 'https://linkedin.com',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { label: 'Projects Completed', value: 15, suffix: '+', description: 'Full-stack & 3D Web Apps' },
  { label: 'GitHub Repositories', value: 25, suffix: '+', description: 'Open-source contributions' },
  { label: 'Certificates Earned', value: 8, suffix: '+', description: 'Google, IBM & Microsoft' },
  { label: 'Coding Problems Solved', value: 450, suffix: '+', description: 'LeetCode & CodeChef' },
];
