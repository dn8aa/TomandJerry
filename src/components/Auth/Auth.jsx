import CloseIcon from "@mui/icons-material/Close";

import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { Link, Navigate } from "react-router-dom";

const Auth = () => {
  const { auth, setAuth } = useAuth();
  const {
    email,
    password,
    emailError,
    passwordError,
    hasAccount,
    setPassword,
    setEmail,
    setHasAccount,
    handleLogin,
    handleSignup,
  } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Box
      className="auth"
      sx={{
        // marginTop: "10%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "80%", md: "50%", lg: "30%" },
          height: "fit-content",
          backgroundColor: "white",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          padding: { xs: 2, sm: 5 },
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            // margin: "16%",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            {" "}
            <CloseIcon
              onClick={() => setAuth(!auth)}
              sx={{ cursor: "pointer" }}
            />
          </Box>
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginLeft: "7%",

              fontSize: "30px",
            }}
          >
            Sign In
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ width: "90%", margin: "4%", mt: "5%" }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: { xs: 11, sm: 14 },
                // paddingTop: "12px",
              }}
            >
              Email
            </Typography>

            <TextField
              className="input-email"
              required
              sx={{ width: "100%" }}
              id="email"
              name="email"
              autoComplete="email"
              autoFocus
              // ===========
              helperText={emailError}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <Box sx={{ mt: 2 }}>
              <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
                Password
              </Typography>
              <TextField
                className="input-password"
                required
                fullWidth
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                // ===============
                helperText={passwordError}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                sx={{ borderRadius: "0" }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mt: 0.2,
                }}
              >
                {" "}
                <Checkbox
                  value="remember"
                  color="primary"
                  sx={{ marginLeft: "-12px" }}
                />
                <Typography sx={{ fontSize: 14, ml: -1 }}>
                  Remember me
                </Typography>
              </Box>
              <Link
                className="auth-link"
                sx={{
                  mt: 1,
                  fontSize: 15,
                  color: "black",
                  fontSize: { xs: 13, sm: 15 },
                }}
                href="#"
                variant="body2"
                color="primary"
              >
                Forgot password?
              </Link>
            </Box>
            {hasAccount ? (
              <Button
                className="button_sign_in"
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontWeight: 600,
                  backgroundColor: "black",
                  ":hover": {
                    backgroundColor: "white",
                    border: "1px solid green",
                    color: "green",
                    boxShadow: "none",
                  },
                }}
                onClick={() => {
                  handleLogin();
                  setAuth(!auth);
                }}
              >
                Sign in
              </Button>
            ) : (
              <Button
                className="button_register"
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  fontWeight: 600,
                  backgroundColor: "black",
                  ":hover": {
                    backgroundColor: "white",
                    border: "1px solid green",
                    color: "green",
                    boxShadow: "none",
                  },
                }}
                onClick={() => {
                  setAuth(!auth);
                  handleSignup();
                }}
              >
                Register
              </Button>
            )}

            <Grid
              container
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Grid item>
                {hasAccount ? (
                  <Link
                    className="auth-link"
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"Don't have an account? Register now"}
                  </Link>
                ) : (
                  <Link
                    className="auth-link"
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"Already have an account? Log In"}
                  </Link>
                )}
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
          id="line"
        ></Box>

        {/* <TextField sx={{ mt: 2 }} /> */}
        {/* <TextField sx={{ mt: 2 }} /> */}
        {/* <Button onClick={() => setAuth(!auth)} sx={{ mt: 2, p: 2 }}> */}
        {/* {" "} */}
        {/* Sign In */}
        {/* </Button> */}
      </Box>
    </Box>
  );
};

export default Auth;
