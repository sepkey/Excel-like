import React from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none", color: "#282828" }}>
        <div className="header__logo">
          <StorefrontIcon className="header__logoImg" fontSize="large" />
          <h2 className="header__logoTitle">یخ دونه</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" sx={{ fontSize: 40 }} />
      </div>
      <div className="header__nav">
        <Link to="/login" style={{ textDecoration: "none", color: "#282828" }}>
          <div className="nav__item">
            <span className="nav__itemLineOne">درود مهمان</span>
            <span className="nav__itemLineTwo">ورود</span>
          </div>
        </Link>

        <div className="nav__item">
          <span className="nav__itemLineOne">خرید</span>
          <span className="nav__itemLineTwo">شما</span>
        </div>
        <Link
          to="/checkout"
          style={{ textDecoration: "none", color: "#282828" }}
        >
          <div className="nav__itemBasket">
            <ShoppingBasketIcon />
            <span className="nav__itemCount">{basket.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
