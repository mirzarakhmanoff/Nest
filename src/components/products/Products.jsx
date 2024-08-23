import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "@/api/index";
import Skeleton from "../skeleton/Skeleton";

const Products = () => {
  const [products, setProducts] = useState(null);
  const offset = 5;
  const [limit, setLimit] = useState(2);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState(null);
  const [sort, setSort] = useState("category-list");

  const handleChange = (event) => {
    const value = event.target.value;
    setSort(value);
    console.log(value);
  };
  console.log(sort);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/products`, {
        params: {
          limit: offset * limit,
        },
      })
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [limit]);

  useEffect(() => {
    axios
      .get(`/products/${sort}`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, [sort]);

  const items = products?.map((e) => (
    <Card key={e.id} img={e.images[0]} title={e.title} id={e.id} sort={sort} />
  ));

  return (
    <div>
      <div className="title flex container mx-auto my-5 justify-between ">
        <div className="w-1/2">
          <h3 className="text-4xl text-[#253D4E]">Popular Products</h3>
        </div>

        <div className="title__items w-1/2 flex justify-end">
          <select
            onChange={handleChange}
            name=""
            id=""
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
      </div>
      <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center">
        {items}
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => <Skeleton key={index} />)
        ) : (
          <div></div>
        )}
      </div>
      <div className="flex items-center justify-center my-6">
        <button
          onClick={() => setLimit((prevOffSet) => prevOffSet + 1)}
          type="button"
          className="mx-auto px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Products;
