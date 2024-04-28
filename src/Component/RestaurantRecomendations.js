import React from "react";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const RestaurantRecomendations = ({ id, name, description }) => {
  const dispatch = useDispatch();

  const addItem = (id, name, description) => {
    dispatch(addItems(id, name, description));
    console.log("dispatch from recomended component");
  };
  return (
    <div className="res-card-details border border-blue-500 flex">
      <div className="dish-Section ">
        <h1>id - {id}</h1>
        <h2 className="res-name"> name - {name}</h2>
        <h2> description -{description}</h2>
      </div>
      <button
        className="bg-green-300"
        onClick={() => addItem(id, name, description)}
      >
        Add Item
      </button>
    </div>
  );
};
export default RestaurantRecomendations;
