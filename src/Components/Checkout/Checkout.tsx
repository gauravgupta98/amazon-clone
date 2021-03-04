import React from "react";

import checkoutadv from "../../resources/checkoutadv.jpg";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutadv} alt="" />

        <div>
          <h2 className="checkout__title">Your Shopping Cart</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2>Subtotal will go here.</h2>
      </div>
    </div>
  );
}

export default Checkout;
