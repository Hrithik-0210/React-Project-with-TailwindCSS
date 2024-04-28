import { IMG_CDN_URL } from "../constants";
import { restaurantDetails } from "../constants";
import ratingImg from "../assets/img/rating-img.png";
import dotImg from "../assets/img/dot-img.png";

const RestaurantCard = ({
  name,
  areaName,
  cloudinaryImageId,
  avgRating,
  sla,
  cuisines,
}) => {
  return (
    <div className="w-[19rem] h-96 shadow-lg rounded-lg border overflow-hidden flex flex-col  p-2 m-4 transition ease-in-out delay-75  hover:-translate-y-1 hover:scale-105 duration-300 ...">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        className="w-72 h-56 rounded-lg   "
      />

      <div className="res-card-details">
        <div className="res-names">
          <h2 className="res-name">{name}</h2>
        </div>
        <div className="flex items-center">
          <img src={ratingImg} alt="rating-img" className="w-4 h-4" />
          <h4 style={{ marginRight: "1rem" }}>{avgRating}</h4>
          <img src={dotImg} alt="" className="w-2 h-2" />
          <h4>{sla.slaString}</h4>
        </div>
        <div className="res-address">
          <h4>{areaName}</h4>
        </div>
        <div className="res-cuisines">
          <h4>{cuisines.join(", ")}</h4>
        </div>
        {/* <h4>time : {console.log(slaString)}</h4> */}
      </div>
    </div>
  );
};
export default RestaurantCard;
