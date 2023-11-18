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
import Link from "next/link";

const LogoName = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Link href="/">
        <img
          alt="Logo"
          src="/static/images/PurrfectGames_Logo.png"
          width={50}
        />
      </Link>
      <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Typography
          variant="h4"
          component="div"
          sx={{ color: "primary.contastText" }}
        >
          Purrfect Games
        </Typography>
      </Link>
    </Box>
  );
};

const NavbarIcons = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Link href="/cart">
        <IconButton sx={{ color: "white" }}>
          <ShoppingCartIcon fontSize="large" />
        </IconButton>
      </Link>
      <Link href="/profile">
        <IconButton aria-label="Profile" sx={{ color: "white" }}>
          <AccountCircle fontSize="large" />
        </IconButton>
      </Link>
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
