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
            ...this.state,
            id: this.props.id,
            color: this.props.color,
            currentRow: this.props.currentRow,
            currentColumn: this.props.currentColumn
        })
    }

    // Remove game piece when overtaken
    removePiece = () => {
        return
    }

    // Mark piece as king
    king = () => {
        return this.setState({ ...this.state, isKing: true });
    }

    // Get available spaces to move based on color/current row and column
    getAvailableMove = () => {
        return
    }

    render = () => {

        let pieceColor = `player-${this.state.color}`
        return (
            <span className={pieceColor}></span>
        )
    }
}

export default Piece;