import React from "react";
import Marquee from "react-fast-marquee";
const AnimatedAgencyCarousel = () => {
  return (
    <div className="overflow-hidden mx-auto rotate-[12deg] max-w-[50vw] xl:max-w-[90vw]  min-h-[40vh] marqueeslider">
      <Marquee
        className="!justify-start !gap-[74px]"
        direction="right"
        speed={50}
        pauseOnClick={true}
        gradient={false}
      >
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              React
            </div>
          </div>
          <div className="bg-[#FFF382] shadow-lg h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-[#FFF382] border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-black text-bold">
              NextJs
            </div>
          </div>
          <div className="bg-[#212633] shadow-lg h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg- border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Tailwind
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Php
            </div>
          </div>
          <div className="bg-[#138765] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Laravel
            </div>
          </div>
          <div className="bg-[#15161D] shadow-red-600 shadow-2xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nodejs
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-[#0067EE] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Python
            </div>
          </div>
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Golang
            </div>
          </div>
          <div className="bg-white shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              React
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-[#11B8B8] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Html
            </div>
          </div>
          <div className="bg-white shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Css
            </div>
          </div>
          <div className="bg-[#BF4643] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Bootstrap
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nodejs
            </div>
          </div>
          <div className="bg-[#F1641D] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              laravel
            </div>
          </div>
          <div className="bg-red-400 shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Django
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              React
            </div>
          </div>
          <div className="bg-[#138765] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Tailwind
            </div>
          </div>
          <div className="bg-[#15161D] shadow-red-600 shadow-2xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Css
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-[#0067EE] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Django
            </div>
          </div>
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              AWS
            </div>
          </div>
          <div className="bg-white shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nodejs
            </div>
          </div>{" "}
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-[#11B8B8] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              TypeScript
            </div>
          </div>
          <div className="bg-white shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nodejs
            </div>
          </div>
          <div className="bg-[#BF4643] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nodejs
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              AngularJs
            </div>
          </div>
          <div className="bg-[#F1641D] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Vuejs
            </div>
          </div>
          <div className="bg-red-400 shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nextjs
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nodejs
            </div>
          </div>
          <div className="bg-[#138765] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Reactjs
            </div>
          </div>
          <div className="bg-[#15161D] shadow-red-600 shadow-2xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Laravel
            </div>
          </div>
        </div>
        <div className=" my-5 rotate-45 [&>*]:my-5">
          <div className="bg-[#0067EE] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Php
            </div>
          </div>
          <div className="bg-black shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Django
            </div>
          </div>
          <div className="bg-white shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Typescript
            </div>
          </div>
        </div>
        <div className="my-5 rotate-45 [&>*]:my-5">
          <div className="bg-[#11B8B8] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Reactjs
            </div>
          </div>
          <div className="bg-white shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nodejs
            </div>
          </div>
          <div className="bg-[#BF4643] shadow-blue-300 shadow-xl h-[128px] w-[128px] rounded-[16px] cursor-pointer hover:scale-105 overflow-hidden hover:translate-x-2 hover:-translate-y-2  transition-all ease-in-out duration-300 relative group">
            <div className="absolute bottom-12 -right-4 -rotate-90 hidden transition-all ease-in-out duration-500  group-hover:block bg-black border border-white px-5 py-1 rounded-lg text-sm shadow-lg text-white text-bold">
              Nextjs
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};
export default AnimatedAgencyCarousel;
// .marquee {
//     justify-content: space-around !important;
//   }
//   .marqueeslider .marquee
//   {
//     gap: 80px !important;
//   }
