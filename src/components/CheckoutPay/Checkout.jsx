import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Checkout = () => {
  return (
    <Box
      component="form"
      sx={{
        wudth: "90%",
        mr:17,
        "& .MuiTextField-root": { m: 1, width: { xs: "90%", sm: "90%" } },
      }}
      noValidate
      autoComplete="off"
    >
      {" "}
      <Box>
        <Typography sx={{ fontWeight: 600, mb: 2 }}>DELIVERY</Typography>
        <Box sx={{ display: { xs: "block", sm: "flex" } }}>
          <TextField required id="outlined-required" label="first name" />
          <TextField required id="outlined-required" label="last name" />
        </Box>
        <FormControl fullWidth sx={{ m: 1, width: { xs: "90%", sm: "97%" } }}>
          <InputLabel id="demo-simple-select-label">country</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Country"
          >
            <MenuItem>Kyrgyzstan</MenuItem>
            <MenuItem>Russia</MenuItem>
            <MenuItem>Kazakhstan</MenuItem>
          </Select>
        </FormControl>
        <Box sx={{ display: { xs: "block", sm: "flex" } }}>
          <TextField required id="outlined-required" label="address" />
          <TextField required id="outlined-required" label="address" />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "flex" } }}>
          <TextField required id="outlined-required" label="cuty" />
          <TextField required id="outlined-required" label="zip code" />
        </Box>
        <Box sx={{ display: { xs: "block", sm: "flex" } }}>
          <FormControl fullWidth sx={{ m: 1, width: { xs: "90%", sm: "97%" } }}>
            <InputLabel id="demo-simple-select-label">
              country calling code
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Country"
            >
              <MenuItem>Kyrgyzstan +996</MenuItem>
              <MenuItem>Russia +7</MenuItem>
              <MenuItem>Kazakhstan +7</MenuItem>
            </Select>
          </FormControl>
          <TextField required id="outlined-required" label="address" />
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 600, mb: 2, mt: 4 }}>PAYMENT</Typography>
        <Typography sx={{ mb: 2, mt: 2 }}>CARD DETAILS</Typography>
        <TextField
          fullWidth
          required
          id="outlined-required"
          label="cardholder name"
        />

        <Box sx={{ display: { xs: "block", sm: "flex" } }}>
          <TextField required id="outlined-required" label="card number" />
          <TextField
            required
            id="outlined-required"
            label="expiration date"
            placeholder="mm/yy"
          />
        </Box>
        <TextField required id="outlined-required"  label="security code" />

        
      </Box>
    </Box>
  );
};

export default Checkout;
