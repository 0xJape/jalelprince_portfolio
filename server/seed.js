const mongoose = require('mongoose');
const Profile = require('./models/Profile');
const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
require('dotenv').config();

// ✏️ EDIT YOUR PORTFOLIO DATA HERE
// After editing, run: node seed.js (from the server folder)

const profileData = {
  name: 'Jalel Prince G. Gayo',
  role: 'Virtual Assistant',
  tagline: 'Leveraging technology to streamline tasks, improve workflows, and deliver practical solutions.',
  bio: 'I am a 21 years old Virtual Assistant with a strong background in IT and systems management. I specialize in using technology to simplify everyday tasks, optimize workflows, and provide practical solutions. My experience spans database management, web development, reporting, automation, and administrative support — making me adaptable to a variety of modern digital projects.',
  email: 'jalelgayo17@gmail.com',  // ← Your email
  linkedin: 'https://linkedin.com/in/yourprofile',  // ← Your LinkedIn URL
  github: 'https://github.com/0xJape',  // ← Your GitHub URL
  resumeUrl: 'https://drive.google.com/uc?export=download&id=1vIU9SQd6EPid6rslv987Ii5suy5_XgHi',  // ← Link to your resume
  profileImageUrl: 'https://i.imgur.com/pBa3TP5.png',  // ← Your profile image URL (optional, upload to imgur.com)
  skills: [
    'Microsoft Office',
    'Google Workspace',
    'Gmail',
    'Google Drive',
    'Google Docs',
    'Google Sheets',
    'Google Slides',
    'Google Forms',
    'Google Calendar',
    'Google Meet',
    'Email & Calendar Management',
    'Notion',
    'Trello',
    'ClickUp',
    'Google Sheets Automation',
    'Excel',
    'Dashboard Creation',
    'PHP',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'JavaScript',
    'Node.js',
    'Express.js',
    'Leaflet.js',
    'MySQL',
    'MongoDB',
    'Supabase',
    'Vercel',
    'Python',
    'Technical Troubleshooting',
    'Canva',
    'CapCut',
    'Figma',
    'ChatGPT',
    'GoHighLevel',
  ],
};

// ✏️ ADD YOUR PROJECTS HERE
// For images: Upload to imgur.com and paste the URL
// For videos: Use YouTube embed URL: https://www.youtube.com/embed/VIDEO_ID

const projectsData = [
  {
    title: 'JuanHome — The Smart Real Estate Platform for Buyers, Sellers, and Agents',
    description: 'JuanHome is the modern way to search, list, and manage real estate in the Philippines. Featuring AI-powered recommendations, smart search with map integration, and a seamless listing experience for sellers and agents — all in one platform.',
    technologies: ['Web Development', 'AI', 'Map Integration', 'Real Estate Tech'],
    year: '2026',
    imageUrl: '',
    videoUrl: 'https://www.youtube.com/embed/OXKBGy9RPW8',
    githubUrl: '',
    liveUrl: 'https://youtu.be/OXKBGy9RPW8',
    order: 1,
  },
  {
    title: 'HerdSync — A Livestock Management Information System',
    description: 'HerdSync is a web-based livestock management information system designed for efficient record-keeping, health monitoring, and breeding management for cattle, goats, and sheep.',
    technologies: ['Web Development', 'Database Management', 'Information Systems', 'PHP', 'MySQL'],
    year: '2026',
    imageUrl: '',
    videoUrl: 'https://www.youtube.com/embed/QjWcWi4S2cE',
    githubUrl: '',
    liveUrl: 'https://youtu.be/QjWcWi4S2cE',
    order: 2,
  },
  {
    title: 'Restaurant Brand Identity & Menu Design',
    description: 'Complete logo design and menu layout for a restaurant. Created a cohesive brand identity including custom logo, color scheme, typography, and professionally designed menu layouts that reflect the restaurant\'s unique character and appeal to their target audience.',
    technologies: ['Canva', 'Graphic Design', 'Branding', 'Logo Design', 'Menu Design'],
    year: '2026',
    imageUrl: 'https://i.imgur.com/SYREbEI.jpeg',
    videoUrl: '',
    githubUrl: '',
    liveUrl: '',
    order: 3,
  },
  {
    title: 'E-Commerce Website',
    description: 'Custom online store with payment integration and inventory management for a local business.',
    technologies: ['WordPress', 'WooCommerce', 'Web Development'],
    year: '2026',
    imageUrl: '',
    videoUrl: '',
    githubUrl: '',
    liveUrl: '',
    order: 4,
  },
  {
    title: 'Social Media Campaign',
    description: 'Developed and executed a 3-month social media strategy that increased engagement by 150%.',
    technologies: ['Social Media', 'Content Creation', 'Analytics'],
    year: '2025',
    imageUrl: '',
    videoUrl: '',
    githubUrl: '',
    liveUrl: '',
    order: 5,
  },
  // Copy any block above to add more projects
];

