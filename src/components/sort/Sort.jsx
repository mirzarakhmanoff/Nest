import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";

const Sort = ({ onSortChange }) => {
  const { data: categories } = useFetch(`products/category-list`);
  const [sort, setSort] = useState("");

  const handleChange = (event) => {
    const value = event.target.value;
    setSort(value);
  };
  console.log(sort);
  return (
    <div>
      <select
        onChange={handleChange}
        value={sort}
        className="w-[200px] p-3 border border-gray-300 rounded-lg shadow-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
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

export default Sort;
