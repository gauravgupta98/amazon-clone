import { useState } from "react";
import { StarRate } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import "./CheckoutProduct.css";
import { IProduct, ActionTypes } from "../../store/reducer";

const MAX_RATING = 5;
const MIN_RATING = 1;

function CheckoutProduct({
  id,
  image,
  title,
  price,
  category,
  description,
  hideButton,
}: IProduct) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const removeFromBasket = () => {
    dispatch({
      type: ActionTypes.RemoveFromBasket,
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        category: category,
      },
    });
  };

  return (
    <div className="checkoutProduct" id={id}>
      <img className="checkoutProduct__image" src={image} alt={title} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__category">{category}</p>
        <h4 className="checkoutProduct__title">{title}</h4>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarRate className="checkoutProduct__star" />
            ))}
        </div>
        <p className="product__description">{description}</p>
        <p className="checkoutProduct__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>

        {!hideButton && (
          <button onClick={removeFromBasket}>Remove from Basket</button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
