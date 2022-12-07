import React from 'react';
import "./Header.css";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" />
        </Link>
        
        <div className="header__optionOne">
          <LocationOnIcon />
          </div>
          <div className="header__option">
          <span className="header__optionLineOne">Deliver to</span>
            <span className="header__optionLineTwo">Ethiopia</span>
          </div>
        <div className="header__search">
          <select className="header__all">
        
        <option selected="selected" value="search-alias=aps">All </option>
        <option value="search-alias=automotive-intl-ship">Automotive</option>
        <option value="search-alias=baby-products-intl-ship">Baby</option>
        <option value="search-alias=beauty-intl-ship">Beauty &amp; Personal Care</option>
        <option value="search-alias=stripbooks-intl-ship">Books</option>
        <option value="search-alias=fashion-boys-intl-ship">Boys' Fashion</option>
       
          </select>
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__nav">
      <Link to= {!user && "/Login" } className="header__clearlink">
        <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo"> 
            {user ? 'Sign Out' : 'Sign In'} </span>
        </div>
        </Link>
        <Link to="/orders" className="header__clearlink">
        <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
        </div>
        </Link>
        <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to="/checkout" className="header__clearlink">
        <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
            {basket.length}
            </span>
          </div>
          </Link>

      </div>
        </div>
  );
}

export default Header;