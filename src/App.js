import React, { Component } from 'react';
import './App.css';
import Pontuacao from './Pontuacao';

class App extends Component {
  render() {
    return (
      <div className='placar'>
        <Pontuacao nomeDoTime='Corinthians'/>
        X
        <Pontuacao nomeDoTime='Chapecoense' visitante='true' />
      </div>
    );
  }
}

export default App;
