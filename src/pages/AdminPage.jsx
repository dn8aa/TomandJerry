import { Box } from "@mui/material";
import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import AddProduct from "../components/Products/AddProduct";

const AdminPage = () => {
  return (
    <Box sx={{ m: {xs:3, sm:10}, mt: 10, display:'flex',justifyContent:'center' }}>
      <AddProduct />
    </Box>
  );
};

export default AdminPage;
