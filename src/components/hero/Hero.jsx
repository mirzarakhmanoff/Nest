import React, { memo } from "react";
import heroBg from "@/assets/heroBg.png";
import Input from "../input/Input";

const Hero = ({ title }) => {
  return (
    <div className="container mx-auto mt-8 px-4 lg:px-0">
      <div
        className="hero h-[400px] md:h-[540px] w-full bg-no-repeat rounded-2xl overflow-hidden flex flex-col justify-center bg-cover"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="px-4 md:px-12 lg:mx-24 flex flex-col gap-3 text-center md:text-left">
          <h1 className="text-[#253D4E] text-4xl md:text-6xl lg:text-7xl max-w-[100%] lg:max-w-[600px]">
            {title}
          </h1>
          <p className="text-[#7E7E7E] text-xl md:text-2xl lg:text-3xl">
            Save up to 50% off on your first order
          </p>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
