import React from 'react';

export const AIresult = (props) => {
  const { one, two, three, four, five, six, AIChoice } = props.allstates;
  if (AIChoice === 1) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={one} />
      </div>
    );
  } else if (AIChoice === 2) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={two} />
      </div>
    );
  } else if (AIChoice === 3) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={three} />
      </div>
    );
  } else if (AIChoice === 4) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={four} />
      </div>
    );
  } else if (AIChoice === 5) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={five} />
      </div>
    );
  } else if (AIChoice === 6) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={six} />
      </div>
    );
  } else {
    return null;
  }
};
