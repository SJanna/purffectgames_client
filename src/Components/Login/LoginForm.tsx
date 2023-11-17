import React from "react";
import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material";

export default function LoginForm() {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Login
      </Typography>
      <Typography variant="body1" align="center" gutterBottom>
        Login to your account
      </Typography>
      <Box sx={{ my: 4 }} />
      <Grid container spacing={0} direction="row" justifyContent="center">
        <Grid
          item
          xs={12}
          sm={8}
          md={6}
          lg={6}
          sx={{ borderRadius: 2, boxShadow: 5, p: 4 }}
        >
          <Box sx={{ my: 2 }} />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Box sx={{ my: 2 }} />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            fullWidth
            size="small"
          />
          <Box sx={{ my: 2 }} />
          <Typography variant="body2" fontSize={"0.7rem"}>
            <Link href="/forgot-password">Forgot Password?</Link>
          </Typography>

          <Box sx={{ my: 2 }} />
          <Link href="/">
            <Button variant="contained" color="primary" fullWidth>
              Login
            </Button>
          </Link>
          <Box sx={{ my: 2 }} />
          <Typography variant="body1" align="center" gutterBottom>
            Don't have an account? &nbsp;
            <Link
              href="https://web.whatsapp.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Contact us
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}