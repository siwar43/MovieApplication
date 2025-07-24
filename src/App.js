import './App.css';
import Navbarr from './Components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './Components/HeroSection';
import { useState } from 'react';
import NewsCarousel from './Components/NewsCarousel';
import MovieList from './Components/MovieList';
import SerieList from './Components/SerieList';

function App() {
    // News Data 
    const [newsList, setNewsList] = useState([
      {
        title: "Mission Impossible – The Final Reckoning",
        description: "Ethan Hunt et son équipe affrontent une intelligence artificielle rogue menaçant l'humanité dans ce dernier volet de la saga.",
        posterURL: "https://fr.web.img5.acsta.net/img/e1/a1/e1a18fbc01bffba459850fdca101d231.jpg",
        rating: 5
      },
      {
        title: "House of the Dragon - Season 2",
        description: "Tensions rise in Westeros as House Targaryen begins to divide.",
        posterURL: "https://www.usatoday.com/gcdn/authoring/authoring-images/2023/12/01/USAT/71770127007-teaserartrhaenyra-22.jpg?width=660&height=978&fit=crop&format=pjpg&auto=webp",
        rating: 4
      },
      {
        title: "Inside Out 2",
        description: "Join Riley and her emotions on a new teenage adventure.",
        posterURL: "https://lumiere-a.akamaihd.net/v1/images/p_insideout2_now_available_disneyplus_d24c051c.jpeg",
        rating: 3
      },
          {
        title: "Demon Slayer: Infinity Castle",
        description: "Tanjiro et les Demon Slayers affrontent les démons les plus puissants de Muzan dans une bataille épique.",
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1kXkuLZ6JxUL66L60OTzNX-JemrDrt-lnQ&s",
        rating: 5
      },
          {
        title: "The Brutalist",
        description: "Un architecte juif-hongrois, survivant de l'Holocauste, lutte pour réaliser le rêve américain dans ce drame historique.",
        posterURL: "https://m.media-amazon.com/images/M/MV5BM2U0MWRjZTMtMDVhNC00MzY4LTgwOTktZGQ2MDdiYTI4OWMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        rating: 4
      },
      {
        title: "Avatar: The Way of Water",
        description: "Jake Sully lives with his newfound family formed on the planet of Pandora.",
        posterURL: "https://m.media-amazon.com/images/I/71s3cEqEZTL.jpg",
        rating: 2
      },
      {
        title: "Stranger Things Season 5",
        description: "The epic conclusion to the Upside Down saga begins.",
        posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTgUEKK6ggEXPNB2NxYm0yhQhvbXYFtyfMaA&s",
        rating: 5
      }
    ]);

      // Movies Data
    const [movies, setmovies] = useState(
        [
            {
                name: "Interstellar",
                posterurl: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10543523_p_v8_as.jpg",
                description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival as Earth faces environmental collapse.",
                rating: 5,
            },
            {
                name: "Prisoners",
                posterurl: "https://upload.wikimedia.org/wikipedia/en/6/63/Prisoners2013Poster.jpg",
                description: "When Keller Dover's daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.",
                rating: 4,
            },
            {
                name: "Arrival",
                posterurl: "https://cdn.kinocheck.com/i/mnlnfbbdwi.jpg",
                description: "A linguist works with the military to communicate with alien lifeforms after twelve mysterious spacecraft appear around the world.",
                rating: 5,
            },
            {
                name: "The Social Network",
                posterurl: "https://m.media-amazon.com/images/S/pv-target-images/a6a76cc6aff2c1ae66b3eecbb04c9ac2bf23d492c0fbd68c04abc736f052d8e7.jpg",
                description: "The story of the founding of Facebook and the legal battles that followed as friendships and ambitions collide.",
                rating: 4,
            },
            {
                name: "The Platform",
                posterurl: "https://m.media-amazon.com/images/M/MV5BYjUyZjNmYmMtNjA1My00ZWMyLTliZGQtODgzZjIxM2Y4NGI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                description: "In a prison where inmates are fed via a platform that descends through the levels, one man tries to bring about change to the system.",
                rating: 3,
            },
            {
                name: "No Country for Old Men",
                posterurl: "https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg",
                description: "Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.",
                rating: 5,
            },
            {
                name: "The Machinist",
                posterurl: "https://m.media-amazon.com/images/M/MV5BY2I1MmUxYmMtZjk3OC00N2MwLWI2YjAtNGQxODA1Y2I3YTI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
                description: "An industrial worker who hasn't slept in a year begins to doubt his own sanity when strange things start happening around him.",
                rating: 4,
            },
            {
                name: "The Prestige",
                posterurl: "https://m.media-amazon.com/images/M/MV5BMGZkMGFiMDQtMTE5YS00OTk5LTk4MGQtYTAyOTZkZmQ2ZjAyXkEyXkFqcGc@._V1_.jpg",
                description: "Two rival magicians engage in a bitter competition to create the ultimate stage illusion, leading them down a path of obsession and betrayal.",
                rating: 5,
            },
        ]
    )

    // Series Data
    const [series, setSeries] = useState(
      [
      {
        name: "Breaking Bad",
        posterurl: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "A high school chemistry teacher turned methamphetamine producer partners with a former student to secure his family's future.",
        rating: 5,
      },
      {
        name: "Stranger Things",
        posterurl: "https://fr.web.img4.acsta.net/pictures/22/05/18/14/31/5186184.jpg",
        description: "In a small town, a group of kids uncover supernatural mysteries involving a secret government lab and a parallel dimension.",
        rating: 4,
      },
      {
        name: "Game of Thrones",
        posterurl: "https://m.media-amazon.com/images/M/MV5BMTNhMDJmNmYtNDQ5OS00ODdlLWE0ZDAtZTgyYTIwNDY3OTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Noble families vie for control of the Seven Kingdoms of Westeros in a brutal struggle for power and survival.",
        rating: 5,
      },
      {
        name: "The Crown",
        posterurl: "https://thedude524.com/wp-content/uploads/2018/04/the-crown-saison-2-laffiche.jpg?w=816",
        description: "A biographical story about the reign of Queen Elizabeth II and the events that shaped the second half of the 20th century.",
        rating: 4,
      },
      {
        name: "Black Mirror",
        posterurl: "https://m.media-amazon.com/images/I/81UcD17TMrL._UF1000,1000_QL80_.jpg",
        description: "An anthology series exploring twisted, high-tech multiverses that reveal the dark side of modern society.",
        rating: 5,
      },
      {
        name: "Narcos",
        posterurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlDuF40zH7xRaoVFjvUu8U7HVIucB-OiM3ug&s",
        description: "The rise and fall of Pablo Escobar and the violent world of Colombian drug cartels in the 1980s.",
        rating: 4,
      },
      {
        name: "The Mandalorian",
        posterurl: "https://upload.wikimedia.org/wikipedia/en/e/e7/The_Mandalorian_season_2_poster.jpg",
        description: "A lone bounty hunter in the outer reaches of the galaxy protects a mysterious child while navigating dangerous missions.",
        rating: 5,
      },
      {
        name: "Friends",
        posterurl: "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_.jpg",
        description: "Follows six friends living in New York City as they navigate relationships, work, and life together.",
        rating: 4,
      },
    ]
  )


    const [text, settext] = useState("");
    const [score, setscore] = useState("")
    return (
      <div className="App">
        <Navbarr settext={settext} setscore={setscore} />
        <HeroSection/>
        <NewsCarousel newsList={newsList} />
        <MovieList movies={movies} setmovies={setmovies} text={text} score={score} />
        <SerieList series={series} setSeries={setSeries} />
      </div>
    );
}

export default App;