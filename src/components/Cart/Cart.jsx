import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";
import ClearIcon from "@mui/icons-material/Clear";

const Cart = () => {
  const {
    getCart,
    cart,
    changeProductCount,
    deleteCartProduct,
    counter,
    setCounter,
  } = useCart();

  useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  return (
    <Box sx={{ width: "70%", borderTop: "1px solid lightgrey", padding:2, pt: 4, }}>
      <table>
        <tbody>
          {cart.products.map((row, i) => (
            <tr className="row" key={i}>
              <td width={"17%"}>
                <img width={"90%"} src={row.item.img1} alt="" />
              </td>
              <td width={"27%"} valign="top">
                <Box sx={{ mt: 4 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    {row.item.title}
                  </Typography>
                  <Typography>{row.item.description}</Typography>
                </Box>
              </td>
              <td width={"27%"} valign="top">
                <Box sx={{ mt: 4 }}>
                  <Typography sx={{ fontWeight: 600 }}>
                    ${row.item.price}
                  </Typography>
                </Box>
              </td>
              <td width={"27%"} valign="top">
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
                    {counter ===  row.item.id ? (
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
                  </Box>
                  <Box>
                    <ClearIcon onClick={() => deleteCartProduct(row.item.id)} />
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
