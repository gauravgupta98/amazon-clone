import React from "react";

import "./Subtotal.css";

function Subtotal() {
  return (
    <div className="subtotal">
      <p>
        Subtotal (0 items): <strong>{0}</strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
