import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    type: "",
    img1: "",
    img2: "",
    comments: [],
  });
  const handleInp = (e) => {
    if (e.target.name === "price") {
      let obj = { ...product, [e.target.name]: Number(e.target.value) };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  return (
    <Box sx={{ mt: 10 }}>
      <TextField
        onChange={handleInp}
        sx={{ m: 1 }}
        label="title"
        fullWidth
        variant="outlined"
        name="title"
      />
      <TextField
        onChange={handleInp}
        sx={{ m: 1 }}
        label="description"
        fullWidth
        variant="outlined"
        name="description"
      />{" "}
      <TextField
        onChange={handleInp}
        sx={{ m: 1 }}
        label="price"
        fullWidth
        variant="outlined"
        name="price"
      />
      <TextField
        onChange={handleInp}
        sx={{ m: 1 }}
        label="type"
        fullWidth
        variant="outlined"
        name="type"
      />
      <TextField
        onChange={handleInp}
        sx={{ m: 1 }}
        label="img1"
        fullWidth
        variant="outlined"
        name="img1"
      />
      <TextField
        onChange={handleInp}
        sx={{ m: 1 }}
        label="img2"
        fullWidth
        variant="outlined"
        name="img2"
      />
      <Button
        onClick={() => {
          addProduct(product);
          navigate("/products");
        }}
        sx={{
          borderColor: "black",
          backgroundColor: "#0B1F4F",
          color: "white",
          transition: "1000s",
          gridColumn: "1/3",
        }}
        variant="outlined"
        fullWidth
        size="large"
      >
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;
