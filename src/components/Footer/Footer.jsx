import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box className="footer" sx={{ paddingBotton: "30%" }}>
      <Box className="the_left_footer">
        <h4>FARFETCH APP</h4>
        <Typography>Farfetch App for iOS and Android</Typography>
      </Box>
      <Box className="the_center_footer">
        <h4>DESTINATION/REGION, CURRENCY AND LANGUAGE</h4>
        {/* dskljfaksjf */}
        {/* <img src="" alt="" /> */}
        <Typography>Kyrgyzstan, USD $</Typography>
        <h4>FOLLOW US</h4>
        <Box className="logo_center">
          <>
            <Link href="https://www.instagram.com/farfetch/">
              <InstagramIcon sx={{ fill: "white" }} />
            </Link>
          </>
          <>
            <Link href="https://www.instagram.com/farfetch/">
              <FacebookIcon sx={{ fill: "white" }} />
            </Link>
          </>
          <>
            <Link href="https://www.instagram.com/farfetch/">
              <TwitterIcon sx={{ fill: "white" }} />
            </Link>
          </>

          <>
            <Link href="https://www.instagram.com/farfetch/">
              <PinterestIcon sx={{ fill: "white" }} />
            </Link>
          </>

          <>
            <Link href="https://www.instagram.com/farfetch/">
              <YouTubeIcon sx={{ fill: "white" }} />
            </Link>
          </>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
