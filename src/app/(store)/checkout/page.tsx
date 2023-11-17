import CheckoutForm from "@/Components/CheckoutPage/CheckoutForm";
import CartSummary from "@/Components/CartPage/CartSummary";
import { cartItems } from "@/data/cartItems";
import { Grid, Box, Button, Link, Typography } from "@mui/material";
import React from "react";

export default function Checkout() {
  return (
    <Grid container spacing={2} direction="row" justifyContent="center">
      <Grid item xs={12} md={8} lg={9}>
        <CheckoutForm />
        <Box sx={{ my: 4 }} />
      </Grid>
      <Grid item xs={8} md={4} lg={3}>
        <CartSummary cartItems={cartItems} callToAction={callToAction()} />
      </Grid>
    </Grid>
  );
}

const callToAction = () => {
  return (
    //Rreturn to cart | Book Games
    <Grid container spacing={2} direction="row" alignItems="baseline">
      <Grid item xs={4} sm={4} md={4} lg={4}>
        <Link href="/cart">
          <Typography variant="body2" fontSize={"0.7rem"}>
            &lt; Return to Cart
          </Typography>
        </Link>
      </Grid>
      <Grid item xs={8} sm={8} md={8} lg={8}>
        <Link href="https://web.whatsapp.com/" rel="noopener noreferrer" target="_blank">
          <Button variant="contained" color="primary" fullWidth>
            Book Games
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
