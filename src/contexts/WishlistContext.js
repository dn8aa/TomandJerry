import React, { createContext, useContext, useReducer, useState } from "react";
import { CART, WISH } from "../helpers/consts";
import { getCountWishesInCart } from "../helpers/functions";
import CartContextProvider from "./CartContext";
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

  const changeProductCountWish = (count, id) => {
    let wish = JSON.parse(localStorage.getItem("wish"));
    wish.products = wish.products.map((product) => {
      if (product.item.id === id) {
        product.count = count;
      }
      return product;
    });

    dispatch({
      type: WISH.GET_WISH,
      payload: wish,
    });
  };

  function deleteWishProduct(id) {
    let wish = JSON.parse(localStorage.getItem("wish"));
    wish.products = wish.products.filter((elem) => elem.item.id !== id);
    localStorage.setItem("wish", JSON.stringify(wish));
    getWish();
    dispatch({
      type: WISH.GET_WISH_LENGTH,
      payload: wish,
    });
  }

  function checkProductInWish(id) {
    let wish = JSON.parse(localStorage.getItem("wish"));
    if (wish) {
      let newWish = wish.products.filter((elem) => elem.item.id == id);
      return newWish.length > 0 ? true : false;
    } else {
      wish = {
        product: [],
      };
    }
  }
  const [favoriteHover, setFavoriteHover] = useState("");

  const values = {
    addProductToWish,
    changeProductCountWish,
    checkProductInWish,
    getWish,
    wish: state.wish,
    deleteWishProduct,
    favoriteHover,
    setFavoriteHover,
  };
  return (
    <wishlistContext.Provider value={values}>
      {children}
    </wishlistContext.Provider>
  );
};

export default WishlistContextProvider;
