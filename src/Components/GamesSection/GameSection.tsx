import { Game } from "@/types/Game";
import GameCard from "./GameCard";
import { Box, Link, Typography } from "@mui/material";

type GamesSectionProps = {
  games: Game[];
  title: string;
  filteredby: keyof Game;
};

function GamesSection({games, title, filteredby}: GamesSectionProps) {
  return (
    <Box>
      <Box sx={{display:"flex", justifyContent:"space-between", m:'2%'}}>
        <Typography variant="h4">
          {title}
        </Typography>
        <Typography variant="overline">
          <Link color="text.secondary" href={`/games?sort=${filteredby}`}>See all</Link>
        </Typography>
      </Box>
    <Box sx={{ marginTop: 5, marginBottom:10, display:'flex', justifyContent:'space-around' }}>
        {games.map((game) => (
          <GameCard game={game} />
        ))}
    </Box>
    </Box>
  );
}

export default GamesSection;
