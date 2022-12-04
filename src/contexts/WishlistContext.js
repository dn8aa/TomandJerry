import React, { createContext, useContext, useReducer } from "react";
import { CART, WISH } from "../helpers/consts";
import { getCountWishesInCart } from "../helpers/functions";
const wishlistContext = createContext();
export const useWishlist = () => useContext(wishlistContext);

const INIT_STATE = {
  wish: JSON.parse(localStorage.getItem("wish")),
  wishLength: getCountWishesInCart(),
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case WISH.GET_WISH:
      return { ...state, wish: action.payload };
    case WISH.GET_WISH_LENGTH:
      return { ...state, wishLength: action.payload };

    default:
      return state;
  }
}

const WishlistContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const getWish = () => {
    let wish = JSON.parse(localStorage.getItem("wish"));
    if (!wish) {
      localStorage.setItem("wish", JSON.stringify({ products: [] }));
      wish = { products: [] };
    }

    dispatch({
      type: WISH.GET_WISH,
      payload: wish,
    });
  };

  const addProductToWish = (product) => {
    let wish = JSON.parse(localStorage.getItem("wish"));
    if (!wish) {
      wish = {
        products: [],
      };
    }

    let newProduct = {
      item: product,
      count: 1,
    };

    let productToFind = wish.products.filter(
      (elem) => elem.item.id === product.id
    );

    if (productToFind.length == 0) {
      wish.products.push(newProduct);
    } else {
      wish.products = wish.products.filter(
        (elem) => elem.item.id !== product.id
      );
    }

    localStorage.setItem("wish", JSON.stringify(wish));

    dispatch({
      type: WISH.GET_WISH,
      payload: wish,
    });
  };

  //   const addProductToWish = (product) => {
  //     let wish = JSON.parse(localStorage.getItem("wish"));
  //     if (!wish) {
  //       wish = {
  //         products: [],
  //       };
  //     }

  //     let newProduct = {
  //       item: product,
  //       count: 1,
  //     };

  //     let productToFind = wish.products.filter(
  //       (elem) => elem.item.id === product.id
  //     );

  //     if (productToFind.length == 0) {
  //       wish.products.push(newProduct);
  //     } else {
  //       wish.products = wish.products.filter(
  //         (elem) => elem.itemm.id !== product.id
  //       );
  //     }

  //     dispatch({
  //       type: WISH.GET_WISH,
  //       payload: wish,
  //     });
  //   };

  const values = { addProductToWish };
  return (
    <wishlistContext.Provider value={values}>
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistContextProvider;
