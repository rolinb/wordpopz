import React from 'react';
import logo from './logo.svg';
import './App.css';
import LetterBubble from './Components/LetterBubble/LetterBubble';
import Game from './Components/Game/Game'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Game />
      </header>
    </div>
  );
}

export default App;
