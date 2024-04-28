import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
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
        <div className="restaurant-menu -card w-80 p-3 h-full shadow-2xl rounded-lg ">
          <div className="res-menu-image-container rounded-lg  h-56">
            <img
              src={IMG_CDN_URL + restaurant.cloudinaryImageId}
              alt=""
              className="res-menu-img rounded-lg h-full w-full"
            />
          </div>

          <div className="res-menu-card-details h-1/2">
            {/* <h1>Restaurants id: {restaurant.id}</h1> */}
            <div className="res-menu-card-name my-1">
              <h2 className="text-base font-semibold">{restaurant.name}</h2>
            </div>

            <div className="flex border-2 items-center p-1">
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
          {/* <button
            className="bg-orange-500 w-full rounded-md my-1 p-2 text-sm text-white font-medium"
            onClick={() => handleAddItem()}
          >
            Add to Cart
          </button> */}
        </div>
      </div>
      <div>
        {!restaurantRecomendation ? (
          <ShimmerRestaurantMenu />
        ) : (
          <div className="border border-red-300">
            <h2>Recommended</h2>
            {restaurantRecomendation.map((resRec) => {
              {
                /* Object.values(resRec.info).map((item) => {
                console.log("printing item");
                console.log(item);
              }); */
              }
              console.log("hello ...resREC.info");
              console.log({ ...resRec.info });
              return (
                <RestaurantRecomendations
                  {...resRec.info}
                  key={resRec.info.id}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
