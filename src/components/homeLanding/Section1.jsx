import React from "react";
import HeroBgV from "../../assets/video/BrushSparkle.mp4";

const Section1 = () => {
  return (
    <main className=" relative " style={{ backgroundClip: `url(${HeroBgV})` }}>
      <video autoPlay muted loop playsInline className="h-fit">
        <source src={HeroBgV} type="video/mp4" />
       
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0   w-full lg:px-32 lg:pt-32">
        <div className="">
          <h1 className="text-white font-lexend lg:text-[4rem] lg:leading-[1.2] ">
            <span className="lg:text-[7rem] font-bold">STYLE</span> <br />{" "}
            STARTS WITH YOU!
          </h1>
        </div>
        <div className="">
          <p className="text-2xl text-white leading-[1.6] font-mukta lg:pt-2 ">
            We aim to empower beauty enthusiasts and salon professionals <br />{" "}
            through a collaborative network, utilizing technology to <br />{" "}
            enhance accessibility and convenience in the beauty and <br />{" "}
            wellness industry.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Section1;
