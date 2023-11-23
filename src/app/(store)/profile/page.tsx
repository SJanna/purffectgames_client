"use client";
import React, { useEffect } from "react";
import ProfileInfo from "@/Components/ProfilePage/ProfileInfo";
import RentedGames from "@/Components/ProfilePage/RentedGames";
import {
  Box,
  Typography,
  Grid,
  Dialog,
  TextField,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Alert,
} from "@mui/material";
import { getClientRentals } from "@/hooks/useGetClientRentals";
import { getUser } from "@/hooks/useGetClient";

export default function Profile() {
  const [myID, setMyID] = React.useState('');
  const [clientId, setClientId] = React.useState('');
  const [client, setClient] = React.useState(null);
  const [clientRentals, setClientRentals] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [invalidId, setInvalidId] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    setClientId(myID);
    setClient(await getUser(myID));
    setClientRentals(await getClientRentals(myID));
    if (!client &&  !open) {
      setInvalidId(true);
    } else {
      setOpen(false);
    }
  };

  if (!client || open) {
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>See my information</DialogTitle>
        {invalidId && <Alert severity="error">The ID you entered is invalid.</Alert>}
        <DialogContent>
          <DialogContentText>Please enter your ID to see your information.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="ID"
            type="string"
            fullWidth
            variant="standard"
            value={myID}
            onChange={(e) => setMyID(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    );
  }

  return (
    <>
      <Box>
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={10} sm={8} md={8} lg={6}>
            <ProfileInfo Client={client} />
          </Grid>
        </Grid>
        <Button onClick={handleClickOpen}>Change profile</Button>
        <Box sx={{ m: 10 }} />
        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <Typography variant="h5" component="div">
              Rented Games
            </Typography>
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={8}>
            <RentedGames clientRentals={clientRentals} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
