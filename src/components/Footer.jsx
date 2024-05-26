import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFlickr } from "react-icons/fa";
import { Fa500Px } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="max-w-full flex md:justify-evenly md:flex-row flex-col m-3 p-3 justify-center items-center mt-12 gap-4 bg-[rgb(40,40,40)] md:max-h-72 h-screen">
      <div className="max-w-sm flex justify-center items-center flex-col">
        <h1 className="text-white text-2xl font-medium">
          <span className="text-yellow-500">[ </span>ABOUT US{" "}
          <span className="text-yellow-500">]</span>
        </h1>
        <p className="text-white text-[18px] mt-4">
          We are a complete solution provider in the field of Industrial
          Automation, Instrumentation, and Electrical
        </p>
      </div>
      <div className="max-w-md flex justify-center  flex-col text-white ">
        <h1 className="text-white text-2xl font-medium text-center mb-4">
          <span className="text-yellow-500">[ </span>ADDRESS
          <span className="text-yellow-500">]</span>
        </h1>
        <span className="text-left">
          <FaLocationArrow className="inline-block m-2 hover:text-yellow-500" />{" "}
          F-331, F-block, Sector -63, Noida – 201301
        </span>
        <span className="text-left">
          <FaPhoneAlt className="inline-block m-2 hover:text-yellow-500" />{" "}
          0120-4138593, 9311222166
        </span>
        <span className="">
          <MdAttachEmail className="inline-block m-2 text-left  hover:text-yellow-500" />{" "}
          s.sonukarn.1996@gmail.com
        </span>
      </div>
      <div className="max-w-sm flex min-h-[135px] items-center flex-col">
        <h1 className="text-white text-2xl font-medium">
          <span className="text-yellow-500">[ </span>ABOUT US{" "}
          <span className="text-yellow-500">]</span>
        </h1>
        <div className="flex gap-2 mt-5">
          <span className="social w-9 h-9 bg-gray-600 flex items-center justify-center cursor-pointer hover:bg-slate-200 text-xl font-medium">
            <FaFacebookF className="icon text-center text-white" />
          </span>
          <span className="w-9 h-9 bg-gray-600 rounded flex items-center justify-center hover:bg-slate-300 text-xl social font-medium">
            <FaTwitter className="icon text-center text-white" />
          </span>
          <span className="w-9 h-9 bg-gray-600 rounded flex items-center justify-center hover:bg-white social text-xl font-medium">
            <FaInstagramSquare className="icon text-center text-white" />
          </span>
          <span className="text-xl font-medium w-9 h-9 bg-gray-600 rounded flex items-center justify-center hover:bg-white social">
            <FaFlickr className="icon text-center text-white" />
          </span>
          <span className="text-xl font-medium w-9 h-9 bg-gray-600 rounded flex items-center justify-center hover:bg-white social">
            <Fa500Px className="icon text-center text-white" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

{
  /* <div className="max-w-sm flex justify-center items-center flex-col text-white">
<h1 className="text-white text-2xl font-medium mb-8">
  <span className="text-yellow-500">[ </span>SOCIAL MEDIA
  <span className="text-yellow-500">]</span>
</h1>

</div> */
}
