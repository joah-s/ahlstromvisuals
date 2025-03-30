import './App.css';
import Footer from './Footer';
import LandPage from './LandPage';
import Biografi from './Biografi';
import Portfolio from './Portfolio';

import PortfolioInfo from './PortfolioInfo';

import OmMig from './OmMig';
import Bilder1 from './Bilder1';
import Bilder2 from './Bilder2';
import Bilder3 from './Bilder3';

import KreativProcess from './KreativProcess'
import React, { useEffect, useState } from "react";
import Header from './Header';

function App() {

  const [showButton, setShowButton] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false); // add state for dark mode
  /*
    useEffect(() => {
      const savedDarkModeEnabled = localStorage.getItem('darkModeEnabled');
      if (savedDarkModeEnabled) {
        setDarkModeEnabled(true); // set the state to true if the value is saved in localStorage
      }
    }, []);
  */
  const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      setShowButton(currentScrollTop >= 800);
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

  return (

    <div class="font-serif  overflow-x-hidden  bg-background dark:bg-backgroundDark ">


      <div class=" bg-blend-luminosity absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-transparent to-white dark:to-black"></div>

      <svg class=" opacity-100 overflow-hidden w-screen bottom-0 absolute z--10 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path class="dark:fill-secondaryDark fill-secondary" fill-opacity="1" d="M0,288L60,282.7C120,277,240,267,360,245.3C480,224,600,192,720,197.3C840,203,960,245,1080,224C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
        </path>
      </svg>
      <div class="  w-full z-50"><Header /></div>

      <svg id="bg-image" class=" absolute z--10" xmlns="http://www.w3.org/2000/svg" viewBox="250 0 840 220">
        <path class="dark:fill-secondaryDark fill-secondary" fill-opacity="1" d="M0,96L60,112C120,128,240,160,360,154.7C480,149,600,107,720,80C840,53,960,43,1080,48C1200,53,1320,75,1380,85.3L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z">
        </path>
      </svg>



      <a className=" hidden md:block" onClick={() => scrollToElement('headerID')}>
        <div className={`fixed bottom-0 right-3 mb-3 z-50 transition-all duration-300  ${showButton ? ' scale-100 opacity-100 transform translate-y-0' : 'scale-50 opacity-0 transform translate-y-20'}`}>
          <button className="text-textColor dark:text-textColorDark bg-secondary dark:bg-secondaryDark  dark:text-black rounded-full  shadow-sm drop-shadow-xl p-4 hover:scale-105 transition-all">
            <svg class="w-6 h-6 transform transition-transform duration-200 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9l-7 7-7-7" transform="rotate(180 12 12)"></path>
            </svg>
          </button>
        </div>
      </a>
      <div class=" max-w-full ">

        <div class=" grid grid-cols-1  min-h-screen  ">
          <div id="landPageID" class="min-h-screen"><LandPage /></div>

          <a className="  hidden md:block">
            <div class="overflow-x-auto  bg-secondary dark:bg-secondaryDark  "><Bilder1 /></div>
            <div class="overflow-x-auto  bg-secondary dark:bg-secondaryDark  "><Bilder3 /></div>


          </a>
          <svg id="bg-image2" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100">
            <path class="dark:fill-secondaryDark fill-secondary" fill-opacity="1" d="M0,32L120,42.7C240,53,480,75,720,80C960,85,1200,75,1320,69.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z">
            </path>
          </svg>
          <div class=" h-16 md:h-5"></div>

          <div class="grid-span-2 mx-5 sm:mx-5   md:mx-20 "><Portfolio /></div>
        </div>


        <div class=" h-20"></div>
        <div id="" class="mx-5 sm:mx-5  md:mx-20"><KreativProcess /></div>
        <div class=" h-20"></div>
        <div class=" mx-20 sm:gap-20 flex  ">

        </div>
        <div id="omMigID" class="grid-span-2 mx-5 sm:mx-5  md:mx-20"><OmMig /></div>


        <svg id="bg-image3" class="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path class="dark:fill-secondaryDark fill-secondary" fill-opacity="1" d="M0,160L120,186.7C240,213,480,267,720,261.3C960,256,1200,192,1320,160L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z">
          </path>
        </svg>


        <div id="footerID" class="grid-span-2 bg-secondary dark:bg-secondaryDark "><Footer /></div>

      </div>





    </div>
  );
}

export default App;
