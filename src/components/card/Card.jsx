import React, { memo } from "react";
import { FaStar, FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useStateValue } from "../context";

const Card = ({ img, title, id, price, rating }) => {
  const [{ wishlist, cart }, dispatch] = useStateValue();

  const handleWishlistClick = () => {
    dispatch({
      type: "TOGGLE_WISHLIST",
      payload: { id, img, title, price, rating },
    });
  };

  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, img, title, price, rating },
    });
  };

  return (
    <div className="relative border border-gray-300 rounded-lg shadow-md w-[220px] h-[320px] px-3 py-4 bg-white flex flex-col transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:bg-gray-100">
      <button
        onClick={handleWishlistClick}
        className="absolute top-2 right-2 p-2 text-gray-500 hover:text-red-500 transition-colors duration-300"
      >
        {wishlist?.some((item) => item.id === id) ? (
          <FaHeart className="text-red-500" />
        ) : (
          <FaRegHeart />
        )}
      </button>

      <div className="product__img mb-3 flex items-center justify-center flex-grow">
        <Link to={`product/${id}`}>
          <img
            src={img}
            alt={title}
            className="w-full h-24 object-contain rounded-md transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
        </Link>
      </div>

      <div className="product__desc flex flex-col flex-grow">
        <span className="text-[#ADADAD] text-xs">Snack</span>
        <h4 className="text-sm font-semibold mt-1">{title}</h4>
        <div className="rating flex items-center gap-1 mt-1 mb-2">
          <FaStar style={{ color: "#FFD601" }} />
          <span className="text-xs">({rating})</span>{" "}
        </div>
        <p className="text-xs mb-2">
          By <span className="text-[#3BB77E]">NestFood</span>
        </p>
        <div className="flex justify-between items-center mt-auto">
          <div className="flex flex-col">
            <p className="text-sm font-bold text-gray-900">{price}</p>
            <p className="text-xs text-gray-500 line-through">{`${
              price * 1.1
            } `}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="flex items-center text-green-500 hover:text-green-600 text-xs transition-colors duration-300"
          >
            <IoCartOutline className="mr-1" /> Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Card);
