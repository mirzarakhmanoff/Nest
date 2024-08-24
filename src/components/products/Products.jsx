import React, { memo, useEffect, useState } from "react";
import Card from "../card/Card";
import Skeleton from "../skeleton/Skeleton";
import { useFetch } from "../hooks/useFetch";
import Sort from "../sort/Sort";
import { useStateValue } from "../context";

const Products = ({ data, loading, title }) => {
  const [limit, setLimit] = useState(10);
  const [{ filter }] = useStateValue();
  const products = filter || [];
  const items = data?.map((e) => (
    <Card
      key={e.id}
      img={e?.images ? e.images[0] : e?.img}
      title={e.title}
      id={e.id}
      price={e.price}
      rating={e.rating}
    />
  ));

  return (
    <div>
      <div className="container mx-auto flex gap-6 flex-wrap items-center justify-center">
        {items}
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => <Skeleton key={index} />)
        ) : (
          <div></div>
        )}
      </div>

      <div className="flex items-center justify-center my-6"></div>
    </div>
  );
};

export default memo(Products);
