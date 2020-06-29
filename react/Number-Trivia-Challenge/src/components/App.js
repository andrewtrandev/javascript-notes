import React from 'react';
import SearchBar from './SearchBar';
import Number from './Number';
import axios from 'axios'
class App extends React.Component {

  state = {
    number: "",
    triviaData: ""
  }

 onSearchSubmit = async () => {
    const response = await axios.get(`http://numbersapi.com/${this.state.number}/trivia`)  
    const data = response.data
    this.setState({triviaData: data})
  }

  
  render() {
    console.log(this.state.number)
    console.log(this.state.triviaData)
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar 
          searchValue = {this.state.number}
          onSearchValueChange={(newSearchValue) => {
            this.setState({number: newSearchValue})
            }}
           onEnter={() => {
             if(this.state.number){
               this.onSearchSubmit()
             }
           }}
        />
        <Number triviaData = {this.state.triviaData}/>
        {/* <input type="text" onKeyUp={this.onSearchSubmit}></input> */}
        
      </div>
    );
  }
}

export default App;
