import Categories from "@/components/categories/Categories";
import Delivery from "@/components/delivery/Delivery";
import Hero from "@/components/hero/Hero";
import { useFetch } from "@/components/hooks/useFetch";
import Products from "@/components/products/Products";
import React from "react";

const Home = () => {
  const { data } = useFetch("/products", { limit: 10 });
  return (
    <>
      <Hero title="Fresh Vegetables Big discount" />
      <Categories />
      <Products data={data?.products} />
      <Delivery />
    </>
  );
};

export default Home;
