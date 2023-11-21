"use client";
import React from "react";
import ProfileInfo from "@/Components/ProfilePage/ProfileInfo";
import RentedGames from "@/Components/ProfilePage/RentedGames";
import { Box, Typography, Grid } from "@mui/material";
import { useGetClient } from "@/hooks/useGetClient";
import { Client } from "@/types/Client";
import {useGetClientRentals} from "@/hooks/useGetClientRentals";


export default function Profile() {
  const client = useGetClient() as Client;
  const clientRentals = useGetClientRentals();
  return (
    <>
      <Box>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={10} sm={8} md={8} lg={6}>
            <ProfileInfo Client={client} />
          </Grid>
        </Grid>
        <Box sx={{ m: 10 }} />
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Typography variant="h5" component="div">
              Rented Games
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <RentedGames clientRentals={clientRentals} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
