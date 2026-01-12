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
      const startTime = Date.now();
      const minLoadingTime = 800; // Minimum 800ms for smooth transition
      const maxLoadingTime = 3000; // Maximum 3 seconds, then show content anyway
      
      try {
        // Set a timeout to force loading to complete after max time
        const timeoutPromise = new Promise(resolve => 
          setTimeout(() => resolve('timeout'), maxLoadingTime)
        );
        
        const dataPromise = Promise.all([
          getProfile().catch(err => { console.error('Profile error:', err); return null; }),
          getProjects().catch(err => { console.error('Projects error:', err); return []; }),
          getExperience().catch(err => { console.error('Experience error:', err); return []; }),
          getEducation().catch(err => { console.error('Education error:', err); return []; })
        ]);
        
        const result = await Promise.race([dataPromise, timeoutPromise]);
        
        if (result !== 'timeout') {
          const [profileData, projectsData, experienceData, educationData] = result;
          setProfile(profileData);
          setProjects(projectsData);
          setExperiences(experienceData);
          setEducation(educationData);
        } else {
          console.warn('Loading timed out, showing content with available data');
        }
        
        // Ensure minimum loading time for smooth UX
        const elapsedTime = Date.now() - startTime;
        if (elapsedTime < minLoadingTime) {
          await new Promise(resolve => setTimeout(resolve, minLoadingTime - elapsedTime));
        }
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
