import { Box } from "@mui/material";
import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AddProduct from "../components/Products/AddProduct";

const AdminPage = () => {
  return (
    <Box sx={{ m: 10, mt: 10 }}>
      <AddProduct />
    </Box>
  );
};

export default AdminPage;
