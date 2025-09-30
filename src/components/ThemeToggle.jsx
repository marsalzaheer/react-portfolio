import React, { useEffect, useState } from 'react';

const ThemeToggle = ({ isLightTheme, toggleTheme }) => {
  // Removed internal isLightTheme state

  // Removed useEffect for initial theme setup, App.jsx handles this

  // Removed handleThemeToggle, using toggleTheme prop directly

  return (
    <img 
      src={isLightTheme ? "/images/moon.png" : "/images/sun.png"}
      alt="Theme Toggle" 
      className="icon"
      onClick={toggleTheme} // Use the passed toggleTheme function
    />
  );
};

export default ThemeToggle;
