import React from 'react';
import Card from './Card.js';
import { steps } from './steps.js';

const PortfolioInfo = ({ scrollToElement }) => {
  return (
    <div className="md:grid-cols-2 grid grid-cols-1 sm:py-10 ">
      <div className="sm:mx-20 md:mx-0">
        <Card
          link="https://youtube.com/playlist?list=PLZAvM3hxL0Q5S2p3t0ChGuCInerzvuTy2"
          header="Spellista på YouTube"
          subtext="Kolla igenom alla klipp!"
          imgSrc="/Resources/youtube.png"
        />
      </div>

      <div className="pt-8 pr-4 pl-4 hidden md:block">
          <div className="flex justify-center items-center">
            <img src="/Resources/playlist.png" className="max-h-44 opacity-10" alt="Playlist" />
          </div>
      </div>
    </div>
  );
};

export default PortfolioInfo;
