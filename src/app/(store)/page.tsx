//Fonts:
import Header from "@/Components/HomePage/Header";
import GameSection from "@/Components/HomePage/GameSection";
import { games } from "@/data/games";
import filterGames from "@/utils/sortGames";

export default function Home() {
  return (
    <>
      <Header />
      <GameSection
        games={filterGames({sortType:'Popularity', games:games}).slice(0, 4)}
        title="Popular games"
      />
      <GameSection
        games={filterGames({sortType:'New Release', games:games}).slice(0, 4)}
        title="New Releases"
      />
    </>
  );
}