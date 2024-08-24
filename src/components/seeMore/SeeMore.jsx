import React, { memo } from "react";

const SeeMore = ({ onClick }) => {
  return (
    <div className="mx-auto flex items-center justify-center mb-4">
      <button
        onClick={onClick}
        type="button"
        className="mx-auto px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
      >
        See More
      </button>
    </div>
  );
};

export default memo(SeeMore);
