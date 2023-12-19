import React from "react";
import Navheader from "../components/Navheader";
import teamHero from "../assets/video/teams.mp4";
import Section1 from "../components/team/Section1";
import Footer from "../components/Footer";
const Team = () => {
  return (
    <main className="">
      <Navheader  />
        <div className="h-screen relative ">
          <video autoPlay muted loop playsInline className="">
            <source src={teamHero} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="absolute h-[114%] w-full top-0 flex justify-center items-center"
            style={{ background: "rgba(32, 32, 32, 0.82)" }}
          >
            <div className="lg:pb-40">
              <h1 className="text-white text-center lg:leading-[60px] font-lexend lg:text-4xl font-semibold ">
                <span className="lg:text-6xl    font-semibold">
                  STYLIN Team
                </span>{" "}
                <br /> Visionaries Crafting Beauty's Future Together
              </h1>

              <p className="text-white font-mutka text-center lg:text-xl lg:pt-3">
                Meet the passionate minds driving innovation and shaping
                STYLIN's journey. Our diverse team of visionaries brings <br />{" "}
                creativity, expertise, and a shared commitment to redefining
                beauty experiences in the digital era.
              </p>
            </div>
          </div>
        </div>

    {/* ------------ Team Images ----------- */}

    <div className="lg:pb-28 lg:pt-28">
        <Section1/>
    </div>

    <Footer/>
    </main>
  );
};

export default Team;
