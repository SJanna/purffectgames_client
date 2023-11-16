import React from "react";
import ProfileInfo from "@/Components/ProfileInfo";
import RentedGames from "@/Components/RentedGames";
import { Game } from "@/types/Game";
import { Box, Typography, Grid } from "@mui/material";

type UserInfo = {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  age: number;
};
type RentedGamesInfo = {
  game: Game;
  rentDate: String;
  returnDate: String;
  active: boolean;
};

const userInfo: UserInfo = {
  id: 1,
  name: "John Doe",
  email: "john@mail.com",
  phone: "1234567890",
  address: "123 Main St, New York, NY 10001",
  age: 25,
};

const rentedGamesInfo: RentedGamesInfo[] = [
  {
    game: {
      id: 1,
      title: "The Last of Us",
      platform: "PlayStation 3",
      genre: "Action-adventure",
      director: "Neil Druckmann",
      protagonist: "Joel",
      productor: "Bruce Straley",
      releaseDate: "June 14, 2013",
      popularity: 9.8,
      img: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.png",
      price: 20,
    },
    rentDate: "2021-09-01",
    returnDate: "2021-09-08",
    active: true,
  },
  {
    game: {
      id: 2,
      title: "The Last of Us Part II",
      platform: "PlayStation 4",
      genre: "Action-adventure",
      director: "Neil Druckmann",
      protagonist: "Ellie",
      productor: "Anthony Newman",
      releaseDate: "June 19, 2020",
      popularity: 9.5,
      img: "https://upload.wikimedia.org/wikipedia/en/4/4f/TLOU2_cover_art.jpg",
      price: 30,
    },
    rentDate: "2021-09-01",
    returnDate: "2021-09-08",
    active: true,
  },
  {
    game: {
      id: 3,
      title: "God of War",
      platform: "PlayStation 4",
      genre: "Action-adventure",
      director: "Cory Barlog",
      protagonist: "Kratos",
      productor: "Shannon Studstill",
      releaseDate: "April 20, 2018",
      popularity: 9.8,
      img: "https://upload.wikimedia.org/wikipedia/en/0/0a/God_of_War_4_cover.jpg",
      price: 25,
    },
    rentDate: "2021-09-01",
    returnDate: "2021-09-08",
    active: false,
  },
  {
    game: {
      id: 4,
      title: "Uncharted 4: A Thief's End",
      platform: "PlayStation 4",
      genre: "Action-adventure",
      director: "Neil Druckmann",
      protagonist: "Nathan Drake",
      productor: "Bruce Straley",
      releaseDate: "May 10, 2016",
      popularity: 9.7,
      img: "https://upload.wikimedia.org/wikipedia/en/5/5a/Uncharted_4_box_artwork.jpg",
      price: 15,
    },
    rentDate: "2021-09-01",
    returnDate: "2022-09-08",
    active: false,
  },
];

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
