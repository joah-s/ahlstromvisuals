import Marquee from "react-fast-marquee";

function Bilder3() {

  return (

    <Marquee className="!justify-start"
      direction="left"
      speed={30}
    >
      <div className="" >



      <div class="px-8 opacity-100 flex  scroll-snap-type-x-mandatory snap-x  space-x-20  rounded-xl hover:mix-blend-normal hover:opacity-90 transition-all duration-100">

          <div class=" cursor-pointer transition-all ease-in-out  snap-center flex-none scroll-snap-align-center ">
            <img class="  h-8 rounded-2xl     " src="/Resources/ljudspår bild1.png" />
          </div>

        </div>

      </div>
    </Marquee>



  );
}

export default Bilder3;
