"use client";
import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Select,
  MenuItem,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { Game } from "@/types/Game";
import GameCardDetails from "../GameCard/GameCardDetails";

type CartItemProps = {
  cartItem: Game;
};

export default function CartItem(cartItem: CartItemProps) {
  const today = dayjs();

  return (
    // Image and at the right side the name of the game and the platform
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {/* Center contend Horizontal */}
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item xs={5} sm={4} md={4} lg={6}>
          <Item cartItem={cartItem.cartItem} />
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}>
          <Typography variant="body1">${cartItem.cartItem.price}.00</Typography>
        </Grid>
        <Grid item xs={3} sm={4} md={4} lg={3}>
          <DatePicker
            sx={{ maxWidth: "150px" }}
            value={today}
            minDate={today}
            slotProps={{ textField: { size: "small", variant: "standard" } }}
          />
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={1}>
          <Select
            // value={1}
            defaultValue={1}
            label="Quantity"
            variant="standard"
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
          </Select>
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}

const Item = ({ cartItem }: CartItemProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <img
        src={cartItem.image}
        alt={cartItem.title}
        style={{ width: 100, height: 100, marginRight: 10, borderRadius: 5, objectFit: "cover", cursor: "pointer" }}
        onClick={handleOpen}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1">{cartItem.title}</Typography>
        <Typography variant="body1">{cartItem.platform}</Typography>
      </Box>
      <GameCardDetails open={open} handleClose={handleClose} game={cartItem} />
    </Box>
  );
};
