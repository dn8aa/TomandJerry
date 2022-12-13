import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useWishlist } from "../../contexts/WishlistContext";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Cart = () => {
  const {
    getCart,
    cart,
    changeProductCount,
    deleteCartProduct,
    counter,
    setCounter,
  } = useCart();

  const { addProductToWish, checkProductInWish } = useWishlist();

  const { favoriteHover, setFavoriteHover } = useWishlist();

  useEffect(() => {
    getCart();
  }, []);

  return (
    <Box
      sx={{
        width: { xs: "100%", md: "70%" },
        borderTop: "1px solid lightgrey",
        padding: { xs: 0, md: 2 },
        pt: { xs: 4, md: 4 },
      }}
    >
      <table>
        <tbody>
          {cart?.products.map((row, i) => (
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
                    <Typography>Quatity</Typography>
                    {counter === row.item.id ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-end",
                        }}
                      >
                        <input
                          className="counter"
                          min={1}
                          max={100}
                          type="number"
                          value={row.count}
                          onChange={(e) =>
                            changeProductCount(e.target.value, row.item.id)
                          }
                        />
                        <Typography
                          onClick={() => setCounter("")}
                          sx={{
                            textDecoration: "underline",
                            fontSize: 14,
                            ml: 1,
                            cursor: "pointer",
                            fontWeight: 600,
                          }}
                        >
                          {" "}
                          Save
                        </Typography>
                      </Box>
                    ) : (
                      <></>
                    )}
                    {counter == row.item.id ? (
                      <></>
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "flex-end",
                        }}
                      >
                        <Typography>{row.count}</Typography>
                        <Typography
                          onClick={() => setCounter(row.item.id)}
                          sx={{
                            textDecoration: "underline",
                            fontSize: 14,
                            ml: 1,
                            cursor: "pointer",
                          }}
                        >
                          {" "}
                          Change
                        </Typography>
                      </Box>
                    )}
                    {checkProductInWish(row.item.id) ? (
                      <Box sx={{ display: "flex", mt: 3 }}>
                        <FavoriteIcon />

                        <Typography
                          sx={{ fontSize: 15, ml: 1, cursor: "default" }}
                        >
                          In Your Wishlist
                        </Typography>
                      </Box>
                    ) : (
                      <Box
                        onClick={() => {
                          addProductToWish(row.item);
                          deleteCartProduct(row.item.id);
                        }}
                        sx={{ display: "flex", mt: 3 }}
                      >
                        {favoriteHover === row.item.id ? (
                          <FavoriteIcon
                            sx={{ cursor: "pointer" }}
                            onMouseOut={() => setFavoriteHover("")}
                          />
                        ) : (
                          <FavoriteBorderIcon
                            sx={{ cursor: "pointer" }}
                            onMouseOver={() => setFavoriteHover(row.item.id)}
                          />
                        )}

                        <Typography
                          onMouseOver={() => setFavoriteHover(row.item.id)}
                          onMouseOut={() => setFavoriteHover("")}
                          sx={{ fontSize: 15, ml: 1, cursor: "pointer" }}
                        >
                          Move to wishlist
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <Box>
                    <ClearIcon
                      sx={{ cursor: "pointer" }}
                      onClick={() => deleteCartProduct(row.item.id)}
                    />
                  </Box>
                </Box>
              </td>
              <td className="phone-details">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img width={"40%"} src={row.item.img1} alt="" />
                  <Box sx={{ ml: 2 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                      <ClearIcon
                        sx={{ cursor: "pointer" }}
                        onClick={() => deleteCartProduct(row.item.id)}
                      />
                    </Box>
                    <Box sx={{ mt: 4 }}>
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
                      <Typography>Quatity</Typography>
                      {counter === row.item.id ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                          }}
                        >
                          <input
                            className="counter"
                            min={1}
                            max={100}
                            type="number"
                            value={row.count}
                            onChange={(e) =>
                              changeProductCount(e.target.value, row.item.id)
                            }
                          />
                          <Typography
                            onClick={() => setCounter("")}
                            sx={{
                              textDecoration: "underline",
                              fontSize: 14,
                              ml: 1,
                              cursor: "pointer",
                              fontWeight: 600,
                            }}
                          >
                            {" "}
                            Save
                          </Typography>
                        </Box>
                      ) : (
                        <></>
                      )}
                      {counter == row.item.id ? (
                        <></>
                      ) : (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "flex-end",
                          }}
                        >
                          <Typography>{row.count}</Typography>
                          <Typography
                            onClick={() => setCounter(row.item.id)}
                            sx={{
                              textDecoration: "underline",
                              fontSize: 14,
                              ml: 1,
                              cursor: "pointer",
                            }}
                          >
                            {" "}
                            Change
                          </Typography>
                        </Box>
                      )}
                      {checkProductInWish(row.item.id) ? (
                        <Box sx={{ display: "flex", mt: 3 }}>
                          <FavoriteIcon />

                          <Typography
                            sx={{ fontSize: 15, ml: 1, cursor: "default" }}
                          >
                            In Your Wishlist
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          onClick={() => {
                            addProductToWish(row.item);
                            deleteCartProduct(row.item.id);
                          }}
                          sx={{ display: "flex", mt: 3 }}
                        >
                          {favoriteHover === row.item.id ? (
                            <FavoriteIcon
                              sx={{ cursor: "pointer" }}
                              onMouseOut={() => setFavoriteHover("")}
                            />
                          ) : (
                            <FavoriteBorderIcon
                              sx={{ cursor: "pointer" }}
                              onMouseOver={() => setFavoriteHover(row.item.id)}
                            />
                          )}

                          <Typography
                            onMouseOver={() => setFavoriteHover(row.item.id)}
                            onMouseOut={() => setFavoriteHover("")}
                            sx={{ fontSize: 15, ml: 1, cursor: "pointer" }}
                          >
                            Move to wishlist
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

export default Cart;
