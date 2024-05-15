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
  // console.log(cartItems[0].id);

  const clearCarts = () => {
    dispatch(clearCart());
  };
  return (
    <>
      <h1>Cart - {cartItems.length}</h1>
      <button
        className="bg-red-400"
        onClick={() => {
          clearCarts();
        }}
      >
        Clear Cart
      </button>
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
