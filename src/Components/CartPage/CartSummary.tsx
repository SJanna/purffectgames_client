import { Game } from "@/types/Game";
import { Box, Grid, Typography, Divider } from "@mui/material";
import React from "react";

type CartSummaryProps = {
  cartItems: Game[];
  callToAction?: React.JSX.Element;
};

export default function CartSummary(cartProps: CartSummaryProps) {
  const subtotal = cartProps.cartItems.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  const discount = 0;
  const total = subtotal - discount;
  const ItemCount = cartProps.cartItems.length;

  return (
    // Subtotal - $110.00
    // Discount (if any) (Subtotal * Discount)
    // Total (Subtotal - Discount)
    // Checkout Button
    <Box sx={{ bgcolor: "grey.200", p: 2, px:'5%' }}>
      <Box sx={{ my: 2 }}>
        <Typography variant="h6">Summary ({ItemCount} item) </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography variant="body1">Subtotal</Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} textAlign={'right'}>
          <Typography variant="body1">${subtotal}.00</Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography variant="body1">Discount</Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} textAlign={'right'}>
          <Typography variant="body1">${discount}.00</Typography>
        </Grid>
      </Grid>
      <Divider sx={{my:2, bgcolor: "background.paper", height:'2px'}}/>
      <Grid container spacing={2}>
        <Grid item xs={4} sm={4} md={4} lg={4}>
          <Typography variant="body1">Total</Typography>
        </Grid>
        <Grid item xs={8} sm={8} md={8} lg={8} textAlign={'right'}>
          <Typography variant="body1">${total}.00</Typography>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 2 }} justifyContent={'center'}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          {cartProps.callToAction}
        </Grid>
      </Grid>
    </Box>
  );
}
