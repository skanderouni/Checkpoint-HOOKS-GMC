import './App.css';
import Navbar from './Component/Navbar/Navbar';
import MovieCard from './Component/movieCards/movieCards';
import Footer from './Component/Footer/Footer';
import Add from './Component/Add/Add';
import { moviesData } from './constant/Data';
import { useState } from 'react';

function App() {
  const [oneMovie, setOneMovie] = useState(moviesData);
  const [searchItem, setSearchItem] = useState('');
  const [searchRating, setSearchRating] = useState(1);
  const addMovie = (newMovie) => setOneMovie([newMovie, ...oneMovie]);
  return (
    <div>
      <Navbar setSearchItem={setSearchItem} setSearchRating={searchRating} />
      <div
        style={{ display: 'flex', alignContent: 'flex-start', marginTop: '5%' }}
      >
        <Add addMovie={addMovie} />
        <MovieCard oneMovie={oneMovie} searchItem={searchItem} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
