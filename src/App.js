import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {

  const [movies,setMovies] = useState([]);
  const [isLoading,setIsloading] = useState(false);

  async function fetchMovieHandler(){
    setIsloading(true);
    const response=await fetch('https://swapi.py4e.com/api/films/')
      const data = await response.json();
      const transformMovies = data.results.map(movieData=>{
        return {
          id:movieData.episode_id,
          title:movieData.title,
          openingText:movieData.opening_crawl,
          releaseData:movieData.release_data
        };

      })
      setMovies(transformMovies);
      setIsloading(false);
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length>0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length===0 && <p>We dont have any movies</p>}
        {isLoading && <p>Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
