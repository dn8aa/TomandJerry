import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { useProducts } from "../../../contexts/ProductContextProvider";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  const { addProductToCart, checkProductInCart } = useCart();

  return (
    <Box sx={{ display: "flex" }}>
      <Box sx={{ display: "flex", width: "60%", alignItems: "center" }}>
        <img width="50%" src={productDetails.img1} alt="" />

        <img width="50%" src={productDetails.img2} alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          mt: 6,
          pl: 5,
          width: "40%",
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 22 }}>
          {productDetails.title}
        </Typography>
        <Typography>{productDetails.description}</Typography>

        <Typography sx={{ fontSize: 22, fontWeight: 400, mt: 5, mb: 5 }}>
          ${productDetails.price}
        </Typography>
        <Button
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
          color="secondary"
        >
          edit
        </Button>
        <Button
          onClick={() => {
            deleteProduct(id);
            navigate("/products");
          }}
          color="error"
        >
          delete
        </Button>

        {checkProductInCart(productDetails.id) ? (
          <Button
            variant="contained"
            onClick={() => addProductToCart(productDetails)}
          >
            ALREADY IN BAG
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={() => addProductToCart(productDetails)}
          >
            {" "}
            ADD TO BAG
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default ProductDetails;
