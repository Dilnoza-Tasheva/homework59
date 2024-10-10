import Joke from '../../Components/Joke/Joke.tsx';
import GetNewJokeBtn from '../../Components/GetNewJokeBtn/GetNewJokeBtn.tsx';
import { useEffect, useState } from 'react';


const Jokes = () => {
  const [joke, setJokes] = useState("");
  const url = 'https://api.chucknorris.io/jokes/random';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (response.ok)  {
        const data = await response.json();
        setJokes(data.value);
      }
    } catch (error) {
      console.log('Error fetching the joke', error)
    }
  };

  useEffect(() => {
    void fetchData();
  }, [])

  return (
    <div>
      <Joke joke={joke}/>
      <GetNewJokeBtn addNewJoke={fetchData}/>
    </div>
  );
};

export default Jokes;