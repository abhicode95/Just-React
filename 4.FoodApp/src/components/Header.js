import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const clickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <div className="header">
      <div>
        <img src={LOGO_URL} alt="FoodImg" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login" onClick={clickHandler}>
            {toggle ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
