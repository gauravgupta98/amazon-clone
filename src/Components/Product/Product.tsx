import { useState } from "react";
import { StarRate } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import "./Product.css";

import { ActionTypes, IProduct as IProductData } from "../../store/reducer";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, image, price, category }: IProductData) {
  const dispatch = useDispatch();
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const addToBasket = () => {
    dispatch({
      type: ActionTypes.AddToBasket,
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
    <div className="product">
      <p>{category}</p>
      <img src={image} alt={title} />
      <div className="product__info">
        <h4>{title}</h4>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill(rating)
            .map((_, i) => (
              <StarRate className="product__star" />
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
