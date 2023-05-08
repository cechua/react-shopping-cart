import React from "react";
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import ShopPage from "components/shopPage/ShopPage";
import HomePage from "components/homePage/HomePage";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
