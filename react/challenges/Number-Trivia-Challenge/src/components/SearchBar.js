import React from 'react';
//search bar should be the smart component or controller and be in charge of manipulating data and state. why? or maybe we have a controller higher up.. 

// maybe we store the state of the search value like in Mike's example,

//lift state up from SearchBar and use that data in App to get a response and then response gets passed down to number which will render it
class SearchBar extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div className="ui segment">
        <div className="ui form">
          <div className="field">
            <label>Search a number</label>
            <input type="text" 
                value={this.props.searchValue}
                onChange = {(event) => {
                  this.props.onSearchValueChange(event.target.value)
                }}
                onKeyUp={(event) => {
                  if(event.keyCode === 13){
                      this.props.onEnter()
                  }
                }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
