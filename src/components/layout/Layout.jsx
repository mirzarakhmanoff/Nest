import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default memo(Layout);
