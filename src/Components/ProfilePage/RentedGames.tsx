"use client";
import React, { useState } from "react";
import { Game } from "@/types/Game";
import { useMemo } from "react";
import {
  MRT_Table, //import alternative sub-component if we do not want toolbars
  type MRT_ColumnDef,
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";
import { Chip } from "@mui/material";
import { ClientRentals } from "@/types/ClientRentals";
import GameCardDetails from "@/Components/GameCard/GameCardDetails";

type RentedGamesProps = {
  clientRentals: ClientRentals[];
};

export default function RentedGames({ clientRentals }: RentedGamesProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [game, setGame] = useState<Game>({} as Game);

  // Table with columns: Game Name, Rent Date, Return Date, Active
  const columns = useMemo<MRT_ColumnDef<ClientRentals, any>[]>(
    () => [
      {
        header: "ID",
        accessorKey: "id",
        size: 10,
      },
      {
        header: "Game Name",
        accessorKey: "games",
        size: 20,
        Cell: ({ row }) => {
          return row.original.games.map((game: Game) => {
            return (
              <React.Fragment key={game.id}>
                <Chip
                  key={game.id}
                  label={game.title}
                  variant="outlined"
                  sx={{ m: 0.5 }}
                  onClick={() => {
                    setGame(game);
                    handleOpen();
                  }}
                />
              </React.Fragment>
            );
          });
        },
      },
      {
        header: "Rent Date",
        accessorKey: "rental_date",
        size: 10,
        // Chage the format of the date
        Cell: ({ row }) => {
          return new Date(row.original.rental_date).toLocaleDateString();
        },
      },
      {
        header: "Return Date",
        accessorKey: "rental_deadline",
        size: 10,
        // Chage the format of the date
        Cell: ({ row }) => {
          return new Date(row.original.rental_deadline).toLocaleDateString();
        },
      },
      {
        header: "Total",
        accessorKey: "price",
        size: 10,
        Cell: ({ row }) => {
          return "$" + row.original.price + ".00";
        },
      },
      {
        header: "Active",
        size: 10,
        Cell: ({ row }) => {
          const today = new Date();
          const deadline = new Date(row.original.rental_deadline);
          return (
            <Chip
              label={today < deadline ? "On Time" : "Late"}
              color={today < deadline ? "success" : "error"}
              variant="filled"
              sx={{ m: 0.5 }}
            />
          );
        },
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: clientRentals,
    enableFullScreenToggle: false,
    initialState: {
      density: "compact",
    },
  });

  //using MRT_Table instead of MaterialReactTable if we do not need any of the toolbar components or features
  return (
    <>
      <MaterialReactTable table={table} />;
      <GameCardDetails open={open} handleClose={handleClose} game={game} />
    </>
  );
}
