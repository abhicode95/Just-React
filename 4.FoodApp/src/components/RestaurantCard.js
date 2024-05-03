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
          costForTwo,
        } = item;
        return (
          <Link to={`/restaurants/${id}`} key={id}>
            <div className="m-4 p-4 w-[250px] bg-gray-200 rounded-lg hover:bg-blue-400">
              <img
                src={CDN_URL + cloudinaryImageId}
                alt="food-img"
                className="rounded-lg"
              />
              <h3 className="font-bold py-4 text-lg">{name}</h3>
              <h4>{cuisines.join(" , ")}</h4>
              <h4>{avgRating} stars</h4>
              <h4>{costForTwo} </h4>
              <h4>{deliveryTime} min</h4>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default RestaurantCard;
