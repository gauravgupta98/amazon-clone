import React from "react";
import { useSelector } from "react-redux";

import "./Subtotal.css";

import { IBasketState, IProduct, getBasketTotal } from "../../store/reducer";

function Subtotal() {
  const cart = useSelector<IBasketState, IProduct[]>((state) => state.basket);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({cart.length} items):{"  "}
        <strong>
          <small>₹</small>
          {getBasketTotal(cart)}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
