import './App.css';
import Footer from './Footer';
import LandPage from './LandPage';
import Biografi from './Biografi';
import Grid from './Grid1';
import React, { useEffect, useState } from "react";


function App() {
  const [showButton, setShowButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false); // add state for dark mode

  
  useEffect(() => {
    const savedDarkModeEnabled = localStorage.getItem('darkModeEnabled');
    if (savedDarkModeEnabled) {
      setDarkModeEnabled(true); // set the state to true if the value is saved in localStorage
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      setShowButton(currentScrollTop >= 1000 && currentScrollTop > lastScrollTop);
      setLastScrollTop(currentScrollTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  function scrollToElement(id) {
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  function toggleDarkMode() {
    if (darkModeEnabled) {
      localStorage.removeItem('darkModeEnabled');
      setDarkModeEnabled(false);
      document.documentElement.classList.remove('dark-mode'); // remove the dark-mode class
    } else {
      localStorage.setItem('darkModeEnabled', 'true');
      setDarkModeEnabled(true);
      document.documentElement.classList.add('dark-mode'); // add the dark-mode class
    }
  }

  

  return (
    
    <div class="px-10 ">

      <a className="" href="#" onClick={() => scrollToElement('headerID')}>
        <div className={`fixed bottom-0 right-5 mb-5 ml-5 z-50 transition-all duration-300 ${showButton ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <button className="bg-primary dark:bg-primaryDark text-background dark:text-backgroundDark dark:text-black rounded-full p-4 px-5" onClick={() => scrollToElement('headerID')}>
            ↑
          </button>
        </div>
      </a>
      
      <button className=" text-textColor dark:text-textColorDark" onClick={toggleDarkMode}>{darkModeEnabled ? 'Disable' : 'Enable'} Dark Mode</button>
      <LandPage class="min-h-screen" />
      
      <Biografi />
      <Grid />
      <Footer />
      
    </div>
  );
}

export default App;
