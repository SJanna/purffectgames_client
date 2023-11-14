//Fonts:
import Header from "@/Components/Header";
import GameSection from "@/Components/GameSection";
import { games } from "@/data/games";
import filterGames from "@/utils/filterGames";

export default function Home() {
  return (
    <>
      <Header />
      <GameSection
        games={filterGames({filterType:'Popularity', games:games}).slice(0, 4)}
        title="Popular games"
      />
      <GameSection
        games={filterGames({filterType:'New Release', games:games}).slice(0, 4)}
        title="New Releases"
      />
    </>
  );
}