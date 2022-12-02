import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  createTheme,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useProducts } from "../../contexts/ProductContextProvider";
import AddIcon from "@mui/icons-material/Add";
import { width } from "@mui/system";

import RemoveIcon from "@mui/icons-material/Remove";

const ProductFilter = () => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const { fetchByParams, filterOption, setFilterOption } = useProducts();

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 1024,
        lg: 1150,
        xl: 1536,
      },
    },
  });
  return (
    <Accordion
      sx={{
        border: "none",
        p: 0,
        boxShadow: "none",

        // borderTop: '1px solid rgb(192, 192, 192)',
        border: "none",
      }}
      expanded={expanded === "panel2"}
      onChange={handleChange("panel2")}
    >
      <AccordionSummary
        sx={{ padding: 0, width:'100%' }}
        expandIcon={expanded ? <AddIcon /> : <RemoveIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography
          sx={{
            width: "40%",
            flexShrink: 0,
            // color: '#0b1f3f',
            fontWeight: "bold",
            padding: "7px 0",
            [theme.breakpoints.down("md")]: {
              fontSize: "0.8rem",
            },
          }}
        >
          Category{" "}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
          }}
        >
          <Typography
            onClick={(e) => {
              fetchByParams("type", e.target.id);
              setFilterOption(e.target.id);
            }}
            id="all"
            fontWeight={filterOption === 'all' ? ("600") : ("400")}
            sx={{ mb: 2, cursor: "pointer" }}
          >
            All
          </Typography>

          <Typography
            onClick={(e) => {
              fetchByParams("type", e.target.id);
              setFilterOption(e.target.id);
            }}
            id="clothing"
            fontWeight={filterOption === 'clothing' ? ("600") : ("400")}
            sx={{ mb: 2, cursor: "pointer" }}
          >
            Clothing
          </Typography>
          <Typography
            onClick={(e) => {
              fetchByParams("type", e.target.id);
              setFilterOption(e.target.id);
            }}
            fontWeight={filterOption === 'shoes' ? ("600") : ("400")}
            id="shoes"
            sx={{ mb: 2, cursor: "pointer" }}
          >
            Shoes
          </Typography>
          <Typography
            onClick={(e) => {
              fetchByParams("type", e.target.id);
              setFilterOption(e.target.id);
            }}
            id="bags"
            fontWeight={filterOption === 'bags' ? ("600") : ("400")}
            sx={{ mb: 2, cursor: "pointer" }}
          >
            Bags
          </Typography>
          <Typography
            onClick={(e) => {
              fetchByParams("type", e.target.id);
              setFilterOption(e.target.id);
            }}
            id="accessories"
            fontWeight={filterOption === 'accessories' ? ("600") : ("400")}
            sx={{ mb: 2, cursor: "pointer" }}
          >
            Accessories
          </Typography>
          <Typography
            onClick={(e) => {
              fetchByParams("type", e.target.id);
              setFilterOption(e.target.id);
            }}
             fontWeight={filterOption === 'jewelry' ? ("600") : ("400")}
            id="jewelry"
            sx={{ mb: 2, cursor: "pointer" }}
          >
            Jewelry
          </Typography>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ProductFilter;
