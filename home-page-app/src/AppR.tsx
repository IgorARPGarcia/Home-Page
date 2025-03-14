import React, { useState } from "react";
import HeaderContent from "./Header.tsx";
import MainContent from "./Main.tsx";
import FooterContent from "./Footer.tsx";
import ProductDetails from "./ProductDetails.tsx";
import CategoriesPage from "./Categories.tsx";

function AppDesign() {
    const [currentPage, setCurrentPage] = useState("main");

    const handleProductClick = () => {
        setCurrentPage("productDetails");
    };

    const handleCategorieClick = () => {
        setCurrentPage("categories");
    };

    const handleBackToMain = () => {
        setCurrentPage("main");
    };

    return (
        <>
            <HeaderContent handleBackToMain={handleBackToMain} />
            
            {currentPage === "productDetails" && <ProductDetails handleBackToMain={handleBackToMain} />}
            {currentPage === "categories" && <CategoriesPage handleBackToMain={handleBackToMain} handleProductClick={handleProductClick}/>}
            {currentPage === "main" && <MainContent handleProductClick={handleProductClick} handleCategorieClick={handleCategorieClick} />}

            <FooterContent />
        </>
    );
}

export default AppDesign;
