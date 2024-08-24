import React from "react";
import Products from "@/components/products/Products";
import Empty from "@/components/empty/Empty";
import { useStateValue } from "@/components/context";

const Wishlist = () => {
  const [data] = useStateValue();
  console.log(data.wishlist);

  return (
    <div>
      {data.wishlist && data.wishlist.length > 0 ? (
        <Products data={data.wishlist} />
      ) : (
        <Empty />
      )}
    </div>
  );
};

export default Wishlist;
