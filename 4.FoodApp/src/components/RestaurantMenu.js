import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/customHooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  return (
    <div className="menu">
      <h1>{name} </h1>
      <p>
        {cuisines} - {costForTwoMessage}
      </p>
      <h2>Recommended({itemCards.length})</h2>
      <ul>
        {itemCards.map((itemCard) => {
          return (
            <li key={itemCard.card.info.id}>
              {itemCard.card.info.name} - Rs.{itemCard.card.info.price / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
