import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "./App.css";

import { auth } from "./firebase";
import { ActionTypes } from "./store/reducer";

import Checkout from "./Components/Checkout/Checkout";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Payment from "./Components/Payment/Payment";

const promise = loadStripe(
  "pk_test_51ItpgLSDXMsfyylsnl01MqdIy3xPatUxejeKFtfN4VQGSD8e9SoAbRX1krqhlcMQI72PkcrlZk2qv3uwM1BfWtZc00J9U45ssV"
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: ActionTypes.SetUser,
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: ActionTypes.SetUser,
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
