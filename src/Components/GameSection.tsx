import { Game } from "@/types/Game";
import GameCard from "./GameCard";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";

type GamesSectionProps = {
  games: Game[];
  title: string;
};

function GamesSection({ games, title }: GamesSectionProps) {
  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop:'4%', marginBottom:'5%' }}>
        <Typography variant="h4">{title}</Typography>
        <Link color='inherit' href={'/games'}>
        <Typography color="text.secondary" variant="overline">
            See all
        </Typography>
        </Link> 
      </Box>
      <Box>
        <Grid container spacing={2}>
          {games.map((game) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={game.id}>
              <GameCard game={game} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}

export default GamesSection;
