import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Payment.css";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { IBasketState } from "../../store/reducer";

function Payment() {
  const { basket, user } = useSelector<IBasketState, IBasketState>(
    (state) => state
  );

  return (
    <div className="payment">
      <div className="payment__container">
        <h2>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h2>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>Sample Address, Sector-6</p>
            <p>Chandigarh, India</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
