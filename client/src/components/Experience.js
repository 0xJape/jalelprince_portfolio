import React, { useState, useEffect } from 'react';
import { getExperience, getEducation } from '../services/api';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    const fetchData = async () => {
      const expData = await getExperience();
      const eduData = await getEducation();
      setExperiences(expData);
      setEducation(eduData);
    };
    fetchData();
  }, []);

  const ExperienceCard = ({ item, index }) => (
    <div 
      className="group relative"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 to-cyan-500 hidden md:block" style={{ left: '11px' }}></div>
      
      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="relative z-10 hidden md:block">
          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Card */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-6 border border-slate-100 group-hover:border-blue-200">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-primary transition-colors">
                {item.role}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-primary font-semibold">{item.company}</span>
                {item.location && (
                  <>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-500 text-sm">{item.location}</span>
                  </>
                )}
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-cyan-50 text-primary text-sm font-semibold rounded-full whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {item.startDate} - {item.current ? 'Present' : item.endDate}
            </span>
          </div>
          
          {item.description && (
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          )}
          
          {item.skills && item.skills.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-slate-100">
              {item.skills.map((skill, idx) => (
                <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const EducationCard = ({ item, index }) => (
    <div 
      className="group relative"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {/* Timeline connector */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 to-pink-500 hidden md:block" style={{ left: '11px' }}></div>
      
      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="relative z-10 hidden md:block">
          <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30">
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </div>
        
        {/* Card */}
        <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 mb-6 border border-slate-100 group-hover:border-purple-200">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <div>
              <h3 className="text-xl font-heading font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                {item.degree}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-purple-600 font-semibold">{item.institution}</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 text-sm font-semibold rounded-full whitespace-nowrap">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
              </svg>
              {item.startDate} - {item.current ? 'Present' : item.endDate}
            </span>
          </div>
          
          {item.description && (
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container-custom px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4" data-aos="fade-up">
            My Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4" data-aos="fade-up" data-aos-delay="100">
            Experience & Education
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
            A timeline of my professional growth and academic achievements
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12" data-aos="fade-up" data-aos-delay="300">
          <div className="inline-flex bg-white p-1.5 rounded-2xl shadow-lg border border-slate-100">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-primary'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Work Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-purple-600'
              }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
              Education
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {activeTab === 'experience' ? (
            experiences.length > 0 ? (
              <div className="space-y-2">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={exp._id} item={exp} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                <div className="text-6xl mb-4">💼</div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">No Experience Yet</h3>
                <p className="text-slate-500">Work experience will be displayed here.</p>
              </div>
            )
          ) : (
            education.length > 0 ? (
              <div className="space-y-2">
                {education.map((edu, index) => (
                  <EducationCard key={edu._id} item={edu} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-slate-100">
                <div className="text-6xl mb-4">🎓</div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 mb-2">No Education Yet</h3>
                <p className="text-slate-500">Education history will be displayed here.</p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
