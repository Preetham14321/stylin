import React from "react";
import Sec4hero from "../../assets/svg/sec4hero.svg";
import { Link } from "react-router-dom";
const Section4 = () => {
  return (
    <main
      className=" h-[460px]  lg:mx-28 lg:pt-24 lg:px-12   lg:bg-none  lg:flex justify-between   bg-no-repeat bg-cover  "
      style={{ backgroundImage: `url(${Sec4hero})` }}
    >
      <div className="lg:pl-[27rem] lg:pt-20">
        <h1 className="lg:text-3xl lg:leading-[44px] font-bold font-lexend text-white">
          your <br /> clients <br /> are <br /> going to <br /> google <br />{" "}
          you
        </h1>
      </div>

      <div className="">
        <h1 className="lg:text-[42px] lg:leading-[54px] text-white font-bold font-lexend">
          Salon Management <br /> Software
        </h1>
        <p className="text-white lg:text-lg lg:leading-[28px] font-mukta lg:py-4">
          Elevate Your Business Experience with STYLIN's All-in <br />
          -One Salon Management Powerhouse by seamlessly <br /> organising
          appointments, tracking growth, and <br /> exploring effective
          marketing opportunities.
        </p>
        <Link to="/feature/salonservice" >
        <button className="bg-white lg:px-8 lg:py-2 text-[#38BDF8] font-lexend rounded-[4px] lg:mt-5">
          Learn More
        </button>
        </Link>
      </div>
    </main>
  );
};

export default Section4;
