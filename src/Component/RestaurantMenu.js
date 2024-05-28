import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { Shimmer } from "./Shimmer";
import { ShimmerRestaurantMenu } from "./Shimmer";
import ratingImg from "../assets/img/rating-img.png";
import dotImg from "../assets/img/dot-img.png";
import { useRestaurant } from "../utils/useRestaurant";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useRestaurantRecomendation } from "../utils/useRestaurant";
import RestaurantRecomendations from "../Component/RestaurantRecomendations";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);
  const restaurantRecomendation = useRestaurantRecomendation(id);
  const dispatch = useDispatch();

  // const handleAddItem = () => {
  //   dispatch(addItems());
  //   console.log("dispatched");
  // };

  return !restaurant ? (
    <ShimmerRestaurantMenu />
  ) : (
    <>
      <div className="Restaurant-Menu-container border w-full p-3 m-auto flex items-center justify-center">
        <div className="restaurant-menu -card w-1/2 p-3 h-full shadow-2xl rounded-lg  flex justify-between">
          <div className="res-menu-card-details h-1/2">
            {/* <h1>Restaurants id: {restaurant.id}</h1> */}
            <div className="res-menu-card-name my-1">
              <h2 className="text-lg font-semibold my-2">{restaurant.name}</h2>
            </div>

            <div className="flex  items-center p-1 my-3">
              <img src={ratingImg} alt="rating-img" className="w-3 h-3 mx-1" />
              <h4 className="text-xs">{restaurant.avgRating}</h4>
              <img src={dotImg} alt="" className="w-2 h-2 ml-4 mr-1" />
              <h4 className="text-xs">{restaurant.sla.slaString}</h4>
            </div>

            <div className="res-address my-1">
              <h4 className="text-sm">{restaurant.areaName}</h4>
            </div>
            <div className="res-cuisines my-1">
              <h4 className="text-sm">{restaurant.cuisines.join(", ")}</h4>
            </div>
          </div>
          <div className="res-menu-image-container rounded-lg  h-36 w-40">
            <img
              src={IMG_CDN_URL + restaurant.cloudinaryImageId}
              alt=""
              className="res-menu-img rounded-lg h-full w-full"
            />
          </div>
        </div>
      </div>
      <div>
        {!restaurantRecomendation ? (
          <ShimmerRestaurantMenu />
        ) : (
          <div data-testid="recommend" className=" mt-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-600 text-center justify-center">
                Recommended
              </h2>
            </div>
            <div className=" flex flex-wrap  justify-center">
              {restaurantRecomendation.map((resRec) => {
                console.log("rest-recomendation....");
                console.log(resRec);
                return !resRec ? (
                  <Shimmer />
                ) : (
                  <RestaurantRecomendations
                    {...resRec.info}
                    key={resRec.info.id}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
