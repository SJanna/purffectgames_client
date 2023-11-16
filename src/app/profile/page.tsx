import React from "react";
import ProfileInfo from "@/Components/ProfileInfo";
import RentedGames from "@/Components/RentedGames";
import { Box, Typography, Grid } from "@mui/material";
import { rentedGamesInfo } from "@/data/rentedGamesInfo";
import { userInfo } from "@/data/userInfo";

export default function Profile() {
  return (
    <>
      <Box>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={10} sm={8} md={8} lg={6}>
            <ProfileInfo userInfo={userInfo} />
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
            <RentedGames rentedGamesInfo={rentedGamesInfo} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
