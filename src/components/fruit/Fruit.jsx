import React from "react";

const Fruit = ({ title, img, kolvo }) => {
  return (
    <div className="flex flex-col items-center justify-center border border-gray-300 w-28 px-5 py-3 bg-[#F2FCE4] rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-[#eaf2e5] hover:shadow-lg hover:border-[#3BB77E]">
      <div className="fruit__img mb-2 flex-shrink-0 flex items-center justify-center">
        <img
          src={img}
          alt={title}
          className="w-16 h-16 object-cover rounded-md transition-transform transform hover:scale-110"
        />
      </div>
      <div className="fruit__desc flex flex-col items-center justify-center text-center">
        <h3 className="text-md font-semibold mb-1">{title}</h3>
        <p className="text-gray-600 text-xs">{kolvo}</p>
      </div>
    </div>
  );
};

export default Fruit;
