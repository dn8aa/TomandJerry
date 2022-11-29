import React from "react";
import AdminPage from "../pages/AdminPage";
import AuthPage from "../pages/AuthPage";
import CartPage from "../pages/CartPage";
import EditProductPage from "../pages/EditProductPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import ProductsDetailsPage from "../pages/ProductsDetailsPage";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/auth", element: <AuthPage />, id: 2 },
    { link: "/products", element: <ProductsPage />, id: 3 },
    { link: "/products/:id", element: <ProductsDetailsPage />, id: 4 },
    { link: "*", element: <NotFoundPage />, id: 5 },
    { link: "/cart", element: <CartPage />, id: 6 },
    { link: "/edit/:id", element: <EditProductPage />, id: 8 },
    { link: "/admin", element: <AdminPage />, id: 9 },
  ];
  return <div></div>;
};

export default MainRoutes;
