import React from "react";
import setaShopImage from "./images/setaShop.png";
import searchIconImage from "./images/searchIcon.png";
import searchIconMobile from "./images/mobileSearchIcon.png";
import cartImage from "./images/cart.png";
import userImage from "./images/user.png";

interface HeaderContentProps{
    handleBackToMain: () => void;
}

const HeaderContent : React.FC<HeaderContentProps> = ({handleBackToMain}) => {
  return (
    <header>
      <div className="divBlackHeader">
        <p className="divAux"></p>
        <p className="signUpP">
          Sign up and get 20% off to your first order.
          <span className="signUpSpan">Sign Up Now</span>
        </p>
        <button className="xP">✖</button>
      </div>
      <div className="mainHeader">
        <div className="contentDiv">
          <div className="menuHamburger">
            <img src="/images/hamburgerImage.png" alt="Menu" />
          </div>
          <div className="h1Div">
            <p className="mainTitle" onClick={handleBackToMain}>
              SHOP.CO
            </p>
          </div>
          <div className="navDiv">
            <nav className="geralNavs" id="shopNav">
              <a href="#" className="aConfig">
                Shop <img src={setaShopImage} alt="Seta" />
              </a>
              <a href="#" className="aConfig">
                On Sale
              </a>
              <a className="aConfig" href="#newArrivals">
                New Arrivals
              </a>
              <a className="aConfig" href="#brandsSec">
                Brands
              </a>
            </nav>
          </div>
          <div className="searchDiv">
            <div className="searchSpace">
              <img src={searchIconImage} alt="Search Icon" />
              <input className="searchContent" placeholder="Search for products..." />
            </div>
          </div>
          <div className="Icons">
            <div className="searchIcon">
              <img src={searchIconMobile} alt="Search Icon" />
            </div>
            <div className="cartIcon">
              <img src={cartImage} alt="Cart Icon" />
            </div>
            <div className="userIcon">
              <img src={userImage} alt="User Icon" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderContent;
