import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';
import useActiveSection from './useActiveSection';

const Header = ({ isLightTheme, toggleTheme }) => {
  const menuIconRef = useRef(null);
  const sectionIds = ['home', 'about', 'services', 'portfolio', 'education', 'skills', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  return (
    <header className="header" data-aos="fade-down" data-aos-duration="2000">
      <div className="logo">Portfolio</div>
      <i className="bx bx-menu" id="menu-icon" ref={menuIconRef}></i>
      <nav className="navbar">
        <Link to="/#home" className={activeSection === 'home' ? 'active' : ''}>Home</Link>
        <Link to="/#about" className={activeSection === 'about' ? 'active' : ''}>About</Link>
        <Link to="/#services" className={activeSection === 'services' ? 'active' : ''}>Services</Link>
        <Link to="/#portfolio" className={activeSection === 'portfolio' ? 'active' : ''}>Portfolio</Link>
        <Link to="/#education" className={activeSection === 'education' ? 'active' : ''}>Education</Link>
        <Link to="/#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</Link>
        <Link to="/#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</Link>
        {/* <Link to="/signup">Join</Link> */}
        <ThemeToggle isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
      </nav>
      <Sidebar menuIconRef={menuIconRef} isLightTheme={isLightTheme} toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
