import React from "react";
import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
<<<<<<< HEAD
    return (
        <div>
            <h1>footer</h1>
=======
  return (
    <div className="footer">
      <div className="the_left_footer">
        <h4>FARFETCH APP</h4>
        <p>Farfetch App for iOS and Android</p>
      </div>
      <div className="the_center_footer">
        <h4>DESTINATION/REGION, CURRENCY AND LANGUAGE</h4>
        {/* <img src="" alt="" /> */}
        <p>Kyrgyzstan, USD $</p>
        <h4>FOLLOW US</h4>
        <div className="logo_center">
          <>
            <a href="https://www.instagram.com/farfetch/">
              <InstagramIcon sx={{ fill: "white" }} />
            </a>
          </>
          <>
            <a href="https://www.instagram.com/farfetch/">
              <FacebookIcon sx={{ fill: "white" }} />
            </a>
          </>
          <>
            <a href="https://www.instagram.com/farfetch/">
              <TwitterIcon sx={{ fill: "white" }} />
            </a>
          </>

          <>
            <a href="https://www.instagram.com/farfetch/">
              <PinterestIcon sx={{ fill: "white" }} />
            </a>
          </>

          <>
            <a href="https://www.instagram.com/farfetch/">
              <YouTubeIcon sx={{ fill: "white" }} />
            </a>
          </>
>>>>>>> e83b6321e70e5fd9c26c9f1de20b5320dcf4ec4d
        </div>
      </div>
      <div className="the_right_footer_first">
        <h4>CUSTOMER SERVICE</h4>
        <div className="first_p">
          <p> Contact us </p> <p>Orders & delivery</p>{" "}
          <p>
            Holiday delivery dates & <br /> returns
          </p>{" "}
          <p> Payment & pricing</p> <p> Cryptocurrency payments</p>
          <p>Returns & refunds</p> <p>FAQs</p> <p> Terms & conditions </p>
          <p>
            Promotion terms & <br /> conditions
          </p>{" "}
          <p>Privacy policy Accessibility</p>
        </div>
      </div>
      <div className="the_right_footer_second">
        <h4>ABOUT FARFETCH</h4>
        <div className="second_p">
          <p> About us</p> <p>Investors</p> <p> Loyalty programme </p>{" "}
          <p>Friend Referral Discount </p>{" "}
          <p>
            FARFETCH Boutique <br /> partners
          </p>{" "}
          <p> Affiliate programme </p>
          <p>Careers </p> <p>FARFETCH Customer Promise</p>
          <p>FARFETCH app </p> <p>Sitemap</p> <p>Positively FARFETCH</p>
          <p>
            FARFETCH Platform <br />
            Solutions{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
