
import AddMovieForm from '../../Components/AddMovieFom/AddMovieForm.tsx';
import Movie from '../../Components/Movie/Movie.tsx';
import { useState } from 'react';
import { MovieElement } from '../../types';
import * as React from 'react';

const Movies: React.FC = () => {

  const [movies, setMovies] = useState<MovieElement[]>([]);
  const [currentMovie, setCurrentMovie] = useState<string>("");

  const addNewMovie = () => {
    if (currentMovie !== "") {
      const newMovie: MovieElement = {id: String(new Date()), title: currentMovie};
      setMovies([...movies, newMovie]);
      setCurrentMovie("")
    }
  };

  return (
    <div>
      <h5>Movies list for a movie night:</h5>
      <AddMovieForm currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} addNewMovie={addNewMovie}/>
      <div className="movie-list">
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    </div>
  );
};

export default Movies;