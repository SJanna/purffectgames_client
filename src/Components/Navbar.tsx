import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Stack,
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const LogoName = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="Logo"
        src="/static/images/PurrfectGames_Logo.png"
        sx={{ width: 100, height: 100 }}
      />
      <Typography
        variant="h4"
        component="div"
        sx={{ color: "primary.contastText" }}
      >
        Purrfect Games
      </Typography>
    </Box>
  );
};

const NavbarIcons = () => {
  return (
    <Stack direction="row" spacing={1}>
      <IconButton sx={{ color: "white" }}>
        <ShoppingCartIcon fontSize="large" />
      </IconButton>
      <IconButton aria-label="Profile" sx={{ color: "white" }}>
        <AccountCircle fontSize="large" />
      </IconButton>
    </Stack>
  );
};

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "primary.main" }}>
      <Toolbar>
        <LogoName />
        <Box sx={{ flexGrow: 1 }} />
        <NavbarIcons />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
