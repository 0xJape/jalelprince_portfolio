import React from 'react';

const About = ({ profile, loading }) => {

  // Skill categories with actual technology logos
  const skillCategories = [
    {
      title: 'Google Workspace',
      icon: '🔵',
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'Gmail', logo: 'https://img.icons8.com/color/48/gmail-new.png' },
        { name: 'Google Drive', logo: 'https://img.icons8.com/color/48/google-drive--v1.png' },
        { name: 'Google Docs', logo: 'https://img.icons8.com/color/48/google-docs.png' },
        { name: 'Google Sheets', logo: 'https://img.icons8.com/color/48/google-sheets.png' },
        { name: 'Google Slides', logo: 'https://img.icons8.com/color/48/google-slides.png' },
        { name: 'Google Forms', logo: 'https://img.icons8.com/color/48/google-forms-new.png' },
        { name: 'Google Calendar', logo: 'https://img.icons8.com/color/48/google-calendar--v1.png' },
        { name: 'Google Meet', logo: 'https://img.icons8.com/color/48/google-meet.png' },
      ],
    },
    {
      title: 'Productivity & Admin',
      icon: '📋',
      color: 'from-violet-500 to-purple-600',
      skills: [
        { name: 'Microsoft Office', logo: 'https://img.icons8.com/color/48/microsoft-office-2019.png' },
        { name: 'Excel', logo: 'https://img.icons8.com/color/48/microsoft-excel-2019.png' },
        { name: 'Notion', logo: 'https://img.icons8.com/color/48/notion--v1.png' },
        { name: 'Trello', logo: 'https://img.icons8.com/color/48/trello.png' },
        { name: 'ClickUp', logo: 'https://img.icons8.com/color/48/clickup.png' },
      ],
    },
    {
      title: 'Web Development',
      icon: '🌐',
      color: 'from-blue-500 to-cyan-600',
      skills: [
        { name: 'PHP', logo: 'https://img.icons8.com/offices/48/php-logo.png' },
        { name: 'HTML5', logo: 'https://img.icons8.com/color/48/html-5--v1.png' },
        { name: 'CSS3', logo: 'https://img.icons8.com/color/48/css3.png' },
        { name: 'Tailwind', logo: 'https://img.icons8.com/color/48/tailwind_css.png' },
        { name: 'JavaScript', logo: 'https://img.icons8.com/color/48/javascript--v1.png' },
        { name: 'Node.js', logo: 'https://img.icons8.com/color/48/nodejs.png' },
        { name: 'Express.js', logo: 'https://img.icons8.com/color/48/express-js.png' },
        { name: 'Leaflet.js', logo: 'https://img.icons8.com/color/48/map.png' },
      ],
    },
    {
      title: 'Databases',
      icon: '🗄️',
      color: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'MySQL', logo: 'https://img.icons8.com/color/48/mysql-logo.png' },
        { name: 'MongoDB', logo: 'https://img.icons8.com/color/48/mongodb.png' },
        { name: 'Supabase', logo: 'https://img.icons8.com/color/48/supabase.png' },
      ],
    },
    {
      title: 'Dev Tools',
      icon: '🛠️',
      color: 'from-slate-600 to-slate-800',
      skills: [
        { name: 'Vercel', logo: 'https://img.icons8.com/color/48/vercel.png' },
        { name: 'Python', logo: 'https://img.icons8.com/color/48/python--v1.png' },
        { name: 'Git', logo: 'https://img.icons8.com/color/48/git.png' },
        { name: 'Dashboards', logo: 'https://img.icons8.com/color/48/dashboard.png' },
      ],
    },
    {
      title: 'Creative & Design',
      icon: '🎨',
      color: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Canva', logo: 'https://img.icons8.com/color/48/canva.png' },
        { name: 'CapCut', logo: 'https://img.icons8.com/color/48/video-editing.png' },
        { name: 'Figma', logo: 'https://img.icons8.com/color/48/figma--v1.png' },
      ],
    },
    {
      title: 'AI & Modern Tools',
      icon: '🤖',
      color: 'from-indigo-500 to-blue-600',
      skills: [
        { name: 'ChatGPT', logo: 'https://img.icons8.com/color/48/chatgpt.png' },
        { name: 'GoHighLevel', logo: 'https://img.icons8.com/color/48/rocket.png' },
      ],
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
      
      <div className="container-custom px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4" data-aos="fade-up">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4" data-aos="fade-up" data-aos-delay="100">
            Know Who I Am
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
            A dedicated virtual assistant with IT expertise, ready to transform your workflows
          </p>
        </div>

        {/* Profile Card */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden" data-aos="fade-up">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Left: Image */}
              <div className="md:col-span-2 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 flex items-center justify-center">
                {profile?.profileImageUrl ? (
                  <img
                    src={profile.profileImageUrl}
                    alt={profile.name}
                    className="rounded-2xl w-full max-w-xs shadow-2xl"
                  />
                ) : (
                  <div className="text-center py-8">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl mb-6">
                      <span className="text-6xl">👨‍💻</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-2">
                      {profile?.name || 'Jalel Prince'}
                    </h3>
                    <p className="text-blue-300 font-medium">
                      {profile?.role || 'Virtual Assistant'}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Right: Bio */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-1 bg-primary rounded"></div>
                  <span className="text-primary font-semibold text-sm uppercase tracking-wider">Who I Am</span>
                </div>
                <p className="text-slate-700 text-lg leading-relaxed mb-8">
                  {profile?.bio || 'Professional bio goes here.'}
                </p>
                
                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      {profile?.skills?.length || 27}+
                    </div>
                    <div className="text-slate-500 text-sm font-medium">Skills</div>
                  </div>
                  <div className="text-center border-x border-slate-100">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      7
                    </div>
                    <div className="text-slate-500 text-sm font-medium">Expertise</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-slate-500 text-sm font-medium">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4" data-aos="fade-up">
              My Arsenal
            </span>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900" data-aos="fade-up" data-aos-delay="100">
              Technical Expertise
            </h3>
          </div>

          {/* Skills Grid - Masonry Style */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                data-aos="fade-up"
                data-aos-delay={categoryIndex * 50}
                className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 hover:border-transparent hover:-translate-y-1 ${
                  categoryIndex === 2 ? 'lg:row-span-2' : ''
                }`}
              >
                {/* Card Header */}
                <div className={`bg-gradient-to-r ${category.color} p-5 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                  <div className="flex items-center gap-3 relative z-10">
                    <span className="text-3xl">{category.icon}</span>
                    <h4 className="text-xl font-heading font-bold text-white">
                      {category.title}
                    </h4>
                  </div>
                </div>
                
                {/* Skills List */}
                <div className="p-5">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="group/skill flex items-center gap-2 bg-slate-50 hover:bg-slate-100 px-3 py-2 rounded-xl transition-all duration-200 cursor-default"
                      >
                        <img 
                          src={skill.logo} 
                          alt={skill.name}
                          className="w-6 h-6 object-contain"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://img.icons8.com/color/48/code.png';
                          }}
                        />
                        <span className="text-slate-700 font-medium text-sm">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Animated Marquee */}
        <div className="mt-16 relative" data-aos="fade-up">
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
          <div className="overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-6 rounded-2xl">
            <div className="animate-scroll flex gap-6 whitespace-nowrap">
              {(() => {
                // Create a map of all skills with their logos from categories
                const skillLogoMap = {};
                skillCategories.forEach(category => {
                  category.skills.forEach(skill => {
                    skillLogoMap[skill.name] = skill.logo;
                  });
                });
                
                return [...profile?.skills || [], ...profile?.skills || [], ...profile?.skills || []].map((skill, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-5 py-2.5 rounded-full"
                  >
                    {skillLogoMap[skill] ? (
                      <img 
                        src={skillLogoMap[skill]} 
                        alt={skill}
                        className="w-5 h-5 object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = 'https://img.icons8.com/color/48/code.png';
                        }}
                      />
                    ) : (
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                    )}
                    <span className="text-white font-medium text-sm">{skill}</span>
                  </div>
                ));
              })()}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
