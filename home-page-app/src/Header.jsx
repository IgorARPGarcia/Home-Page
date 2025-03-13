import { Fragment } from "react";
import React from "react";
import hamburgerImage from './images/hamburgerImage.png';
import setaShopImage from './images/setaShop.png';
import searchIconImage from './images/searchIcon.png';
import mobileSearchIconImage from './images/mobileSearchIcon.png';
import cartImage from './images/cart.png';
import userImage from './images/user.png';

function HeaderContent({handleBackToMain}){
    return(
        <>
            <header>
                <div class="divBlackHeader">
                    <p class="divAux"></p>
                    <p class="signUpP">Sign up and get 20% off to your first order.<span class="signUpSpan">Sign Up Now</span></p>
                    <button class="xP">✖</button>
                </div>
                <div class="mainHeader">
                    <div class="contentDiv">
                        <div class="menuHamburger"><img src="/images/hamburgerImage.png" alt=""/></div>
                        <div class="h1Div"><p class="mainTitle" onClick={handleBackToMain}>SHOP.CO</p></div>
                        <div class="navDiv">
                            <nav class="geralNavs" id="shopNav">
                                <a href="" className="aConfig">Shop <img src={setaShopImage} alt=""/></a> 
                                <a href="" className="aConfig">On Sale</a>
                                <a class="aConfig" href="#newArrivals">New Arrivals</a>
                                <a class="aConfig" href="#brandsSec">Brands</a>
                            </nav>
                        </div>
                        <div class="searchDiv">
                            <div class="searchSpace">
                                <img src={searchIconImage} alt=""/>
                                    <input class="searchContent" placeholder="Search for products..."></input>
                            </div>
                        </div>
                        <div class="Icons">
                            <div class="searchIcon">
                                <img src="/images/mobileSearchIcon.png" alt="searchIcon"/>
                            </div>
                            <div class="cartIcon">
                                <img src={cartImage} alt="cartIcon"/>
                            </div>
                            <div class="userIcon">
                                <img src={userImage} alt="userIcon"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HeaderContent;