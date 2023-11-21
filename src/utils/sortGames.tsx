import { Game } from "@/types/Game";

type SortGamesProps = {
  sortType: string;
  games: Game[];
};

function sortGames({ sortType, games }: SortGamesProps) {
  let sortedGames;

  switch (sortType) {
    case "New Release":
      sortedGames = games
        .slice()
        .sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );
      break;

    case "Alphabetical Desc":
      sortedGames = games
        .slice()
        .sort((a, b) => a.title.localeCompare(b.title));
      break;

    case "Alphabetical Asc":
      sortedGames = games
        .slice()
        .sort((a, b) => b.title.localeCompare(a.title));
      break;

    case "Price Desc":
      sortedGames = games.slice().sort((a, b) => b.price - a.price);
      break;

    case "Price Asc":
      sortedGames = games.slice().sort((a, b) => a.price - b.price);
      break;

    case "Popularity":
      sortedGames = games.slice().sort((a, b) => b.popularity - a.popularity);
      break;

    default:
      sortedGames = games;
  }

  return sortedGames;
}

export default sortGames;
