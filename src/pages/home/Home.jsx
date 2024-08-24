import Categories from "@/components/categories/Categories";
import { useStateValue } from "@/components/context";
import Delivery from "@/components/delivery/Delivery";
import Hero from "@/components/hero/Hero";
import { useFetch } from "@/components/hooks/useFetch";
import Products from "@/components/products/Products";
import SeeMore from "@/components/seeMore/SeeMore";
import Sort from "@/components/sort/Sort";
import React, { memo, useState } from "react";

const Home = () => {
  const [sort, setSort] = useState("All");
  const [count, setCount] = useState(10);

  const apiUrl = sort === "All" ? "/products" : `/products/category/${sort}`;

  const { data } = useFetch(apiUrl, { limit: count }, [sort]);

  return (
    <>
      <Hero title="Fresh Vegetables Big discount" />
      <Categories />
      <Sort onSortChange={setSort} sort={sort} />
      <Products data={data?.products} title={"Popular Products"} />

      <Delivery />
    </>
  );
};

export default memo(Home);
