import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const SideNavCheckout = ({ checkoutItems, openSideCheckout }) => {
  const navigate = useNavigate();
  const proceedToCheckout = () => {
    openSideCheckout(false);
    navigate("/checkout");
  };
  const totalQuantity = useMemo(() => {
    return (
      checkoutItems.reduce((prev, current) => prev + current.quantity, 0) ?? 0
    );
  }, [checkoutItems]);
  const totalAmount = useMemo(() => {
    return (
      checkoutItems.reduce(
        (prev, current) => prev + current.itemPrice * current.quantity,
        0
      ) ?? 0
    );
  }, [checkoutItems]);
  console.log(checkoutItems, totalAmount);
  return (
    <div id="mySidenav" className="sidenav">
      <div>
        <span
          className="close sidenav-close"
          onClick={() => openSideCheckout(false)}
        >
          &times;
        </span>
      </div>
      <div>
        {checkoutItems?.map((item) => {
          return (
            <div className="checkout-nav-items">
              <div className="checkout-nav-image-name">
                <img
                  src={item.imageSrc}
                  alt={item.itemName}
                  className="checkout-nav-image"
                />
                {item.itemName}
              </div>
              <div className="checkout-nav-quantity">Qty: {item.quantity}</div>
              <div className="checkout-nav-amount">
                ${item.itemPrice * item.quantity}
              </div>
            </div>
          );
        })}
        <div className="checkout-nav-total">
          <div className="checkout-nav-totals-container">
            <span>Total Quantity: </span>
            <span>{totalQuantity}</span>
          </div>
          <div className="checkout-nav-totals-container">
            <span>Total Amount: </span>
            <span>${totalAmount}</span>
          </div>
          <div className="checkout-sideNav-ctaContainer">
            <button
              className="buttonStyled button-checkout-sideNav-cta"
              onClick={() => openSideCheckout(false)}
            >
              Continue Shopping
            </button>
            <button
              className="buttonStyled button-checkout-sideNav-cta"
              onClick={proceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavCheckout;
