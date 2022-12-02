import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { img, setImg } = useProducts();
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(`/products/${item.id}`)}
      sx={{ m: 2, display: "flex", flexDirection: "column" }}
    >
      <Box onMouseOut={() => setImg("")} onMouseOver={() => setImg(item.id)}>
        {img === item.id ? (
          <Box
            sx={{
              width: { xs: "216px", lg: "270px" },
              height: { xs: "273px", lg: "342px" },
              display: "flex",
              justifyContent: "flex-end",
              backgroundImage: `url(${item.img2})`,
              backgroundSize: "cover",
            }}
          >
            <FavoriteBorderIcon sx={{ m: 1 }} />
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
          
          }}
        >
          <FavoriteBorderIcon sx={{ m: 1 }} />
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
      <Typography sx={{ fontWeight: 600, fontSize: 20 }}>
        {item.title}
      </Typography>
      <Typography sx={{ mb: 2 }}>{item.description}</Typography>
      <Typography>${item.price}</Typography>
    </Box>
  );
};

export default ProductCard;
