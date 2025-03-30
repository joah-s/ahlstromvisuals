import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./LandPage.css";

import VideoComponent from './VideoComponent';
import Header from './Header';


import ScrollReveal from "scrollreveal";

const LandPage = () => {
  const [index, setIndex] = useState(0);
  const texts = ["balen   ", "bröllopet", "matchen   ", "festen  ", "dagen   ", "budskapet"];
  const [showButton, setShowButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [buttonOpacity, setButtonOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;
      setShowButton(currentScrollTop >= 800);
      setLastScrollTop(currentScrollTop);
      if (currentScrollTop > 50) {
        setButtonOpacity(0);
      } else {
        setButtonOpacity(1);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  function scrollToElement(id) {
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - 100;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }
  useEffect(() => {
    ScrollReveal().reveal('.fade', {
      delay: 500,
      easing: "cubic-bezier(0.175, 0.885, 0.1, 0.01)",
      distance: '80px',
      origin: 'bottom'

    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".fastfade", {
      delay: 300,
      distance: '50px',
      duration: 200,
      origin: 'bottom',
      reset: false,
      interval: 100 // wait 200ms between each element
    });
  }, []);


  useEffect(() => {
    ScrollReveal().reveal(".midfade", {
      delay: 300,
      distance: '50px',
      duration: 500,
      origin: 'bottom',
      reset: false,
      interval: 100 // wait 200ms between each element
    });
  }, []);


  useEffect(() => {
    ScrollReveal().reveal(".slowfade", {
      delay: 100,
      distance: '50px',
      duration: 2000,
      origin: 'bottom',
      reset: false,
      interval: 100 // wait 200ms between each element
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".leftfade", {
      delay: 10,
      distance: '500px',
      duration: 2000,
      origin: 'left',
      reset: false,
      interval: 100 // wait 200ms between each element
    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".rightfade", {
      delay: 100,
      distance: '1000px',
      duration: 2000,
      origin: 'right',
      reset: false,
      interval: 100 // wait 200ms between each element
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div>
      <a class="hidden md:block">
         


          <div className="absolute bottom-10 ml-7 chat chat-start">
            <div className="chat-image avatar ">
              <div className="w-10 rounded-full ">
                <img src="/Resources/jonathanSvartVit.png" />
              </div>
            </div>
            <div className="chat-header ">
              Jonathan Ahlström
              <time className="text-xs opacity-50 ml-1"> Lund, Sverige</time>
            </div>
            <div className="shadow-xl chat-bubble bg-secondary dark:bg-secondaryDark dark:text-white text-textColor text-sm">
              Skriv till mig om du har någon fundering!</div>
            
          </div>
        </a>
      <div id="headerID" class="text-textColor dark:text-textColorDark relative min-h-screen sm:mx-5  md:mx-20 ">

      

        <img class="absolute hidden md:block h-40 bottom-9 mx-60 left-40 opacity-70  dark:mix-blend-screen transition-all duration-300 hover:-translate-y-2 ease-in-out z-10" src="/Resources/jpritad1.png" />
        <img class="absolute hidden md:block h-20 bottom-9 mx-60  right-10   dark:mix-blend-screen transition-all duration-300 hover:-translate-y-2 ease-in-out z-10" src="/Resources/jpritad2.png" />
        <img class="absolute hidden sm:block max-h-10  top-24 mx-80  dark:mix-blend-screen transition-all duration-300 hover:-translate-y-2 ease-in-out z-10" src="/Resources/jpritad3.png" />
        <div class="w-full absolute top-[0px] md:grid-cols-2 grid grid-cols-1  mt-40 md:mt-0 md:min-h-screen     ">
          <div class="w-full grid-span-1   sm:left-0  md:flex  md:items-center  ">
            <div className="w-full text-center md:text-left  ">

              <div className=" mt-0 mb-6 font-bold">
                <div className="relative inline-block">
                  <p className=" text-4xl lg:text-5xl   tracking-tight md:mx-auto inline">
                    <div class=" mb-1 tracking-tight">
                      <text>Kom ihåg {" "}</text>
                      <CSSTransition
                        in={true}
                        appear={true}
                        timeout={1000}
                        class="fade font-extrabold text-primary dark:text-primaryDark"
                        key={index}
                      >
                        <text class="">
                          {texts[index]}
                        </text>
                      </CSSTransition>
                    </div>
                    <p class=" ">med en video!</p></p>
                </div>

              </div>

              <p class=" mt-3 text-sm sm:text-lg  ">
                Jag producerar videor för personer som vill <br />
                att sprida budskap, informera och engagera. <br />
                Skräddarsydda efter kundens önskemål.
              </p>
              <button class="  relative inline-flex mr-5 text-sm " onClick={() => scrollToElement('gridDiv')}>
                <span class="shadow-md transition-all duration-300  hover:-translate-y-1 mt-3 sm:mt-10 ease-in-out bg-primary dark:bg-primaryDark relative px-8 py-2.5    text-textColorDark dark:text-textColor rounded-2xl">
                  <a class="inline-flex items-center justify-center  text-base">
                    <svg class="mr-2 -ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                    Mina Projekt
                  </a>

                </span>
              </button>

              <button class=" relative inline-flex items-center justify-center  text-sm font-medium " onClick={() => scrollToElement('bioID')}>
                <span class="shadow-md transition-all duration-300 hover:-translate-y-1 mt-10 ease-in-out relative px-8 py-2.5  text-textColorDark dark:text-textColor rounded-2xl bg-primary dark:bg-primaryDark">
                  <a class="inline-flex items-center justify-center  text-base" >
                    Om mig
                  </a>

                </span>
              </button>

            </div>





          </div>

          <div class="mb-0 sm:mb-40 md:mb-0 grid-span-1 flex justify-center items-center">
            <div class=" video-wrapper relative transition-all duration-300 hover:-translate-y-1 ease-in-out mt-20 sm:mt-12 md:mb-0">
              <video class="opacity-80 ml-5 sm:ml-28  md:ml-4  mx-4 mix-blend-darken dark:mix-blend-lighten h-44 sm:h-48 md:h-64  sm:rightfade rounded-xl -my-8 sm:my-0"loop autoPlay muted playsInline>
                <source src="/Resources/VideoComp1.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <video class="video-wrapper rounded-xl  mx-4  dark:invert h-4 sm:h-6 rightfade mt-12 sm:my-5   " loop autoPlay muted playsInline>
                <source src="/Resources/FileVid.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              <video class="video-wrapper mx-4 dark:invert h-4 sm:h-6 sm:h-6  rightfade my-5 rounded-xl"loop autoPlay muted playsInline>
                <source src="/Resources/FileAud.mp4" type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>
              <img class="dark:invert rightfade absolute bottom-0 right-0 h-40 py-3  px-5 z-10  opacity-80" src="/Resources/Head.png"></img>
            </div>
          </div>
          
        </div>

        <div class="fastfade flex justify-center absolute bottom-0 w-full py-4 text-textColor dark:text-textColorDark" onClick={() => scrollToElement('gridDiv')} style={{ opacity: buttonOpacity }}>
          <a href="#" class="  " >
            <svg class="hidden md:block w-10 h-10 transform transition-transform duration-200 group-hover:-rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </a>

        </div>

      </div>
       
    </div>
  );
};

export default LandPage;
