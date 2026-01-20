require('dotenv').config({ path: require('path').join(__dirname, '.env') });
const { supabase } = require('./config/supabase');

async function seedData() {
  try {
    console.log('Starting data migration to Supabase...');
    console.log('Clearing existing data...');

    // Clear existing data
    await supabase.from('profiles').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('projects').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('experiences').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    await supabase.from('education').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    console.log('✓ Cleared existing data');

    // Add profile
    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .insert([{
        name: 'Jalel Prince G. Gayo',
        role: 'Virtual Assistant',
        tagline: 'Leveraging technology to streamline tasks, improve workflows, and deliver practical solutions.',
        bio: 'I am a 21 years old Virtual Assistant with a strong background in IT and systems management. I specialize in using technology to simplify everyday tasks, optimize workflows, and provide practical solutions. My experience spans database management, web development, reporting, automation, and administrative support — making me adaptable to a variety of modern digital projects.',
        email: 'jalelgayo17@gmail.com',
        linkedin: 'https://linkedin.com/in/yourprofile',
        github: 'https://github.com/0xJape',
        resume_url: 'https://drive.google.com/uc?export=download&id=1vIU9SQd6EPid6rslv987Ii5suy5_XgHi',
        profile_image_url: 'https://i.imgur.com/pBa3TP5.png',
        skills: [
          'Microsoft Office', 'Google Workspace', 'Gmail', 'Google Drive', 'Google Docs', 'Google Sheets', 
          'Google Slides', 'Google Forms', 'Google Calendar', 'Google Meet', 'Email & Calendar Management',
          'Notion', 'Trello', 'ClickUp', 'Google Sheets Automation', 'Excel', 'Dashboard Creation',
          'PHP', 'HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'Node.js', 'Express.js', 'Leaflet.js',
          'MySQL', 'MongoDB', 'Supabase', 'Vercel', 'Python', 'Technical Troubleshooting',
          'Canva', 'CapCut', 'Figma', 'ChatGPT', 'GoHighLevel'
        ]
      }])
      .select();

    if (profileError) {
      console.error('Profile error:', profileError);
    } else {
      console.log('✓ Profile created');
    }

    // Add projects
    const projects = [
      {
        title: 'JuanHome — The Smart Real Estate Platform for Buyers, Sellers, and Agents - Systems Analyst',
        description: 'JuanHome is the modern way to search, list, and manage real estate in the Philippines. Featuring AI-powered recommendations, smart search with map integration, and a seamless listing experience for sellers and agents — all in one platform.',
        technologies: ['Web Development', 'AI', 'Map Integration', 'Real Estate Tech'],
        year: '2026',
        image_url: '',
        video_url: 'https://www.youtube.com/embed/OXKBGy9RPW8',
        github_url: '',
        live_url: 'https://youtu.be/OXKBGy9RPW8',
        order: 1
      },
      {
        title: 'HerdSync — A Livestock Management Information System',
        description: 'HerdSync is a web-based livestock management information system designed for efficient record-keeping, health monitoring, and breeding management for cattle, goats, and sheep.',
        technologies: ['Web Development', 'Database Management', 'Information Systems', 'PHP', 'MySQL'],
        year: '2026',
        image_url: '',
        video_url: 'https://www.youtube.com/embed/QjWcWi4S2cE',
        github_url: '',
        live_url: 'https://youtu.be/QjWcWi4S2cE',
        order: 2
      },
      {
        title: 'Restaurant Logo Design & Layout',
        description: 'Complete logo design and menu layout for a restaurant. Created a cohesive brand identity including custom logo, color scheme, typography, and professionally designed menu layouts that reflect the restaurant\'s unique character and appeal to their target audience.',
        technologies: ['Canva', 'Graphic Design', 'Branding', 'Logo Design', 'Menu Design'],
        year: '2026',
        image_url: 'https://i.imgur.com/SYREbEI.jpeg',
        video_url: '',
        github_url: '',
        live_url: '',
        order: 3
      },
      {
        title: 'E-Commerce Website',
        description: 'Custom online store with payment integration and inventory management for a local business.',
        technologies: ['WordPress', 'WooCommerce', 'Web Development'],
        year: '2026',
        image_url: '',
        video_url: '',
        github_url: '',
        live_url: '',
        order: 4
      },
      {
        title: 'Social Media Campaign',
        description: 'Developed and executed a 3-month social media strategy that increased engagement by 150%.',
        technologies: ['Social Media', 'Content Creation', 'Analytics'],
        year: '2025',
        image_url: '',
        video_url: '',
        github_url: '',
        live_url: '',
        order: 5
      },
      {
        title: 'ASCLEPIUS: Dengue Early Warning System',
        description: 'A community-based dengue tracking and alert system that logs patient symptoms, monitors dengue cases per purok, and triggers early warnings for local health units.',
        technologies: ['PHP', 'MySQL', 'Leaflet Maps', 'Dengue Case Analytics'],
        year: '2026',
        image_url: 'https://imgur.com/your-asclepius.png',
        video_url: 'https://youtu.be/uxEJ0NEbXLs',
        github_url: '',
        live_url: '',
        order: 6
      },
      {
        title: 'UI/UX Design Showcase',
        description: 'A modern UI/UX design concept demonstrating clean layouts, smooth transitions, and user-centered flows optimized for digital platforms.',
        technologies: ['Figma', 'UI/UX', 'Interaction Design'],
        year: '2026',
        image_url: 'https://imgur.com/your-uiux-showcase.png',
        video_url: 'https://youtube.com/shorts/R97IFir5RIQ',
        github_url: '',
        live_url: '',
        order: 7
      },
      {
        title: 'Sign Language Recognition via Machine Learning',
        description: 'An image-processing model that identifies sign language gestures using machine learning, enabling accessible communication through gesture recognition.',
        technologies: ['Python', 'Machine Learning', 'Image Processing', 'OpenCV', 'TensorFlow'],
        year: '2026',
        image_url: 'https://imgur.com/your-signlang.png',
        video_url: 'https://youtube.com/shorts/GdnzUOuIQdM',
        github_url: '',
        live_url: '',
        order: 8
      },
      {
        title: 'Multiple Data Entry System',
        description: 'A data encoding platform designed for efficient multiple-entry operations using bulk input forms and structured validation. This interface demo showcases how form data is organized and processed during batch encoding.\n\nDisclaimer: The image shown is for demonstration purposes only and does not represent real individuals, sensitive information, or violate any privacy or confidentiality.',
        technologies: ['Web Forms', 'Data Processing', 'UI/UX'],
        year: '2026',
        image_url: 'https://imgur.com/a/OShWUg1',
        video_url: '',
        github_url: '',
        live_url: '',
        order: 9
      }
    ];

    const { data: projectsData, error: projectError } = await supabase
      .from('projects')
      .insert(projects)
      .select();

    if (projectError) {
      console.error('Projects error:', projectError);
    } else {
      console.log(`✓ ${projectsData.length} projects created`);
    }

    // Add experience
    const experiences = [
      {
        role: 'Freelance Digital Professional',
        company: 'Self-Employed',
        start_date: 'Jan 2024',
        end_date: '',
        current: true,
        description: 'Providing web development, design, and digital marketing services to clients worldwide. Specialized in helping small businesses establish their online presence.',
        order: 1
      },
      {
        role: 'Full-Stack Systems Developer & UI/UX Designer',
        company: 'Multiple Clients',
        start_date: 'Jan 2025',
        end_date: '',
        current: true,
        description: 'Developing end-to-end web applications and creating intuitive user interfaces using Figma for diverse clients. Specializing in custom system solutions, database architecture, and modern web technologies to deliver scalable and user-friendly applications.',
        order: 2
      },
      {
        role: 'Research Consultant & Programmer',
        company: 'Tupi Robotics Club',
        start_date: 'Jan 2022',
        end_date: 'Dec 2024',
        current: false,
        description: 'Led research initiatives and developed custom software solutions for robotics projects. Collaborated with teams to design, program, and implement automation systems while providing technical consultation on emerging technologies and best practices.',
        order: 3
      },
      {
        role: 'Web Developer & Designer',
        company: 'Various Clients',
        start_date: 'Jun 2022',
        end_date: 'Dec 2023',
        current: false,
        description: 'Delivered 20+ successful projects including websites, logos, and marketing materials for diverse clients across different industries.',
        order: 4
      },
      {
        role: 'Content Writer & Videographer',
        company: 'Ang Sulyap',
        start_date: 'Jan 2021',
        end_date: 'Dec 2021',
        current: false,
        description: 'Created engaging written content and produced high-quality video materials. Managed the full content creation pipeline from concept development to final production, ensuring brand consistency and audience engagement.',
        order: 5
      }
    ];

    const { data: experienceData, error: expError } = await supabase
      .from('experiences')
      .insert(experiences)
      .select();

    if (expError) {
      console.error('Experience error:', expError);
    } else {
      console.log(`✓ ${experienceData.length} experience entries created`);
    }

    // Add education
    const educationEntries = [
      {
        degree: 'BS in Information Technology (Major in Networks)',
        institution: 'Mindanao State University - General Santos',
        start_date: '2023',
        end_date: '',
        current: true,
        description: 'Currently in 3rd Year pursuing a Bachelor of Science in Information Technology with a major in Networks. Focusing on network infrastructure, systems administration, and modern IT solutions.',
        order: 1
      },
      {
        degree: 'Senior High School (STEM Strand)',
        institution: 'Tupi National High School',
        start_date: '2022',
        end_date: '2023',
        current: false,
        description: 'Graduated With High Honors • Research & Robotics Champion • Regional Robotics Champion • DSPC Journalism Champion • MSU SASE Passer • Member of Ang Sulyap Publication & Tupi Robotics Club',
        order: 2
      }
    ];

    const { data: educationData, error: eduError } = await supabase
      .from('education')
      .insert(educationEntries)
      .select();

    if (eduError) {
      console.error('Education error:', eduError);
    } else {
      console.log(`✓ ${educationData.length} education entries created`);
    }

    console.log('\n✅ All portfolio data migrated successfully to Supabase!');
    console.log('Visit http://localhost:3000 to see your portfolio!');
    
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seedData();
