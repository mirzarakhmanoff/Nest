import React from "react";
import icon1 from "@/assets/icon1.png";

const DeliveryCard = ({ img, title, desc }) => {
  return (
    <div className="flex  border w-[240px] items-center justify-center gap-4 bg-[#F4F6FA] rounded-xl py-1 px-4">
      <div>
        <img src={img} />
      </div>
      <div>
        <h5 className="text-[#242424] w-full">{title}</h5>
        <p className="text-[#ADADAD]">{desc}</p>
      </div>
    </div>
  );
};

export default DeliveryCard;
