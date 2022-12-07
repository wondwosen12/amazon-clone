import React from "react";
import "./Nav.css";
import MenuIcon from "@mui/icons-material/Menu";

function Nav() {
  return (
    <div className="nav__new">
      <div className="nav_data">
        <div className="left_data">
          <div className="navbar">
          <MenuIcon className="hamburger"/>
          <p className="nav__all">All</p>
          <p>Today's Deals</p>
          <p>Customer Service</p>
          <p>Registry</p>
          <p>Gift Cards</p>
          <p>Sell</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
