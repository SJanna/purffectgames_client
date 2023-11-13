"use client";
import { Theme, createTheme } from '@mui/material/styles';

const theme:Theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e',
    },
    secondary: {
      main: '#ff8f00',
    },
  },
});

export default theme;