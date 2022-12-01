import { Box, Typography } from "@mui/material";
import React from "react";
import Cart from "../components/Cart/Cart";
import Order from "../components/Cart/Order";

const CartPage = () => {
  return (
    <Box sx={{ m: 10, mt: 10 }}>
      <Typography
        sx={{
          textAlign: "center",
          fontWeight: 600,
          fontStretch: "ultra-expanded",
          fontSize: 28,
        }}
      >
        SHOPPING BAG
      </Typography>

      <Box sx={{ display: "flex", mt:3 }}>
        <Cart />
        <Order/>
      </Box>
    </Box>
  );
};

export default CartPage;
