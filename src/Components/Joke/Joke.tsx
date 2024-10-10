import React from 'react';
interface Props {
  joke: string;
}

const Joke: React.FC<Props> = ({joke}) => {
  return (
    <div className="joke-item">
      <div>{joke}</div>
    </div>
  );
};

export default Joke;