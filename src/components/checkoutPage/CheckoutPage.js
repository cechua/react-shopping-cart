import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ checkoutItems }) => {
  const navigate = useNavigate();
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
  const handleContinueShopping = () => {
    navigate("/shop");
  };
  return (
    <div className="checkout-container">
      {checkoutItems?.map((item) => {
        return (
          <div className="checkout-items">
            <div className="checkout-image-name">
              <img
                src={item.imageSrc}
                alt={item.itemName}
                className="checkout-item-image"
              />
              {item.itemName}
            </div>
            <div className="checkout-quantity">Qty: {item.quantity}</div>
            <div className="checkout-amount">
              ${item.itemPrice * item.quantity}
            </div>
          </div>
        );
      })}
      <div className="checkout-total">
        <div className="checkout-totals-container">
          <span>Total Quantity: </span>
          <span>{totalQuantity}</span>
        </div>
        <div className="checkout-totals-container">
          <span>Total Amount: </span>
          <span>${totalAmount}</span>
        </div>
        <div className="checkout-ctaContainer">
          <button
            className="buttonStyled button-checkout-cta"
            onClick={handleContinueShopping}
          >
            Continue Shopping
          </button>
          <button className="buttonStyled button-checkout-cta">
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
