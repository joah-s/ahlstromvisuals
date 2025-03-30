import VideoComponent from "./VideoComponent";
import ScrollReveal from "scrollreveal";
import React, { useState, useEffect } from "react";
import videos from "./Videos"; // Importing videos array from videos.js file
import { useHref } from "react-router-dom";
import PortfolioInfo from "./PortfolioInfo";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


const Portfolio = () => {


  useEffect(() => {
    ScrollReveal().reveal(".fastfade", {
      delay: 300,
      distance: '200px',
      duration: 200,
      origin: 'bottom',
      reset: false,
      interval: 100, // wait 200ms between each element

    });
  }, []);

  function scrollToElement(id) {
    const element = document.getElementById(id);
    const offsetTop = element.offsetTop - 30;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    ScrollReveal().reveal(".midfade", {
      delay: 100,
      distance: '50px',
      duration: 500,
      origin: 'bottom',
      reset: false,
      interval: 200, // wait 200ms between each element

    });
  }, []);


  useEffect(() => {
    ScrollReveal().reveal(".slowfade", {
      delay: 100,
      distance: '50px',
      duration: 1000,
      origin: 'bottom',
      reset: false,



    });
  }, []);

  useEffect(() => {
    ScrollReveal().reveal(".leftfade", {
      delay: 100,
      distance: '50px',
      duration: 2000,
      origin: 'left',
      reset: false,
      interval: 100 // wait 200ms between each element
    });
  }, []);



  const prioVideos = videos.filter(video => video.prio);
  function openPopup(videoLink, videoTitle, videoSubtitle) {
    // Create a new div element for the popup window
    const popupDiv = document.createElement('div');
    popupDiv.style.position = 'fixed';
    popupDiv.style.top = '0';
    popupDiv.style.left = '0';
    popupDiv.style.width = '100%';
    popupDiv.style.height = '100%';
    popupDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
    popupDiv.style.zIndex = '9999';
    popupDiv.style.opacity = 0;
    popupDiv.style.transition = 'opacity 0.3s ease-in-out';

    popupDiv.addEventListener('click', () => {
      popupDiv.style.opacity = 0;
      setTimeout(() => popupDiv.remove(), 1000);
    });

    // Create a container div for the video and the text
    const containerDiv = document.createElement('div');
    containerDiv.style.position = 'absolute';
    containerDiv.style.top = '50%';
    containerDiv.style.left = '50%';
    containerDiv.style.width = '70%';
    containerDiv.style.height = '60%';
    containerDiv.style.transform = 'translate(-50%, -50%)';
    popupDiv.appendChild(containerDiv);



    // Insert the iframe into the container div
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', videoLink);
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '100%');
    iframe.style.maxWidth = '1080px';
    iframe.style.maxHeight = '720px';
    iframe.style.border = 'none';
    iframe.setAttribute('src', `${videoLink}?autoplay=1`);
    iframe.setAttribute('allowfullscreen', '');
    containerDiv.appendChild(iframe);



    // Add the text over the video
    const closeButton = document.createElement('button');
    closeButton.innerHTML = 'X';
    closeButton.classList.add('rounded-full');
    closeButton.style.position = 'fixed';
    closeButton.style.bottom = '10%';
    closeButton.style.right = '50%';
    closeButton.style.backgroundColor = '#FFFFFF';
    closeButton.style.color = '#000000';
    closeButton.style.border = 'none';
    closeButton.style.padding = '10px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.width = '70px';
    closeButton.style.height = '70px';
    closeButton.style.transform = 'translate(50%, 50%)';

    closeButton.addEventListener('click', () => {
      popupDiv.style.opacity = 0;
      setTimeout(() => popupDiv.remove(), 1000);
    });

    closeButton.addEventListener('mouseover', () => {
      closeButton.style.fontWeight = "bold";
      closeButton.style.width = '71px';
      closeButton.style.height = '71px';
      closeButton.style.transform = 'translate(50%, 50%) scale(1.05)';
    });

    closeButton.addEventListener('mouseout', () => {
      closeButton.style.fontWeight = "normal";

      closeButton.style.width = '70px';
      closeButton.style.height = '70px';
      closeButton.style.transform = 'translate(50%, 50%)';
    });
    popupDiv.appendChild(closeButton);
    const popupContainer = document.getElementById('popupContainer');
    popupContainer.appendChild(popupDiv);
    setTimeout(() => popupDiv.style.opacity = 1, 10);

  }

  return (
    <div className="text-textColor dark:text-textColorDark " id="gridDiv" >


      <div className="md:mt-10 mb-0 mx-auto lg:max-w-screen-xl md:max-w-full">
        <h2 className=" text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl text-center">
          Videoportföljen
        </h2>
        <p className="sm:mb-20 text-gray-700 mt-3 dark:text-white  text-sm sm:text-lg text-center">
          Filmprojekten sträcker sig från högtidliga baler <br />
          till intervjuer med landets toppolitiker.
        </p>

      </div>
      <div class=" mt-5 mx-auto rounded-2xl sm:shadow-2xl md:p-10  sm:border-secondary sm:dark:border-secondaryDark sm:bg-secondary sm:dark:bg-secondaryDark ">


        <div class="grid grid-cols-1 justify-center items-center" style={{
        }}>
          <div class=" flex items-center   ">

            <div class="flex flex-col w-full">
            </div>
          </div>

          {prioVideos.map((video, index) => (

            <div class={`${index % 2 === 0 ? '' : ''}${index % 2 !== 0 ? ' my-5 sm:bg-black sm:bg-opacity-5 md:rounded-2xl ' : ''}`}
              key={index}
              style={{
                backgroundImage: `url(${video.bg})`,
                backgroundPosition: `${index % 2 === 0 ? '10%' : '90%'} 50%`,
                backgroundSize: `200px`,
                backgroundRepeat: `no-repeat`,
                backgroundBlendMode: 'darken',

              }}
            >



              <div class=" col-span-2  ease-in-out-500 ">

                <figure class="  text-textColor dark:text-textColorDark sm:p-10 py-5 max-w-fit mx-auto ">

                  <div class={`${(index % 2 === 0) ? 'text-left md:ml-60 ' : 'md:text-right md:mr-60'}`}
                    key={index}
                  >

                    <div class=" py-4 relative duration-300 transform hover:-translate-y-2  " onClick={() => openPopup(video.link, video.title, video.subtitle)}>

                      <img class=" opacity-80 hover:scale-105 transition-all duration-300 absolute z-10 h-14 invert top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 snap-center cursor-pointer" src="/Resources/play-button-arrowhead.png" alt="Play button" />
                      <img class="hover:shadow-2xl  border-4 border-primary dark:border-primaryDark transition-all duration-300 cursor-pointer  snap-center  md:max-w-sm w-fit rounded-2xl" src={video.pic} alt="image description" />
                    </div>
                    <figcaption class=" tracking-tight font-bold text-3xl">{video.title}</figcaption>
                    <figcaption class="tracking-tight mt-1  text-md ">{video.subtitle}</figcaption>
                  </div>
                </figure>
                <a className="  sm:hidden block">
                <div class=" divider"></div>

                </a>

              </div>

            </div>
            
          ))}
          
          <PortfolioInfo class=" " />
        </div>
        

      </div>

      <div id="popupContainer" />
    </div>
  );
};

export default Portfolio;
