import {
  SelectChangeEvent,
  Box,
  Select,
  MenuItem,
  Typography,
  InputAdornment,
  TextField,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";

type FilterPanelProps = {
  filterOptions: {
    sortType: string;
    searchTerm: string;
    priceRange: number[];
    popularityRange: number[];
    genres: string[];
    platforms: string[];
  };
  setFilterOptions: (filterOptions: any) => void;
  handleOpenFilterPanel: () => void;
};

function FilterPanel({
  filterOptions,
  setFilterOptions,
  handleOpenFilterPanel,
}: FilterPanelProps) {
  const handleChange = (event: SelectChangeEvent) => {
    setFilterOptions({ ...filterOptions, sortType: event.target.value });
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ marginRight: 1, color: "text.secondary" }}>
            Sort by:
          </Typography>
          <Select
            labelId="sortType"
            id="sortType"
            value={filterOptions.sortType}
            onChange={handleChange}
            variant="standard"
            label="Filter Type"
            size="medium"
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"New Release"}>New Release</MenuItem>
            <MenuItem value={"Alphabetical Desc"}>Alphabetical A-Z</MenuItem>
            <MenuItem value={"Alphabetical Asc"}>Alphabetical Z-A</MenuItem>
            <MenuItem value={"Price Desc"}>Price High to Low</MenuItem>
            <MenuItem value={"Price Asc"}>Price Low to High</MenuItem>
            <MenuItem value={"Popularity"}>Popularity</MenuItem>
          </Select>
        </Box>
        {/* Global searcher */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <TextField
            id="input-with-icon-textfield"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            size="small"
            sx={{ width: "30vw" }}
            type="search"
            value={filterOptions.searchTerm}
            onChange={(e) =>
              setFilterOptions({ ...filterOptions, searchTerm: e.target.value })
            }
          />
        </Box>
        {/* Filter */}
        <Box
          sx={{ display: "flex", alignItems: "center" }}
          onClick={handleOpenFilterPanel}
        >
          <Typography sx={{ marginRight: 1, color: "text.secondary" }}>
            Filter
          </Typography>
          <FilterListIcon />
        </Box>
      </Box>
    </>
  );
}

export default FilterPanel;
