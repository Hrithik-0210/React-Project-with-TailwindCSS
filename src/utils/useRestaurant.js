import { useState, useEffect } from "react";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurant(jsonData.data.cards[2].card.card.info);
  }

  return restaurant;
};
export default useRestaurant;
