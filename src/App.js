import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import MovieCard from "./Component/movieCards/movieCard";
import Footer from "./Component/Footer/Footer";
import Add from "./Component/Add";
import { moviesData } from "./constant/Data";
import { useState } from "react";

function App() {
  const [oneMovie, setOneMovie] = useState(moviesData);
  const [searchItem, setSearchItem] = useState("");
  const addMovie = (newMovie) => setOneMovie([newMovie, ...oneMovie]);
  return (
    <div className="App">
      <Navbar setSearchItem={setSearchItem} />
      <Add addMovie={addMovie} />
      <MovieCard oneMovie={oneMovie} searchItem={searchItem} />
      <Footer />
    </div>
  );
}

export default App;
