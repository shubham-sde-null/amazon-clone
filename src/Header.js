import React from "react";
import "./Header.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  // as we are using data layer I am accessing the data over here, and in this header componenet we are going to update the value of our basket whenever we click on add to cart button(here the second parameter dispatch is not useful we can also remove it, I kept it too make the code look familiar)
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
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
        <NavLink to={!user && "/login"}>
          {/* here what was happening is whenever we are clicking on signOut then it was redirecting us to login page, but we want to stay on home page and we should see the sign in button, once we logged out there is no user so if there is no user then we will remain on same page because as we can put condition on sign in button in navbar that if user is present then show the sign out and if the user is not present then show the sign in page and that's what is happening over here */}
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello, &nbsp;
              {user ? user.email : "Hello Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </NavLink>

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
