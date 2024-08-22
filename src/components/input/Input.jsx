import React from "react";
import { IoIosSend } from "react-icons/io";

const Input = () => {
  return (
    <div className="hero__input flex items-center  rounded-2xl w-max bg-white ">
      <div className="p-3 flex items-center">
        <IoIosSend />
        <input
          type="text"
          placeholder="Your emaill address"
          className=" bg-transparent outline-none pr-20 pl-2 max-w-[300px]"
        />
      </div>
      <button className="border bg-[#3BB77E] py-3 px-4 rounded-2xl text-white">
        Subscribe
      </button>
    </div>
  );
};

export default Input;
