import { Box, Typography } from "@mui/material";
import React from "react";
import ProductFilter from "../components/Products/ProductFilter";
import ProductList from "../components/Products/ProductList";
import { useProducts } from "../contexts/ProductContextProvider";

const ProductsPage = () => {
  const { filter, setFilter } = useProducts();
  return (
    <Box sx={{ p: 4, pt: 10 }}>
      <Typography
        onClick={() => setFilter(!filter)}
        sx={{ width: "10%", fontSize: 20, cursor: "pointer" }}
      >
        Filter &#5171;{" "}
      </Typography>
      <Box sx={{ display: "flex" }}>
        {filter ? (
          <Box sx={{ width: "60%" }}>
            <ProductFilter />
          </Box>
        ) : (
          <></>
        )}

        <ProductList />
      </Box>
    </Box>
  );
};

export default ProductsPage;
