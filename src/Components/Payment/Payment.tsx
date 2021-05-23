import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

import "./Payment.css";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { IBasketState, getBasketTotal, ActionTypes } from "../../store/reducer";
import { db } from "../../firebase";

function Payment() {
  const { basket, user } = useSelector<IBasketState, IBasketState>(
    (state) => state
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        // Stripe expects the total in a currencies subunits
        url: `https://amazonclonebackend.herokuapp.com/payments/create?total=${
          getBasketTotal(basket) * 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    if (!user) {
      setError("Please login for checkout.");
      return;
    }

    setProcessing(true);

    await stripe
      ?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements?.getElement(CardElement)!,
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent?.id)
          .set({
            basket: basket,
            amount: paymentIntent?.amount,
            created: paymentIntent?.created,
          });

        setSucceeded(true);
        setError("");
        setProcessing(false);

        dispatch({
          type: ActionTypes.EmptyBasket,
        });

        history.replace("/orders");
      });
  };

  const handleChange = (event: any) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error?.message || "");
  };

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
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <strong>
                  Order Total: <small>₹</small>
                  {getBasketTotal(basket)}
                </strong>
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {error && (
                <div className="payment__error">
                  <strong>{error}</strong>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
