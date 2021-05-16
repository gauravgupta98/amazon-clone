import { StarRate } from "@material-ui/icons";
import { useDispatch } from "react-redux";

import "./Product.css";

import { ActionTypes, Product as ProductData } from "../../store/reducer";

function Product({ id, title, image, price, rating }: ProductData) {
  const dispatch = useDispatch();

  const addToBasket = () => {
    dispatch({
      type: ActionTypes.AddToBasket,
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
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
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

      <img src={image} alt="book" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
