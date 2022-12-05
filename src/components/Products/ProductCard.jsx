import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../contexts/WishlistContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
const ProductCard = ({ item }) => {
  const { img, setImg } = useProducts();
  const navigate = useNavigate();
  const { addProductToWish, checkProductInWish } = useWishlist();
  const { favoriteHover, setFavoriteHover } = useWishlist();

  return (
    <Box
      sx={{
        m: 2,
        display: "flex",
        flexDirection: "column",
        width: { xs: "216px", lg: "270px" },
        height: "fit-content",
      }}
    >
      <Box
        sx={{
          width: { xs: "216px", lg: "270px" },
          height: { xs: "273px", lg: "342px" },
        }}
        onMouseOut={() => setImg("")}
        onMouseOver={() => setImg(item.id)}
      >
        {img === item.id ? (
          <Box
            sx={{
              width: { xs: "216px", lg: "270px" },
              height: { xs: "273px", lg: "342px" },
              display: "flex",
              justifyContent: "flex-end",
              backgroundImage: `url(${item.img2})`,
              backgroundSize: "cover",
              transition: "0.3s",
            }}
          >
            {checkProductInWish(item.id) ? (
              <FavoriteIcon
                sx={{ m: 1, cursor: "pointer" }}
                onClick={() => addProductToWish(item)}
              />
            ) : (
              <FavoriteBorderIcon
                sx={{ m: 1, cursor: "pointer" }}
                onClick={() => addProductToWish(item)}
              />
            )}
          </Box>
        ) : (
          <Box
            sx={{
              width: { xs: "216px", lg: "270px" },
              height: { xs: "273px", lg: "342px" },
              display: "flex",
              justifyContent: "flex-end",
              backgroundImage: `url(${item.img1})`,
              backgroundSize: "cover",
              transition: "0.3s",
            }}
          >
            {!checkProductInWish(item.id) ? (
              <FavoriteBorderIcon
                sx={{ m: 1, cursor: "pointer" }}
                onClick={() => addProductToWish(item)}
              />
            ) : (
              <FavoriteIcon
                sx={{ m: 1, cursor: "pointer" }}
                onClick={() => addProductToWish(item)}
              />
            )}
          </Box>
        )}
        {/* 
        <Box
          sx={{
            width: { xs: "216px", lg: "270px" },
            height: { xs: "273px", lg: "342px" },
            display: "flex",
            justifyContent: "flex-end",
            backgroundImage: `url(${item.img1})`,
            backgroundSize: "cover",
          }}
        >
          <FavoriteBorderIcon sx={{ m: 1 }} />
        </Box> */}
      </Box>
      <Typography
        onClick={() => navigate(`/products/${item.id}`)}
        sx={{ fontWeight: 600, fontSize: 20, cursor: "pointer" }}
      >
        {item.title}
      </Typography>
      <Typography
        onClick={() => navigate(`/products/${item.id}`)}
        sx={{ mb: 2, cursor: "pointer" }}
      >
        {item.description}
      </Typography>
      <Typography>${item.price}</Typography>
    </Box>
  );
};

export default ProductCard;
