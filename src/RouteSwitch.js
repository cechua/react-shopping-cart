import React, { useEffect, useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ShopPage from "components/shopPage/ShopPage";
import HomePage from "components/homePage/HomePage";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import SideNavCheckout from "components/checkoutPage/SideNavCheckout";
import CheckoutPage from "components/checkoutPage/CheckoutPage";
const RouteSwitch = () => {
  const [itemsCount, setItemsCount] = useState(0);
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [sideNavOpen, setSideNavOpen] = useState(false);
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
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setSideNavOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);
  console.log(sideNavOpen);
  return (
    <BrowserRouter>
      <Header itemsCount={itemsCount} openSideCheckout={setSideNavOpen} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={<ShopPage addToCheckout={addToCheckout} />}
        />
        <Route
          path="/checkout"
          element={<CheckoutPage checkoutItems={checkoutItems} />}
        />
      </Routes>
      <Footer />
      {sideNavOpen && (
        <SideNavCheckout
          checkoutItems={checkoutItems}
          openSideCheckout={setSideNavOpen}
        />
      )}
    </BrowserRouter>
  );
};

export default RouteSwitch;
