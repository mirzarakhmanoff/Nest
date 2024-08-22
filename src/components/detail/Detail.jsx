import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "@/api/index";
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [count, setCount] = useState(1);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 1));
  console.log(data);
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-5 text-[#3BB77E] flex gap-4">
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
        <div className="flex gap-12">
          <div className="w-1/2 b border rounded-3xl">
            <img src={data?.images[0]} alt="" />
          </div>
          <div>
            <button className="bg-[#F74B81] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#e63d6c] transition-colors duration-300">
              Sale Off
            </button>
            <h2>{data?.title}</h2>
            <div className="rating flex items-center gap-12 mt-1 mb-2">
              <FaStar style={{ color: "#FFD601" }} />
              <span className="text-xs">(4.0)</span>
            </div>
            <p>${data?.price}</p>
            <p className="text-xs text-gray-500 line-through">
              {data?.price * 1.15}
            </p>
            <p>{data?.description}</p>

            <div className="buttons flex gap-4 items-center ">
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
                class="flex items-center gap-2 focus:outline-none mt-3 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              >
                <IoCartOutline /> Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
