import { Game } from "@/types/Game";

export type ClientRentals = {
  id: number;
  rental_date: Date;
  rental_deadline: Date;
  price: number;
  client_id: number;
  games: Game[];
};