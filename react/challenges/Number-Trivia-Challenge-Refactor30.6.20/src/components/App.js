import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Number from "./Number";

const App = () => {
  const [number, setNumber] = useState("");

  const onSearchSubmit = async (number, option) => {
    const response = await axios.get(
      `http://numbersapi.com/${number}/${option}`
    );
    setNumber((number = response.data));
  };

  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <Number number={number} />
    </div>
  );
};

export default App;

/* convert the class function onSearchSubmit to a const
convert class App into a function
turn state into a hook
change onSearchSubmit to take in new value description
change this.setState to call the hook function and assign a new value to number
remove render(), as it only belongs in class components
remove this. from onSearchsubmit
remove this. and replace with number from hook

///////////////////////////////////////////////////////
/*
class App extends React.Component {
  state = { number: '' };

  onSearchSubmit = async (numberSel, option) => {
    const response = await axios.get(
      `http://numbersapi.com/${numberSel}/${option}`
    );

    this.setState({ number: response.data });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <Number number={this.state.number} />
      </div>
    );
  }
}

export default App;
*/
