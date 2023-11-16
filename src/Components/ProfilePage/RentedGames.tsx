"use client";
import React from "react";
import { Game } from "@/types/Game";
import { useMemo } from "react";
import {
  MRT_Table, //import alternative sub-component if we do not want toolbars
  type MRT_ColumnDef,
  useMaterialReactTable,
  MaterialReactTable,
} from "material-react-table";
import { Chip } from "@mui/material";
import { RentedGamesInfo } from "@/types/RentedGamesInfo";

type RentedGamesProps = {
  rentedGamesInfo: RentedGamesInfo[];
};

export default function RentedGames({ rentedGamesInfo }: RentedGamesProps) {
  // Table with columns: Game Name, Rent Date, Return Date, Active
  const columns = useMemo<MRT_ColumnDef<RentedGamesInfo, any>[]>(
    () => [
      {
        header: "Game Name",
        accessorKey: "game.title",
        size: 20,
      },
      {
        header: "Rent Date",
        accessorKey: "rentDate",
        size: 10,
      },
      {
        header: "Return Date",
        accessorKey: "returnDate",
        size: 10,
      },
      {
        header: "State",
        accessorKey: "active",
        size: 10,
        Cell: ({ cell }) => {
          return (
            <Chip
              label={cell.getValue() ? "Active" : "Inactive"}
              color={cell.getValue() ? "success" : "error"}
            />
          )
        },

      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: rentedGamesInfo,
    enableFullScreenToggle: false,    
    initialState: {
      density: "compact",
    },
    
  });

  //using MRT_Table instead of MaterialReactTable if we do not need any of the toolbar components or features
  return <MaterialReactTable table={table}/>;
}
