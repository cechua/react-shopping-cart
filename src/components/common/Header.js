import React from "react";
import MenuLink from "./MenuLink";

const Header = ({ itemsCount, openSideCheckout }) => {
  return (
    <div className="header">
      <span>PC Builder Shop</span>
      <div className="header-menu">
        <MenuLink url="/" name="Home" />
        <MenuLink url="/shop" name="Shop" />
        <span className="link-item" onClick={() => openSideCheckout(true)}>
          Checkout({itemsCount})
        </span>
      </div>
    </div>
  );
};

export default Header;
