import * as React from 'react';

interface Props {
  currentMovie: string;
  setCurrentMovie: (title: string) => void;
  addNewMovie: () => void;
}

const AddMovieForm: React.FC<Props> = ({currentMovie, setCurrentMovie, addNewMovie}) => {

  const onSubmit =(e: React.FormEvent) => {
    e.preventDefault();
    addNewMovie();
  };

  return (
    <form
      className="add-movie-form"
      onSubmit={onSubmit}
    >
      <input
        type="text"
        placeholder="Movie title"
        value={currentMovie}
        onChange={(e) => setCurrentMovie(e.target.value)}
        className="m-2"
      />
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  );
};

export default AddMovieForm;