import React from 'react';

export const Game = (props) => {
  const { yourChoice, AIChoice } = props.results;

  if (yourChoice > AIChoice) {
    return <h1 className='won'>You Won!</h1>;
  } else if (AIChoice > yourChoice) {
    return <h1 className='lost'>You Lost!</h1>;
  } else if (AIChoice === null && yourChoice === '') {
    return <h1>Start Game!</h1>;
  } else {
    return <h1 className='draw'>Draw</h1>;
  }
};
