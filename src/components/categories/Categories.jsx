import React, { memo } from "react";
import category1 from "@/assets/category1.png";
import category2 from "@/assets/category2.png";
import category3 from "@/assets/category3.png";
import category4 from "@/assets/category4.png";
import category5 from "@/assets/category5.png";
import category6 from "@/assets/category6.png";
import category7 from "@/assets/category7.png";
import category8 from "@/assets/category8.png";
import category9 from "@/assets/category9.png";
import category10 from "@/assets/category10.png";
import Fruit from "../fruit/Fruit";
import Banner from "../banner/Banner";
import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";
import banner3 from "@/assets/banner-3.png";

const fruitData = [
  { img: category1, title: "Cake & Milk", items: "26 items" },
  { img: category2, title: "Organic Kiwi", items: "28 items" },
  { img: category3, title: "Peach", items: "42 items" },
  { img: category4, title: "Red Apple", items: "54 items" },
  { img: category5, title: "Snack", items: "25 items" },
  { img: category6, title: "Vegetables", items: "12 items" },
  { img: category7, title: "Strawberry", items: "45 items" },
  { img: category8, title: "Black Plum", items: "57 items" },
  { img: category9, title: "Custard Apple", items: "61 items" },
  { img: category10, title: "Coffee & Tea", items: "14 items" },
];

const Categories = (item) => {
  return (
    <div className="container mx-auto mt-10">
      <div className="category flex flex-wrap items-center gap-7">
        <div className="category__title mb-4">
          <h3 className="text-4xl">Featured Categories</h3>
        </div>

        <div className="category__links flex gap-4">
          <a href="#" className="hover:text-[#3BB77E] text-black">
            Cake & Milk
          </a>
          <a href="#" className="hover:text-[#3BB77E] text-black">
            Coffes & Teas
          </a>
          <a href="#" className="text-[#3BB77E]">
            Pet Foods
          </a>
          <a href="#" className="hover:text-[#3BB77E] text-black">
            Vegetables
          </a>
        </div>
      </div>
      <div className="category__items flex gap-4 flex-wrap">
        {fruitData.map((item, index) => (
          <Fruit
            key={index}
            img={item.img}
            title={item.title}
            kolvo={item.items}
          />
        ))}
      </div>
      <div className="banners flex flex-wrap gap-4">
        <div className="flex-1 min-w-[300px]">
          <Banner
            img={banner1}
            text="Everyday Fresh & Clean with Our Products"
          />
        </div>
        <div className="flex-1 min-w-[300px]">
          <Banner img={banner2} text="Make your Breakfast Healthy and Easy" />
        </div>
        <div className="flex-1 min-w-[300px]">
          <Banner img={banner3} text="The best Organic Products Online" />
        </div>
      </div>
    </div>
  );
};

export default memo(Categories);
