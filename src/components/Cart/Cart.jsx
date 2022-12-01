import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useCart } from "../../contexts/CartContext";

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
    <Box sx={{ width: "65%", borderTop: "1px solid lightgrey" }}>
      <table>
        {cart.products.map((row, i) => (
          <tr className="row" key={i}>
            <td width={"18%"}>
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
              <Box sx={{ mt: 4 }}>
                {" "}
                <Typography>Size</Typography>
                <Typography sx={{ fontWeight: 600, mb: 3 }}>
                  One Size
                </Typography>
                <Typography>Quatity</Typography>
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
                <Box sx={{ display: "flex" }}>
                  <Typography>{row.count}</Typography>
                  <Typography sx={{ textDecoration: "underline" , textDecorationUnderline:'1px'}}>
                    {" "}
                    Change
                  </Typography>
                </Box>
              </Box>
            </td>
          </tr>
        ))}
      </table>
    </Box>
  );
};

export default Cart;
