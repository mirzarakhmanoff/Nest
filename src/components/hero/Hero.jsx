import React from "react";
import heroBg from "@/assets/heroBg.png";
import Input from "../input/Input";

const Hero = ({ title }) => {
  return (
    <div className="container mx-auto mt-8">
      <div
        className="hero h-[540px] w-full bg-no-repeat   rounded-2xl   overflow-hidden flex flex-col justify-center bg-cover "
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="mx-24 flex flex-col gap-3">
          <h1 className="text-[#253D4E] text-7xl max-w-[600px]">{title}</h1>
          <p className="text-[#7E7E7E] text-3xl">
            Save up to 50% off on your first order
          </p>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default Hero;
