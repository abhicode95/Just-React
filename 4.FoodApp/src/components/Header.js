import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/customHooks/useOnlineStatus";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  console.log("Header Render");

  useEffect(() => {
    console.log("UseEffect Called");
  });
  const clickHandler = () => {
    setToggle(!toggle);
  };

  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="FoodImg" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/grocery">Grocery</Link>
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
