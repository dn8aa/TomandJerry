import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import CheckoutPage from "../pages/CheckoutPage";

import AboutUsPage from "../pages/AboutUsPage";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsDetailsPage from "../pages/ProductsDetailsPage";
import ProductsPage from "../pages/ProductsPage";
import { Route, Routes, Navigate } from "react-router-dom";
import WishList from "../components/WishList/WishList";
import WIshListPage from "../pages/WIshListPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/products", element: <ProductsPage />, id: 3 },
    { link: "/products/:id", element: <ProductsDetailsPage />, id: 4 },
    { link: "*", element: <NotFoundPage />, id: 5 },
    { link: "/cart", element: <CartPage />, id: 6 },
    { link: "/edit/:id", element: <EditProductPage />, id: 8 },
    { link: "/admin", element: <AdminPage />, id: 9 },
    { link: "/aboutus", element: <AboutUsPage />, id: 10 },
    { link: "/wishlist", element: <WIshListPage />, id: 11 },
    { link: "/checkout", element: <CheckoutPage />, id: 12 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
