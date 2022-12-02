import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductFilter from "../components/Products/ProductFilter";
import ProductList from "../components/Products/ProductList";
import ProductPagination from "../components/Products/ProductPagination";
import ProductSort from "../components/Products/ProductSort";
import { useProducts } from "../contexts/ProductContextProvider";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ProductsPage = () => {
  const { filter, setFilter, products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const [page, setPage] = useState(1);
  const itemsPerPage = 12;
  const count = Math.ceil(products.length / itemsPerPage);

  function currentData() {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  }

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getProducts();
    setPage(1);
  }, [searchParams]);

  return (
    <Box
      sx={{
        mt: 0,
        m: 5,
        p: 4,
        pt: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              width: "60%",
              alignContent: "center",
            }}
          >
            {" "}
            <Typography
              onClick={() => setFilter(!filter)}
              sx={{
                width: "10%",
                fontSize: 20,
                cursor: "pointer",
                pb: 1,
              }}
            >
              Filter {filter ? <>&#707;</> : <>&#60;</>}
            </Typography>
          </Box>
          <ProductSort />
        </Box>
        <Box sx={{ display: "flex" }}>
          {filter ? (
            <Box sx={{ width: "250px" }}>
              <ProductFilter />
            </Box>
          ) : (
            <></>
          )}
          <div align="center">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "90%",
                alignContent: "center",
              }}
            >
              <ProductList currentData={currentData} />
            </Box>
          </div>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        {" "}
        <ProductPagination page={page} setPage={setPage} count={count} />
      </Box>
    </Box>
  );
};

export default ProductsPage;
