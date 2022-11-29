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
    <Box className="footer">
      <Box className="the_left_footer">
        <h4>FARFETCH APP</h4>
        <Typography>Farfetch App for iOS and Android</Typography>
      </Box>
      <Box className="the_center_footer">
        <h4>DESTINATION/REGION, CURRENCY AND LANGUAGE</h4>
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
      <Box className="the_right_footer_first">
        <h4>CUSTOMER SERVICE</h4>
        <Box className="first_Typography">
          <Typography> Contact us </Typography>{" "}
          <Typography>Orders & delivery</Typography>{" "}
          <Typography>
            Holiday delivery dates & <br /> returns
          </Typography>{" "}
          <Typography> Payment & pricing</Typography>{" "}
          <Typography> Cryptocurrency payments</Typography>
          <Typography>Returns & refunds</Typography>{" "}
          <Typography>FAQs</Typography>{" "}
          <Typography> Terms & conditions </Typography>
          <Typography>
            Promotion terms & <br /> conditions
          </Typography>{" "}
          <Typography>Privacy policy Accessibility</Typography>
        </Box>
      </Box>
      <Box className="the_right_footer_second">
        <h4>ABOUT FARFETCH</h4>
        <Box className="second_p">
          <Typography> About us</Typography> <Typography>Investors</Typography>{" "}
          <Typography> Loyalty programme </Typography>{" "}
          <Typography>Friend Referral Discount </Typography>{" "}
          <Typography>
            FARFETCH Boutique <br /> partners
          </Typography>{" "}
          <Typography> Affiliate programme </Typography>
          <Typography>Careers </Typography>{" "}
          <Typography>FARFETCH Customer Promise</Typography>
          <Typography>FARFETCH app </Typography>{" "}
          <Typography>Sitemap</Typography>{" "}
          <Typography>Positively FARFETCH</Typography>
          <Typography>
            FARFETCH Platform <br />
            Solutions{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
