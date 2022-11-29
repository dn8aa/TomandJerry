import axios from "axios";
import React, { createContext, useContext } from "react";
import { JSON_API_PRODUCTS } from "../helpers/consts";
export const productContext = createContext();

export const useProducts = () => {
  return useContext(productContext);
};

//!adding products
const ProductContextProvider = ({ children }) => {
  async function addProduct(newProduct) {
    await axios.post(JSON_API_PRODUCTS, newProduct);
  }
  const values = {
    addProduct,
  };

  return <productContext.Provider value={values}>{children}</productContext.Provider>;
};

export default ProductContextProvider;
