import React, { useState } from "react";
import Navheader from "../components/Navheader";
import Section1 from "../components/business/Section1";
import Footer from "../components/Footer";

const Business = () => {
  const [activeBtn, setActiveBtn] = useState(1);
  const businessBtn = [
    {
      id: 1,
      btnNm: "For Salon"
    },
    {
      id: 2,
      btnNm: "For Brands"
    }
  ];
  return (
    <main className="">
      <Navheader custClass="bg-white text-hero" />

      <div className="flex  justify-center bg-white  lg:py-14 ">
        {businessBtn.map((item, key) => (
          <div
            className={` ${
              activeBtn === item.id ? "bg-hero text-white" : "bg-white"
            } rounded-md   drop-shadow-lg px-5 py-2`}
            onClick={() => {
              setActiveBtn(item.id);
            }}
          >
            <button className="text-lg font-medium font-lexend">
              {item.btnNm}
            </button>
          </div>
        ))}
      </div>
      <div className="lg:pb-20">
        <Section1 activeTab={[activeBtn, setActiveBtn]} />
      </div>
      <Footer />
    </main>
  );
};

export default Business;
