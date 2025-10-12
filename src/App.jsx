import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ReadMoreAbout from './components/ReadMoreAbout';
import ReadMoreServices from './components/ReadMoreServices';
import "@fortawesome/fontawesome-free/css/all.min.css";


import './style.css';

function App() {
  const location = useLocation();
  const [isLightTheme, setIsLightTheme] = useState(false); 
  const [videoSrc, setVideoSrc] = useState("");

  const darkVideo = 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1760275163/Galaxy_njd0et.mp4';
  const lightVideo = 'https://res.cloudinary.com/dtjv7o2mo/video/upload/v1760275187/Video4_gcbtk0.mp4';


  // Effect to initialize theme and video on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
      setIsLightTheme(true);
      setVideoSrc(lightVideo);
    } else {
      document.body.classList.remove('light-theme');
      setIsLightTheme(false);
      setVideoSrc(darkVideo);
    }

  }, []); // Run once on mount

  // Effect to update video source when isLightTheme changes
  useEffect(() => {
    console.log('isLightTheme changed:', isLightTheme); // Debug log
    if (isLightTheme) {
      setVideoSrc(lightVideo);
      document.body.classList.add('light-theme'); // Add this line
    } else {
      setVideoSrc(darkVideo);
      document.body.classList.remove('light-theme'); // Add this line
    }
  }, [isLightTheme]);

  const toggleTheme = () => {
    const newTheme = isLightTheme ? 'dark' : 'light';
    console.log('Toggling theme to:', newTheme); // Debug log
    localStorage.setItem('theme', newTheme);
    setIsLightTheme(!isLightTheme);
    // The videoSrc will be updated by the useEffect above
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="container">
      <Header isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
      <video className="back-vid" autoPlay loop muted playsInline src={videoSrc}></video>
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Services />
            <Portfolio />
            <Education />
            <Skills />
            <Contact />
          </>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/readmore-about" element={<ReadMoreAbout />} />
        <Route path="/readmore-services" element={<ReadMoreServices />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
