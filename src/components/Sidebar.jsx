import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import useActiveSection from './useActiveSection';

const Sidebar = ({ menuIconRef, isLightTheme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false); // New state to track if it's been opened
  const sidebarRef = useRef(null);
  const sectionIds = ['home', 'about', 'services', 'portfolio', 'education', 'skills', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  const closeSidebar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && menuIconRef.current && !menuIconRef.current.contains(event.target)) {
        closeSidebar();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [menuIconRef]);

  useEffect(() => {
    if (menuIconRef.current) {
      menuIconRef.current.onclick = () => {
        setIsOpen(true);
        setHasOpened(true); // Mark as opened when clicked
      };
    }
  }, [menuIconRef]);

  // Determine the class name to prevent close-animation on initial load
  let sidebarClass = "sidebar";
  if (isOpen) {
    sidebarClass += " open-sidebar";
  } else if (hasOpened) { // Only apply close-sidebar animation if it has been opened before
    sidebarClass += " close-sidebar";
  }

  return (
    <div className={sidebarClass} ref={sidebarRef}>
      <div className="close-icon" onClick={closeSidebar}>
        <i className='bx bx-x'></i>
      </div>
      <ul>    
        <li><Link to="/#home" onClick={closeSidebar} className={activeSection === 'home' ? 'active' : ''}>Home</Link></li>
        <li><Link to="/#about" onClick={closeSidebar} className={activeSection === 'about' ? 'active' : ''}>About</Link></li>
        <li><Link to="/#services" onClick={closeSidebar} className={activeSection === 'services' ? 'active' : ''}>Services</Link></li>
        <li><Link to="/#portfolio" onClick={closeSidebar} className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</Link></li>
        <li><Link to="/#education" onClick={closeSidebar} className={activeSection === 'education' ? 'active' : ''}>Education</Link></li>
        <li><Link to="/#skills" onClick={closeSidebar} className={activeSection === 'skills' ? 'active' : ''}>Skills</Link></li>
        <li><Link to="/#contact" onClick={closeSidebar} className={activeSection === 'contact' ? 'active' : ''}>Contact</Link></li>
        {/* <li><Link to="/signup" onClick={closeSidebar}>Join</Link></li> */}
        <li><ThemeToggle isLightTheme={isLightTheme} toggleTheme={toggleTheme} /></li> {/* Wrap in <li> */}
      </ul> 
    </div>
  );
};

export default Sidebar;
