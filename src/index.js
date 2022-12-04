import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ProductContextProvider from "./contexts/ProductContextProvider";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import WishlistContextProvider from "./contexts/WishlistContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <WishlistContextProvider>
      <CartContextProvider>
        <AuthContextProvider>
          <ProductContextProvider>
            <App />
          </ProductContextProvider>
        </AuthContextProvider>
      </CartContextProvider>
    </WishlistContextProvider>
  </BrowserRouter>
);
