import React from "react";
import CartDetails from "@/Components/CartPage/CartDetails";
import { cartItems } from "@/data/cartItems";
import { Box, Button, Grid, Link } from "@mui/material";
import CartSummary from "@/Components/CartPage/CartSummary";

export default function Cart() {
  return (
    <Grid container spacing={2} direction="row" justifyContent="center">
      <Grid item xs={12} md={8} lg={9}>
        <CartDetails cartItems={cartItems} />
        <Box sx={{ my: 4 }} />
      </Grid>
      <Grid item xs={8} md={4} lg={3}>
        <CartSummary cartItems={cartItems} callToAction={callToAction()}/>
      </Grid>
    </Grid>
  );
}

const callToAction = () => {
  return (
    <Link href="/checkout">
      <Button variant="contained" color="primary" fullWidth>
        Checkout
      </Button>
    </Link>
  );
};
