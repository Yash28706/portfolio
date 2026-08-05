export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
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
  location: string;
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
  phone: '9347391803',
  alias: 'Yash',
  roleTitles: [
    'Full Stack Developer',
    'React & Node.js Engineer',
    'Java & MySQL Developer',
    'DSA & Problem Solving Enthusiast',
  ],
  summary:
    'B.Tech Computer Science student skilled in Java, React, and MySQL. To secure a challenging position as a Full Stack Developer with a strong foundation in programming, data structures and problem solving. Seeking an opportunity to contribute to a dynamic development team, enhance my technical skills, gain hands-on experience in building efficient software solutions.',
  bio:
    'B.Tech Computer Science student skilled in Java, React, and MySQL. To secure a challenging position as a Full Stack Developer with a strong foundation in programming, data structures and problem solving.',
  github: 'https://github.com/Yash28706',
  githubUser: 'yaswanth',
  linkedin: 'https://www.linkedin.com/in/kurmapu-yaswanth-b20281373',
  linkedinUser: 'kurmapu-yaswanth',
  instagram: 'https://instagram.com/yash_.06.__',
  leetcode: 'https://leetcode.com/u/Yash28706/',
  codechef: 'https://www.codechef.com/users/yash28706',
  email: 'ketchumyash6@gmail.com',
  location: 'India',
};

export const TIMELINE = [
  {
    year: '2024',
    title: 'SSC & Diploma in Engineering',
    description: 'Completed SSC at Visakha High School (100%) and Diploma in Engineering at M.B.T.S. Govt. Polytechnic, Guntur (87%).',
  },
  {
    year: '2023',
    title: 'Data Specialist Intern at Apex Solutions',
    description: 'Verified and validated 1,000+ handwritten data records for the 22245 project with high precision XML field submissions.',
  },
  {
    year: '2025',
    title: 'DBTConnect Platform Built',
    description: 'Developed full-stack Aadhaar seeding & DBT verification platform with Express.js, Prisma, JWT, and AI Chatbot.',
  },
  {
    year: '2027 (Expected)',
    title: 'B.Tech CSE at GMR Institute of Technology',
    description: 'Pursuing B.Tech Computer Science & Engineering (CGPA: 8.2/10). Specializing in Full Stack Development & AI.',
  },
];

export const SKILLS: Skill[] = [
  { name: 'React', category: 'frontend', level: 92, iconColor: '#61DAFB' },
  { name: 'HTML5', category: 'frontend', level: 95, iconColor: '#E34F26' },
  { name: 'CSS3', category: 'frontend', level: 92, iconColor: '#1572B6' },
  { name: 'JavaScript', category: 'languages', level: 90, iconColor: '#F7DF1E' },
  { name: 'NodeJS', category: 'backend', level: 88, iconColor: '#339933' },
  { name: 'Express.js', category: 'backend', level: 86, iconColor: '#E0E0E0' },
  { name: 'MongoDB', category: 'backend', level: 84, iconColor: '#47A248' },
  { name: 'SQL / MySQL', category: 'backend', level: 88, iconColor: '#00758F' },
  { name: 'Java', category: 'languages', level: 88, iconColor: '#ED8B00' },
  { name: 'Python', category: 'languages', level: 85, iconColor: '#3776AB' },
  { name: 'C', category: 'languages', level: 80, iconColor: '#A8B9CC' },
  { name: 'Data Structures', category: 'languages', level: 90, iconColor: '#FF4D9D' },
  { name: 'Git / GitHub', category: 'tools', level: 90, iconColor: '#F05032' },
  { name: 'VS Code', category: 'tools', level: 95, iconColor: '#007ACC' },
  { name: 'Anti-Gravity', category: 'tools', level: 90, iconColor: '#00F5FF' },
];

