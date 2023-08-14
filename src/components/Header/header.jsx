import React from "react";
import {Link} from 'react-router-dom'
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import "./header.scss";

const header = () => {
  return (
    <div className="Header">
      <div className="header__line">
        <div className="header__line-logo">
          <a href="/home"><GlobalSvgIcons id="logo" /></a>
        </div>
        <div className="header__line-title">
          <Link to="/home"><ul className="line__title">Home</ul></Link>
          <ul className="line__title">Shop</ul>
          <ul className="line__title">About Us</ul>
          <ul className="line__title">Contact Us</ul>
        </div>
        <div className="header__line-images">
          <GlobalSvgIcons id="person" className="line__images" />
          <GlobalSvgIcons id="turned" className="line__images1" />
          <button className="button__shop">
            <div className="button__shop-img">
              <Link to='/shop'><GlobalSvgIcons id="shop" className="shop"/></Link>
            </div>
            <span className="count__fashions"></span>
          </button>
        </div>
      </div>
    </div>


  );
};

export default header;
