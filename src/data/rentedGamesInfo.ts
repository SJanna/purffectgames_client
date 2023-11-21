import { ClientRentals } from "@/types/ClientRentals";

export const rentedGamesInfo: ClientRentals[] = [
  {
    game: {
      id: 1,
      title: "The Last of Us",
      platform: "PlayStation 3",
      genre: "Action-adventure",
      director: "Neil Druckmann",
      protagonist: "Joel",
      productor: "Bruce Straley",
      release_date: "June 14, 2013",
      popularity: 9.8,
      image: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.png",
      price: 20,
      stock: 10,
    },
    rentDate: "2021-09-01",
    returnDate: "2021-09-08",
    active: true,
  }
];