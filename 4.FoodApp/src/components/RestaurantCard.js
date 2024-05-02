import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  return (
    <>
      {resData?.map((item) => {
        const {
          id,
          cloudinaryImageId,
          name,
          cuisines,
          avgRating,
          sla: { deliveryTime },
        } = item;
        return (
          <Link to={`/restaurants/${id}`} key={id}>
            <div className="res-card">
              <img
                src={CDN_URL + cloudinaryImageId}
                alt="food-img"
                className="res-logo"
              />
              <h3>{name}</h3>
              <h5>{cuisines.join(" , ")}</h5>
              <h4>{avgRating} stars</h4>
              <h4>{deliveryTime} min</h4>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default RestaurantCard;
