import { Box, Typography } from "@mui/material";
import React from "react";
import Cart from "../components/Cart/Cart";
import Order from "../components/Cart/Order";
import AnnouncementOutlinedIcon from "@mui/icons-material/AnnouncementOutlined";

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

      <Box sx={{ display: "flex", mt: 3 }}>
        <Cart />
        <Order />
      </Box>
      <Box sx={{ display: "flex", mt:2 }}>
        <AnnouncementOutlinedIcon />
        <Typography sx={{ ml: 1, fontWeight: 600, fontSize: 14 }}>
          Important information for clients from Kyrgyzstan
        </Typography>
      </Box>
      <Typography sx={{ mb: 2, fontSize: 14, mt: 1 }}>
        If any parcel in your order exceeds €200 it will incur a customs fee,
        which is calculated as 15% of whatever the excess amount is.
      </Typography>
      <Typography sx={{ mb: 2, fontSize: 14, mt: 1 }}>
        If it costs less than €200, but the parcel weights more than 31 kg, it
        will incur a customs fee, which is calculated as €2 per each kg that
        exceeds the 31 kg threshold.
      </Typography>
      <Typography sx={{ mb: 2, fontSize: 14, mt: 1 }}>
        Delivery takes 2-4 days. You’ll receive a request of your passport copy
        and TIN number for customs clearance via SMS from DHL. Each partner will
        send its own parcel so items in your order may be delivered separately.
      </Typography>
    </Box>
  );
};

export default CartPage;
