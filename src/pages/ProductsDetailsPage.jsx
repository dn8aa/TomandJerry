import { Box } from "@mui/material";
import React from "react";
import Comments from "../components/Products/ProductDetails/Comments";
import ProductDetails from "../components/Products/ProductDetails/ProductDetails";

const ProductsDetailsPage = () => {
  return (
    <Box sx={{ m: 10, mt: 10 }}>
      <ProductDetails />
      <Comments/>
    </Box>
  );
};

export default ProductsDetailsPage;
