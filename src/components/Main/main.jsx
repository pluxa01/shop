import React, { useEffect, useState } from "react";
// import {useState, useEffect} from 'react'
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import "./main.scss";
import pink from "../../assets/icons/pink.png";
import jacket from "../../assets/icons/ll.png";
import left from "../../assets/icons/left.png";
import right from "../../assets/icons/right.png";
import strelok from '../../assets/icons/gulu gulu.png'
import ningth from '../../assets/icons/9.png'
import tenth from '../../assets/icons/10.png'
import { Product } from "../Product";
import Products from '../Product/products'



const main = ({addCart}) => {


  // const [productsSum, setProductsSum] = useState(0)
  // const [countsSum, setCountsSum] = useState(0)


  // const addProduct = (price) => {
  //   setProductsSum(productsSum => productsSum + parseInt(price));
  //   setCountsSum(countsSum => countsSum + 1);
  // }

  // const [addCard, setAddCard]=useState([])

  // useEffect(()=>{
  //   fetch('{products}')
  //   .then(response => response.json())
  //   .then(data => setAddCard(data))
  // }, [])

  return (
    <div className="main">
      <div className="main__home">
        <div className="main__home-left">
          <div className="main__home-left-title">Comfy Collection</div>
          <div className="main__home-left-text">
            cosy winter collection 2021 released.
          </div>
          <div className="main__home-left-button">
            <div className="left__button-text">Shop now</div> 
          </div>
        </div>
        <div className="main__home-right">
        <img src={pink} alt="" />
        </div>
        <div className="main__asd">
          <img src={left} alt="" className="left" />
          <img src={right} alt="" className="right" />
        </div>
      </div>
      <div className="main__first-block">
        <div className="first__block">
          <div className="forst__block-title">Dark Jacket</div>
          <div className="first__block-text">
            Straight-cut jacket in woven fabric with a shirt collar, thin
            shoulder pads. Lined.
          </div>
          <div className="firts__block-button">Buy Now →</div>
        </div>
        <div className="second__block">
          <img src={jacket} alt="" className="jacket" />
        </div>
        <div className="third__block">
          <div className="third__block-figure">50%</div>
        </div>
      </div>
      <div className="main__second-block">
        <div className="first__second-block">
          <div className="main__second-block-title">Bestsellers</div>
          <div className="main__second-block-text">Explore the trending range of Emirashop.</div>
        </div>
        {Product.map(key => {
            const {name, img, price} = key
            return (
              <Products addCart={addCart}  name={name} img={img} price={price}/>
            )
        })}

        <div className="button__other">
            <div className="button__other-title">View more</div>
            <img src={strelok} alt="" />
        </div>
      </div>
      <div className="third__block1">
        <div className="third__block1-f">
            <img src={ningth} alt="" />
            <div className="third__block-first-title">Shirt jacket</div>
            <div className="third__block-first-text">Shirt jacket in soft jersey with a collar, buttons down the front and a yoke at the back. Partly lined.</div>
            <div className="third__block-first-button">Buy Now →</div>
        </div> 
        <div className="third__block-s">
            <img src={tenth} alt="" />
        </div>
            <div className="third__block-s-title">New Arrival</div>
      </div>
       <div className="forth__block">
            <div className="forth__block-first">Why Us?</div>
            <div className="forth__block-second">
                <div className="eleven">
                    <GlobalSvgIcons id='11'/>
                    <div className="forth__block-first-title">Free Delivery</div>
                </div>
                <div className="twelve">
                    <GlobalSvgIcons id='12' />
                    <div className="forth__block-second-title">Exclusive Fashion</div>
                </div>
            </div>
            <div className="forth__block-third">
              <div className="thirte">
                <GlobalSvgIcons id='13'/>
                <div className="forth__block-third-title">90 Days Return</div>
              </div>
              <div className="forte">
                <GlobalSvgIcons id='14'/>
                <div className="forte__title">Secure Payment</div>
              </div>
            </div>
       </div>
       <div className="fivth__block">
        <div class="create-line"></div>
          <div className="sing__up">
            <div className="sing__up-title">Sign up to get 30% off</div>
            <div className="sing__up-text">Get regular updates about our new arrivals, discounts and offers.</div>
              <div className="input__text">Email</div>
              <div className="input__line"></div>
            <div className="sing__up-button">
              <div className="sing__up-button-text">Send</div>
            </div>
          </div>
          <div className="quick__links">
            <div className="quick__links1">Quick Links</div>
            <ul className="Shop">Home</ul>
            <ul className="Shop">Shop</ul>
            <ul className="Shop">About Us</ul>
            <ul className="Shop">FAQs</ul>
          </div>
          <div className="Connect__With-Us">
            <div className="connect">Connect With Us</div>
            <ul className="social__networks">Facebook</ul>
            <ul className="social__networks">Instagram</ul>
            <ul className="social__networks">Tumblr</ul>
            <ul className="social__networks">Pinterest</ul>
          </div>
          <div className="footer__img">
            <GlobalSvgIcons id='logo'/>
          </div>
       </div>
    </div>
  );
};

export default main;
