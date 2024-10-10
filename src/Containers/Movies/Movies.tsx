
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

  const deleteMovie = (id: string) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="movies-container m-4">
      <h5 className="fs-5">Movies list for a movie night:</h5>
      <AddMovieForm currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} addNewMovie={addNewMovie}/>
      <hr/>
      <div className="movie-list d-flex flex-column gap-2 m-2">
        {movies.map((movie) => (
          <Movie
            deleteMovie={deleteMovie}
            key={movie.id}
            title={movie.title}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;