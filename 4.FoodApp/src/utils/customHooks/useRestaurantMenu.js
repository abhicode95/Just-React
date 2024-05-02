import { useEffect, useState } from "react";
import { MENU_API_URL } from "../constants";

export const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  //fetchData
  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json?.data);
  };

  return resInfo;
};
