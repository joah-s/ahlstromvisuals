import Marquee from "react-fast-marquee";

function Bilder1() {

  return (
    
    <Marquee className="!justify-start"
      direction="left"
      speed={50}
      pauseOnClick={true}
      >
      <div className="dark:bg-secondaryDark bg-secondary  text-textColor dark:text-textColorDark " >



          <div class="p-8 opacity-100 flex  scroll-snap-type-x-mandatory snap-x  space-x-20  rounded-xl hover:mix-blend-normal hover:opacity-90 transition-all duration-100">

            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center ">
              <img class="  max-h-40 rounded-2xl shadow-lg max-w-40 " src="/Resources/Videobilder/VidBild-11.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl  shadow-lg max-w-40" src="/Resources/Videobilder/VidBild-13.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl  shadow-lg max-w-40" src="/Resources/Videobilder/VidBild-30.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl  shadow-lg max-w-40" src="/Resources/Videobilder/VidBild-15.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl shadow-lg  max-w-40" src="/Resources/Videobilder/VidBild-5.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl shadow-lg max-w-40" src="/Resources/Videobilder/VidBild-6.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl shadow-lg max-w-40" src="/Resources/Videobilder/VidBild-31.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl shadow-lg max-w-40" src="/Resources/Videobilder/VidBild-33.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl shadow-lg max-w-40" src="/Resources/Videobilder/VidBild-9.jpg" />
            </div>
            <div class="cursor-pointer hover:scale-103 transition-all ease-in-out hover:-translate-y-2 snap-center flex-none scroll-snap-align-center">
              <img class="max-h-40 rounded-2xl shadow-lg max-w-40" src="/Resources/Videobilder/VidBild-10.jpg" />
            </div>
          </div>

        </div>
    </Marquee>
   
  );
}

export default Bilder1;
