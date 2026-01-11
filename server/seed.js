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
  resumeUrl: 'https://your-resume-link.com/resume.pdf',  // ← Link to your resume
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
    title: 'Brand Identity Design',  // ← Project name
    description: 'Complete brand identity package including logo design, color palette, and brand guidelines for a startup.',  // ← Project description
    technologies: ['Adobe Illustrator', 'Photoshop', 'Branding'],  // ← Tools/Skills used
    year: '2026',  // ← Year completed
    imageUrl: '',  // ← Project image URL (upload to imgur.com)
    videoUrl: '',  // ← YouTube embed URL (optional, overrides image)
    githubUrl: '',  // ← Portfolio/case study URL (optional)
    liveUrl: '',  // ← Live demo/client website URL (optional)
    order: 1,
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
    order: 2,
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
    order: 3,
  },
  // Copy any block above to add more projects
];

// ✏️ ADD YOUR WORK EXPERIENCE HERE

const experienceData = [
  {
    role: 'Freelance Digital Professional',  // ← Your position/role
    company: 'Self-Employed',  // ← Company name (or "Self-Employed", "Freelance", "Independent Contractor")
    startDate: 'Jan 2024',  // ← Start date
    endDate: '',  // ← End date (leave empty if current)
    current: true,  // ← Set to true if this is your current job
    description: 'Providing web development, design, and digital marketing services to clients worldwide. Specialized in helping small businesses establish their online presence.',  // ← Job description
    order: 1,
  },
  {
    role: 'Web Developer & Designer',
    company: 'Various Clients',
    startDate: 'Jun 2022',
    endDate: 'Dec 2023',
    current: false,
    description: 'Delivered 20+ successful projects including websites, logos, and marketing materials for diverse clients across different industries.',
    order: 2,
  },
  // Add more experience entries by copying the block above
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
