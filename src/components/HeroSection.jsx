import React from "react";
import heroImg from "../assets/hero.jpeg";
import img1 from "../assets/image4.jpg";
import img2 from "../assets/image5.jpg";
import { ReactTyped } from "react-typed";

const HeroSection = () => {
  return (
    <section
      style={{ "--image-url": `url(${heroImg})` }}
      className=" bg-[image:var(--image-url)] bg-cover bg-center h-[90vh] backdrop-blur-sm overflow-hidden"
    >
      <div className="w-screen h-full flex flex-wrap justify-center lg:justify-end overflow-hidden relative">
        {/* <ReactTyped strings={[]} typeSpeed={40} className="text-3xl" /> */}
        <ReactTyped
          strings={["Aarvisac Control Private Limited"]}
          typeSpeed={40}
          backSpeed={50}
          attr="value"
          loop
          className="w-full md:w-[80%] sm:ml-[20%] lg:w-[60%]  mt-32"
        >
          <input
            type="text"
            className="outline-none text-2xl md:text-4xl text-yellow-500 font-bold bg-transparent w-full"
          />
        </ReactTyped>
        <div className="w-[20%] h-auto absolute top-60 right-24">
          <img src={img1} className="w-full h-auto" alt="imgage" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
