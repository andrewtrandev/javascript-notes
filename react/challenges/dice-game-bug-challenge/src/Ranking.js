import React from 'react';

const Ranking = (props) => {
  if (props.yourChoice > props.AIChoice) {
    props.wins.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws:{' '}
        {props.draws.length}
      </h2>
    );
  } else if (props.AIChoice > props.yourChoice) {
    props.losses.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws:{' '}
        {props.draws.length}
      </h2>
    );
  } else if (props.AIChoice === props.yourChoice) {
    props.draws.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws:{' '}
        {props.draws.length}
      </h2>
    );
  } else if (props.AIChoice === null && props.yourChoice === '') {
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws:{' '}
        {props.draws.length}
      </h2>
    );
  } else {
    return null;
  }
};

export default Ranking;
