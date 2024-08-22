import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "@/api/index";

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
      .finally(setLoading(false));
  }, [limit]);

  useEffect(() => {
    axios
      .get(`/products/${sort}`)
      .then((res) => setCategories(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(categories);

  const items = products?.map((e) => (
    <Card key={e.id} img={e.images[0]} title={e.title} />
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
              <option value="sort">{e}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center">
        {items}
      </div>
      <div className="flex items-center justify-center gap-6">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div className="relative w-full sm:w-64 border overflow-hidden bg-white shadow-md rounded-lg p-4">
              <div className="animate-pulse">
                <div className="w-full h-60 bg-gray-300 rounded-lg mb-4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
                <div className="h-4 bg-gray-300 rounded mb-2 w-1/3"></div>
                <div className="absolute inset-x-0 bottom-0 bg-white p-3">
                  <div className="flex items-center justify-between">
                    <div className="w-16 h-6 bg-gray-300 rounded"></div>
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex items-center justify-center my-6">
        <button
          onClick={() => setLimit((prevOffSet) => prevOffSet + 1)}
          type="button"
          class="mx-auto  px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default Products;
