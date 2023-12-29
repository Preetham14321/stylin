import React from "react";
import HeroBgV from "../../assets/video/BrushSparkle.mp4";
import HeroImg from '../../assets/svg/herosectionimg.svg'

const Section1 = () => {
  return (
    <main className=" lg:h -screen w-full   relative " style={{ backgroundClip: `url(${HeroBgV})` }}>
      <video autoPlay muted loop playsInline poster={HeroImg} className=" w-full mt-14 lg:mt-0 lg:h-fit">
        <source src={HeroBgV} type="video/mp4" />
       
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 flex flex-col justify-center lg:justify-start  h-40  w-full lg:px-32 lg:pt-32">
        <div className="">
          <h1 className="text-white text-center lg:text-start mt-2 lg:mt-0 font-lexend lg:text-[3rem] xl:text-[4rem] lg:leading-[1.3] xl:leading-[1.2] ">
            <span className="lg:text-[5rem] xl:text-[7rem] font-bold">STYLE</span> <br className="hidden lg:block" />{" "}
            STARTS WITH YOU!
          </h1>
        </div>
        <div className=" ">
          <p className="text-sm px-5 lg:px-0 text-center lg:text-start lg:text-2xl text-white lg:leading-[1.6] font-mukta pt-2 ">
            We aim to empower beauty enthusiasts and salon professionals <br className="hidden lg:block" />{" "}
            through a collaborative network, utilizing technology to <br className="hidden lg:block" />{" "}
            enhance accessibility and convenience in the beauty and <br  className="hidden lg:block"/>{" "}
            wellness industry.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Section1;
