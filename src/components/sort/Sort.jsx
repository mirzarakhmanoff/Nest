import React, { memo, useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Sort = ({ onSortChange, sort }) => {
  const { data: categories } = useFetch(`products/category-list`);

  const handleChange = (event) => {
    const value = event.target.value;
    onSortChange(value);
  };
  return (
    <div className="container mx-auto ">
      <select
        onChange={handleChange}
        value={sort}
        className="w-[200px] ml-10 my-5 p-3 border border-gray-300 rounded-lg shadow-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
      >
        <option value="all">All</option>
        {categories?.map((e) => (
          <option key={e} value={e}>
            {e}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Sort);
