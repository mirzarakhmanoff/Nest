import React from "react";
import delivery from "@/assets/delivery.png";
import heroBg from "@/assets/heroBg.png";
import Input from "../input/Input";
import icon1 from "@/assets/icon1.png";
import icon2 from "@/assets/icon2.png";
import icon3 from "@/assets/icon3.png";
import icon4 from "@/assets/icon4.png";
import icon5 from "@/assets/icon5.png";
import DeliveryCard from "../delvieryCard/DeliveryCard";

const deliveryData = [
  {
    img: icon1,
    title: "Best prices ",
    desc: "Orders $50 or more",
  },
  {
    img: icon2,
    title: "Free delivery",
    desc: "24/7 amazing services",
  },
  {
    img: icon3,
    title: "Great daily deal",
    desc: "When you sign up",
  },
  {
    img: icon4,
    title: "Wide assortment",
    desc: "Mega Discounts",
  },
  {
    img: icon5,
    title: "Easy returns",
    desc: "Within 30 days",
  },
];

const items = deliveryData?.map((e) => (
  <DeliveryCard img={e.img} title={e.title} desc={e.desc} />
));

const Delivery = () => {
  return (
    <div className="mx-auto container">
      <div
        className="h-[400px] bg-no-repeat  rounded-2xl flex items-end justify-between"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="left flex border flex-col justify-center w-1/3  h-full items-start gap-3 ml-20">
          <h3 className="text-[#253D4E] text-4xl">
            Stay home & get your daily needs from our shop
          </h3>
          <p className="text-[#7E7E7E] text-xl">
            Start You'r Daily Shopping with Nest <span>Mart</span>
          </p>
          <Input />
        </div>
        <div className="right">
          <img src={delivery} alt="" />
        </div>
      </div>

      <div className="cards flex gap-3 my-5 flex-wrap" key={items}>
        {items}
      </div>
    </div>
  );
};

export default Delivery;
