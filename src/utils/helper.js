import { useState } from "react";

export const filterRestaurant = (allRestaurants, text) => {
  // const [allRestaurants, setAllRestaurant] = useState([]);

  const filteredRestaurant = allRestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(text.toLowerCase())
  );
  return filteredRestaurant;
};
