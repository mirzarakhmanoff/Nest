import Delivery from "@/components/delivery/Delivery";
import Detail from "@/components/detail/Detail";

import Recommand from "@/components/recommand/Recommand";
import React, { memo, useEffect } from "react";

const Single = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Detail />
      <Recommand />
      <Delivery />
    </div>
  );
};

export default memo(Single);
