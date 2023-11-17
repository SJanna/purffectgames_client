import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import CartItem from "@/Components/CartPage/CartItem";
import { Game } from "@/types/Game";

type CartDetailsProps = {
  cartItems: Game[];
};

export default function CartDetails(cartItems: CartDetailsProps) {
  //<CartItem/>
  return (
    <>
      <Divider />
      <Grid container spacing={2}>
        <Grid item xs={5} sm={4} md={4} lg={6}>
          <Typography variant="body1">Item</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Typography variant="body1">Price</Typography>
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={3}>
          <Typography variant="body1">Deadline</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1}>
          <Typography variant="body1">Quantity</Typography>
        </Grid>
      </Grid>
      <Divider />
      <Box sx={{ mt: 4 }}>
        {cartItems.cartItems.map((cartItem) => (
          <>
          <CartItem key={cartItem.id} cartItem={cartItem} />
          <Box sx={{ mt: 4 }} />
          </>
        ))}
      </Box>
      <Divider />
      <Divider sx={{my:1}}/>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={4} md={4} lg={6}>
          <Typography variant="body1">Total</Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} >
          <Typography variant="body1">$110.00</Typography>
        </Grid>
      </Grid>
    </>
  );
}
