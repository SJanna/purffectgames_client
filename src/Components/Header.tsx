import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";

const heroImageStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url('/static/images/hero.jpeg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  textShadow: "0 0 10px black",
  paddingTop: 10,
  paddingBottom: 10,
  gap: 2,
};

function Header() {
  return (
    <Box sx={heroImageStyle}>
      <Typography
        variant="h1"
        component="div"
        sx={{ color: "primary.contrastText" }}
      >
        Purrfect Games
      </Typography>
      <Typography
        variant="h4"
        component="div"
        sx={{ color: "primary.contrastText" }}
      >
        Video games store
      </Typography>
      <Link href="/games" passHref>
        <Button variant="contained" sx={{ mt: 3 }}>
          Shop Now
        </Button>
      </Link>
    </Box>
  );
}

export default Header;
