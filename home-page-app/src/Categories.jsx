import React from "react";
import gradientTshirt from './images/gradientTshirt.png';
import threeHalfStarsP from './images/threeHalfStarsP.png';
import fourHalfStarsP from './images/fourHalfStarsP.png';
import poloTipping from './images/poloTipping.png';
import blackTshirt from './images/blackTshirt.png';
import fourStarsP from './images/fourStarsP.png';
import poloTshirt from './images/poloTshirt.png';
import cShirtImage from './images/C-Shirt.png';
import fiveStarsP from './images/fiveStarsP.png';
import jeansImage from './images/Jeans.png';
import strTshirtImage from './images/StrT-shirt.png';
import courageTshirtImage from './images/courageT-shirt.png';
import fadedSJeansImage from './images/FadedSJeans.png';
import looseFitBermudaImage from './images/looseFitBermuda.png';
import verticalShirtImage from './images/verticalShirt.png';
import setaShopImage from './images/setaShop.png';
import filterButton from './images/filterButton.png';
import rightArrow from './images/rightArrow.png';
import upArrow from './images/upArrow.png';
import priceChoose from './images/priceChoose.png'


function CategoriesPage({handleBackToMain}){
    return(
        <>
            <div className="anotherMain">
                <div className="anotherMainContent">
                    <a href="#" className="aConfig" onClick={handleBackToMain}>Home <span className="homeArrow"><img src={rightArrow} alt="" /></span></a>
                    <a href="#" className="aConfig" style={{fontWeight: 2000, marginLeft: 10}} >Casual</a>
                </div>
            </div>
            <div className="categoriesSpace">
                <div className="categoriesContent">
                    <div className="filtersDiv">
                        <div className="filtersContent">
                            <div className="filtersTitle">
                                <p className="filterH">Filters</p>
                                <button className="filtersButton"><img src={filterButton} alt="" /></button>
                            </div>
                            <div className="dressTypes">
                                <section className="types">
                                    <p className="typesNames">T-shirts</p>
                                    <p className="typesNames">Shorts</p>
                                    <p className="typesNames">Shirts</p>
                                    <p className="typesNames">Hoodie</p>
                                    <p className="typesNames">Jeans</p>
                                </section>
                                <section className="arrowsSec">
                                    <p className="arrow"><img src={rightArrow} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow} alt="" /></p>
                                </section>
                            </div>
                            <div className="priceDiv">
                                <div className="priceTitle">
                                    <p className="priceH">Price</p>
                                    <button className="priceButton"><img src={upArrow} alt="" /></button>
                                </div>
                                <div className="priceChoose">
                                    <img src={priceChoose} alt="" />
                                </div>
                            </div>
                            <div className="colorDiv">
                                <div className="colorTitle">
                                    <p className="colorH">Colors</p>
                                    <button className="priceButton"><img src={upArrow} alt="" /></button>
                                </div>
                                <div className="colorChoose">
                                    <div className="greenCircle2"></div>
                                    <div className="redCircle"></div>
                                    <div className="yellowCircle"></div>
                                    <div className="orangeCircle"></div>
                                    <div className="blueLightCircle"></div>
                                    <div className="blueDarkCircle"></div>
                                    <div className="purpleCircle2"></div>
                                    <div className="pinkCircle"></div>
                                    <div className="whiteCircle"></div>
                                    <div className="blackCircle"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productsDivv">
                        <div className="miniHeader">
                            <p className="casualH">Casual</p>
                            <p className="casualNormalP">Showing 1-10 of 100 Products Sort by: <span className="mostPopular">Most Popular<img src={setaShopImage} alt="" /></span></p>
                        </div>
                        <div className="firstRow">
                            <div className="secondP">
                                <img className="productImgConfig" src={gradientTshirt} alt="" />
                                <p className="productTextConfig">GRADIENT GRAPHIC T-SHIRT</p>
                                <img className="starsConfig" src={threeHalfStarsP} alt="" />
                                <p className="currentPrice">$145</p>
                            </div>
                            <div className="thirdP">
                                <img className="productImgConfig" src={poloTipping} alt="" />
                                <p className="productTextConfig">POLO WITH TIPPING DETAILS</p>
                                <img src={fourHalfStarsP} alt="" />
                                <p className="currentPrice">$180</p>
                            </div>
                            <div className="fourthP">
                                <img className="productImgConfig" src={blackTshirt} alt="" />
                                <p className="productTextConfig">BLACK STRIPED T-SHIRT</p>
                                <img src={fiveStarsP} alt="" />
                                <p className="currentPrice">$120<span className="price">$150</span><span className="discount">-30%</span></p>
                            </div>
                        </div>
                        <div className="secondRow">
                            <div className="secondP">
                                <img className="productImgConfig" src={jeansImage} alt="" />
                                <p className="productTextConfig">SKINNY FIT JEANS</p>
                                <img className="starsConfig" src={fiveStarsP} alt="" />
                                <p className="currentPrice">$240<span className="price">$260</span><span className="discount">20%</span></p>
                            </div>
                            <div className="thirdP">
                                <img className="productImgConfig" src={cShirtImage} alt="" />
                                <p className="productTextConfig">CHECKERED SHIRT</p>
                                <img src={fiveStarsP} alt="" />
                                <p className="currentPrice">$180</p>
                            </div>
                            <div className="fourthP">
                                <img className="productImgConfig" src={strTshirtImage} alt="" />
                                <p className="productTextConfig">SLEEVE STRIPED T-SHIRT</p>
                                <img src={fiveStarsP} alt="" />
                                <p className="currentPrice">$130<span className="price">$160</span><span className="discount">30%</span></p>
                            </div>
                        </div>
                        <div className="thirdRow">
                            <div className="firstP">
                                <img className="productImgConfig" src={verticalShirtImage} alt="" />
                                <p className="productTextConfig">VERTICAL STRIPED SHIRT</p>
                                <img className="pStars" src={fiveStarsP} alt="" />
                                <p className="currentPrice">$212<span className="price">$232</span><span className="discount">20%</span></p>
                            </div>
                            <div className="secondP">
                                <img className="productImgConfig" src={courageTshirtImage} alt="" />
                                <p className="productTextConfig">COURAGE GRAPHIC T-SHIRT</p>
                                <img className="pStars" src={fiveStarsP} alt="" />
                                <p className="currentPrice">$145</p>
                            </div>
                            <div className="thirdP">
                                <img className="productImgConfig" src={looseFitBermudaImage} alt="" />
                                <p className="productTextConfig">LOOSE FIT BERMUDA SHORTS</p>
                                <img className="pStars" src={fiveStarsP} alt="" />
                                <p className="currentPrice">$80</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoriesPage;