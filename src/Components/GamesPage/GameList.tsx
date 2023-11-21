"use client";
import {
  Box,
  Grid,
} from "@mui/material";
import React from "react";
import GameCard from "@/Components/GameCard/GameCard";
import { Game } from "@/types/Game";

type GameListProps = {
  games: Game[];
};

const GameList = ({ games}: GameListProps) => {

  return (
    <>
      <Box
        sx={{
          marginBottom: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={2}>
          {games.map((game) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={game.id}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );


};

export default GameList;
