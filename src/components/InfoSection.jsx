import React from "react";

const InfoSection = () => {
  return (
    <section className="mt-16 h-full w-full flex flex-wrap flex-col items-center text-center lg:p-[6.5rem]">
      <div className="w-full h-auto flex flex-wrap flex-col items-center">
        <p className="font-bold text-2xl md:text-3xl text-center">
          An Introduction to Automation and Electrical Solution Provider
        </p>
        <div className="w-40 h-1 border-b-4 border-yellow-700 mt-2 rounded-2xl"></div>
      </div>
      <div className="w-100 md:p-4">
        <p className="text-justify font-medium text-xl p-[1rem] md:p-[3rem]">
          We take an opportunity to introduce ourselves as a growing
          organization, established in year 2021.The Company is being run by a
          team of qualified, experienced and dedicated entrepreneurs. We have
          complete setup for Marketing, Design- Engineering, Procurements,
          Manufacturing, Supply, Erection, Testing, Commissioning and Annual
          Maintenance of Automation and Electrical Products and Solutions for
          Industry segments
        </p>
      </div>
    </section>
  );
};

export default InfoSection;