export const PROJECTS: Project[] = [
  {
    id: 'dbt-awareness',
    title: 'DBTConnect',
    subtitle: 'Unified Digital Awareness Platform',
    period: 'Sept-Dec 2025',
    description: 'Full-stack web portal enabling citizens to understand Aadhaar seeding and Direct Benefit Transfer (DBT) through interactive tools and AI support.',
    longDescription: 'Built a responsive full-stack web application enabling citizens to understand Aadhaar seeding and Direct Benefit Transfer (DBT) through interactive verification tools, AI chatbot support, and grievance services. Developed secure backend services with Express.js, JWT, RBAC, and Prisma ORM. Integrated analytics dashboards, OCR simulation, and automated grievance letter generation.',
    tags: ['React', 'Node.js', 'Express.js', 'JWT', 'RBAC', 'Prisma ORM', 'SQLite'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com/Yash28706/aadhar-seeded-dbt',
    githubUrl: 'https://github.com/Yash28706/aadhar-seeded-dbt',
    features: ['Aadhaar Seeding Check', 'AI Chatbot Support', 'OCR Simulation', 'Automated Grievance Letter Generation'],
  },
  {
    id: 'food-nutrition-ai',
    title: 'AI Based Food Nutrition Estimation System',
    subtitle: 'Computer Vision & Deep Learning',
    period: 'Jan–May 2026',
    description: 'AI-powered application to estimate food nutrition from images using computer vision and deep learning.',
    longDescription: 'Built an AI-powered application to estimate food nutrition from images using computer vision and deep learning. Integrated image and ingredient features using the Visual-Ingredient Feature Fusion (VIF²) approach for enhanced prediction accuracy. Optimized model performance through preprocessing, feature extraction, and evaluation.',
    tags: ['Python', 'Deep Learning', 'Computer Vision', 'VIF² Fusion', 'TensorFlow/PyTorch'],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://github.com/Yash28706',
    githubUrl: 'https://github.com/Yash28706',
    features: ['Food Image Recognition', 'VIF² Feature Fusion', 'Nutritional Breakdown Analysis', 'Model Preprocessing Pipeline'],
  },
  {
    id: '3d-portfolio',
    title: '3D Cyberpunk Developer Portfolio',
    subtitle: 'Awwwards Interactive Web Experience',
    period: '2026',
    description: 'Award-winning interactive 3D web experience built with Three.js, React Three Fiber, and Framer Motion.',
    longDescription: 'A cutting-edge developer workspace featuring a 3D animated room, floating skill spheres, glassmorphic UI cards, terminal CLI mode, and AI assistant.',
    tags: ['React 19', 'Three.js', 'R3F', 'Tailwind CSS', 'GSAP', 'Lenis Scroll'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'http://localhost:3000',
    githubUrl: 'https://github.com/Yash28706/portfolio',
    features: ['3D Interactive Room', 'Command Palette (Ctrl+K)', 'CLI Terminal Mode', 'AI Chatbot Assistant'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Apex Solutions Limited, Guntur',
    role: 'Data Specialist Intern (ECOR)',
    location: 'On-Site',
    period: 'June - Nov 2023',
    description: 'Verified and validated 1,000+ handwritten data records for the 22245 project, ensuring high accuracy and consistency in XML field submissions.',
    bullets: [
      'Verified and validated 1,000+ handwritten data records for the 22245 project, ensuring high accuracy and consistency in XML field submissions.',
      'Performed error correction and quality checks by comparing entered data with source document images.',
      'Identified and reported data-entry mistakes to team members during final-stage validation.',
      'Maintained data quality standards and handled responsibility for final batch verification before submission.',
    ],
    techUsed: ['XML Validation', 'Data Audit Pipelines', 'Error Correction', 'Quality Control'],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'GMR Institute of Technology, Rajam',
    period: 'Expected 2027',
    score: 'CGPA: 8.2/10',
    highlights: ['Core focus in Full Stack Development, Data Structures, Algorithms & AI', 'Active participant in Coding Competitions & Hackathons'],
  },
  {
    degree: 'Diploma in Engineering',
    institution: 'M.B.T.S. Govt. Polytechnic, Guntur',
    period: '2024',
    score: '87%',
    highlights: ['Specialized in Computer Engineering Fundamentals & Web Basics'],
  },
  {
    degree: 'SSC (Secondary School Certificate)',
    institution: 'Visakha High School, Srikakulam',
    period: '2024',
    score: '100%',
    highlights: ['School Topper with Perfect Score'],
  },
];

export const CERTIFICATES: CertificateItem[] = [
  {
    title: 'Web Development Certificate',
    issuer: 'L&T EduTech',
    date: 'Jan 2026',
    badgeColor: '#00F5FF',
    verifyUrl: 'https://coursera.org',
  },
  {
    title: 'Python Essentials',
    issuer: 'Coursera',
    date: 'Dec 2024',
    badgeColor: '#3776AB',
    verifyUrl: 'https://coursera.org',
  },
  {
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Coursera',
    date: 'Dec 2024',
    badgeColor: '#FF4D9D',
    verifyUrl: 'https://coursera.org',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Coursera',
    date: 'Nov 2024',
    badgeColor: '#6C63FF',
    verifyUrl: 'https://coursera.org',
  },
];

export const ACHIEVEMENTS: AchievementItem[] = [
  { label: 'Coding Problems Solved', value: 100, suffix: '+', description: 'CodeChef, HackerRank, GeeksforGeeks' },
  { label: 'Academic SSC Score', value: 100, suffix: '%', description: 'Visakha High School, Srikakulam' },
  { label: 'B.Tech CGPA', value: 8.2, suffix: '/10', description: 'GMR Institute of Technology' },
  { label: 'Diploma Percentage', value: 87, suffix: '%', description: 'M.B.T.S. Govt. Polytechnic' },
];
