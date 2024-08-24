import React from "react";
import { Link } from "react-router-dom";

const Empty = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://www.shopperswarehouse.com/assets/e_website/assets/site_image/empty_wishlist.png"
        alt=""
      />
      <Link to={"/"}>
        <button
          class="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default Empty;
