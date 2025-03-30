import { useState, useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

function KreativProcess() {
  const [activeTab, setActiveTab] = useState('planering');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

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

  return (


    <div className=" dark:text-textColorDark text-textColor ">

      <div className="md:mt-10 mb-0 mx-auto lg:max-w-screen-xl md:max-w-full">
        <h2 className=" text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl text-center">
          Den kreativa processen
        </h2>
        <p className="text-gray-700  dark:text-white  text-sm sm:text-lg mt-3 text-center">
          Vägen från idé till färdig produkt.
          Videorna skapas iterativt <br />genom kontenuerlig kontakt med kunden.
        </p>
      </div>

      <div class="mt-20 md:mt-36">
        <ul class=" md:grid md:grid-cols-3 md:col-gap-10 md:row-gap-10  md:rounded-2xl  ">

          <li class="p-4 mr-1 pb-10 text-center  sm:rounded-s-2xl md:bg-black md:bg-opacity-5 md:shadow-sm">
            <div class="flex flex-col items-center">
              <div class="flex-shrink-0 relative top-0 -mt-10 ">
                <div
                  class="shadow-md flex items-center justify-center mt-5 md:mt-0 h-10 w-20 md:h-15 md:w-15 rounded-full bg-secondary dark:bg-secondaryDark text-textColor dark:text-white border-0 border-white text-xl font-semibold">
                  <img class="h-6 dark:invert " src="/Resources/'Planning search result.png"></img>

                </div>
              </div>
              <div class="mt-4">
                <h4 class="text-lg leading-6 font-semibold text-textColor dark:text-white ">Planering</h4>
                <p class="text-left md:text-center mt-2 text-base leading-6 text-gray-500 dark:text-white">
                  Idégenerering för att komma fram till budskap och tema för projektet.
                </p>
              </div>
            </div>
          </li>
          <li class="p-4 mr-1 pb-10 text-center   md:bg-black md:bg-opacity-5 md:shadow-sm">
            <div class="flex flex-col items-center">
              <div class="flex-shrink-0 relative top-0 -mt-10 ">
                <div
                  class=" shadow-md flex items-center justify-center mt-5 md:mt-0 h-10 w-20 md:h-15 md:w-15 rounded-full bg-secondary dark:bg-secondaryDark text-textColor dark:text-white border-0 border-white text-xl font-semibold">
                        <img class="dark:invert h-6" src="/Resources/'Recording icon.png"></img>

                </div>
              </div>
              <div class="mt-4">
                <h4 class="text-lg leading-6 font-semibold text-textColor dark:text-white">Inspelning</h4>
                <p class="text-left md:text-center mt-2 text-base leading-6 text-gray-500 dark:text-white">
                  Klipp sollas, specialeffekter skapas och färger justeras.
                </p>
              </div>

            </div>
          </li>
         
          <li class="p-4 mr-1 pb-10 text-center  sm:rounded-r-2xl md:bg-black md:bg-opacity-5 md:shadow-sm">
            <div class="flex flex-col items-center">
              <div class="flex-shrink-0 relative top-0 -mt-10 ">
                <div
                  class=" shadow-md flex items-center justify-center mt-5 md:mt-0 h-10 w-20 md:h-15 md:w-15 rounded-full bg-secondary dark:bg-secondaryDark text-textColor dark:text-white border-0 border-white text-xl font-semibold">
                  <img class=" h-6 dark:invert" src="/Resources/Movie edit setting.png"></img>

                </div>
              </div>
              <div class="mt-4">
                <h4 class="text-lg leading-6 font-semibold text-textColor dark:text-white">Postproduktion</h4>
                <p class="text-left md:text-center mt-2 text-base leading-6 text-gray-500 dark:text-white">
                  Det viktigaste under hela processen, scenerna fångas på film.
                </p>
              </div>

            </div>
          </li>
          <a className="  md:hidden block">
            

          </a>

        </ul>
      </div>



      <div className="w-full text-center md:text-left  ">

        

        



      </div>



    </div>

  );
}

export default KreativProcess;
