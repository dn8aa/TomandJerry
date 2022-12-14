import { Box, Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useCart } from "../../../contexts/CartContext";
import { useProducts } from "../../../contexts/ProductContextProvider";
import { useWishlist } from "../../../contexts/WishlistContext";
import { ADMIN } from "../../../helpers/consts";
import ZoomImage from "../../ZoomImage/ZoomImage";
import Comments from "./Comments";

const ProductDetails = () => {
  const navigate = useNavigate();
  const { getProductDetails, productDetails, deleteProduct } = useProducts();
  const { addProductToWish, checkProductInWish } = useWishlist();
  const { id } = useParams();
  useEffect(() => {
    getProductDetails(id);
  }, []);

  const { addProductToCart, checkProductInCart } = useCart();
  const {
    user: { email },
    handleLogout,
  } = useAuth();
  return (
    <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
      <Box
        sx={{
          display: "flex",
          width: { xs: "100%", md: "70%" },
          alignItems: "center",
        }}
      >
        <ZoomImage picture={productDetails.img1} />

        <img width="50%" src={productDetails.img2} alt="" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          ml: { xs: 0, md: 10 },
          mt: 6,
          pl: { xs: 0, md: 0 },
          width: { xs: "100%", md: "40%" },
          alignItems: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 22 }}>
          {productDetails.title}
        </Typography>
        <Typography sx={{ textAlign: { xs: "center", md: "center" } }}>
          {productDetails.description}
        </Typography>

        <Typography sx={{ fontSize: 22, fontWeight: 400, mt: 5, mb: 5 }}>
          ${productDetails.price}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "50%" },
          }}
        >
          {checkProductInCart(productDetails.id) ? (
            <Button
              variant="black"
              onClick={() => addProductToCart(productDetails)}
              sx={{ border: "1px solid lightgrey" }}
            >
              ALREADY IN BAG
            </Button>
          ) : (
            <Button
              className="btn-add"
              variant="contained"
              sx={{
                backgroundColor: "black",
                ":hover": {
                  backgroundColor: "white",
                  border: "1px solid green",
                  color: "green",
                  boxShadow: "none",
                },
              }}
              onClick={() => addProductToCart(productDetails)}
            >
              {" "}
              ADD TO BAG
            </Button>
          )}
          {checkProductInWish(productDetails.id) ? (
            <Button
              onClick={() => addProductToWish(productDetails)}
              variant="black"
              sx={{ mt: 1, border: "1px lightgrey solid" }}
            >
              In wishlist &#128150;
            </Button>
          ) : (
            <Button
              onClick={() => addProductToWish(productDetails)}
              variant="black"
              sx={{ mt: 1, border: "1px lightgrey solid" }}
            >
              add to Wishlist &#128420;
            </Button>
          )}

          {email === ADMIN ? (
            <Button
              onClick={() => {
                navigate(`/edit/${id}`);
              }}
              variant="black"
              sx={{ border: "1px solid lightgrey", mt: 4 }}
            >
              edit
            </Button>
          ) : (
            <></>
          )}
          {email === ADMIN ? (
            <Button
              onClick={() => {
                deleteProduct(id);
                navigate("/products");
              }}
              color="error"
              sx={{ border: "1px solid lightgrey", mt: 1 }}
            >
              delete
            </Button>
          ) : (
            <></>
          )}
        </Box>
      </Box>
   
    </Box>
  );
};

export default ProductDetails;
