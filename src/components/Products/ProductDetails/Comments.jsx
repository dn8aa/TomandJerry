import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { wait } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import { useProducts } from "../../../contexts/ProductContextProvider";

const Comments = () => {
  //!----------------------------------
  const {
    user: { email },
  } = useAuth();

  const getDate = () => {
    let date = new Date();
    date =
      date.getDate().toString() +
      "." +
      date.getMonth().toString() +
      "." +
      date.getFullYear().toString();

    return date;
  };

  // getDate();

  const { productDetails, getProductDetails, saveEditedProduct } =
    useProducts();

  const [product, setProduct] = useState(productDetails);

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

// console.log(getProductDetails(id))

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  // console.log(productDetails)



  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  }; 



  function handleComment() {
    // console.log(product)
    let obj = {
      comment: input,
      date: getDate(),
      user: email,
    };



    let obj2 = {
      ...product,
    };


    obj2.comments.push(obj);

    setProduct(obj2);
  }

  function deleteComment(index) {
    let obj2 = {
      ...product,
    };

    obj2.comments.splice(index, 1);
    setProduct(obj2);
  }

  //!created an object

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          mt: 4,
          width: "fit-content",
          display: "flex",
          justifyContent: "flex-start",
          p: 3,
          borderRadius: "20px",
        }}
      >
        <input
          placeholder="leave your review"
          className="comminput"
          value={input}
          type="text"
          onChange={handleInput}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "black",
            ml: 3,
            width: "30%",
            ":hover": {
              backgroundColor: "white",
              border: "1px solid green",
              color: "green",
              boxShadow: "none",
            },
          }}
          onClick={() => {
            handleComment();
            saveEditedProduct(product, id);
            // getProductDetails(id)
          }}
        >
          SUBMIT
        </Button>
      </Box>

      {productDetails.comments ? (
        productDetails.comments.map((comment, index) => (
          <Box
            key={index}
            sx={{
              mt: 4,
              width: { xs: "90%", sm: "50%" },
              // display: "flex",
              // justifyContent: "flex-start",
              border: "1px solid lightgrey",
              p: 3,
              
              borderRadius: "20px",
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              {" "}
              <Typography sx={{ textAlign: "left" }}>{comment.user}</Typography>
              <Typography>{comment.date}</Typography>
            </Box>
            <Typography sx={{ mt: 2 }}>{comment.comment}</Typography>
            {email === comment.user ? (
              <Button
                size="small"
                sx={{
                  mt: 2,
                  backgroundColor: "black",
                  ":hover": {


                    backgroundColor: "white",
                    border: "1px solid red",
                    color: "red",
                    boxShadow: "none",
                  },
                }}
                variant="contained"
                onClick={() => {
                  deleteComment(index);
                  saveEditedProduct(product, id);
                }}
              >
                delete
              </Button>
            ) : (
              <></>
            )}
          </Box>
        ))
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Comments;
