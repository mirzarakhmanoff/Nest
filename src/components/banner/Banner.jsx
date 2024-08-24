import React from "react";
const Banner = ({ img, text }) => {
  return (
    <div
      className="h-[300px] bg-no-repeat  rounded-lg mt-4 max-w-[500px] bg-contain flex items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="w-1/2 ml-7 flex flex-col gap-3">
        <h3>{text}</h3>
        <button
          type="button"
          className="w-28 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
