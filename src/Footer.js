import React from 'react';
import Card from './Card'; // Import your reusable component


const Footer = () => {
  return (
    <div id='footerID' class="flex items-center justify-center text-textColor dark:text-textColorDark md:my-0 ">
      
      <section>
      <div class="divider "></div>

        <div class="mx-auto max-w-7xl px-5 mt-10   ">

          <div class="py-16 md:py-0 mx-auto text-center">
          <div className="md:mt-10 mb-0 mx-auto lg:max-w-screen-xl md:max-w-full">
  <h2 className=" text-3xl sm:text-4xl font-bold md:text-5xl lg:text-6xl text-center">
  </h2>
  
</div>

              <img className="mx-auto text-center h-36"src="/Resources/AhlstromVisualsLogo.png"></img>
            <p className="text-textColor dark:text-white text-base md:text-lg text-center mb-2">
  Enskild firma inom videoproduktion skapad av Jonathan Ahlström
  </p>
            <span className="mb-24 badge  badge-outline border border-1  dark:text-white dark:border-white bg-blend-luminosity">Uppdaterad 3 mars 2024</span>

          </div>
          
        </div>
      </section>

    </div>




  );
};

export default Footer;
