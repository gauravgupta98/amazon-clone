import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import "./Subtotal.css";

import { IBasketState, getBasketTotal } from "../../store/reducer";

function Subtotal() {
  const history = useHistory();
  const { user, basket } = useSelector<IBasketState, IBasketState>(
    (state) => state
  );
  const [error, setError] = useState("");

  useEffect(() => {
    if (basket.length === 0) {
      setError("Please add some products to cart to checkout.");
    }
  }, [basket]);

  return (
    <div className="subtotal">
      <p>
        Subtotal ({basket.length} items):{"  "}
        <strong>
          <small>₹</small>
          {getBasketTotal(basket)}
        </strong>
      </p>
      <small className="subtotal__gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      {error.length > 0 ? (
        <div className="error">
          <strong>{error}</strong>
        </div>
      ) : (
        <button onClick={(e) => history.push(user ? `/payment` : "/login")}>
          Proceed to Checkout
        </button>
      )}
    </div>
  );
}

export default Subtotal;
