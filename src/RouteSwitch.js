import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShopPage from "components/shopPage/ShopPage";
import HomePage from "components/homePage/HomePage";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
const RouteSwitch = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const addToCheckout = (quantity, item) => {
    item["quantity"] = quantity;
    console.log(item);
    setCheckoutItems([...checkoutItems, item]);
  };
  useEffect(() => {
    setItemsCount(
      checkoutItems?.reduce((prev, curr) => prev + curr.quantity, 0) ?? 0
    );
  }, [checkoutItems]);
  return (
    <BrowserRouter>
      <Header itemsCount={itemsCount} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={<ShopPage addToCheckout={addToCheckout} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteSwitch;
