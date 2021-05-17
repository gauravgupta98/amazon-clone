import React from "react";
import { StarRate } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import "./CheckoutProduct.css";
import { Product, ActionTypes } from "../../store/reducer";

function CheckoutProduct({ id, image, title, price, rating }: Product) {
  const dispatch = useDispatch();

  const removeFromBasket = () => {
    dispatch({
      type: ActionTypes.RemoveFromBasket,
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarRate className="checkoutProduct__star" />
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;