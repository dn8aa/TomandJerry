import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:'space-around' }}>
      {products.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Box>
  );
};

export default ProductList;
