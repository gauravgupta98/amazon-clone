import React from "react";
import { useSelector } from "react-redux";

import checkoutadv from "../../resources/checkoutadv.jpg";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { BasketState, Product } from "../../store/reducer";

function Checkout() {
  const cart = useSelector<BasketState, Product[]>((state) => state.basket);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutadv} alt="" />

        <div>
          <h3>Hello, user</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {cart.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
