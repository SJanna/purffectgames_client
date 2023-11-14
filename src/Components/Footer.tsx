"use client";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography, Container, Link, Avatar } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import Stack from "@mui/material/Stack";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Purrfect Games
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function FooterIcons() {
  return (
    <Stack direction="row" spacing={2}>
      <EmailIcon aria-label="Email" />
      <LinkedInIcon aria-label="LinkedIn" />
      <InstagramIcon aria-label="Instagram" />
      <PhoneIcon aria-label="Phone" />
    </Stack>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Footer() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "5%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Stack  sx={{ marginLeft: 2, alignItems:'center' }} direction="row" spacing={1}>
        <Avatar
          alt="Logo"
          src="/static/images/PurrfectGames_Logo.png"
          sx={{ width: 70, height: 70 }}
        />
        <Box>
          <Typography variant="body1">
            Todos los derechos reservados.
          </Typography>
          <Copyright />
        </Box>
        </Stack>
        <Box sx={{ marginRight: 2 }}>
          <FooterIcons />
        </Box>
      </Box>
    </ThemeProvider>
  );
}