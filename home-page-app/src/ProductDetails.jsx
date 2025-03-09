import React, { useState } from "react";
import oneLifeFirstImg from './images/oneLifeFirstImg.png';
import oneLifeSecondImg from './images/oneLifeSecondImg.png';
import oneLifeThirdImg from './images/oneLifeThirdImg.png';
import oneLifeBigImg from './images/oneLifeBigImage.png';
import oneLifeStars from './images/oneLifeStars.png';
import line from './images/Line1.png';
import checkSimbol from './images/checkSimbol.png';

function ProductDetails() {

    const [selectedImage, setSelectedImage] = useState(oneLifeBigImg);

    const [selectedColor, setSelectedColor] = useState('brown');

    const [showModal, setShowModal] = useState(false);

    const [quantity, setQuantity] = useState(1);

    const [selectedSize, setSelectedSize] = useState(null);

    const handleColorClick = (color) => {
        setSelectedColor(color);
    }

    const handleSizeSelect = (size) => {
        setSelectedSize(size);
    };    

    const decreaseQuantity = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const handleAddToCart = () => {
        setShowModal(true);
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    };
    
    return (
        <>
            <div className="anotherMain">
                <div className="anotherMainContent">
                    <a href="#" className="aConfig">Home &gt;</a>
                    <a href="#" className="aConfig">Shop &gt;</a>
                    <a href="#" className="aConfig">Men &gt;</a>
                    <a href="#" className="aConfig aConfigTshirts">T-shirts</a>
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
                                $260<span className="price">$300</span><span className="discount">-40%</span>
                            </p>
                            <p className="productDetailP">
                                This graphic t-shirt which is perfect for any occasion. Crafted from a soft and 
                                breathable fabric, it offers superior comfort and style.
                            </p>
                            <img src={line} alt="Line" />
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
                            <div className="buttonDiv">
                                <button class="smallB"
                                    className={`sizeButton ${selectedSize === "Small" ? "selected" : ""}`} 
                                    onClick={() => handleSizeSelect("Small")}>Small
                                </button>
                                <button class="mediumB"
                                    className={`sizeButton ${selectedSize === "Medium" ? "selected" : ""}`} 
                                    onClick={() => handleSizeSelect("Medium")}>Medium
                                </button>
                                <button class="largeB"
                                    className={`sizeButton ${selectedSize === "Large" ? "selected" : ""}`} 
                                    onClick={() => handleSizeSelect("Large")}>Large
                                </button>
                                <button class="xLargeB"
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
