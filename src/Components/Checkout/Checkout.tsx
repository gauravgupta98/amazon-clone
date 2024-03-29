import { useSelector } from "react-redux";

import checkoutadv from "../../resources/checkoutadv.jpg";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { IBasketState } from "../../store/reducer";

function Checkout() {
  const { basket, user } = useSelector<IBasketState, IBasketState>(
    (state) => state
  );

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__ad" src={checkoutadv} alt="" />

        <div>
          <h3>Hello, {user?.email || "Guest"}</h3>
          <h2 className="checkout__title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              category={item.category}
              description={item.description}
              hideButton={false}
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
