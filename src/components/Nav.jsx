
import React, { useState, useEffect } from 'react';
import { HiOutlineMoon, HiMoon } from 'react-icons/hi';
import './Nav.css';

function Nav() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle the dark mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Apply dark mode to the entire page
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const navbarClassName = isDarkMode ? 'navbar navbar--dark' : 'navbar';
  const iconClassName = isDarkMode ? 'navbar__icon navbar__icon--dark' : 'navbar__icon';

  return (
    <div>
      <nav className={navbarClassName}>
        <div className="navbar-left">
          <h1 className="navbar__title">Where in the world?</h1>
        </div>
        <div className="navbar-right">
          <button className="navbar__dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? <HiMoon className={iconClassName} /> : <HiOutlineMoon className={iconClassName} />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
