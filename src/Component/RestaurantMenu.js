import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import { ShimmerRestaurantMenu } from "./Shimmer";
import ratingImg from "../assets/img/rating-img.png";
import dotImg from "../assets/img/dot-img.png";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <ShimmerRestaurantMenu />
  ) : (
    <div className="Restaurant-Menu-container">
      <div className="restaurant-menu-card">
        <div className="res-menu-image-container">
          <img
            src={IMG_CDN_URL + restaurant.cloudinaryImageId}
            alt=""
            className="res-menu-img"
          />
        </div>

        <div className="res-menu-card-details">
          {/* <h1>Restaurants id: {restaurant.id}</h1> */}
          <div className="res-menu-card-name">
            <h2>{restaurant.name}</h2>
          </div>

          <div className="flex border-2 items-center">
            <img src={ratingImg} alt="rating-img" className="w-4 h-4" />
            <h4 style={{ marginRight: "1rem" }}>{restaurant.avgRating}</h4>
            <img src={dotImg} alt="" className="w-2 h-2" />
            <h4>{restaurant.sla.slaString}</h4>
          </div>

          <div className="res-address">
            <h4>{restaurant.areaName}</h4>
          </div>
          <div className="res-cuisines">
            <h4>{restaurant.cuisines.join(", ")}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
