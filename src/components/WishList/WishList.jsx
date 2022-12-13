import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useWishlist } from "../../contexts/WishlistContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import LocalMallIcon from "@mui/icons-material/LocalMall";
const WishList = () => {
  const { getWish, wish, changeProductCountWish, deleteWishProduct } =
    useWishlist();
  const { addProductToCart, checkProductInCart } = useCart();

  const { addProductToWish, checkProductInWish } = useWishlist();

  const { favoriteHover, setFavoriteHover } = useWishlist();

  useEffect(() => {
    getWish();
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        borderTop: "1px solid lightgrey",
        padding: { xs: 0, md: 2 },
        pt: 4,
      }}
    >
      <table>
        <tbody>
          {wish?.products.map((row, i) => (
            <tr className="row" key={i}>
              <td className="desktop-details" width={"17%"}>
                <img width={"90%"} src={row.item.img1} alt="" />
              </td>
              <td className="desktop-details" width={"27%"} valign="top">
                <Box sx={{ mt: 4 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {row.item.title}
                  </Typography>
                  <Typography>{row.item.description}</Typography>
                </Box>
              </td>
              <td className="desktop-details" width={"27%"} valign="top">
                <Box sx={{ mt: 4, ml: 4 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    ${row.item.price}
                  </Typography>
                </Box>
              </td>
              <td className="desktop-details" width={"27%"} valign="top">
                <Box
                  sx={{
                    mt: 4,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    {" "}
                    <Typography>Size</Typography>
                    <Typography sx={{ fontWeight: 600, mb: "10%" }}>
                      One Size
                    </Typography>
                    {checkProductInCart(row.item.id) ? (
                      <Box sx={{ display: "flex", mt: 3 }}>
                        <LocalMallIcon />
                        <Typography
                          sx={{
                            cursor: "default",
                            fontSize: 15,
                            fontWeight: 600,
                            ml: 1,
                          }}
                        >
                          In Your Cart
                        </Typography>
                      </Box>
                    ) : (
                      <Box
                        onClick={() => {
                          addProductToCart(row.item);
                        }}
                        sx={{ display: "flex", mt: 3 }}
                      >
                        <LocalMallOutlinedIcon />
                        <Typography
                          sx={{
                            fontSize: 15,
                            cursor: "pointer",
                            ":hover": { fontWeight: 600 },
                            ml: 1,
                          }}
                        >
                          Add to Cart
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <Box>
                    <ClearIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => deleteWishProduct(row.item.id)}
                    />
                  </Box>
                </Box>
              </td>
              <td className="phone-details">
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img width={"40%"} src={row.item.img1} alt="" />
                  <Box sx={{ ml: 2 }}>
                    <Box sx={{ mt: 4 }}>
                      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <ClearIcon
                          sx={{ cursor: "pointer", mb: 3 }}
                          onClick={() => deleteWishProduct(row.item.id)}
                        />
                      </Box>
                      <Typography sx={{ fontWeight: 600 }}>
                        {row.item.title}
                      </Typography>
                      <Typography sx={{ fontSize: 13 }}>
                        {row.item.description}
                      </Typography>
                    </Box>
                    <Box>
                      {" "}
                      <Typography>Size</Typography>
                      <Typography sx={{ fontWeight: 600, mb: "10%" }}>
                        One Size
                      </Typography>
                      {checkProductInCart(row.item.id) ? (
                        <Box sx={{ display: "flex", mt: 3 }}>
                          <LocalMallIcon />
                          <Typography
                            sx={{
                              cursor: "default",
                              fontSize: 15,
                              fontWeight: 600,
                              ml: 1,
                            }}
                          >
                            In Your Cart
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          onClick={() => {
                            addProductToCart(row.item);
                          }}
                          sx={{ display: "flex", mt: 3 }}
                        >
                          <LocalMallOutlinedIcon />
                          <Typography
                            sx={{
                              fontSize: 15,
                              cursor: "pointer",
                              ":hover": { fontWeight: 600 },
                              ml: 1,
                            }}
                          >
                            Add to Cart
                          </Typography>
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Box>
  );
};

export default WishList;
