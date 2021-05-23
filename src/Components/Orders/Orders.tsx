import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import firebase from "firebase";

import "./Orders.css";

import Order from "./Order";
import { db } from "../../firebase";
import { IBasketState } from "../../store/reducer";

export interface IOrderData {
  id: string;
  data: firebase.firestore.DocumentData;
}

function Orders() {
  const { user } = useSelector<IBasketState, IBasketState>((state) => state);
  const [orders, setOrders] = useState<IOrderData[]>([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);

  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
