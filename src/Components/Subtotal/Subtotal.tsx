import React from "react";
import { useSelector } from "react-redux";

import "./Subtotal.css";

import { BasketState, Product, getBasketTotal } from "../../store/reducer";

function Subtotal() {
  const cart = useSelector<BasketState, Product[]>((state) => state.basket);

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
