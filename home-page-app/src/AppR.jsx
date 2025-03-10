import React from "react";
import HeaderContent from "./Header";
import MainContent from "./Main";
import FooterContent from "./Footer";
import { useState } from "react";
import ProductDetails from "./ProductDetails";

function AppDesign() {
    const [showProductDetails, setShowProductDetails] = useState(false);

    const handleProductClick = () => {
        setShowProductDetails(true);
    };

    const handleBackToMain = () => {
        setShowProductDetails(false);
    };

    return (
        <>
            <HeaderContent handleBackToMain={handleBackToMain}/>
            {showProductDetails ? (
                <ProductDetails handleBackToMain={handleBackToMain} />
            ) : (
                <MainContent handleProductClick={handleProductClick} />
            )}
            <FooterContent />
        </>
    );
}

export default AppDesign;

