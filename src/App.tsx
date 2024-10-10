import './App.css'
import Movies from './Containers/Movies/Movies.tsx';
import { useState } from 'react';
import Jokes from './Containers/Jokes/Jokes.tsx';

const App = () => {
  const [page, setPage] = useState<boolean>(false)


  return (
    <>
      <button onClick={() => setPage(!page)} className="btn btn-success">Change the exercise</button>
      {page ? <Movies/> : <Jokes/>}
    </>
  )
};

export default App
