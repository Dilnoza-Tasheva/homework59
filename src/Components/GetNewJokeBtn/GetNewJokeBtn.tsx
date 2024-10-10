import React from 'react';
interface Props {
  addNewJoke: () => void;
}

const GetNewJokeBtn: React.FC<Props> = ({addNewJoke}) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={addNewJoke}>New joke</button>
    </div>
  );
};

export default GetNewJokeBtn;