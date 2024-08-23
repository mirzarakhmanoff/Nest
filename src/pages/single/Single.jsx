import Delivery from "@/components/delivery/Delivery";
import Detail from "@/components/detail/Detail";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Recommand from "@/components/recommand/Recommand";
import React, { useEffect } from "react";

const Single = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <Detail />
      <Recommand />
      <Delivery />

      <Footer />
    </div>
  );
};

export default Single;
