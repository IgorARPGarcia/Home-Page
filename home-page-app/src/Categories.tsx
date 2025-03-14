import React from "react";
import { useState } from "react";
import gradientTshirt from './images/gradientTshirt.png';
import threeHalfStarsP from './images/threeHalfStarsP.png';
import fourHalfStarsP from './images/fourHalfStarsP.png';
import poloTipping from './images/poloTipping.png';
import blackTshirt from './images/blackTshirt.png';
import poloTshirt from './images/poloTshirt.png';
import cShirtImage from './images/C-Shirt.png';
import jeansImage from './images/Jeans.png';
import strTshirtImage from './images/StrT-shirt.png';
import courageTshirtImage from './images/courageT-shirt.png';
import fadedSJeansImage from './images/FadedSJeans.png';
import looseFitBermudaImage from './images/looseFitBermuda.png';
import verticalShirtImage from './images/verticalShirt.png';
import setaShopImage from './images/setaShop.png';
import filterButton from './images/filterButton.png';
import rightArrow1 from './images/rightArrow1.png';
import upArrow from './images/upArrow.png';
import priceChoose from './images/priceChoose.png';
import checkSimbol from './images/checkSimbol.png';
import arrowLeftB from './images/arrow-left.png';
import arrowRightB from './images/arrow-right.png';
import smallStar from './images/smallStar.png';
import bigStar from './images/BigStar.png';
import versaceLogo from './images/versace-logo-1 1.png';
import zaraLogo from './images/zara-logo-1 1.png';
import gucciLogo from './images/gucci-logo-1 1.png';
import pradaLogo from './images/prada-logo-1 1.png';
import calvinKleinLogo from './images/Calvin-Klein-logo-1 1.png';
import tshirtImage from './images/T-shirt.png';
import fiveStar from './images/fiveStar.png';
import leftArrow from './images/leftArrow.png';
import rightArrow from './images/rightArrow.png';
import fiveStarsP from './images/fiveStarsP.png';
import fourStars from './images/fourStars.png';
import fourStarsP from './images/fourStarsP.png';
import oneLifeFirstImg from './images/oneLifeFirstImg.png';
import oneLifeSecondImg from './images/oneLifeSecondImg.png';
import oneLifeThirdImg from './images/oneLifeThirdImg.png';
import oneLifeBigImg from './images/oneLifeBigImage.png';
import oneLifeStars from './images/oneLifeStars.png';

    interface CategoriesPageProps {
        handleBackToMain: () => void;
        handleProductClick: (num: number) => void; 
    }
  
    const CategoriesPage: React.FC<CategoriesPageProps> = ({ handleBackToMain, handleProductClick }) =>{

    const [selectedColor, setSelectedColor] = useState<string>('#00C12B');
    
        const handleColorClick = (color: string): void => {
            setSelectedColor(color);
        };
    
        const [selectedSize, setSelectedSize] = useState<string | null>(null);
    
        const handleSizeSelect = (size: string): void => {
            setSelectedSize(size);
        };
    
        const [currentPage, setCurrentPage] = useState<number>(1);
        const totalPages = 2;
    
        const handleNext = (): void => {
            if (currentPage < totalPages) {
                setCurrentPage(currentPage + 1);
            }
        };
    
        const handlePrevious = (): void => {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
            }
        };
        

    return(
        <>
            <div className="anotherMain">
                <div className="anotherMainContent">
                    <a href="#" className="aConfig" onClick={handleBackToMain}>Home <span className="homeArrow"><img src={rightArrow1} alt="" /></span></a>
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
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
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
                                    <div className="greenCircle2" onClick={() => handleColorClick("#00C12B")}>
                                        {selectedColor === "#00C12B" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="redCircle" onClick={() => handleColorClick("#F50606")}>
                                        {selectedColor === "#F50606" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="yellowCircle" onClick={() => handleColorClick("#F5DD06")}>
                                        {selectedColor === "#F5DD06" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="orangeCircle" onClick={() => handleColorClick("#F57906")}>
                                        {selectedColor === "#F57906" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="blueLightCircle" onClick={() => handleColorClick("#06CAF5")}>
                                        {selectedColor === "#06CAF5" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="blueDarkCircle" onClick={() => handleColorClick("#063AF5")}>
                                        {selectedColor === "#063AF5" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="purpleCircle2" onClick={() => handleColorClick("#7D06F5")}>
                                        {selectedColor === "#7D06F5" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="pinkCircle" onClick={() => handleColorClick("#F506A4")}>
                                        {selectedColor === "#F506A4" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="whiteCircle" onClick={() => handleColorClick("#FFFFFF")}>
                                        {selectedColor === "#FFFFFF" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                    <div className="blackCircle" onClick={() => handleColorClick("#000000")}>
                                        {selectedColor === "#000000" && <img width={20} height={20} src={checkSimbol} alt="Check" />}
                                    </div>
                                </div>
                            </div>
                            <div className="sizeDiv">
                                    <div className="sizeTitle">
                                        <p className="sizeH">Size</p>
                                        <button className="priceButton"><img src={upArrow} alt="" /></button>
                                    </div>
                                    <div className="sizeChoose">
                                        <button class="xxSmallB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}} 
                                            className={`sizeButton ${selectedSize === "XX-Small" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("XX-Small")}>XX-Small</button>
                                        <button class="xSmallB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                            className={`sizeButton ${selectedSize === "X-Small" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("X-Small")}>X-Small</button>
                                        <button class="smallB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                                className={`sizeButton ${selectedSize === "Small" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("Small")}>Small</button>
                                        <button class="mediumB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                            className={`sizeButton ${selectedSize === "Medium" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("Medium")}>Medium</button>
                                        <button class="largeB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                            className={`sizeButton ${selectedSize === "Large" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("Large")}>Large</button>
                                        <button class="xLargeB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                            className={`sizeButton ${selectedSize === "X-Large" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("X-Large")}>X-Large</button>
                                        <button class="xxLargeB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                            className={`sizeButton ${selectedSize === "XX-Large" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("XX-Large")}>XX-Large</button>
                                        <button class="xxxLargeB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                            className={`sizeButton ${selectedSize === "3X-Large" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("3X-Large")}>3X-Large</button>
                                        <button class="xxxxLargeB1" style={{display: "flex", justifyContent: "center", alignItems: "center"}}
                                            className={`sizeButton ${selectedSize === "4X-Large" ? "selected" : ""}`} 
                                            onClick={() => handleSizeSelect("4X-Large")}>4X-Large</button>
                                    </div>
                            </div>
                            <div className="filtersTitle1">
                                <p className="filterH">Dress Style</p>
                                <button className="filtersButton"><img src={upArrow} alt="" /></button>
                            </div>
                            <div className="dressTypes1">
                                <section className="types">
                                    <p className="typesNames">Casual</p>
                                    <p className="typesNames">Formal</p>
                                    <p className="typesNames">Party</p>
                                    <p className="typesNames">Gym</p>
                                </section>
                                <section className="arrowsSec">
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
                                    <p className="arrow"><img src={rightArrow1} alt="" /></p>
                                </section>
                            </div>
                            <div className="applyBDiv">
                                <button className="applyFilterB">Apply Filter</button>
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
                                <img className="productImgConfig" src={currentPage === 1 ? gradientTshirt : looseFitBermudaImage} alt="" />
                                <p className="productTextConfig">{currentPage === 1 ? "GRADIENT GRAPHIC T-SHIRT" : "LOOSE FIT BERMUDA SHORTS"}</p>
                                <img className="starsConfig" src={currentPage === 1 ? threeHalfStarsP : fiveStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? '$145' : '$80'}</p>
                            </div>
                            <div className="thirdP">
                                <img className="productImgConfig" src={currentPage === 1 ? poloTipping : courageTshirtImage} alt="" />
                                <p className="productTextConfig">{currentPage === 1 ? "POLO WITH TIPPING DETAILS" : "COURAGE GRAPHIC T-SHIRT"}</p>
                                <img className="starsConfig" src={currentPage === 1 ? fourHalfStarsP : fiveStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? '$180' : '$145'}</p>
                            </div>
                            <div className="fourthP">
                                <img className="productImgConfig" width={300} height={300} src={currentPage === 1 ? blackTshirt : oneLifeBigImg} alt="" onClick={handleProductClick} />
                                <p className="productTextConfig">{currentPage === 1 ? "BLACK STRIPED T-SHIRT" : "ONE LIFE GRAPHIC T-SHIRT"}</p>
                                <img className="starsConfig" src={currentPage === 1 ? fiveStarsP : fourHalfStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? '$120' : '$260 '}<span className="price">{currentPage === 1 ? "$150" : "$300"}</span><span className="discount">{currentPage === 1 ? "-30%" : "-40%"}</span></p>
                            </div>
                        </div>
                        <div className="secondRow">
                            <div className="secondP">
                                <img className="productImgConfig" src={currentPage === 1 ? jeansImage : verticalShirtImage} alt="" />
                                <p className="productTextConfig">{currentPage === 1 ? "SKINNY FIT JEANS" : "VERTICAL STRIPED SHIRT"}</p>
                                <img className="starsConfig" src={fiveStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? "$240" : "$212"}<span className="price">{currentPage === 1 ? "$150" : "$232"}</span><span className="discount">{currentPage === 1 ? "-30%" : "-20%"}</span></p>
                            </div>
                            <div className="thirdP">
                                <img className="productImgConfig" src={currentPage === 1 ? cShirtImage : gradientTshirt} alt="" />
                                <p className="productTextConfig">{currentPage === 1 ? "CHECKERED SHIRT" : "GRADIENT GRAPHIC T-SHIRT"}</p>
                                <img className="starsConfig" src={currentPage === 1? fiveStarsP : threeHalfStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? "$180" : "$145"}</p>
                            </div>
                            <div className="fourthP">
                                <img className="productImgConfig" src={currentPage === 1 ? strTshirtImage : poloTshirt} alt="" />
                                <p className="productTextConfig">{currentPage === 1 ? "SLEEVE STRIPED T-SHIRT" : "POLO WITH CONTRAST TRIMS"}</p>
                                <img className="starsConfig" src={fourStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? "$130" : "$212"}<span className="price">{currentPage === 1 ? "$160" : "$242"}</span><span className="discount">{currentPage === 1 ? "-30%" : "-20%"}</span></p>
                            </div>
                        </div>
                        <div className="thirdRow">
                            <div className="firstP">
                                <img className="productImgConfig" src={currentPage === 1 ? verticalShirtImage : blackTshirt} alt="" />
                                <p className="productTextConfig">{currentPage === 1 ? "VERTICAL STRIPED SHIRT" : "BLACK STRIPED T-SHIRT"}</p>
                                <img className="starsConfig" src={fiveStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? "$212" : "$120"}<span className="price">{currentPage === 1 ? "$232" : "$150"}</span><span className="discount">{currentPage === 1 ? "-20%" : "-30%"}</span></p>
                            </div>
                            <div className="secondP">
                                <img className="productImgConfig" src={currentPage === 1 ? courageTshirtImage : poloTipping} alt="" />
                                <p className="productTextConfig">{currentPage === 1 ? "COURAGE GRAPHIC T-SHIRT" : "POLO WITH TIPPING DETAILS"}</p>
                                <img className="starsConfig" src={currentPage === 1? fiveStarsP : fourHalfStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? "$145" : "$180"}</p>
                            </div>
                            <div className="thirdP">
                                <img className="productImgConfig" src={currentPage === 1 ? looseFitBermudaImage : tshirtImage} alt="" />
                                <p className="productTextConfig">{currentPage === 1 ? "LOOSE FIT BERMUDA SHORTS" : "T-SHIRT WITH TAPE DETAILS"}</p>
                                <img className="starsConfig" src={currentPage === 1? fiveStarsP : fiveStarsP} alt="" />
                                <p className="currentPrice">{currentPage === 1 ? "$80" : "$120"}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pagesBDiv">
                <div className="auxDiv">
                    <div className="pagesBContent">
                    <div className="previousB">
                        <button className="previousButton" onClick={handlePrevious}>
                        <img src={arrowLeftB} alt="" /> Previous
                        </button>
                    </div>
                    <div className="pagesNumberDiv">
                        {[1, 2, 3, "...", 8, 9, 10].map((num, index) => (
                        <button
                            key={index}
                            className={`button${num} ${num === currentPage ? "active" : ""}`}
                            style={{ 
                                backgroundColor: num === currentPage ? "#F0F0F0" : "white",
                                border: "1px solid #F0F0F0", 
                                borderRadius: "10px", 
                                fontFamily: "Satoshi", 
                                fontWeight: "500", 
                                fontSize: "14px", 
                                lineHeight: "20px", 
                                textAlign: "center", 
                                cursor: "pointer",
                                width: "14.28%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                             }}
                        >
                            {num}
                        </button>
                        ))}
                    </div>
                    <div className="nextB">
                        <button className="nextButton" onClick={handleNext}>
                        Next <img src={arrowRightB} alt="" />
                        </button>
                    </div>
                    </div>
                </div>
                </div>
        </>
    );
}

export default CategoriesPage;