import React, { useState } from "react";
import oneLifeFirstImg from './images/oneLifeFirstImg.png';
import oneLifeSecondImg from './images/oneLifeSecondImg.png';
import oneLifeThirdImg from './images/oneLifeThirdImg.png';
import oneLifeBigImg from './images/oneLifeBigImage.png';
import oneLifeStars from './images/oneLifeStars.png';
import line from './images/Line1.png';
import checkSimbol from './images/checkSimbol.png';
import setaShopImage from './images/setaShop.png';
import filterButton from './images/filterButton.png';
import fourhalfStar from './images/fourHalfStars.png';
import fourStars from './images/fourStars.png';
import threeHalfStars from './images/threeHalfStars.png';
import cShirtImage from './images/C-Shirt.png';
import jeansImage from './images/Jeans.png';
import strTshirtImage from './images/StrT-shirt.png';
import tshirtImage from './images/T-shirt.png';
import fiveStar from './images/fiveStar.png';
import fourHalfStarsP from './images/fourHalfStarsP.png';
import threeHalfStarsP from './images/threeHalfStarsP.png';
import fiveStarsP from './images/fiveStarsP.png';
import fourStarsP from './images/fourStarsP.png';
import poloTshirt from './images/poloTshirt.png';
import gradientTshirt from './images/gradientTshirt.png';
import poloTipping from './images/poloTipping.png';
import blackTshirt from './images/blackTshirt.png'
import rightArrow from './images/rightArrow.png';
import rightArrow1 from './images/rightArrow1.png';

interface ProductDetailsProps {
    handleBackToMain: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({handleBackToMain}) => {

    const [selectedImage, setSelectedImage] = useState<string>(oneLifeBigImg);
    const [selectedColor, setSelectedColor] = useState<string>('brown');
    const [showModal, setShowModal] = useState<boolean>(false);
    const [quantity, setQuantity] = useState<number>(1); 
    const [selectedSize, setSelectedSize] = useState<string | null>(null); 

    const handleColorClick = (color: string): void => {
        setSelectedColor(color);
    };

    const handleSizeSelect = (size: string): void => {
        setSelectedSize(size);
    };    

    const decreaseQuantity = (): void => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = (): void => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = (): void => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    };
    
