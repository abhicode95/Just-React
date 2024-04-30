import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRest, setFilteredRes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await res.json();
    const finalData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (item) => item.info
      );
    setListOfRest(finalData);
    setFilteredRes(finalData);
  };

  const clickHandler = () => {
    const filterData = listOfRest?.filter((item) => item.avgRating > 4.2);
    setFilteredRes(filterData);
  };

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const searchHandler = () => {
    const updatedData = listOfRest.filter((item) =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredRes(updatedData);
  };
  return listOfRest?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Enter Restaurants name"
            className="search-box"
            onChange={changeHandler}
            value={inputValue}
          />
          <button onClick={searchHandler}>Search</button>
        </div>
        <button className="filter-btn" onClick={clickHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        <RestaurantCard resData={filteredRest} />
      </div>
    </div>
  );
};

export default Body;
