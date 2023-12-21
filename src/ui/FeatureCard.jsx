import React from "react";
import { GiCheckMark } from "react-icons/gi";
const FeatureCard = ({ sec1Data }) => {
  return (
    <div className="   h-full">
      {/* ----------- Section -1 -------------- */}
      <div className="flex">
        <div className="space-y-7">
          <h2 className="font-lexend lg:text-5xl lg:leading-[1.3] font-semibold">
            {sec1Data[0].title}
          </h2>
          {sec1Data &&
            sec1Data[0].des.map((item, key) => (
              <p className="font-mukta pr-52 lg:text-2xl text-[rgba(102,105,105,1)] lg:leading-[1.7]">
                {item.des}
              </p>
            ))}
        </div>
        <div className="flex flex-1"></div>
        <div className="w-full"></div>
      </div>

      {/* -------- Section -2 ----------- */}
{sec1Data&&sec1Data[1].sec2Pair.map((item,key)=>(

      <div className={`flex lg:pt-40  lg:pb- ${item.hidSec?'hidden':''}  `}>
        <div className="w-full"></div>
        <div className="flex flex-1"></div>
        <div className="space-y-7  ">
          <h2 className="lg:text-4xl w-[50rem] font-semibold lg:leading-[1.4] font-lexend text-[#020202]">
            {item.title}
          </h2>
          <p className=" w-  lg:text-lg lg:leading-[1.7]">{item.des}</p>
          <div className="space-y-3">
            {item.bullPoint.map((item, key) => (
              <div className="flex items-center gap-4">
                <GiCheckMark />
                <p className="">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
))}

      {/* ------------- Section -3 --------------- */}

      <div className="lg:py-32 space-y-10  ">
        {sec1Data[2].conDes.map((item, key) => (
          <div
            className={`flex  ${
              (item.id && key + 1) % 2===0 ? "flex-row-reverse" : ""
            } lg:py-20 `}
          >
            <div className="w-full"></div>

            <div className="flex flex-1"></div>
            <div className="">
              <h2 className="lg:text-4xl font-bold font-lexend">
                {item.title}
              </h2>
              <div className="space-y-5 pt-7">
                <p className=" w-[40rem] text-lg leading-[1.7]">{item.des}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;