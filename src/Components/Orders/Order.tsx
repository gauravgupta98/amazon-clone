import moment from "moment";

import "./Orders.css";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { IProduct } from "../../store/reducer";

function Order({ order }: any) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        Stripe Payment Reference:
        <small> {order.id}</small>
      </p>
      {order.data.basket?.map((item: IProduct) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          category={item.category}
          description={item.description}
          hideButton={true}
        />
      ))}
      <h3 className="order__total">
        Order Total: <small>₹</small>
        {order.data.amount / 100}
      </h3>
    </div>
  );
}

export default Order;
