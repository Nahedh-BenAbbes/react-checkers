// Piece class to manage the state of each piece on the Board

import React, { Component } from 'react';
import './Piece.css';

class Piece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            isKing: false,
            color: '',
            currentRow: null,
            currentColumn: null
        }
    }

    // When instantiated, update state with color and current starting location
    componentDidMount = () => {
        return this.setState({
            id: this.props.id,
            color: this.props.color,
            currentRow: this.props.currentRow,
            currentColumn: this.props.currentColumn,
            active: this.props.active,
            isKing: this.props.isKing
        })
    }

    render = () => {
        let pieceColor = `player-${this.state.color}`
        let pieceImg = this.state.active ? <span className={pieceColor}></span> : ''
        return (
            <div>
                {pieceImg}
            </div>       
        )
    }
}

export default Piece;