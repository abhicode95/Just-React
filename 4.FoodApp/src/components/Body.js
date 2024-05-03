import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useOnlineStatus } from "../utils/customHooks/useOnlineStatus";

const Body = () => {
  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRest, setFilteredRes] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>Looks like you are offline</h1>;
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9698196&lng=77.7499721&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
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
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            placeholder="Enter Restaurants name"
            className="border border-solid border-black"
            onChange={changeHandler}
            value={inputValue}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={searchHandler}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={clickHandler}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        <RestaurantCard resData={filteredRest} />
      </div>
    </div>
  );
};

export default Body;
