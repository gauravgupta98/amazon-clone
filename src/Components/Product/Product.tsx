import { StarRate } from "@material-ui/icons";
import "./Product.css";

export interface ProductData {
  title: string;
  image: string;
  price: number;
  rating: number;
}

function Product({ title, image, price, rating }: ProductData) {
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
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
