import axios from 'axios';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Nav from './components/Nav';
import Home from "./pages/Home";
import MovieInfo from './pages/MovieInfo';
import Movies from './pages/Movies';

function App() {
  const [movies, setMovies] = useState([])

  async function fetchMovies(searchTitle) {
    const { data } = await axios.get(
        `http://www.omdbapi.com/?apikey=b19067db&s=${searchTitle}`
    )
    setMovies(data.Search)
  }

  async function onSearch(searchTitle) {
    await fetchMovies(searchTitle)
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home onSearch={onSearch}/>}></Route>
          <Route path='/movies' element={<Movies movies={movies}/>}></Route>
          <Route path='/movies/:id' element={<MovieInfo />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;