    return (
        <>
            <div className="anotherMain">
                <div className="anotherMainContent">
                    <a href="#" className="aConfig" onClick={handleBackToMain}>Home <span className="homeArrow"><img src={rightArrow1} alt="" /></span></a>
                    <a href="#" className="aConfig" style={{marginLeft: 10}}>Shop <span className="homeArrow"><img src={rightArrow1} alt="" /></span></a>
                    <a href="#" className="aConfig" style={{marginLeft: 10}}>Men <span className="homeArrow"><img src={rightArrow1} alt="" /></span></a>
                    <a href="#" className="aConfig aConfigTshirts" style={{fontWeight: 800, marginLeft: 10}}>T-shirts</a>
                </div>
            </div>

            <div className="productDetails">
                <div className="productContent">
                    <div className="productImages">
                        <div className="smallImages">
                            <div className='smallImgConfig'>
                                <img src={oneLifeFirstImg} alt="First" onClick={() => setSelectedImage(oneLifeBigImg)} />
                            </div>
                            <div className='smallImgConfig'>
                                <img src={oneLifeSecondImg} alt="Second" onClick={() => setSelectedImage(oneLifeSecondImg)} />
                            </div>
                            <div className='smallImgConfig'>
                                <img src={oneLifeThirdImg} alt="Third" onClick={() => setSelectedImage(oneLifeThirdImg)}/>
                            </div>
                        </div>
                        <div className="bigImage">
                            <div className="bigImageConfig">
                                <img src={selectedImage} alt="Big" />
                            </div>
                        </div>
                    </div>

                    <div className="productInfo">
                        <div className="productInfoContent">
                            <p className='oneLifeTitle'>One Life Graphic T-shirt</p>
                            <img className="starsConfig4" width={180} height={24} src={oneLifeStars} alt="Stars" />
                            <p className="currentPrice">
                                $260<span className="price1">$300</span><span className="discount1">-40%</span>
                            </p>
                            <p className="productDetailP">
                                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
                                breathable fabric, it offers superior comfort and style.
                            </p>
                            <img className="pDLine" src={line} alt="Line" />
                            <p className="productDetailP1">Select Colors</p>
                            <div className="circleColorsDiv">
                                <div
                                    className="colorCircle brownCircle" 
                                    style={{ backgroundColor: "#4F4631" }}
                                    onClick={() => handleColorClick("#4F4631")}
                                >
                                    {selectedColor === "#4F4631" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                </div>

                                <div
                                    className="colorCircle greenCircle" 
                                    style={{ backgroundColor: "#314F4A" }}
                                    onClick={() => handleColorClick("#314F4A")}
                                >
                                    {selectedColor === "#314F4A" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                </div>

                                <div
                                    className="colorCircle purpleCircle" 
                                    style={{ backgroundColor: "#31344F" }}
                                    onClick={() => handleColorClick("#31344F")}
                                >
                                    {selectedColor === "#31344F" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                </div>
                            </div>
                            <img src={line} alt="Line" />
                            <p className="productDetailP2">Choose Size</p>
                            <div className="buttonDiv1">
                                <button class="smallB" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                    className={`sizeButton ${selectedSize === "Small" ? "selected" : ""}`} 
                                    onClick={() => handleSizeSelect("Small")}>Small
                                </button>
                                <button class="mediumB" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                    className={`sizeButton ${selectedSize === "Medium" ? "selected" : ""}`} 
                                    onClick={() => handleSizeSelect("Medium")}>Medium
                                </button>
                                <button class="largeB" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                    className={`sizeButton ${selectedSize === "Large" ? "selected" : ""}`} 
                                    onClick={() => handleSizeSelect("Large")}>Large
                                </button>
                                <button class="xLargeB" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                    className={`sizeButton ${selectedSize === "X-Large" ? "selected" : ""}`} 
                                    onClick={() => handleSizeSelect("X-Large")}>X-Large
                                </button>
                            </div>
                            <img src={line} alt="Line" />
                            <div className="finalButtons">
                                <div className="quantityControl">
                                    <button className="minusB" onClick={decreaseQuantity}>-</button>
                                    <span className="quantity">{quantity}</span>
                                    <button className="plusB" onClick={increaseQuantity}>+</button>
                                </div>
                                <button className="addCartB" onClick={handleAddToCart}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="optionsDiv">
                <div className="productD">
                    <p className="productDText">Product Details</p>
                </div>
                <div className="ratingRev">
                    <p className="ratingRevP">Rating & Reviews</p>
                </div>
                <div className="faq">
                    <p className="faqP">FAQs</p>
                </div>
            </div>
            <div className="reviewsHeaderDiv">
                <div className="headerContent">
                    <div className="headerTitle">
                        <p className="hTitleP">All reviews <span>(451)</span></p>
                    </div>
                    <div className="headerButtons">
                        <button className="filterB">
                            <img src={filterButton} alt="" />
                        </button>
                        <button className="latestB">
                            Latest <img src={setaShopImage} alt="" />
                        </button>
                        <button className="writeB">
                            Write a Review
                        </button>
                    </div>
                </div>
            </div>
            <div className="reviewsSpace">
                <div className="reviewsDiv1">
                    <div className="samanthaR">
                        <div className="reviewContent">
                            <div className="stars"><img src={fourhalfStar} alt="" /> <span className="samanthaSpan">...</span></div>
                            <div className="name">Samantha D.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#00A650" />
                                <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."</span></div>
                            <p className="dateP">Posted on August 14, 2023</p>
                        </div>
                    </div>
                    <div className="alexR">
                        <div className="reviewContent">
                            <div className="stars"><img src={fourStars} alt="" /> <span className="alexSpan">...</span></div>
                            <div className="name">Alex M.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#00A650" />
                                <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."</span></div>
                            <p className="dateP">Posted on August 15, 2023</p>
                        </div>
                    </div>
                    <div className="ethanR">
                        <div className="reviewContent">
                            <div className="stars"><img src={threeHalfStars} alt="" /> <span className="ethanSpan">...</span></div>
                            <div className="name">Ethan R.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#00A650" />
                                <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."</span></div>
                            <p className="dateP">Posted on August 16, 2023</p>
                        </div>
                    </div>
                    <div className="oliviaR">
                    <    div className="reviewContent">
                            <div className="stars"><img src={fourStars} alt="" /> <span className="oliviaSpan">...</span></div>
                            <div className="name">Olivia P.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#00A650" />
                                <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."</span></div>
                            <p className="dateP">Posted on August 17, 2023</p>
                        </div>
                    </div>
                    <div className="liamR">
                        <div className="reviewContent">
                            <div className="stars"><img src={fourStars} alt="" /> <span className="liamSpan">...</span></div>
                            <div className="name">Liam R.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#00A650" />
                                <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."</span></div>
                            <p className="dateP">Posted on August 18, 2023</p>
                        </div>
                    </div>
                    <div className="avaR">
                        <div className="reviewContent">
                            <div className="stars"><img src={fourhalfStar} alt="" /> <span className="avaSpan">...</span></div>
                            <div className="name">Ava H.<svg width="20" height="20" className="svgConfig" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#00A650" />
                                <path d="M12 20L18 26L28 14" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            </svg><br /> <br /> <span className="reviewText">"I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."</span></div>
                            <p className="dateP">Posted on August 19, 2023</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loadMoreDiv">
                <button className="loadMoreB">Load More Reviews</button>
            </div>
                    <div className="newArrivalsSec1" id="newArrivals">
                        <p className="newArrTitle">YOU MIGHT <br className="youMightBr"/>ALSO LIKE</p>
                    </div>
                    <div className="someProducts1">
                        <div className="firstP">
                            <img className="productImgConfig" src={poloTshirt} alt=""/>
                            <p className="productTextConfig">POLO WITH CONTRAST TRIMS</p>
                            <img src={fourStarsP} alt="" />
                            <p className="currentPrice">$212<span className="price">$242</span><span className="discount">-20%</span></p>
                        </div>
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
            

            {showModal && (
                <div className="modal">
                    <div className="modalContent">
                        <p>{quantity} {selectedSize} size {quantity === 1 ? "item" : "items"} added to cart!</p>
                    </div>
                </div>
            )}
        </>

        
    );

    
    
}

export default ProductDetails;
