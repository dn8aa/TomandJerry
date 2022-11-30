import { Box, Button, Typography } from "@mui/material";
import React from "react";
import dastan from "../../img/dastan.jpg";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      <Box
        className="the_first_HomePage"
        sx={{ display: "flex", justifyContent: "space-around", margin: "10%" }}
      >
        <Box
          className="the_first_HomePage_left"
          sx={{ width: "60%", marginLeft: "-12%" }}
        >
          <img
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4067010/data/f1c35419eab93bcecda653e2580deacf/1x1_messaging-side/637/data.png"
            alt=""
          />
        </Box>
        <Box
          className="the_first_HomePage_right"
          sx={{ textAlign: "center", width: "40%", marginTop: "10%" }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "45px", fontWeight: "bolder" }}
          >
            CYBER MONDAY: GET AN EXTRA 20% OFF SALE
          </Typography>
          <Typography sx={{ marginTop: "8%", fontSize: "19px", width: "100%" }}>
            Don't miss out - selected items have an extra 20% off for Cyber
            Monday, plus free shopping. T&Cs apply; discount automatically
            applied at checkout
          </Typography>
          <Button
            sx={{ backgroundColor: "white", color: "black", marginTop: "5%" }}
          >
            Shop Now
          </Button>
        </Box>
      </Box>

      <Box
        className="the_secondly_homePage"
        sx={{
          display: "flex",
          justifyContent: "space-around",
          margin: "4%",
          alignItems: "center",
        }}
      >
        <Box
          className="the_secondly_homePage_left"
          sx={{ textAlign: "center" }}
        >
          <Typography
            variant="h4"
            sx={{ fontSize: "25px", fontWeight: "100", width: "70%" }}
          >
            The party sneaker wishlish
          </Typography>
          <Typography
            sx={{ marginTop: "8%", fontSize: "19px", width: "70%" }}
            className="the_secondly_homePage"
          >
            Traditional dressed-up vibes arent't for everyone. Get acquaintet
            with the sneakers fit for the dancefloor in our curation of this
            hooliday season's hottest style
          </Typography>

          <Button
            sx={{
              backgroundColor: "white",
              color: "black",
              marginTop: "5%",
              marginLeft: "-30%",
            }}
          >
            shop Now
          </Button>
        </Box>
        <Box
          sx={{ width: "80%", marginLeft: "-12%" }}
          className="the_secondly_homePage_right"
        >
          <img
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4065134/data/6e7c4e6dacb314e64f57b6915da86a67/1x1_messaging-side/637/data.jpeg"
            alt=""
          />
        </Box>
      </Box>

      <Box
        className="the_thirtly_homePage"
        sx={{ display: "flex", margin: "3%" }}
      >
        <Box className="the_thirtly_homePage_left" sx={{}}>
          <img
            style={{ width: "97%" }}
            src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4065034/data/ce9f7257b60738a718b081f6f6afb826/1x1_two-columns/637/data.jpeg"
            alt="logo"
          />
          <Typography sx={{ marginTop: "4%" }}>
            BALMAIN: MADE FOR STATEMENT DRESSIGN
          </Typography>
          <Typography>
            With strong sillhouettes and iconic accessories, Olivier Rousteing
            delivers the <br /> season's most dramatic wardrobe{" "}
          </Typography>
        </Box>
      </Box>

      <Box
        className="the_fourtly_homepage"
        sx={{ display: "flex", margin: "5", alignItems: "center" }}
      >
        <Box
          className="the_fourtly_homePage_left"
          sx={{ textAlign: "center", width: "70%" }}
        >
          <Typography variant="h2" sx={{}}>
            PEAK YOUR PERFORMANCE
          </Typography>
          <Button>Shop Zegna</Button>
        </Box>
        <Box className="the_fourtly_homePage_right">
          <img style={{ width: "95%" }} src={dastan} alt="" />
        </Box>
      </Box>

      <Box
        className="the_fively_homepage"
        sx={
          {
            // justifyContent: "space-around",
            // justifyContent: "center",
          }
        }
      >
        <Typography variant="h5" sx={{ marginTop: "4%", textAlign: "center" }}>
          Shop gifts by category
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "2%",
            marginLeft: "5%",
          }}
        >
          <Box className="the_fively_homepage_left">
            <img
              style={{ width: "85%" }}
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4076250/data/b5065823393f9beb52cd25be82fc2d89/3x4_three-columns/480/data.jpeg"
              alt=""
            />
            <Typography sx={{ marginTop: "3%" }}>MOST-WANTED GIFTS</Typography>
          </Box>
          <Box className="the_fively_homepage_left">
            <img
              style={{ width: "85%" }}
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3991066/data/614940ffe87c837d3c6205c092120b55/3x4_three-columns/480/data.jpeg"
              alt=""
            />
            <Typography sx={{ marginTop: "3%" }}>HOMEWARE TO LOVE</Typography>
          </Box>
          <Box className="the_fively_homepage_left">
            <img
              style={{ width: "85%" }}
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3991112/data/912c9acde53cb60e750c36cd8cadd037/3x4_three-columns/480/data.jpeg"
              alt=""
            />
            <Typography sx={{ marginTop: "3%" }}>
              MODERN-FEMININITY GIFTS
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        className="the_sixly_homepage"
        sx={
          {
            // justifyContent: "space-around",
            // justifyContent: "center",
          }
        }
      >
        <Typography variant="h5" sx={{ marginTop: "4%", textAlign: "center" }}>
          Shop gifts by brand
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            margin: "2%",
            marginLeft: "5%",
          }}
        >
          <Box className="the_sixly_homepage_left">
            <img
              style={{ width: "85%" }}
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4064114/data/0d0623670a33d9ff7c3989352b1ccd14/3x4_three-columns/480/data.jpeg"
              alt=""
            />
            <Typography sx={{ marginTop: "3%" }}>COPERNI</Typography>
            <Typography sx={{ marginTop: "1%" }}>
              The name on everyone's lips
            </Typography>
          </Box>
          <Box className="the_sixly_homepage_left">
            <img
              style={{ width: "85%" }}
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4063930/data/99142ecdeb5e24c666e6d4c29de8efba/3x4_three-columns/480/data.jpeg"
              alt=""
            />
            <Typography sx={{ marginTop: "3%" }}>KNAITE</Typography>
            <Typography sx={{ marginTop: "1%" }}>
              Closet cornerstones for every state
            </Typography>
          </Box>
          <Box className="the_sixly_homepage_left">
            <img
              style={{ width: "85%" }}
              src="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4063960/data/cbf7642a559af23f7dfe3cc0cfde827e/3x4_three-columns/480/data.jpeg"
              alt=""
            />
            <Typography sx={{ marginTop: "3%" }}>BURBERRY</Typography>
            <Typography sx={{ marginTop: "1%" }}>
              New iterations of the iconic check
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box
        className=" the_sevently_homepage"
        sx={{ display: "flex", justifyContent: "space-between", margin: "6%" }}
      >
        <Box className="lett_helping" sx={{ width: "30%" }}>
          <Link href="">
            <AddShoppingCartIcon sx={{ fill: "black" }} />
          </Link>
          <Typography variant="h6">HOW TO SHOP</Typography>
          <Typography>your guide to shopping and placing orders</Typography>
        </Box>

        <Box className="center_helping" sx={{ width: "30%" }}>
          <Link href="">
            <HelpOutlineIcon sx={{ fill: "black" }} />
          </Link>
          <Typography variant="h6">FAQS</Typography>
          <Typography>Your questions answered</Typography>
        </Box>

        <Box className="right_helping" sx={{ width: "30%" }}>
          <Link href="">
            <ChatBubbleOutlineIcon sx={{ fill: "black" }} />
          </Link>
          <Typography variant="h6">NEED HELP</Typography>
          <Typography>contact our global Customer Service team</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
