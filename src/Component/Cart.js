// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import RestaurantRecomendations from "./RestaurantRecomendations";
import RestaurantMenu from "./RestaurantMenu";
import { clearCart } from "../utils/cartSlice";
// import { useRestaurantRecomendation } from "../utils/useRestaurant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  console.log("cartpage");
  const item = cartItems.map((item) => {
    return item;
  });
  console.log(item);

  const clearCarts = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <div className="flex justify-between p-1">
        <h1>Cart - {cartItems.length}</h1>
        <button
          className="bg-red-400 p-2 rounded"
          onClick={() => {
            clearCarts();
          }}
        >
          Clear Cart
        </button>
      </div>
      <div className="flex">
        {cartItems.map((item) => (
          <RestaurantRecomendations key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};
export default Cart;

{
  /* <RestaurantRecomendations {...item[1]} /> */
}
