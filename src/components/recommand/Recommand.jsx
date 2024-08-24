import React, { memo, useEffect, useState } from "react";
import Card from "../card/Card";
import axios from "@/api";
const Recommand = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`products`, {
        params: {
          limit: 5,
        },
      })
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, []);

  const items = data?.map((e) => (
    <Card
      key={e.id}
      img={e.images[0]}
      title={e.title}
      id={e.id}
      price={e.price}
    />
  ));

  return (
    <div className="container mx-auto my-10">
      <div>
        <h2 className="text-3xl my-4">Recommende Products</h2>
      </div>
      <div className=" flex gap-10">{items}</div>;
    </div>
  );
};

export default memo(Recommand);
