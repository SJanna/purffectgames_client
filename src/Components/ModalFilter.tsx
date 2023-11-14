"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
  Box,
  Slider,
  Switch,
  Autocomplete,
  Checkbox,
  Radio,
  Select,
  TextField,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { platforms as platformsData} from "@/data/platforms";
import { genres as genresData} from "@/data/genres";
import theme from "@/app/theme";


type ModalFilterProps = {
  open: boolean;
  onApplyFilter: () => void;
};

const ModalFilter = ({ open, onApplyFilter }: ModalFilterProps) => {
  // Aquí puedes agregar los campos de filtro, como sliders para rango de precios, popularidad, etc.
  const [priceRange, setPriceRange] = useState<number[]>([0, Infinity]);
  const [popularityRange, setPopularityRange] = useState<number[]>([0, 10]);
  const [genres, setGenres] = useState<string[]>([]);
  const [platforms, setPlatforms] = useState<string[]>([]);

  // Añade lógica para manejar los cambios en estos campos y aplicar los filtros.

  // Puedes usar el prop onApplyFilter para aplicar los filtros y cerrar el modal.
  // Puedes usar el prop onClose para cerrar el modal sin aplicar los filtros.
  // Puedes usar el prop open para controlar la visibilidad del modal.

  const handleClearFilter = () => {
    // Lógica para limpiar los filtros
    setPriceRange([0, Infinity]);
    setPopularityRange([0, 10]);
    setGenres([]);
    setPlatforms([]);
  };

  const handleApplyFilter = () => {
    // Lógica para aplicar los filtros y cerrar el modal
    onApplyFilter();
  };
  
  return (
      <Box>
        {/* Contenido del modal con campos de filtro */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ marginRight: 1, color: "text.secondary" }}>
            Price:
          </Typography>
          <Slider
            value={priceRange}
            onChange={(event, newValue) => setPriceRange(newValue as number[])}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ marginRight: 1, color: "text.secondary" }}>
            Popularity:
          </Typography>
          <Slider
            value={popularityRange}
            onChange={(event, newValue) =>
              setPopularityRange(newValue as number[])
            }
            valueLabelDisplay="auto"
            min={0}
            max={10}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ marginRight: 1, color: "text.secondary" }}>
            Genre:
          </Typography>
          <Autocomplete
            multiple
            options={genresData.map(genre => genre.name)}
            value={genres}
            onChange={(event, newValue) => setGenres(newValue as string[])}
            renderInput={(params) => <TextField {...params} 
            />
          }
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ marginRight: 1, color: "text.secondary" }}>
            Plataform:
          </Typography>
          <Autocomplete
            multiple
            options={platformsData.map(platform => platform.name)}
            value={platforms}
            onChange={(event, newValue) => setPlatforms(newValue as string[])}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>

        {/* Agrega aquí los campos de filtro, como sliders, selects, etc. */}
        <Button onClick={handleApplyFilter}>Aplicar Filtro</Button>
      </Box>
  );
};

export default ModalFilter;
