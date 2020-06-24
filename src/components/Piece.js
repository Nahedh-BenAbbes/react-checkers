// Piece class to manage the state of each piece on the Board

import React, { Component } from 'react';
import '../css/Piece.css';

class Piece extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true,
            isKing: false,
            color: state.color,
            currentRow: state.currentRow,
            currentColumn: state.currentColumn
        }
    }

    // Remove game piece when overtaken
    removePiece = () => {
        return this.props.removePiece()
    }

    // Mark piece as king
    king = () => {
        return this.props.king()
    }

    // Get available spaces to move based on color/current row and column
    getAvailableMove = () => {
        return this.props.getAvailableMove()
    }

    render = () => {
        return (
            <div className="rounded-circle"></div>
        )
    }
}

export default Piece;