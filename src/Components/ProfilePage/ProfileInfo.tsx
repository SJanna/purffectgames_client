import { UserInfo } from "@/types/UserInfo";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import React from "react";

type ProfileInfoProps = {
  userInfo: UserInfo
};

export default function ProfileInfo({ userInfo }: ProfileInfoProps) {
  return (
    <Box
      // sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Card 
      // sx={{ maxWidth: "70%" }}
      >
        <CardMedia
          component="img"
          height="140"
          image="https://source.unsplash.com/random"
          alt="Profile Picture"
        />
        <CardContent sx={{ justifyContent: "center" }}>
          <Typography gutterBottom variant="h5" component="div">
            {userInfo.name}
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Email:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                {userInfo.email}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Phone:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                {userInfo.phone}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Address:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                {userInfo.address}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Age:
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                {userInfo.age}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
}
