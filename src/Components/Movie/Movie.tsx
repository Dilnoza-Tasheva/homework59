import { useState } from 'react';
import * as React from 'react';

interface Props {
  title: string;
  id: string;
  deleteMovie: (id: string) => void;
}

const Movie: React.FC<Props> =React.memo (({title, id, deleteMovie}) => {
  const [currentTitle, setCurrentTitle] = useState<string>(title)
  return (
    <div className="movie">
     <input
       type="text"
       placeholder="Movie name"
       value={currentTitle}
       onChange={(e) => setCurrentTitle(e.target.value)}
     />
      <button className="btn btn-danger" onClick={() => deleteMovie(id)}>Delete</button>
    </div>
  );
}, (prevProps, nextProps) => {
  return prevProps.title === nextProps.title;
});

export default Movie;