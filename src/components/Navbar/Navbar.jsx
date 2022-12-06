import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useAuth } from "../../contexts/AuthContext";
import { Badge, TextField } from "@mui/material";
import { ADMIN } from "../../helpers/consts";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

const drawerWidth = 240;

function Navbar(props) {
  const { count } = useCart();
  const { wishCount } = useWishlist();
  const { auth, setAuth } = useAuth();
  const {
    user: { email },
    handleLogout,
  } = useAuth();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        onClick={() => navigate("/")}
        variant="h6"
        sx={{ my: 2, fontWeight: 700, fontSize: "30px", cursor: "pointer" }}
      >
        FARFETCH
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/products")}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="PRODUCTS" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          {email === ADMIN ? (
            <ListItemButton
              onClick={() => navigate("/admin")}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary="ADMIN" />
            </ListItemButton>
          ) : (
            <></>
          )}
        </ListItem>
        <ListItem>
          {" "}
          <ListItemButton
            onClick={() => navigate("/aboutus")}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="ABOUT US" />
          </ListItemButton>
        </ListItem>

        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            mt:1
          }}
        >
          {" "}
          {email ? (
            <PersonOutlineOutlinedIcon
              onClick={() => {
                setAuth(!auth);
                handleLogout();
              }}
              sx={{
              

                padding: 1,
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "white",
                  border: "1px solid red",
                  borderRadius: "50%",
                  padding: 1,
                  color: "red",
                  boxShadow: "none",
                },
              }}
            />
          ) : (
            <PersonOutlineOutlinedIcon
              onClick={() => {
                setAuth(!auth);
                handleLogout();
              }}
              sx={{
                

                padding: 1,
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "white",
                  border: "1px solid green",
                  borderRadius: "50%",
                  padding: 1,
                  color: "green",
                  boxShadow: "none",
                },
              }}
            />
          )}
          <Badge badgeContent={wishCount} color="error">
            <FavoriteBorderOutlinedIcon
              onClick={() => navigate("/wishlist")}
              sx={{ cursor: "pointer", width: "40px" }}
            />
          </Badge>
          <Badge badgeContent={count} color="error">
            <LocalMallOutlinedIcon
              onClick={() => navigate("/cart")}
              sx={{ ml: 1, cursor: "pointer", width: "40px" }}
            />
          </Badge>
        </Box>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", width: "100%", justifyContent: "flex-start" }}>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          color: "black",
          padding: 0,
        }}
      >
        <Toolbar sx={{ padding: 0, width: "100%" }}>
          <Box sx={{ width: "32%", display: { xs: "none", sm: "block" } }}>
            <Button
              onClick={() => navigate("/products")}
              sx={{ p: { xs: 0, lg: 2 }, color: "black" }}
            >
              PRODUCTS
            </Button>{" "}
            {email === ADMIN ? (
              <Button
                onClick={() => navigate("/admin")}
                sx={{ p: { xs: 0, lg: 2 }, color: "black" }}
              >
                ADMIN
              </Button>
            ) : (
              <></>
            )}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{
              cursor: "pointer",
              width: "32%",
              textAlign: "center",
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontWeight: 700,
              fontSize: "30px",
            }}
          >
            FARFETCH
          </Typography>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            sx={{
              display: { xs: "block", sm: "none" },
              width: "33%",
              my: 2,
              fontWeight: 700,
              fontSize: "30px",
              cursor: "pointer",
            }}
          >
            FARFETCH
          </Typography>

          <Box
            sx={{
              width: "32%",
              display: { xs: "none", sm: "flex" },
              justifyContent: "right",
              alignItems: "center",
              paddingRight: 6,
            }}
          >
            {email ? (
              <PersonOutlineOutlinedIcon
                onClick={() => {
                  setAuth(!auth);
                  handleLogout();
                }}
                sx={{
                  m: 1,

                  padding: 1,
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "white",
                    border: "1px solid red",
                    borderRadius: "50%",
                    padding: 1,
                    color: "red",
                    boxShadow: "none",
                  },
                }}
              />
            ) : (
              <PersonOutlineOutlinedIcon
                onClick={() => {
                  setAuth(!auth);
                  handleLogout();
                }}
                sx={{
                  m: 1,

                  padding: 1,
                  cursor: "pointer",
                  ":hover": {
                    backgroundColor: "white",
                    border: "1px solid green",
                    borderRadius: "50%",
                    padding: 1,
                    color: "green",
                    boxShadow: "none",
                  },
                }}
              />
            )}

            <Badge badgeContent={wishCount} color="error">
              <FavoriteBorderOutlinedIcon
                onClick={() => navigate("/wishlist")}
                sx={{ cursor: "pointer", width: "40px" }}
              />
            </Badge>
            <Badge badgeContent={count} color="error">
              <LocalMallOutlinedIcon
                onClick={() => navigate("/cart")}
                sx={{ ml: 1, cursor: "pointer", width: "40px" }}
              />
            </Badge>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
