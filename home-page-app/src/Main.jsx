import React from 'react';
import { useRef } from 'react';

import smallStar from './images/smallStar.png';
import bigStar from './images/BigStar.png';
import versaceLogo from './images/versace-logo-1 1.png';
import zaraLogo from './images/zara-logo-1 1.png';
import gucciLogo from './images/gucci-logo-1 1.png';
import pradaLogo from './images/prada-logo-1 1.png';
import calvinKleinLogo from './images/Calvin-Klein-logo-1 1.png';
import tshirtImage from './images/T-shirt.png';
import jeansImage from './images/Jeans.png';
import cShirtImage from './images/C-Shirt.png';
import strTshirtImage from './images/StrT-shirt.png';
import verticalShirtImage from './images/verticalShirt.png';
import courageTshirtImage from './images/courageT-shirt.png';
import looseFitBermudaImage from './images/looseFitBermuda.png';
import fadedSJeansImage from './images/FadedSJeans.png';
import fiveStar from './images/fiveStar.png';
import leftArrow from './images/leftArrow.png';
import rightArrow from './images/rightArrow.png';

function MainContent({ handleProductClick }) {

    const reviewsRef = useRef(null);

    const rotateReviews = (direction) => {
        if (reviewsRef.current) {
            if (direction === 'left') {
                const firstReview = reviewsRef.current.firstElementChild;
                reviewsRef.current.appendChild(firstReview);
            } else {
                const lastReview = reviewsRef.current.lastElementChild;
                reviewsRef.current.insertBefore(lastReview, reviewsRef.current.firstElementChild);
            }
        }
    };

    return (
        <>
            <main>
                <section>
                    <div className="mainBackground">
                        <div className="text">
                            <p className="mainText">FIND CLOTHES <br /> THAT MATCHES <br /> YOUR STYLE</p>
                            <p className="smallText">Browse through our diverse range of meticulously crafted garments, designed <br className="smallTextBr" /> to bring out your individuality and cater to your sense of style.</p>
                            <button className="shopNowButton">Shop Now</button>
                            <div className="numbersAndWords">
                                <div className="miniText1">200+ <br className="miniTextBr" /> <span>International Brands</span></div>
                                <div className="lineMobile"></div>
                                <div className="miniText2">2,000+ <br /> <span>High-Quality Products</span></div>
                                <div className="miniText3">30,000+ <br /> <span>Happy Customers</span></div>
                            </div>
                        </div>
                        <img className="smallStarConfig" src={smallStar} alt="" />
                        <img className="bigStarConfig" src={bigStar} alt="" />
                    </div>
                    <div className="brands" id="brandsSec">
                        <div className="versace">
                            <img className="productImgConfig" src={versaceLogo} alt="" />
                        </div>
                        <div className="zara">
                            <img className="productImgConfig" src={zaraLogo} alt="" />
                        </div>
                        <div className="gucci">
                            <img className="productImgConfig" src={gucciLogo} alt="" />
                        </div>
                        <div className="prada">
                            <img className="productImgConfig" src={pradaLogo} alt="" />
                        </div>
                        <div className="calvinKlein">
                            <img className="productImgConfig" src={calvinKleinLogo} alt="" />
                        </div>
                    </div>
                </section>
                <section className="FProductsSec">
                    <div className="newArrivalsSec" id="newArrivals">
                        <p className="newArrTitle">NEW ARRIVALS</p>
                    </div>
                    <div className="someProducts">
                        <div className="firstP" onClick={handleProductClick}>
                            <img className="productImgConfig" src={tshirtImage} alt=""/>
                            <p className="productTextConfig">T-SHIRT WITH TAPE DETAILS</p>
                            <img src={fiveStar} alt="" />
                            <p className="currentPrice">$120</p>
                        </div>
                        <div className="secondP">
                            <img className="productImgConfig" src={jeansImage} alt="" />
                            <p className="productTextConfig">SKINNY FIT JEANS</p>
                            <img className="starsConfig" src={fiveStar} alt="" />
                            <p className="currentPrice">$240<span className="price">$260</span><span className="discount">20%</span></p>
                        </div>
                        <div className="thirdP">
                            <img className="productImgConfig" src={cShirtImage} alt="" />
                            <p className="productTextConfig">CHECKERED SHIRT</p>
                            <img src={fiveStar} alt="" />
                            <p className="currentPrice">$180</p>
                        </div>
                        <div className="fourthP">
                            <img className="productImgConfig" src={strTshirtImage} alt="" />
                            <p className="productTextConfig">SLEEVE STRIPED T-SHIRT</p>
                            <img src={fiveStar} alt="" />
                            <p className="currentPrice">$130<span className="price">$160</span><span className="discount">30%</span></p>
                        </div>
                    </div>
                    <div className="buttonDiv">
                        <button className="viewAllButton">View All</button>
                    </div>
                    <div className="line">
                        <div className="fixLine"></div>
                    </div>
                </section>
                <section className="SProductsSec">
                    <div className="topSellingSec" id="topSelling">
                        <p className="newArrTitle">TOP SELLING</p>
                    </div>
                    <div className="someProducts" id="someProducts2">
                        <div className="firstP">
                            <img className="productImgConfig" src={verticalShirtImage} alt="" />
                            <p className="productTextConfig">VERTICAL STRIPED SHIRT</p>
                            <img className="pStars" src={fiveStar} alt="" />
                            <p className="currentPrice">$212<span className="price">$232</span><span className="discount">20%</span></p>
                        </div>
                        <div className="secondP">
                            <img className="productImgConfig" src={courageTshirtImage} alt="" />
                            <p className="productTextConfig">COURAGE GRAPHIC T-SHIRT</p>
                            <img className="pStars" src={fiveStar} alt="" />
                            <p className="currentPrice">$145</p>
                        </div>
                        <div className="thirdP">
                            <img className="productImgConfig" src={looseFitBermudaImage} alt="" />
                            <p className="productTextConfig">LOOSE FIT BERMUDA SHORTS</p>
                            <img className="pStars" src={fiveStar} alt="" />
                            <p className="currentPrice">$80</p>
                        </div>
                        <div className="fourthP">
                            <img className="productImgConfig" src={fadedSJeansImage} alt="" />
                            <p className="productTextConfig">FADED SKINNY JEANS</p>
                            <img className="pStars" src={fiveStar} alt="" />
                            <p className="currentPrice">$210</p>
                        </div>
                    </div>
                    <div className="buttonDiv">
                        <button className="viewAllButton" id="viewAllButton2">View All</button>
                    </div>
                </section>
                <section className="stylesSec">
                    <div className="styles">
                        <p className="stylesTitle">BROWSE BY <br className="stylesBr" /> DRESS STYLE</p>
                        <div className="stylesMobile">
                            <div className="casualStyleMobile"></div>
                            <div className="formalStyleMobile"></div>
                            <div className="partyStyleMobile"></div>
                            <div className="gymStyleMobile"></div>
                        </div>
                        <div className="stylesImages1">
                            <div className="casualStyle"></div>
                            <div className="formalStyle"></div>
                        </div>
                        <div className="stylesImages2">
                            <div className="partyStyle"></div>
                            <div className="gymStyle"></div>
                        </div>
                    </div>
                </section>
                <section className="headerReviewsSec">
                <div className="content">
                    <div className="reviewsTitle">
                        <p className="rvTitleConfig">OUR HAPPY CUSTOMERS</p>
                    </div>
                    <div className="arrows">
                        <button className="leftArrow" onClick={() => rotateReviews('left')}>
                            <img src={leftArrow} alt="Left Arrow" />
                        </button>
                        <button className="rightArrow" onClick={() => rotateReviews('right')}>
                            <img src={rightArrow} alt="Right Arrow" />
                        </button>
                    </div>
                </div>
            </section>
            <section className="review">
                <div className="allReviews" id="reviewsCarousel" ref={reviewsRef}>
                    <div className="boxReview">
                        <div className="reviewContent">
                            <div className="stars"><img src={fiveStar} alt="" /></div>
                            <div className="name">John Yu.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#00A650" />
                            <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"I'm amazed by the quality and style of the clothes I received from Shop.co. The attention to detail and high-quality materials really make a difference. I’m definitely a loyal customer now!"</span></div>
                        </div>
                    </div>
                    <div className="boxReview">
                        <div className="reviewContent">
                            <div className="stars"><img src={fiveStar} alt="" /></div>
                            <div className="name">Sarah M.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#00A650" />
                            <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."</span></div>
                        </div>
                    </div>
                    <div className="boxReview">
                        <div className="reviewContent">
                            <div className="stars"><img src={fiveStar} alt="" /></div>
                            <div className="name">Alex K.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#00A650" />
                            <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",</span></div>
                        </div>
                    </div>
                    <div className="boxReview">
                        <div className="reviewContent">
                            <div className="stars"><img src={fiveStar} alt="" /></div>
                            <div className="name">James L.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#00A650" />
                            <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."</span></div>
                        </div>
                    </div>
                    <div className="boxReview">
                        <div className="reviewContent">
                            <div className="stars"><img src={fiveStar} alt="" /></div>
                            <div className="name">Agatha P.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="20" fill="#00A650" />
                            <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /><span className="reviewText">"Absolutely love the clothes I got from Shop.co! The quality is fantastic, and the pieces fit my style perfectly. I’ll definitely be coming back for more!"</span></div>
                        </div>
                    </div>
                </div>
            </section>
            </main>
        </>
    );
}

export default MainContent;
