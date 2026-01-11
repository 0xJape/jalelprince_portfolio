import React, { useState, useEffect } from 'react';
import { getProfile } from '../services/api';

const Contact = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile();
      setProfile(data);
    };
    fetchProfile();
  }, []);

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Email',
      value: profile?.email || 'your@email.com',
      href: profile?.email ? `mailto:${profile.email}` : '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      label: 'LinkedIn',
      value: 'Connect with me',
      href: profile?.linkedin || '#',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
        </svg>
      ),
      label: 'GitHub',
      value: 'Check my repos',
      href: profile?.github || '#',
      color: 'from-slate-700 to-slate-900',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl"></div>
      
      <div className="container-custom px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4" data-aos="fade-up">
            Contact
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-4" data-aos="fade-up" data-aos-delay="100">
            Let's Work Together
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg" data-aos="fade-up" data-aos-delay="200">
            Have a project in mind? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden" data-aos="fade-up" data-aos-delay="300">
            <div className="grid md:grid-cols-2">
              {/* Left: Info */}
              <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-8 md:p-12">
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  Get in Touch
                </h3>
                <p className="text-blue-200 mb-8 leading-relaxed">
                  Ready to take your business to the next level? I'm here to help with virtual assistance, web development, and more.
                </p>
                
                {/* Contact Methods */}
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    method.href !== '#' && (
                      <a
                        key={index}
                        href={method.href}
                        target={method.href.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white shadow-lg`}>
                          {method.icon}
                        </div>
                        <div>
                          <div className="text-white/60 text-sm">{method.label}</div>
                          <div className="text-white font-medium group-hover:text-cyan-300 transition-colors">
                            {method.value}
                          </div>
                        </div>
                        <svg className="w-5 h-5 text-white/40 ml-auto group-hover:text-white group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )
                  ))}
                </div>

                {/* Availability Status */}
                <div className="mt-8 p-4 bg-emerald-500/20 backdrop-blur-sm rounded-xl border border-emerald-500/30">
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
                    </span>
                    <span className="text-emerald-300 font-medium">Available for new projects</span>
                  </div>
                </div>
              </div>

              {/* Right: CTA */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="text-center md:text-left">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto md:mx-0 mb-6 shadow-xl shadow-blue-500/20">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-slate-900 mb-3">
                    Start Your Project
                  </h4>
                  <p className="text-slate-600 mb-8">
                    Let's discuss how I can help you achieve your goals. Send me an email and I'll get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-4">
                    {profile?.email && (
                      <a
                        href={`mailto:${profile.email}`}
                        className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Send Email
                      </a>
                    )}
                    {profile?.resumeUrl && (
                      <a
                        href={profile.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full bg-white border-2 border-slate-200 hover:border-primary text-slate-700 hover:text-primary px-6 py-4 rounded-xl font-semibold transition-all duration-300"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        Download Resume
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
