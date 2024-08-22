import Categories from "@/components/categories/Categories";
import Delivery from "@/components/delivery/Delivery";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Products from "@/components/products/Products";
import React from "react";

const Home = () => {
  return (
    <>
      <Header />
      <Hero title="Fresh Vegetables Big discount" />
      <Categories />
      <Products />
      <Delivery />
      <Footer />
    </>
  );
};

export default Home;
