import React from "react";
import {useEffect } from "react";
import Card from "./Card.js"
import { CSSTransition } from "react-transition-group";


import ScrollReveal from "scrollreveal";



const MobileMenu = ({ isOpen, closeMenu, scrollToSection }) => { // Add scrollToSection as a prop
  
  useEffect(() => {
    ScrollReveal().reveal('.fade', {
      distance: '100px',
      duration: 100,
      origin: 'left',
      reset: false,
      interval: 50 

    });
  }, []);
  
  return (
   
    <div className={`fixed w-full h-full z-50 bg-opacity-90 bg-black backdrop-blur-sm text-textColorDark ${isOpen ? "" : "hidden"}`} onClick={closeMenu}>
           <img className={`hidden md:block mt-2 h-20  sm:h-24 md:h-28 z-50 fixed items-center left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-12 transition-all`} src="/Resources/AhlstromVisualsLogo.png" />

     <div className="flex justify-center items-center   h-full">
    
     <a className=" invert fixed right-7 top-4 z-50">
      
        <img src="/Resources/menu.png" alt="Menu" className="h-8 w-8 dark:invert transition-all duration-100 hover:-translate-y-0.5 hover:h-9 ease-in-out" />
      </a>
      <div className="space-y-5  transition-all fade  w-full sm:w-60 bottom-10 px-10 sm:px-0 fixed sm:right-5 sm:top-16  ">

        <a onClick={() => scrollToSection("landPageID")} className=" transition-all cursor-pointer bg-primary text-textColor shadow-lg    px-6 py-5 rounded-2xl hover:-translate-y-0.5 flex items-center  justify-between">
          <span className="text-left ">Hem</span>
          <img src="/Resources/home.png" alt="YouTube" className="h-6 w-6 invert ease-in-out" />
        </a>
        <a onClick={() => scrollToSection("gridDiv")} className="cursor-pointer shadow-lg bg-primary text-textColor px-6 py-5 rounded-2xl hover:-translate-y-0.5 flex items-center  justify-between">
          <span className="text-left">Portfölj</span>
          <img src="/Resources/briefcase.png" alt="YouTube" className="h-6 w-6 invert ease-in-out" />
        </a>
        <a onClick={() => scrollToSection("omMigID")} className="cursor-pointer shadow-lg bg-primary text-textColor px-6 py-5 rounded-2xl hover:-translate-y-0.5 flex items-center  justify-between">
          <span className="text-left">Om mig</span>
          <img src="/Resources/user.png" alt="YouTube" className="h-6 w-6 invert ease-in-out" />
        </a>
<div class="bg-white  h-px"></div>

        <a href="mailto:jonathan.ahlstrom@outlook.com" className="shadow-lg bg-white px-6 py-3 rounded-2xl hover:-translate-y-0.5 flex items-center  justify-between">
          <span className="text-left text-textColor mr-12">Email</span>
          <img src="/Resources/email.png" target="_blank" alt="Mail" className="h-6 w-6  ease-in-out" />
        </a>

        <a href="https://www.instagram.com/jonathanplz/" target="_blank" className=" shadow-lg bg-white px-6 py-3 rounded-2xl hover:-translate-y-0.5 flex items-center  justify-between">
          <span className="text-left text-textColor">Instagram</span>
          <img src="/Resources/instagram.png" alt="Instagram" className="h-6 w-6  ease-in-out" />

        </a>
        <a href="https://www.linkedin.com/in/jonathan-ahlström-8700a71a1" target="_blank" className="shadow-lg bg-white px-6 py-3 rounded-2xl hover:-translate-y-0.5 flex items-center  justify-between">
          <span className="text-left text-textColor">LinkedIn</span>
          <img src="/Resources/linkedin.png" alt="LinkedIn" className="h-6 w-6  ease-in-out" />

        </a>
        <div class="bg-white h-px"></div>

        <a href="https://youtube.com/playlist?list=PLZAvM3hxL0Q5S2p3t0ChGuCInerzvuTy2" target="_blank" className=" text-textColor  shadow-lg bg-white   px-6 py-3 rounded-2xl hover:-translate-y-0.5 flex items-center  justify-between">
          <span className="text-left ">Alla videor</span>
          <img src="/Resources/youtube.png" alt="YouTube" className="h-6 w-6  ease-in-out" />

        </a>
        
        
        <button href="https://youtube.com/playlist?list=PLZAvM3hxL0Q5S2p3t0ChGuCInerzvuTy2" target="_blank" className=" py-10 shadow-lg items-center justify-between ">
          <img src="/Resources/letter-x.png" alt="Close" className="invert items-center fixed   block left-1/2 -translate-x-1/2 h-10 hover:-translate-y-0.5 ease-in-out " />

        </button>

        </div>
        </div>

    </div>
  );
};

export default MobileMenu;
