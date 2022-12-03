import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";

const Summary = () => {
  const { cart } = useCart();
  const navigate = useNavigate()
  return (
    <Box sx={{ width: { xs: "100%", sm: "30%", m: 7 } }}>
      <Typography sx={{ fontSize: 20, fontWeight:600 }}>Summary</Typography>

      {cart.products.map((row) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            alignItems: "center",
            mt: 2,
          }}
        >
          <img width={"30%"} src={row.item.img1} alt="" />
          <Box>
            <Typography sx={{ fontSize: 17, textAlign: "right" }}>
              {row.item.title}
            </Typography>
            <Typography sx={{ fontSize: 15, textAlign: "right" }}>
              $ {row.item.price}
            </Typography>
          </Box>
        </Box>
      ))}

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          alignItems: "center",
          mt: 2,
          borderBottom: "1px lightgrey solid",
          pb: 2,
        }}
      >
        <Typography sx={{ fontSize: 17 }}>Delivery</Typography>
        <Typography sx={{ fontSize: 15, textAlign: "right" }}>
          $ 0,00
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          alignItems: "center",
          mt: 2,

          pb: 2,
        }}
      >
        <Typography sx={{ fontSize: 17, fontWeight: 600 }}>Total</Typography>
        <Typography sx={{ fontSize: 15, fontWeight: 600, textAlign: "right" }}>
          $ {cart.totalPrice}
        </Typography>
      </Box>
      <Button
        variant="contained"
        sx={{
          width: "60%",
          backgroundColor: "black",
          ":hover": {
            backgroundColor: "white",
            color: "black",
            boxShadow: "none",
            width: "60%",
          },
        }}
      >
        Save and Continue
      </Button>
      <Button
        variant="black"
        onClick={()=> navigate('/cart')}
        sx={{
            border:'1px lightgrey solid',
          width: "60%",
            mt:2,
          ":hover": {
            backgroundColor: "lightgrey",
            color: "white",
            boxShadow: "none",
            width: "60%",
          },
        }}
      >
       Go Back to Cart
      </Button>
    </Box>
  );
};

export default Summary;
