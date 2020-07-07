import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
// ohh we need props cause we're passing in props from App.js
const SearchBar = (props) => {
  const [number, setNumber] = useState("");
  const [option, setOption] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (event.keyCode === 13) {
      props.onSubmit(number, option);
    }
  };

  {
    const numberOptions = [
      {
        key: "trivia",
        text: "Trivia",
        value: "trivia",
      },
      {
        key: "year",
        text: "Year",
        value: "year",
      },
      {
        key: "date",
        text: "Date",
        value: "date",
      },
      {
        key: "math",
        text: "Math",
        value: "math",
      },
    ];
    return (
      <div className="ui segment">
        <div className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label>Search a number</label>
            <Dropdown
              placeholder="Select"
              fluid
              selection
              options={numberOptions}
              onChange={(e) => setOption(e.target.innerText.toLowerCase())}
            />
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              onKeyUp={onFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default SearchBar;

//////////////////////////////////////////////////////
/*
class SearchBar extends React.Component {
  state = { numberSel: "", option: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    if (event.keyCode === 13) {
      this.props.onSubmit(this.state.numberSel, this.state.option);
    }
  };

  render() {
    const numberOptions = [
      {
        key: "trivia",
        text: "Trivia",
        value: "trivia",
      },
      {
        key: "year",
        text: "Year",
        value: "year",
      },
      {
        key: "date",
        text: "Date",
        value: "date",
      },
      {
        key: "math",
        text: "Math",
        value: "math",
      },
    ];
    return (
      <div className="ui segment">
        <div className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search a number</label>
            <Dropdown
              placeholder="Select"
              fluid
              selection
              options={numberOptions}
              onChange={(e) =>
                this.setState({ option: e.target.innerText.toLowerCase() })
              }
            />
            <input
              type="text"
              value={this.state.numberSel}
              onChange={(e) => this.setState({ numberSel: e.target.value })}
              onKeyUp={this.onFormSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
*/
