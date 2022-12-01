import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { useAuth } from "../contexts/AuthContext";

const AuthPage = () => {
  const { auth, setAuth } = useAuth();
  return (
    <Box
      className="auth"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box
        sx={{
          width: "30%",
          height: "fit-content",
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          padding: 5,
          boxSizing: "border-box",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Sign In</Typography>
          <Typography onClick={() => setAuth(!auth)} sx={{ cursor: "pointer" }}>
            x
          </Typography>
        </Box>

        <TextField sx={{ mt: 2 }} />
        <TextField sx={{ mt: 2 }} />
        <Button onClick={() => setAuth(!auth)} sx={{ mt: 2, p: 2 }}>
          {" "}
          Sign In
        </Button>
      </Box>
    </Box>
  );
};

export default AuthPage;
