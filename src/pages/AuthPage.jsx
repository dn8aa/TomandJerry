import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import Auth from "../components/Auth/Auth";
import { useAuth } from "../contexts/AuthContext";

const AuthPage = () => {
  return <Auth />;
};

export default AuthPage;
