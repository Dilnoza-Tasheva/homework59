import './App.css'
import Movies from './Containers/Movies/Movies.tsx';
import { useState } from 'react';
import Jokes from './Containers/Jokes/Jokes.tsx';

const App = () => {
  const [page, setPage] = useState<boolean>(true)


  return (
    <div>
      <button onClick={() => setPage(!page)} className="btn btn-success m-4">Change the exercise</button>
      {page ? <Movies/> : <Jokes/>}
    </div>
  )
};

export default App
