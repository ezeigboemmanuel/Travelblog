import React from "react";

const About = () => {
  return (
    <div className="hidden md:block">
      <div className="bg-[#ff756b] flex items-center px-14 py-7 md:mx-8 lg:mx-20 my-10">
        <div className="transform -rotate-90 origin-center">
          <p className="text-white text-2xl pt-10">ABOUT</p>
        </div>
        <div className="">
          <p className="text-white text-[14px]">
            Welcome to ZTravel, your go-to source for all things travel! From
            exotic destinations to practical tips, we've got you covered. We
            bring exclusive travel guide from our travellers all round the
            world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
