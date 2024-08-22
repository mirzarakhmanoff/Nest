import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "@/api/index";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`products/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <>
      <div>
        <img src={data?.images[0]} alt="" />
      </div>
    </>
  );
};

export default Detail;
