import { useState, useEffect } from "react";

export const useRestaurant = (id) => {
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

export const useRestaurantRecomendation = (id) => {
  const [restaurantRecomendation, setRestaurantRecomendation] = useState(null);

  useEffect(() => {
    getRestaurantRecomendationInfo();
  }, []);

  async function getRestaurantRecomendationInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=${id}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantRecomendation(
      jsonData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[7].card.card.itemCards.map(
        (item) => item.card
      )
    );
  }

  console.log(restaurantRecomendation);
  return restaurantRecomendation;
};
