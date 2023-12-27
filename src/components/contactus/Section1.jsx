import React from "react";
import FAQ from "../../pages/FAQ";
import FaqSec1 from "../faq/Section1.jsx";
import { Link } from "react-router-dom";

const Section1 = () => {
  return (
    <div className="">
      <div className="bg-hero h-full text-white lg:pb-40 rounded-b-[150px]">
        <h2 className="lg:text-5xl font-lexend font-bold text-center lg:pt-40">
          Let's Beautify Your Connection
        </h2>
        <p className="text-center font-mukta lg:text-2xl lg:pt-5">
          At Stylin, every interaction is a brushstroke on the canvas of beauty.
        </p>
      </div>

      <div className="-mt-24">
        <FaqSec1 custClass="hidden" />
      </div>
    </div>
  );
};

export default Section1;

export const ContactusForm = ({
  formData = [],
  dropValue = [],
  custClass = "w-[50%]"
}) => {
  return (
    <form
      action=""
      className={`bg-white ${custClass}  m-auto text-[#020202] lg:p-10 rounded-lg drop-shadow-lg `}
    >
      <div className="grid grid-cols-2 gap-5">
        {formData.map((item, key) => (
          <div className="flex flex-col space-y-">
            <label
              htmlFor={item.name}
              className={`font-lexend ${item.isDrop ? "hidden" : ""} `}
            >
              {item.label}{" "}
              <span
                className={`${
                  item.isReq !== false ? "" : "hidden"
                } text-[#de594a]`}
              >
                *
              </span>{" "}
            </label>

            <input
              type="text"
              id={item.name}
              name={item.name}
              placeholder={item.placeholder}
              className={` ${
                item.isDrop ? "hidden" : ""
              } border rounded-md drop-shadow-md mt-2 py-1 px-2 lg:w-60 border-[#625f5f6e] focus:outline-none`}
            />

            <label
              className={` ${item.isDrop ? "" : "hidden"} font-lexend`}
              htmlFor=""
            >
              {item.label} 
              <span
                className={`  text-[#de594a]`}
              >
                *
              </span>
            </label>
            <select
              className={` ${
                item.isDrop ? "" : "hidden"
              }  mt-2 border rounded-md drop-shadow-md py-1 px-2 lg:w-60 border-[#625f5f6e]  focus:outline-none`}
              id="dropdown"
              value={item.label}
            >
              {dropValue.map((items, key) => (
                <option value="2">{items}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <div className="lg:pt-5 space-y-2">
        <label htmlFor="message " className="font-lexend  ">
          Your Message <span className={` text-[#de594a]`}>*</span>{" "}
        </label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          className="border  rounded-md drop-shadow-md py-1 px-2 lg:w-full border-[#625f5f6e] focus:outline-none "
        ></textarea>
      </div>
      <div className="flex gap-4 py-2  items-center">
        <input type="checkbox" className="text-lg " />
        <p className="text-lg font-mukta">
          I agree with{" "}
          <span className="text-[#527fde] underline">
            <Link to="/terms">Terms of Service</Link>
          </span>{" "}
          and{" "}
          <span className="text-[#527fde] underline">
            <Link to="/privacy">Privacy Policy</Link>
          </span>
        </p>
      </div>
      <div className="flex gap-4 py-2  items-center">
        <input type="checkbox" className="text-lg " />
        <p className="text-lg font-mukta">
          I would like to receive the latest information about service updates
          and special offers from Stylin
        </p>
      </div>
      <button
        type="submit"
        className="border py-1 px-4 rounded-md bg-[#6e6767] hover:bg-hero text-white font-semibold font-lexend text-sm"
      >
        Submit
      </button>
    </form>
  );
};
