import { Box } from "@mui/system";
import React from "react";
import Checkout from "../components/CheckoutPay/Checkout";
import Summary from "../components/CheckoutPay/Summary";

const CheckoutPage = () => {
  return (
    <Box
      sx={{
        mt: 0,
        m: { xs: 0, sm: 5 },
        p: 4,
        px: { xs: 2, sm: 4 },
        pt: 10,
        display: { xs: "block", sm: "flex" },
        justifyContent: "center",
      }}
    >
      <Checkout />
      <Summary />
    </Box>
  );
};

export default CheckoutPage;
