import React from "react";

import theleanstartup from "../../resources/products/theleanstartup.jpg";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>The lean startup</p>
        <p className="product__price">
          <small>₹</small>
          <strong>600</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img src={theleanstartup} alt="book" />

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
