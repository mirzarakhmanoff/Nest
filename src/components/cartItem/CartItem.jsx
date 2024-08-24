import React, { memo } from "react";
import { IoClose } from "react-icons/io5";

const CartItem = ({ img, title, price, id, handleRemove }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <img
        src={img}
        alt={title}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1 ml-4">
        <h4 className="text-sm font-semibold">{title}</h4>
        <p className="text-sm text-gray-500">${price.toFixed(2)}</p>
      </div>
      <button
        onClick={handleRemove}
        className="text-red-500 hover:text-red-700"
      >
        <IoClose />
      </button>
    </div>
  );
};

export default memo(CartItem);
