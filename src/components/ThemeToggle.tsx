import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Effect to handle theme application
  useEffect(() => {
    // Get the document root element
    const htmlElement = document.documentElement;
    
    if (isDarkMode) {
      htmlElement.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      htmlElement.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
    
    // Apply CSS variables for theme colors
    if (isDarkMode) {
      document.body.style.setProperty('--bg-color', '#121212');
      document.body.style.setProperty('--text-color', '#ffffff');
    } else {
      document.body.style.setProperty('--bg-color', '#ffffff');
      document.body.style.setProperty('--text-color', '#000000');
    }
  }, [isDarkMode]);
  
  // Effect to check initial theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };
  
  return (
    <section id="theme-demo" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Theme Toggle Demo
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Another demonstration of useState and useEffect with a practical application
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md mb-8 max-w-md w-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">
                {isDarkMode ? 'Dark Mode' : 'Light Mode'} Activated
              </h3>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              This component demonstrates the use of useState and useEffect to implement
              a theme toggle feature. The theme preference is saved to localStorage so it
              persists between page reloads.
            </p>
            
            <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <span>Theme:</span>
              <span className="font-medium">
                {isDarkMode ? 'Dark' : 'Light'}
              </span>
            </div>
          </div>
          
          <p className="text-gray-600">
            Try toggling the theme and refresh the page - your preference will be remembered!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ThemeToggle;