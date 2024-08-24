import React, { memo, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useFetch } from "../hooks/useFetch";
import Card from "../card/Card";
import { useStateValue } from "../context";

const Search = () => {
  const data = useFetch("/products");
  const [search, setSearch] = useState(null);

  const [{ filter }, dispatch] = useStateValue();
  const handleSearch = () => {
    dispatch({
      type: "FILTER",
      payload: { filtered },
    });
  };

  const filtered = data?.data?.products?.filter((item) => {
    return item.title.toLowerCase().includes(search?.toLowerCase());
  });
  return (
    <>
      <div className="hidden lg:flex lg:w-[50%] items-center border border-green-500 py-3 px-3">
        <div className="nav__select">
          <select name="" id="" className="bg-transparent focus:outline-none">
            <option value="">All Categories</option>
          </select>
        </div>
        <div className="nav__search flex items-center w-[70%] border-l-2 px-4">
          <input
            onChange={((e) => setSearch(e.target.value), handleSearch)}
            type="text"
            placeholder="Search for items..."
            className="outline-none w-[100%] bg-transparent"
          />
          <IoIosSearch />
        </div>
      </div>
    </>
  );
};

export default memo(Search);
