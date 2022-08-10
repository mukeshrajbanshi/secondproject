import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import store from "../src/store";
import { Provider } from "react-redux";
import FilterProducts from "./components/FilterProducts";
import CartDetails from "./components/CartDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarHeader from "./components/NavbarHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from "./reportWebVitals";
import NewCardDetails from "./components/NewCardDetails";
import PlaceOrder from "./components/PlaceOrder";
import Checkout from "./components/Checkout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <NavbarHeader />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/productDetails/:id" element={<NewCardDetails />} />
          <Route exact path="/productDetails" element={<FilterProducts />} />
          <Route exact path="/cartDetails" element={<CartDetails />} />
          <Route exact path="/placeorder" element={<PlaceOrder />} />
          <Route exact path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
