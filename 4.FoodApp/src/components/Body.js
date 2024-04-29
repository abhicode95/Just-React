import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";

const Body = () => {
  const [filtering, setFiltering] = useState(resData);
  const clickHandler = () => {
    const filterData = resData.filter((item) => item.avgRating > 4.5);
    setFiltering(filterData);
  };
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={clickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard resData={filtering} />
      </div>
    </div>
  );
};

export default Body;
