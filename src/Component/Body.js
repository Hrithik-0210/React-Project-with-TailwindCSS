import { useCallback, useContext, useEffect, useState } from "react";
import { restaurantDetails } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurant } from "../utils/helper";
import useOnline from "../utils/useOnline.js";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [allRestaurants, setAllRestaurant] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [text, setText] = useState("");
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    console.log("useeffect called");
    getRestaurants();
  }, []);

  console.log(allRestaurants);
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    // console.log(
    //   jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    // );
    setFilterRestaurants(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setAllRestaurant(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  console.log("render");

  const online = useOnline();
  console.log(online);

  if (!online) {
    return <h1>You are offline..</h1>;
  }

  return filterRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="border">
      <div className="search-container my-1 flex flex-row justify-center p-2 gap-4">
        <input
          className="search-input border p-1 rounded-md w-1/3"
          type="text"
          value={text}
          placeholder="Search.."
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="search-btn bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg w-fit text-sm font-medium"
          onClick={() => {
            const data = filterRestaurant(allRestaurants, text);
            setFilterRestaurants(data);
          }}
        >
          Search
        </button>
        <input
          className="border"
          type="text"
          value={user.name}
          onChange={(e) =>
            setUser({ name: e.target.value, email: "abc@gmail.com" })
          }
        />
      </div>
      <div className="flex flex-wrap w-fit m-auto align-middle justify-center">
        {filterRestaurants.map((res) => {
          return (
            <Link
              to={"/restaurant/" + res.info.id}
              key={res.info.id}
              className="flex"
            >
              <RestaurantCard {...res.info} key={res.info.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
