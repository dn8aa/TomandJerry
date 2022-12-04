// import * as React from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Checkbox from "@mui/material/Checkbox";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useAuth } from "../../contexts/AuthContext";
// import { useNavigate } from "react-router-dom";
// // import "./Auth.css";
// // import AuthRightForm from "./AuthRightForm";

// const theme = createTheme();

// export default function Auth() {
//   const navigate = useNavigate();
//   const {
//     email,
//     password,
//     emailError,
//     passwordError,
//     hasAccount,
//     setPassword,
//     setEmail,
//     setHasAccount,
//     handleLogin,
//     handleSignup,
//   } = useAuth();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get("email"),
//       password: data.get("password"),
//     });
//   };

//   return (
//     <Box className="auth">
//       <ThemeProvider theme={theme}>
//         <Typography
//           sx={{
//             mt: 12,
//             fontSize: { xs: 30, sm: 40 },
//             fontWeight: 700,
//             ml: {
//               md: 15,
//             },
//             textAlign: {
//               xs: "center",
//               md: "left",
//             },
//           }}
//         ></Typography>
//         <Container component="main" maxWidth="lg">
//           <CssBaseline />
//           <Box
//             sx={{
//               mb: 8,
//               display: "flex",
//               flexDirection: {
//                 xs: "column",
//                 md: "row",
//               },
//               justifyContent: {
//                 xs: "center",
//                 md: "space-around",
//               },
//               alignItems: {
//                 xs: "center",
//                 md: "flex-start",
//               },
//             }}
//           >
//             <Box
//               sx={{
//                 mt: 3,
//                 display: "flex",
//                 marginLeft: "20%",
//                 flexDirection: "column",
//                 width: { xs: "90%", sm: "70%", md: "35%" },
//               }}
//             >
//               <Typography
//                 sx={{
//                   fontWeight: 700,
//                   fontSize: 26,
//                   textAlign: "center",
//                 }}
//                 component="h1"
//                 variant="h5"
//               >
//                 Sign In
//               </Typography>
//               <Box
//                 component="form"
//                 onSubmit={handleSubmit}
//                 noValidate
//                 sx={{ mt: 3 }}
//               >
//                 <Typography
//                   sx={{
//                     fontWeight: 600,
//                     fontSize: { xs: 14, sm: 16 },
//                   }}
//                 >
//                   Email
//                 </Typography>
//                 <TextField
//                   className="input-email"
//                   required
//                   fullWidth
//                   id="email"
//                   name="email"
//                   autoComplete="email"
//                   autoFocus
//                   // ===========
//                   helperText={emailError}
//                   value={email}
//                   onChange={(e) => {
//                     setEmail(e.target.value);
//                   }}
//                 />

//                 <Box sx={{ mt: 2 }}>
//                   <Typography sx={{ fontWeight: 600, fontSize: 14 }}>
//                     Password
//                   </Typography>
//                   <TextField
//                     className="input-password"
//                     required
//                     fullWidth
//                     name="password"
//                     type="password"
//                     id="password"
//                     autoComplete="current-password"
//                     // ===============
//                     helperText={passwordError}
//                     value={password}
//                     onChange={(e) => {
//                       setPassword(e.target.value);
//                     }}
//                     sx={{ borderRadius: "0" }}
//                   />
//                 </Box>

//                 <Box
//                   sx={{
//                     display: "flex",
//                     justifyContent: "space-between",
//                     alignItems: "center",
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       display: "flex",
//                       alignItems: "center",
//                       mt: 1,
//                     }}
//                   >
//                     {" "}
//                     <Checkbox value="remember" color="primary" />
//                     <Typography sx={{ fontSize: 14 }}>Remember me</Typography>
//                   </Box>
//                   <Link
//                     className="links"
//                     sx={{
//                       mt: 1,
//                       fontSize: 15,
//                       color: "black",
//                       fontSize: { xs: 14, sm: 16 },
//                     }}
//                     href="#"
//                     variant="body2"
//                     color="primary"
//                   >
//                     Forgot password?
//                   </Link>
//                 </Box>
//                 {hasAccount ? (
//                   <Button
//                     className="button_sign_in"
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2, fontWeight: 600 }}
//                     onClick={() => {
//                       handleLogin();
//                       navigate("/");
//                     }}
//                   >
//                     Sign in
//                   </Button>
//                 ) : (
//                   <Button
//                     className="button_register"
//                     type="submit"
//                     fullWidth
//                     variant="contained"
//                     sx={{ mt: 3, mb: 2, fontWeight: 600 }}
//                     onClick={handleSignup}
//                   >
//                     Register
//                   </Button>
//                 )}

//                 <Grid
//                   container
//                   sx={{
//                     display: "flex",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <Grid item>
//                     {hasAccount ? (
//                       <Link
//                         className="links"
//                         sx={{ color: "black" }}
//                         href="#"
//                         variant="body2"
//                         onClick={() => setHasAccount(!hasAccount)}
//                       >
//                         {"Don't have an account? Register now"}
//                       </Link>
//                     ) : (
//                       <Link
//                         className="links"
//                         sx={{ color: "black" }}
//                         href="#"
//                         variant="body2"
//                         onClick={() => setHasAccount(!hasAccount)}
//                       >
//                         {"Already have an account? Log In"}
//                       </Link>
//                     )}
//                   </Grid>
//                 </Grid>
//               </Box>
//             </Box>

//             <Box
//               sx={{
//                 display: {
//                   xs: "none",
//                   md: "block",
//                 },
//               }}
//               id="line"
//             ></Box>

//             {/* !===================================================================================================================================================================== */}
//           </Box>
//         </Container>
//       </ThemeProvider>
//     </Box>
//   );
// }

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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // margin: "16%",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "center",
              marginLeft: "7%",
              position: "absolute",
              fontSize: "30px",
            }}
          >
            Sign In
          </Typography>
          <Typography
            onClick={() => setAuth(!auth)}
            sx={{ cursor: "pointer" }}
          ></Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ width: "100%", margin: "4%", mt: "20%" }}
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
              fullWidth
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
                className="links"
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
                sx={{ mt: 3, mb: 2, fontWeight: 600 }}
                onClick={() => {
                  handleLogin();
                  Navigate("/");
                }}
              >
                Sign in
              </Button>
            ) : (
              <Button
                className="button_register"
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2, fontWeight: 600, backgroundColor: "black" }}
                onClick={handleSignup}
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
                    className="links"
                    sx={{ color: "black" }}
                    href="#"
                    variant="body2"
                    onClick={() => setHasAccount(!hasAccount)}
                  >
                    {"Don't have an account? Register now"}
                  </Link>
                ) : (
                  <Link
                    className="links"
                    sx={{ color: "black" }}
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
