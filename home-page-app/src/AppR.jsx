import React, { useState } from "react";
import HeaderContent from "./Header";
import MainContent from "./Main";
import FooterContent from "./Footer";
import ProductDetails from "./ProductDetails";
import CategoriesPage from "./Categories";

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
            {currentPage === "categories" && <CategoriesPage handleBackToMain={handleBackToMain} />}
            {currentPage === "main" && <MainContent handleProductClick={handleProductClick} handleCategorieClick={handleCategorieClick} />}

            <FooterContent />
        </>
    );
}

export default AppDesign;
