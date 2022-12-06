import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const { productDetails, getProductDetails, saveEditedProduct } =
    useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  const handleInp = (e) => {

    let obj = { ...product, [e.target.name]: e.target.value };
    setProduct(obj);
  };

  return (
    <Box sx={{ mt: 10, width: { xs: "90%", md: "50%", lg: "30%" } }}>
      <TextField
        onChange={handleInp}
        sx={{ mb: 1 }}
        label="title"
        fullWidth
        variant="outlined"
        name="title"
        value={product.title || ""}
      />
      <TextField
        onChange={handleInp}
        sx={{ mb: 1 }}
        label="description"
        fullWidth
        variant="outlined"
        name="description"
        value={product.description || ""}
      />{" "}
      <TextField
        onChange={handleInp}
        sx={{ mb: 1 }}
        label="price"
        fullWidth
        variant="outlined"
        name="price"
        value={product.price || ""}
      />
      <TextField
        onChange={handleInp}
        sx={{ mb: 1 }}
        label="type"
        fullWidth
        variant="outlined"
        name="type"
        value={product.type || ""}
      />
      <TextField
        onChange={handleInp}
        sx={{ mb: 1 }}
        label="img1"
        fullWidth
        variant="outlined"
        name="img1"
        value={product.img1 || ""}
      />
      <TextField
        onChange={handleInp}
        sx={{ mb: 1 }}
        label="img2"
        fullWidth
        variant="outlined"
        name="img2"
        value={product.img2 || ""}
      />
      <Button
        onClick={() => {
          saveEditedProduct(product, id);
          navigate("/products");
        }}
        sx={{
          p:2,
            backgroundColor: "black",
            ":hover": {
              backgroundColor: "white",
              border: "1px solid green",
              color: "green",
              boxShadow: "none",
            },
          }}
        variant="contained"
        fullWidth
        size="large"
      >
        SAVE CHANGES
      </Button>
    </Box>
  );
};

export default EditProduct;
