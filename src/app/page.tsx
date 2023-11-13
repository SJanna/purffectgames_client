//Fonts:

import Navbar from "@/Components/Navbar";
import Header from "@/Components/Header";
import GameSection from "@/Components/GamesSection/GameSection";
import { Game } from "@/types/Game";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <GameSection
        games={games.sort(OrderbyPopularity).slice(0, 4)}
        title="Popular games"
        filteredby="popularity"
      />
      <GameSection
        games={games.sort(OrderbyRealeaseDate).slice(0, 4)}
        title="New Releases"
        filteredby="realeaseDate"
      />
    </>
  );
}

function OrderbyPopularity(a: Game, b: Game) {
  return b.popularity - a.popularity;
}

function OrderbyRealeaseDate(a: Game, b: Game) {
  return (
    new Date(b.realeaseDate).getTime() - new Date(a.realeaseDate).getTime()
  );
}

const games: Game[] = [
  {
    title: "The Legend of Zelda: Breath of the Wild",
    platform: "Nintendo Switch",
    genre: "Action-adventure",
    director: "Hidemaro Fujibayashi",
    protagonist: "Link",
    productor: "Eiji Aonuma",
    realeaseDate: "March 3, 2017",
    popularity: 10,
    img: "https://www.mundodeportivo.com/alfabeta/hero/2022/01/the_legend_of_zelda_breath_of_the_wild_key_art-1.jpg?width=1200&aspect_ratio=16:9",
    price: 60,
  },
  {
    title: "Grand Theft Auto V",
    platform: "PlayStation 4",
    genre: "Action-adventure",
    director: "Rod Edge",
    protagonist: "Michael De Santa",
    productor: "Leslie Benzies",
    realeaseDate: "September 17, 2013",
    popularity: 9,
    img: "https://cdn.akamai.steamstatic.com/steam/apps/271590/capsule_616x353.jpg?t=1695060909",
    price: 50,
  },
  {
    title: "The Last of Us",
    platform: "PlayStation 3",
    genre: "Action-adventure",
    director: "Bruce Straley",
    protagonist: "Joel",
    productor: "Sam Thompson",
    realeaseDate: "June 14, 2013",
    popularity: 8,
    img: "https://static.hbo.com/2022-12/the-anarchists-s01-ka-1920.jpg",
    price: 85,
  },
  {
    title: "The Witcher 3: Wild Hunt",
    platform: "PlayStation 4",
    genre: "Action role-playing",
    director: "Konrad Tomaszkiewicz",
    protagonist: "Geralt of Rivia",
    productor: "Piotr Krzywonosiuk",
    realeaseDate: "May 19, 2015",
    popularity: 7,
    img: "https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_500/ncom/software/switch/70010000033071/3f7ee6aa3482b514bd443e116022b038a9728f017916ed37da3f09f731a7d5f2",
    price: 35,
  },
  {
    title: "Red Dead Redemption 2",
    platform: "PlayStation 4",
    genre: "Action-adventure",
    director: "Rod Edge",
    protagonist: "Arthur Morgan",
    productor: "Leslie Benzies",
    realeaseDate: "October 26, 2018",
    popularity: 6,
    img: "https://licendi.com/media/catalog/product/cache/257f0e39ed8c8969561540a6eaa4f531/r/d/rdr28_2-1_1_.jpg",
    price: 60,
  },
  {
    title: "The Elder Scrolls V: Skyrim",
    platform: "PlayStation 4",
    genre: "Action role-playing",
    director: "Todd Howard",
    protagonist: "Dovahkiin",
    productor: "Craig Lafferty",
    realeaseDate: "November 11, 2011",
    popularity: 5,
    img: "https://image.api.playstation.com/vulcan/ap/rnd/202110/2019/aDSOgerXg4V6sf5A7VzHiTun.jpg",
    price: 60,
  },
  {
    title: "God of War",
    platform: "PlayStation 4",
    genre: "Action-adventure",
    director: "Cory Barlog",
    protagonist: "Kratos",
    productor: "Shannon Studstill",
    realeaseDate: "April 20, 2018",
    popularity: 4,
    img: "https://assetsio.reedpopcdn.com/-1634741977375.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    price: 60,
  },
  {
    title: "The Last of Us Part II",
    platform: "PlayStation 4",
    genre: "Action-adventure",
    director: "Neil Druckmann",
    protagonist: "Ellie",
    productor: "Anthony Newman",
    realeaseDate: "June 19, 2020",
    popularity: 3,
    img: "https://i.ytimg.com/vi/eOiUtRF8k28/maxresdefault.jpg",
    price: 60,
  },
];
