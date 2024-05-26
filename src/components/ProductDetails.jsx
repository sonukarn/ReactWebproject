import React from "react";
import img2 from "../assets/image2.jpeg";
import mobilePic from "../assets/image3.jpg";
import { FaLightbulb } from "react-icons/fa6";
import { FaSatelliteDish } from "react-icons/fa";
import { FaArrowsAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
const ProductDetails = () => {
  return (
    <section>
      <div className=" w-[90%] h-auto flex md:flex-row flex-col justify-center md:justify-start mb-4">
        <div className="max-w-2xl p-5">
          <img
            src={img2}
            alt="image"
            className="max-w-full rounded h-auto px-5"
          />
        </div>
        <div className="max-w-xl mt-12 ml-4">
          <div className=" p-3 flex flex-col gap-4 font-normal text-[18px]">
            <div className="flex items-center gap-2 hover:text-blue-800 transition ease-in-out delay-150 duration-300">
              <span>
                <FaCheck />
              </span>
              <span>
                Supply of DCS for Power, Steel, Cement, Water Treatment etc
              </span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-800 transition ease-in-out delay-150 duration-300">
              <span>
                <FaCheck />
              </span>
              <span>Consultancy</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-800 transition ease-in-out delay-150 duration-300">
              <span>
                <FaCheck />
              </span>
              <span>Turnkey Execution</span>
            </div>
          </div>
          <button className="p-3 bg-yellow-500 border-solid border-2 border-black font-medium">
            know more About our Activities
          </button>
        </div>
      </div>
      <div className="max-w-full p-5">
        <h1 className="text-center font-medium p-2 text-5xl">
          The smartest way to manage your plant
        </h1>
        <div className="w-full h-auto md:flex justify-evenly mt-16 p-5">
          <div className="flex flex-col max-w-lg gap-16">
            <div>
              <p className="font-normal md:text-xl">
                Aarvisac control Pvt Ltd is a digital transformation enabler,
                empowering plants & enterprises by bringing digital & electrical
                solutions to the core of their business using the advanced
                emerging technologies.
              </p>
            </div>
            <div>
              <p className="font-normal md:text-xl">
                With agile work practices and a design-driven approach, we are
                on a mission to help enterprises and businesses in expediting
                their IIoT and Industry 4.0 initiatives!
              </p>
            </div>
          </div>
          <div className="max-w-xl mt-7">
            <div>
              <img
                src={mobilePic}
                alt="mobileImage"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full h-auto flex flex-col md:flex-row justify-center items-center mt-9 gap-4">
        <div className="shadow-xl bg-white shadow-gray-500 rounded p-5 max-w-sm flex items-center flex-col md:min-h-[260px]">
          <div className="p-4 text-[rgb(4,83,118)] font-normal text-4xl">
            <FaLightbulb />
          </div>
          <h1 className="text-[rgb(4,83,118)] text-4xl font-bold">
            Our Vision
          </h1>
          <div className="text-justify p-4">
            <p>
              Propelling towards being the leading choice across various
              industries.
            </p>
          </div>
        </div>
        <div className="shadow-xl bg-white shadow-gray-500 rounded p-5 max-w-sm flex items-center flex-col md:min-h-[260px]">
          <div className="p-4 text-[rgb(4,83,118)] font-normal text-4xl">
            <FaArrowsAlt />
          </div>
          <h1 className="text-[rgb(4,83,118)] text-4xl font-bold">
            Our Mission
          </h1>
          <div className="text-justify p-4">
            <p>
              Propelling towards being the leading choice across various
              industries.
            </p>
          </div>
        </div>
        <div className="shadow-xl bg-white shadow-gray-500 rounded p-5 max-w-sm flex items-center flex-col md:min-h-[260px]">
          <div className="p-4 text-[rgb(4,83,118)] font-normal text-4xl">
            <FaSatelliteDish className="" />
          </div>
          <h1 className="text-[rgb(4,83,118)] text-4xl font-bold">our story</h1>
          <div className="text-justify p-4">
            <p>
              Propelling towards being the leading choice across various
              industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
