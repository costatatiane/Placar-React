import React, { Component } from 'react';
import './Pontuacao.css';

class Pontuacao extends Component {
    constructor(props){
        super(props);
        this.time = 'Time da Casa';
    }
    render() {
        if(this.props.visitante === 'true'){
            this.time = 'Time Visitante';
        }
        return (
            <div className='pontuacao'>
            <h1>{this.props.nomeDoTime || this.time}</h1>
            <h2>0</h2>
            </div>
        );
    }
}

export default Pontuacao;