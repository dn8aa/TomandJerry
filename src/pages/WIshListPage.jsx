import { Box } from "@mui/system";
import React from "react";
import WishList from "../components/WishList/WishList";

const WIshListPage = () => {
  return (
    <Box
      sx={{
        m: { xs: 2, sm: 10 },
        mt: { xs: 10, sm: 10 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WishList />
    </Box>
  );
};

export default WIshListPage;
