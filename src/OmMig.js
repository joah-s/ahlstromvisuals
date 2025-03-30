import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Card from './Card'; // Import your reusable component


function OmMig() {
  const [activeTab, setActiveTab] = useState('planering');
  const [showButton, setShowButton] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
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
    const offsetTop = element.offsetTop - 100;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth"
    });
  }

  useEffect(() => {
    ScrollReveal().reveal(".midfade", {
      delay: 300,
      distance: '50px',
      duration: 500,
      origin: 'bottom',
      reset: true,
      interval: 100 // wait 200ms between each element
    });
  }, []);



  return (

    <div id="bioID" class="">


      <div className=" text-textColor dark:text-white md:mt-10 mb-0 mx-auto lg:max-w-screen-xl md:max-w-full">
        <h2 className=" text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl text-center">
          Kontakt
        </h2>
        <p className="mb-10 md:mb-20  dark:text-white text-sm sm:text-lg mt-3  text-center ">
          Har du en idé om ett videoprojekt? <br />
          Tveka inte att höra av dig till mig!
        </p>
      </div>
      <div class=" bg-black bg-opacity-5 p-5 rounded-2xl  md:grid-cols-3 grid grid-cols-1 md:my-10 dark:text-white">
        <div class="md:col-span-2 order-1 sm:order-0 flex flex-col justify-center items-center md:items-start text-center md:text-left ">
          <div class="mt-0 mb-6 font-bold leading-none text-2xl ">
            <p class="relative inline-block">
              <span class=" tracking-tight">Jonathan Ahlström</span>
            </p>
          </div>

          <p class="text-left  mb-3 mx-2 sm:mx-20 md:mx-0 text-sm text-textColor dark:text-textColorDark">
            Hej! Jag har haft ett stort intresse för videoproduktion i många år.
            Efter att ha jobbat i olika studentorganisationer samt för privatpersoner 
            bestämde jag mig för att skapa ett eget företag!
            
            Nu studerar jag på Lunds Tekniska Högskola till civilinjengör, Informations och kommunikationsteknik där jag specialiserar mig inom användbarhet och design.

          </p>
          <button class="p-2 relative inline-flex mb-4  transition-all   mr-5 overflow-hidden text-sm " onClick={() => scrollToElement('gridDiv')}>
            <span class="shadow-md transition-all duration-300  hover:-translate-y-1 mt-3  ease-in-out bg-primary dark:bg-primaryDark relative px-8 py-2.5    text-textColorDark dark:text-textColor rounded-2xl">
              <a class=" inline-flex items-center justify-center  text-base">
                <svg class="mr-2 -ml-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
                Mina Projekt
              </a>

            </span>
          </button>

        </div>

        <div class="mx-auto w-40 md:w-60 text-center mb-10 ">
          <div class="relative w-40 md:w-64">
            <img class="object-cover w-40 h-40 md:w-60 md:h-60 rounded-full mt-3" src="/Resources/jonathanSvartVit.png" alt="fdfdfd" />
          </div>
        </div>
        
      </div>

      <div class="grid gap-5  py-10 md:grid-cols-3    ">


        <Card
          link="mailto:jonathan.ahlstrom@outlook.com"
          header="Mail"
          subtext="jonathan.ahlstrom@outlook.com"
          imgSrc="/Resources/email.png"

        />
        <Card
          link="https://www.instagram.com/jonathanplz/"
          header="Instagram"
          subtext="jonathanplz"
          imgSrc="/Resources/instagram.png"

        />
        <Card
          link="https://www.linkedin.com/in/jonathan-ahlström-8700a71a1"
          header="LinkedIn"
          subtext="Jonathan Ahlström"
          imgSrc="/Resources/linkedin.png"
        />


      </div>
    </div>
  );
}

export default OmMig;
