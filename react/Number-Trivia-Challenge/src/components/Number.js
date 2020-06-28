import React from 'react';
//I think number should be a dumb component and just deal with UI, so number should actually render the trivia, it can be a prop that we pass down to it,
// why? Number only needs to render data
class Number extends React.Component { 
  constructor(props) {
    super(props)
  }
  render() {
    return <div>{this.props.triviaData}</div>;
  }
}

export default Number;
