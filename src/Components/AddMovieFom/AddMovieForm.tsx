import * as React from 'react';

interface Props {
  currentMovie: string;
  setCurrentMovie: (title: string) => void;
  addNewMovie: () => void;
}

const AddMovieForm: React.FC<Props> = ({currentMovie, setCurrentMovie, addNewMovie}) => {
  return (
    <div className="add-movie-form">
      <input
        type="text"
        placeholder="Movie title"
        value={currentMovie}
        onChange={(e) => setCurrentMovie(e.target.value)}
      />
      <button type="button" onClick={addNewMovie}>Add</button>
    </div>
  );
};

export default AddMovieForm;