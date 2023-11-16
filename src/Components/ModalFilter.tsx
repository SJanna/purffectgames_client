import React from "react";
import {
  Button,
  Typography,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";
import { platforms as platformsData } from "@/data/platforms";
import { genres as genresData } from "@/data/genres";

type ModalFilterProps = {
  filterOptions: {
    sortType: string;
    searchTerm: string;
    priceRange: number[];
    popularityRange: number[];
    genres: string[];
    platforms: string[];
  };
  setFilterOptions: (filterOptions: any) => void;
};

const ModalFilter = ({
  filterOptions,
  setFilterOptions,
}: ModalFilterProps) => {
  const handleClearFilter = () => {
    setFilterOptions({
      sortType: "All",
      searchTerm: "",
      priceRange: [0, 1000],
      popularityRange: [0, 10],
      genres: [],
      platforms: [],
    });
  };

  // const handleApplyFilter = () => {
  //   onApplyFilter();
  // };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        padding: 2,
        margin: "auto",
      }}
    >
      {/* Price Range */}
      <Box>
        <Typography sx={{ marginRight: 1, color: "text.secondary" }}>
          Price:
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
          <TextField
            id="priceMin"
            label="Min"
            variant="outlined"
            size="small"
            type="number"
            value={filterOptions.priceRange[0]}
            onChange={(event) =>
              setFilterOptions({
                ...filterOptions,
                priceRange: [
                  parseInt(event.target.value),
                  filterOptions.priceRange[1],
                ],
              })
            }
            sx={{ maxWidth: 100, marginRight: 1 }}
          />
          <span>-</span>
          <TextField
            id="priceMax"
            label="Max"
            variant="outlined"
            size="small"
            type="number"
            value={filterOptions.priceRange[1]}
            onChange={(event) =>
              setFilterOptions({
                ...filterOptions,
                priceRange: [
                  filterOptions.priceRange[0],
                  parseInt(event.target.value),
                ],
              })
            }
            sx={{ maxWidth: 100, marginLeft: 1 }}
          />
        </Box>
      </Box>

      {/* Popularity */}
      <Box marginTop={2}>
        <Typography sx={{ color: "text.secondary" }}>Popularity:</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
        <TextField
          id="popularityMin"
          label="Min"
          variant="outlined"
          size="small"
          type="number"
          value={filterOptions.popularityRange[0]}
          onChange={(event) =>
            setFilterOptions({
              ...filterOptions,
              popularityRange: [
                parseInt(event.target.value),
                filterOptions.popularityRange[1],
              ],
            })
          }
          sx={{ maxWidth: 100, marginRight: 1 }}
        />
        <span>-</span>
        <TextField
          id="popularityMax"
          label="Max"
          variant="outlined"
          size="small"
          type="number"
          value={filterOptions.popularityRange[1]}
          onChange={(event) =>
            setFilterOptions({
              ...filterOptions,
              popularityRange: [
                filterOptions.popularityRange[0],
                parseInt(event.target.value),
              ],
            })
          }
          sx={{ maxWidth: 100, marginLeft: 1 }}
        />
      </Box>
      {/* Genre */}
      <Box marginTop={2}>
        <Typography sx={{ color: "text.secondary" }}>Genre:</Typography>
        <Autocomplete
          size="small"
          multiple
          options={genresData.map((genre) => genre.name)}
          value={filterOptions.genres}
          onChange={(event, newValue) =>
            setFilterOptions({ ...filterOptions, genres: newValue as string[] })
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>

      {/* Platform */}
      <Box marginTop={2}>
        <Typography sx={{ color: "text.secondary" }}>Platform:</Typography>
        <Autocomplete
          size="small"
          multiple
          options={platformsData.map((platform) => platform.name)}
          value={filterOptions.platforms}
          onChange={(event, newValue) =>
            setFilterOptions({
              ...filterOptions,
              platforms: newValue as string[],
            })
          }
          renderInput={(params) => <TextField {...params} />}
        />
      </Box>
      <Box sx={{ marginTop: 2 }}>
        <Button type="reset" color="inherit" onClick={handleClearFilter}>
          Clear Filters
        </Button>
      </Box>
    </Box>
  );
};

export default ModalFilter;
