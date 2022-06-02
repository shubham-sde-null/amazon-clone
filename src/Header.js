import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Header() {
  const [{ basket }, dispatch] = useStateValue();
  // as we are using data layer I am accessing the data over here, and in this header componenet we are going to update the value of our basket whenever we click on add to cart button(here the second parameter dispatch is not useful we can also remove it, I kept it too make the code look familiar)
  return (
    <div className="header">
      <NavLink to="/">
        <img
          src="https://www.linkpicture.com/q/amazon.png"
          alt="company_logo"
          className="header__logo"
        />
      </NavLink>
      {/* here I am just wrapping this inside Navlink so that whenever we click on the amazon logo it will take us to the home page */}

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <NavLink to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon className="header__optionBasket" />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
            {/*
            <span className="header__optionLineTwo header__basketCount">0
            </span>
            earlier we were giving 0 value over here but now with the help of data layer we are dynamically changing the items in cart */}
            {/* here I have give two class first is for making our text bold and the other is to show the count */}
          </div>
        </NavLink>
        {/* whenever we click on basket icon we will be directed to the checkout page */}
      </div>
    </div>
  );
}
export default Header;
