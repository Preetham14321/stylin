import React from "react";
import Navheader from "../components/Navheader";
import teamHero from "../assets/video/teams.mp4";
import teamMobHero from '../assets/svg/teamMobHero.svg'
import Section1 from "../components/team/Section1";
import Footer from "../components/Footer";
const Team = () => {
  return (
    <main className="">
      <Navheader  />
        <div className="lg:h-screen relative ">

          <video autoPlay muted loop playsInline className="hidden lg:block ">
            <source src={teamHero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="lg:hidden">
    <img src={teamMobHero} alt="" className="w-full" />
          </div>

          <div
            className="absolute lg:bg-[rgba(32,32,32,0.82)] h-full lg:h-[114%] w-full top-0  flex justify-center  items-center pt-10"
            
          >
            <div className="lg:pb-40">
              <h1 className="text-white text-center leading-[1.4]  lg:leading-[60px] font-lexend text-xs lg:text-4xl font-semibold ">
                <span className=" text-lg lg:text-6xl leading-[2.5] uppercase  font-semibold">
                  STYLIN Team
                </span>{" "}
                <br /> Visionaries Crafting Beauty's Future <br className="lg:hidden" /> Together
              </h1>

              <p className="  text-white font-mutka text-center text-[10px] leading-[1.7] lg:leading-[1.8] lg:text-xl lg:pt-3 px-10 lg:px-0 pt-2">
                Meet the passionate minds driving innovation and shaping
                STYLIN's journey. Our diverse team of visionaries brings <br className="hidden lg:block" />{" "}
                creativity, expertise, and a shared commitment to redefining
                beauty experiences in the digital era.
              </p>
            </div>
          </div>
        </div>

    {/* ------------ Team Images ----------- */}

    <div className="pb-10 lg:pb-28 lg:pt-28">
        <Section1/>
    </div>

    <Footer/>

    </main>
  );
};

export default Team;
