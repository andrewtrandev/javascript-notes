import React from 'react';

export const YourResult = (props) => {
  const { one, two, three, four, five, six, yourChoice } = props.allstates;
  if (yourChoice === 1) {
    return (
      <div className='result'>
        <div>You:</div> <img alt='dice' width='50%' src={one} />
      </div>
    );
  } else if (yourChoice === 2) {
    return (
      <div className='result'>
        <div>You:</div> <img alt='dice' width='50%' src={two} />
      </div>
    );
  } else if (yourChoice === 3) {
    return (
      <div className='result'>
        <div>You:</div> <img alt='dice' width='50%' src={three} />
      </div>
    );
  } else if (yourChoice === 4) {
    return (
      <div className='result'>
        <div>You:</div> <img alt='dice' width='50%' src={four} />
      </div>
    );
  } else if (yourChoice === 5) {
    return (
      <div className='result'>
        <div>You:</div> <img alt='dice' width='50%' src={five} />
      </div>
    );
  } else if (yourChoice === 6) {
    return (
      <div className='result'>
        <div>You:</div> <img alt='dice' width='50%' src={six} />
      </div>
    );
  } else {
    return null;
  }
};
