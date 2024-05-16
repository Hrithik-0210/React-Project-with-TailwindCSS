import React from "react";
import { useDispatch } from "react-redux";
import { addItems, removeItem } from "../utils/cartSlice";
import { IMG_CDN_URL } from "../constants";

const RestaurantRecomendations = ({ id, name, description, imageId }) => {
  const dispatch = useDispatch();

  const addItem = ({ id, name, description, imageId }) => {
    dispatch(addItems({ id, name, description, imageId }));
    console.log("dispatch from recomended component");
  };

  const removeItems = ({ id, name, description, imageId }) => {
    dispatch(removeItem(id));
  };
  return (
    <>
      <div className="Restaurant-Menu-container  w-fit p-3 m-2 flex  flex-col">
        <div className="restaurant-menu -card w-80 p-3 h-full shadow-2xl rounded-lg ">
          <div className="res-menu-image-container rounded-lg  h-56">
            <img
              src={IMG_CDN_URL + imageId}
              alt=""
              className="res-menu-img rounded-lg h-full w-full"
            />
          </div>

          <div className="res-menu-card-details h-1/2">
            {/* <h1>Restaurants id: {id}</h1> */}
            <div className="res-menu-card-name my-1">
              <h2 className="text-base font-semibold">{name}</h2>
            </div>

            <div className="res-cuisines my-1">
              <h4 className="text-sm">{description}</h4>
            </div>
          </div>
        </div>
        <div className="flex  m-2">
          <button
            className="bg-green-800 text-white py-2 px-8 rounded-lg mx-3"
            onClick={() => addItem({ id, name, description, imageId })}
          >
            Add Item
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-lg mx-3"
            onClick={() => removeItems({ id, name, description, imageId })}
          >
            Remove Item
          </button>
        </div>
      </div>
    </>
  );
};
export default RestaurantRecomendations;
