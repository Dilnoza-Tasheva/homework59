
import AddMovieForm from '../../Components/AddMovieFom/AddMovieForm.tsx';
import Movie from '../../Components/Movie/Movie.tsx';

const Movies = () => {
  return (
    <div>
      <h5>Movies list for a movie night:</h5>
      <AddMovieForm/>
      <div className="movie-list">
        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    </div>
  );
};

export default Movies;