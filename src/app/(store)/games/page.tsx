"use client";
import React, { useMemo, useState } from "react";
import GameList from "@/Components/GamesPage/GameList";
import { games } from "@/data/games";
import sortGames from "@/utils/sortGames";
import FilterPanel from "@/Components/GamesPage/FilterPanel";
import { Box, Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ModalFilter from "@/Components/GamesPage/ModalFilter";

export default function Games() {
  const [filterOptions, setFilterOptions] = useState({
    sortType: "All",
    searchTerm: "",
    priceRange: [0, 1000],
    popularityRange: [0, 10],
    genres: Array<string>(),
    platforms: Array<string>(),
  });

  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const memoizedFilteredGames = useMemo(() => {
    let filteredGamesCopy = [...games];

    // Apply filter by sortType
    filteredGamesCopy = sortGames({
      sortType: filterOptions.sortType,
      games: filteredGamesCopy,
    });

    // Apply other filters
    filteredGamesCopy = filteredGamesCopy.filter((game) => {
      // Implement your other filter logic here
      const { priceRange, popularityRange, genres, platforms, searchTerm } =
        filterOptions;

      const passesPriceRange =
        game.price >= priceRange[0] && game.price <= priceRange[1];
      const passesPopularityRange =
        game.popularity >= popularityRange[0] &&
        game.popularity <= popularityRange[1];
      const passesGenres = genres.length === 0 || genres.includes(game.genre);
      const passesPlatforms =
        platforms.length === 0 || platforms.includes(game.platform);
      const passesSearchTerm =
        searchTerm.trim() === "" ||
        Object.entries(game)
          .filter(([key, value]) => typeof value === "string" && key !== "img")
          .some(([key, value]) => {
            if (typeof value === "string") {
              return value.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
          });

      return (
        passesPriceRange &&
        passesPopularityRange &&
        passesGenres &&
        passesPlatforms &&
        passesSearchTerm
      );
    });

    return filteredGamesCopy;
  }, [filterOptions, games]);

  const handleOpenFilterPanel = () => {
    setIsFilterPanelOpen((prevState) => !prevState);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ marginBottom: "5vh" }}>
        <FilterPanel
          filterOptions={filterOptions}
          setFilterOptions={setFilterOptions}
          handleOpenFilterPanel={handleOpenFilterPanel}
        />
        <Box sx={{ marginTop: 4 }} />
        <Grid container spacing={2}>
          {isFilterPanelOpen && (
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <ModalFilter
                filterOptions={filterOptions}
                setFilterOptions={setFilterOptions}
              />
            </Grid>
          )}
          {isFilterPanelOpen ? (
            <Grid item xs={12} sm={12} md={8} lg={10}>
              <GameList games={memoizedFilteredGames} />
            </Grid>
          ) : (
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <GameList games={memoizedFilteredGames} />
            </Grid>
          )}
        </Grid>
      </Box>
    </LocalizationProvider>
  );
};

// export default Page;
