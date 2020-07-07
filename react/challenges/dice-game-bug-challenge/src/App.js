import React from 'react';
import { Game } from './Game';
import { Interface } from './Interface';
import { AIresult } from './AIresult';
import { YourResult } from './YourResult';
import Ranking from './Ranking';
import './App.css';

class App extends React.Component {
  draws = [];
  losses = [];
  wins = [];
  state = {
    games: 0,
    yourChoice: '',
    AIChoice: null,
    one:
      'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg',
    two:
      'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg',
    three:
      'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg',
    four:
      'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg',
    five:
      'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg',
    six:
      'https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg',
  };
  AIChoice = () => {
    this.setState({
      AIChoice: Math.floor(Math.random() * 6) + 1,
    });
  };

  startGame = () => {
    this.setState({
      yourChoice: Math.floor(Math.random() * 6) + 1,
      games: this.state.games + 1,
    });

    this.AIChoice();
  };

  clearState = () => {
    this.losses = [];
    this.wins = [];
    this.draws = [];
    this.setState({
      yourChoice: '',
      AIChoice: null,
      games: 0,
    });
  };

  render() {
    return (
      <>
        <Interface
          games={this.state.games}
          clearState={this.clearState}
          startGame={this.startGame}
          yourChoice={this.state.yourChoice}
          AIChoice={this.state.AIChoice}
        />
        <div className='effects'>
          <YourResult allstates={this.state} />
          <AIresult allstates={this.state} />
        </div>
        <Game results={this.state} />
        <Ranking
          wins={this.wins}
          losses={this.losses}
          draws={this.draws}
          yourChoice={this.state.yourChoice}
          AIChoice={this.state.AIChoice}
        />
      </>
    );
  }
}

export default App;
