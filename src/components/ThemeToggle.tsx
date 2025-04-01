
import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-portfolio-cyber-dark flex items-center justify-center transition-all duration-300 hover:ring-2 hover:ring-portfolio-green dark:hover:ring-portfolio-cyber-teal"
      aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-portfolio-cyber-yellow" />
      ) : (
        <Moon className="h-5 w-5 text-portfolio-navy" />
      )}
    </button>
  );
};

export default ThemeToggle;
