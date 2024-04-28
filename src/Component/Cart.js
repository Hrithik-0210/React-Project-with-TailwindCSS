// import React from "react";
import { useSelector } from "react-redux";
import RestaurantRecomendations from "./RestaurantRecomendations";
import RestaurantMenu from "./RestaurantMenu";
// import { useRestaurantRecomendation } from "../utils/useRestaurant";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log("cartpage");
  console.log(cartItems[0].id);
  return (
    <>
      <h1>Cart - {cartItems.length}</h1>
      <RestaurantRecomendations {...cartItems[0]} />
    </>
  );
};
export default Cart;

{
  /* <RestaurantRecomendations {...item[1]} /> */
}
