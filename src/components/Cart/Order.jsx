import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const Order = () => {
  const { cart } = useCart();
  const promotion = 124.4;
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "30%" },
        boxSizing: "border-box",
        padding: { xs: 0, md: 6 },
        mt:{xs:6, md:0}
      }}
    >
      <Typography sx={{ fontWeight: 600, fontSize: 18 }}>Summary</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
        <Typography>Subtotal</Typography>
        <Typography>${cart.totalPrice}</Typography>
      </Box>
      <Box sx={{ mt: 1, display: "flex", justifyContent: "space-between" }}>
        <Typography>Delivery</Typography>
        <Typography>$0</Typography>
      </Box>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          justifyContent: "space-between",
          pb: 2,
          borderBottom: "1px solid lightgrey",
        }}
      >
        <Typography>Promotions</Typography>
        <Typography>-${promotion}</Typography>
      </Box>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
        <Typography>Total</Typography>

        <Typography sx={{ fontWeight: 600 }}>
          {" "}
          ${cart.totalPrice - promotion}
        </Typography>
      </Box>

      <Button
        onClick={() => navigate("/checkout")}
        sx={{
          width: "100%",
          backgroundColor: "black",
          color: "white",
          p: 1,
          mt: 2,
        }}
      >
        Go to Checkout
      </Button>
    </Box>
  );
};

export default Order;