// ✏️ ADD YOUR WORK EXPERIENCE HERE

const experienceData = [
  {
    role: 'Freelance Digital Professional',
    company: 'Self-Employed',
    startDate: 'Jan 2024',
    endDate: '',
    current: true,
    description: 'Providing web development, design, and digital marketing services to clients worldwide. Specialized in helping small businesses establish their online presence.',
    skills: ['Web Development', 'Digital Marketing', 'Branding', 'Client Management'],
    order: 1,
  },
  {
    role: 'Full-Stack Systems Developer & UI/UX Designer',
    company: 'Multiple Clients',
    startDate: 'Jan 2025',
    endDate: '',
    current: true,
    description: 'Developing end-to-end web applications and creating intuitive user interfaces using Figma for diverse clients. Specializing in custom system solutions, database architecture, and modern web technologies to deliver scalable and user-friendly applications.',
    skills: ['Full-Stack Development', 'Figma', 'UI/UX Design', 'System Architecture', 'Database Design'],
    order: 2,
  },
  {
    role: 'Research Consultant & Programmer',
    company: 'Tupi Robotics Club',
    startDate: 'Jan 2022',
    endDate: 'Dec 2024',
    current: false,
    description: 'Led research initiatives and developed custom software solutions for robotics projects. Collaborated with teams to design, program, and implement automation systems while providing technical consultation on emerging technologies and best practices.',
    skills: ['Research & Development', 'Programming', 'Robotics', 'Technical Consultation', 'Automation'],
    order: 3,
  },
  {
    role: 'Web Developer & Designer',
    company: 'Various Clients',
    startDate: 'Jun 2022',
    endDate: 'Dec 2023',
    current: false,
    description: 'Delivered 20+ successful projects including websites, logos, and marketing materials for diverse clients across different industries.',
    skills: ['Web Development', 'Graphic Design', 'Branding', 'Project Management'],
    order: 4,
  },
  {
    role: 'Content Writer & Videographer',
    company: 'Ang Sulyap',
    startDate: 'Jan 2021',
    endDate: 'Dec 2021',
    current: false,
    description: 'Created engaging written content and produced high-quality video materials. Managed the full content creation pipeline from concept development to final production, ensuring brand consistency and audience engagement.',
    skills: ['Content Writing', 'Videography', 'Video Editing', 'Storytelling', 'Content Strategy'],
    order: 5,
  },
];

// ✏️ ADD YOUR EDUCATION HERE

const educationData = [
  {
    degree: 'BS in Information Technology (Major in Networks)',
    institution: 'Mindanao State University - General Santos',
    startDate: '2023',
    endDate: '',
    current: true,
    description: 'Currently in 3rd Year pursuing a Bachelor of Science in Information Technology with a major in Networks. Focusing on network infrastructure, systems administration, and modern IT solutions.',
    order: 1,
  },
  {
    degree: 'Senior High School (STEM Strand)',
    institution: 'Tupi National High School',
    startDate: '2022',
    endDate: '2023',
    current: false,
    description: 'Graduated With High Honors • Research & Robotics Champion • Regional Robotics Champion • DSPC Journalism Champion • MSU SASE Passer • Member of Ang Sulyap Publication & Tupi Robotics Club',
    order: 2,
  },
  // Add more education entries by copying the block above
];

// Seed function
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Profile.deleteMany({});
    await Project.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    console.log('Cleared existing data');

    // Insert new data
    await Profile.create(profileData);
    console.log('Profile created');

    await Project.insertMany(projectsData);
    console.log('Projects created');

    await Experience.insertMany(experienceData);
    console.log('Experience entries created');

    await Education.insertMany(educationData);
    console.log('Education entries created');

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
