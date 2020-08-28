import React from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './component/game/Game';
import Bunny from './assets/images/bunny.png';
import Raccoon from './assets/images/raccoon.png';
import Squirrel from './assets/images/squirrel.png';
import Hound from './assets/images/hound.png'



function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: Raccoon
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: Squirrel
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: Bunny
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: Hound
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}

export default App;
