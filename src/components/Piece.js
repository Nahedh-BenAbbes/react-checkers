// Piece class to manage the state of each piece on the Board

import React, { Component } from 'react';
import './Piece.css';
// import Draggable from 'react-draggable';

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

    // Remove game piece when overtaken
    removePiece = () => {
        return
    }

    // Mark piece as king
    king = () => {
        return this.setState({ ...this.state, isKing: true });
    }

    // Get available spaces to move based on color/current row and column
    getAvailableMove = (event) => {
        console.log(event.target.dataset.id);
        console.log(`Current column: ${event.target.dataset.column}\nCurrent row: ${event.target.dataset.row}`);

    }

    render = () => {
        let pieceColor = `player-${this.state.color}`
        let pieceImg = this.state.active ? <span className={pieceColor} onClick={this.getAvailableMove} data-id={this.state.id} data-column={this.state.currentColumn} data-row={this.state.currentRow}></span> : ''
        return (
            <div>
                {pieceImg}
            </div>
            
        )
    }
}

export default Piece;