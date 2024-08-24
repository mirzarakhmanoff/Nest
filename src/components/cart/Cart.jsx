import React, { memo } from "react";
import { useStateValue } from "../context";
import CartItem from "@/components/cartItem/CartItem";
import Empty from "../empty/Empty";

const Cart = () => {
  const [{ cart }, dispatch] = useStateValue();

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: { id },
    });
  };

  const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className=" right-0 top-0 w-[100vw]  bg-white border border-gray-300 shadow-lg p-4 overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 border-b pb-2 flex flex-col">
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <Empty />
      ) : (
        <div className="flex flex-col space-x-4">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              img={item.img}
              title={item.title}
              price={item.price}
              id={item.id}
              handleRemove={() => handleRemoveFromCart(item.id)}
            />
          ))}
          <div className="flex-shrink-0 min-w-[200px] flex flex-col justify-between">
            <div className="border-t pt-2">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">Total:</p>
                <p className="text-lg font-semibold">
                  ${totalAmount.toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Cart);
