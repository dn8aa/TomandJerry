import { Box, TextField, Typography } from "@mui/material";
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

import SearchIcon from "@mui/icons-material/Search";

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

  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  React.useEffect(() => {
    setSearchParams({
      q: search,
    });
  }, [search]);

  return (
    <Box
      sx={{
        m: { xs: 1, sm: 5 },
        mt: 0,
        p: 4,
        px: { xs: 3, sm: 4 },
        pt: 8,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100px",
              alignContent: "center",
            }}
          >
            {" "}
            <Typography
              onClick={() => setFilter(!filter)}
              sx={{
                width: "100%",
                fontSize: 20,
                cursor: "pointer",
              }}
            >
              Filter {filter ? <>&#707;</> : <>&#60;</>}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: { xs: "100%", sm: "50%" },
              justifyContent: "center",
              alignItems: "flex-start",
              alignContext: "flex-start",
            }}
          >
            {" "}
            <ProductSort />
            <Box
              sx={{ width: { xs: "100%", sm: "100%" }, mt: { xs: 2, sm: 0 } }}
            >
              <TextField
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="find item"
                sx={{ ml: 3, width: { xs: "75%", sm: "60%" } }}
                size="small"
              />
              <SearchIcon
                onClick={() => {}}
                sx={{ m: 1, cursor: "pointer" }}
                n
              />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          {filter ? <ProductFilter /> : <></>}

          <ProductList currentData={currentData} />
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
