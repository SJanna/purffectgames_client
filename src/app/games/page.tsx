"use client";
import React, { useMemo, useState } from "react";
import GameList from "@/Components/GameList";
import { games } from "@/data/games";
import filterGames from "@/utils/filterGames";
import FilterPanel from "@/Components/FilterPanel";
import { Box, Grid } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ModalFilter from "@/Components/ModalFilter";

const page = () => {
  const [filterType, setFilterType] = useState("All"); // Provide a default value
  const [searchTerm, setSearchTerm] = useState("");
  // const [filteredGames, setFilteredGames] = useState(games);

  // Use useMemo to memoize the filtered games
  const memoizedFilteredGames = useMemo(() => {
    let filteredByFilterType = filterGames({ filterType, games });
    if (searchTerm.trim() !== "") {
      filteredByFilterType = filteredByFilterType.filter((game) =>
        Object.entries(game)
          .filter(([key, value]) => typeof value === "string" && key !== "img") // Exclude 'img' property
          .some(([key, value]) => {
            if (typeof value === "string") {
              return value.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
          })
      );
    }
    return filteredByFilterType;
  }, [filterType, games, searchTerm]);

  const [isFilterPanelOpen, setIsFilterPanelOpen] = useState(false);

  const handleOpenFilterPanel = () => {
    setIsFilterPanelOpen((prevState) => !prevState);
  };

  const handleApplyFilter = () => {
    // Lógica para aplicar filtros desde el modal
    // Puedes acceder a los valores de los campos del modal y aplicar filtros adicionales aquí
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ marginTop: "10vh", marginBottom: "5vh" }}>
        <FilterPanel
          filterType={filterType}
          setFilterType={setFilterType}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleOpenFilterPanel={handleOpenFilterPanel}
        />
        <Grid container spacing={2}>
          {isFilterPanelOpen && (
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <ModalFilter
                open={isFilterPanelOpen}
                onApplyFilter={handleApplyFilter}
              />
            </Grid>
          )}
          {/* Si isfilterOpen, sino hacer.. */}
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

export default page;

// //Útil si se necesita hacer algo cuando cambia el estado de filteredGames
// useEffect(() => {
//   // Perform additional actions when memoizedFilteredGames changes
//   console.log('Filtered games changed:', memoizedFilteredGames);

//   // Update state
//   setFilteredGames(memoizedFilteredGames);
// }, [memoizedFilteredGames]);
