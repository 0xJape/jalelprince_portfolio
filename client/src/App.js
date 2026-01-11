import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import Chatbot from './components/Chatbot';
import LoadingScreen from './components/LoadingScreen';
import { getProfile, getProjects, getExperience, getEducation } from './services/api';

function App() {
  const [profile, setProfile] = useState(null);
  const [projects, setProjects] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  // Fetch all data in parallel on mount
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const [profileData, projectsData, experienceData, educationData] = await Promise.all([
          getProfile(),
          getProjects(),
          getExperience(),
          getEducation()
        ]);
        
        setProfile(profileData);
        setProjects(projectsData);
        setExperiences(experienceData);
        setEducation(educationData);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchAllData();
  }, []);

  // Simple routing: Check if URL has /admin
  const isAdminRoute = window.location.pathname === '/admin';

  if (isAdminRoute) {
    return <AdminPanel />;
  }

  // Show loading screen while fetching data
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="App">
      <Navbar />
      <Hero profile={profile} loading={loading} />
      <About profile={profile} loading={loading} />
      <Projects projects={projects} loading={loading} />
      <Experience experiences={experiences} education={education} loading={loading} />
      <Contact />
      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
