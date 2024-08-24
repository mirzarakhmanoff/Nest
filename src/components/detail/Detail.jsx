import React, { memo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar, FaRegHeart } from "react-icons/fa";
import { useFetch } from "../hooks/useFetch";

const Detail = () => {
  const { id } = useParams();
  const { data } = useFetch(`products/${id}`);

  const [count, setCount] = useState(1);
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 1));

  return (
    <div className="container mx-auto my-10 px-4 md:px-6">
      <div className="mt-5 text-[#3BB77E] flex gap-4 my-4">
        <Link to={"/"}>
          <p className="flex items-center gap-3">
            <IoHomeOutline /> Home
          </p>
        </Link>
        <Link to={"/"}>
          <p className="flex items-center gap-3">
            <IoIosArrowForward /> Product
          </p>
        </Link>
        <p className="text-[#7E7E7E]">{data?.title}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="w-full lg:w-1/2 border rounded-3xl">
          <img src={data?.images[0]} alt={data?.title} className="w-full" />
        </div>

        <div className="flex flex-col gap-4">
          <button className="bg-[#F74B81] w-[100px] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e63d6c] transition-colors duration-300">
            Sale Off
          </button>
          <h2 className="text-2xl lg:text-3xl font-semibold">{data?.title}</h2>

          <div className="rating flex items-center gap-1 mt-1 mb-2">
            <FaStar style={{ color: "#FFD601" }} />
            <span className="text-xs">(4.0)</span>
          </div>

          <div className="flex items-center gap-2">
            <p className="text-2xl font-semibold">
              ${(data?.price * count).toFixed(2)}
            </p>
            <p className="text-xs text-gray-500 line-through">
              ${(data?.price * 1.15).toFixed(2)}
            </p>
          </div>

          <p className="text-gray-700">{data?.description}</p>

          <div className="flex gap-2 items-center flex-wrap">
            <h4 className="font-semibold">Size/Weight:</h4>
            {["50ml", "60ml", "80ml", "100ml", "150ml"].map((size) => (
              <button
                key={size}
                className="bg-gray-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300"
              >
                {size}
              </button>
            ))}
          </div>

          <div className="flex gap-4 items-center mt-4">
            <div className="flex items-center space-x-4">
              <button
                onClick={decrement}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                -
              </button>
              <span className="text-xl font-semibold">{count}</span>
              <button
                onClick={increment}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                +
              </button>
            </div>

            <button
              type="button"
              className="flex items-center gap-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 transition-colors"
            >
              <IoCartOutline /> Add To Cart
            </button>

            <button className="border p-2 rounded-lg hover:bg-red-500 transition-colors duration-300">
              <FaRegHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Detail);
