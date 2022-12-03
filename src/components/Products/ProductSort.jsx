import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
} from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductSort = () => {
  const { fetchByParams } = useProducts();

  return (
    // <FormControl fullWidth>
    //   <InputLabel
    //     variant="standard"
    //     htmlFor="uncontrolled-native"
    //     sx={{ color: "black" }}
    //   >
    //     Sort By Price
    //   </InputLabel>
    //   <NativeSelect
    //     onChange={(e) => fetchByParams("_sort", e.target.value)}
    //     defaultValue={"all"}
    //     inputProps={{
    //       name: "sort",
    //     }}
    //   >
    //     <option value={"all"}>All</option>
    //     <option value={"asc"}>Low to High</option>
    //     <option value={"desc"}>High to Low</option>
    //   </NativeSelect>
    // </FormControl>

    <FormControl sx={{ mr:'auto'}}>
      <Select
       size="small"
        onChange={(e) => fetchByParams("_sort", e.target.value)}
        defaultValue={"all"}
        inputProps={{
          name: "sort",
        }}
      >
        <MenuItem value={"all"}>All</MenuItem>
        <MenuItem value={"asc"}>Low to High</MenuItem>
        <MenuItem value={"desc"}>High to Low</MenuItem>
      </Select>
    </FormControl>
  );
};

export default ProductSort;
