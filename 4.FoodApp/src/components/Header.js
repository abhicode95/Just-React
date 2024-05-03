import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/customHooks/useOnlineStatus";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    console.log("UseEffect Called");
  });
  const clickHandler = () => {
    setToggle(!toggle);
  };

  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between shadow-lg bg-pink-100 sm:bg-yellow-200">
      <div>
        <img src={LOGO_URL} alt="FoodImg" className="w-40" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/" className="px-4">
            Home
          </Link>
          <Link to="/about" className="px-4">
            About Us
          </Link>
          <Link to="/contact" className="px-4">
            Contact Us
          </Link>
          <Link to="/grocery" className="px-4">
            Grocery
          </Link>
          <Link>Cart</Link>
          <button className="login" onClick={clickHandler}>
            {toggle ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
