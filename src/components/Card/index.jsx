import React from 'react'
import first from "../../assets/icons/1.png";
import second from "../../assets/icons/2.png";
import third from "../../assets/icons/3.png";
import forth from "../../assets/icons/4.png";
import fivth from "../../assets/icons/5.png"
import sixth from "../../assets/icons/6.png"
import seventh from "../../assets/icons/7.png"
import eighth from "../../assets/icons/8.png"

const index = () => {
  return (
    <div className="grid__block">
            <div className="first__grid-block" id="block">
                <img src={first} alt="" className="dfg"/>
                <div  className="hover">
                  <div className="hover__text">ADD CART</div>
                </div>
                <div className="first__fashion-about">
                    <div className="first__fashion-abut-text">Sale</div>
                </div>
                <div className="first__fashion-title">Denim jacket</div>
                <div className="first__fashion-price">INR 1,999</div>
            </div>
            <div className="second__grid-block">
                <img src={second} alt="" className="asd"/>
                <div className="click">
                  <div className="click__text">ADD CART</div>
                </div>
                <div className="second__fashion-title">Green jacket</div>
                <div className="second__fashion-price">INR 2,999</div>
            </div>
            <div className="third__grid-block" id="block">
                <img src={third} alt="" className="dfg"/>
                <div className="hover">
                  <div className="hover__text">ADD CART</div>
                </div>
                <div className="first__fashion-about">
                    <div className="first__fashion-abut-text">New</div>
                </div>
                <div className="first__fashion-title">Denim jacket</div>
                <div className="first__fashion-price">INR 3,999</div>
            </div>
            <div className="forth__grid-block">
                <img src={forth} alt="" />
                <div className="click">
                  <div className="click__text">ADD CART</div>
                </div>
                <div className="second__fashion-title">Leather jacket</div>
                <div className="second__fashion-price">INR 8,999</div>
            </div>
            <div className="fivth__grid-block">
                <img src={fivth} alt="" className="dfg" id="block"/>
                <div className="hover">
                  <div className="hover__text">ADD CART</div>
                </div>
                <div className="first__fashion-about">
                    <div className="first__fashion-abut-text">Sale</div>
                </div>
                <div className="first__fashion-title">Some brown jacket</div>
                <div className="first__fashion-price">INR 7,999</div>
            </div>
            <div className="sixth__grid-block">
                <img src={sixth} alt="" />
                <div className="click">
                  <div className="click__text">ADD CART</div>
                </div>
                <div className="second__fashion-title">Some pink coat</div>
                <div className="second__fashion-price">INR 4,999</div>
            </div>
            <div className="seventh__grid-block">
                <img src={seventh} alt="" className="dfg" id="block"/>
                <div className="hover">
                  <div className="hover__text">ADD CART</div>
                </div>
                <div className="first__fashion-about">
                    <div className="first__fashion-abut-text">New</div>
                </div>
                <div className="first__fashion-title">Wool-blend faux shearling coat</div>
                <div className="first__fashion-price">INR 7,999</div>
            </div>
            <div className="eighth">
                <img src={eighth} alt="" />
                <div className="click">
                  <div className="click__text">ADD CART</div>
                </div>
                <div className="second__fashion-title">Padded hooded jacket</div>
                <div className="second__fashion-price">INR 3,999</div>
            </div>
        </div>
  )
}

export default index