"use client";
import Header from "@/Components/HomePage/Header";
import GameSection from "@/Components/HomePage/GameSection";
import { useGetGames } from "@/hooks/useGetGames";
import filterGames from "@/utils/sortGames";


export default function Home() {
  const games = useGetGames();
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