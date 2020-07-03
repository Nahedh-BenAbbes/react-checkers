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

    // Get available spaces to move based on color/current row and column
    getAvailableMove = (event) => {
        const currentColumn = event.target.dataset.column;
        const currentRow = event.target.dataset.row;

        console.log(`Current column: ${currentColumn}\nCurrent Row: ${currentRow}`)
        let firstMove = ''
        let secondMove = ''
        if (this.state.color === 'red') {
            switch (currentColumn) {
                case '7':
                    firstMove = `${parseInt(currentRow) - 1}${parseInt(currentColumn) - 1}`;
                    document.getElementById(firstMove).style.backgroundColor = "green";
                    document.getElementById(firstMove).style.opacity = "0.5";
                    break;
                case '0':
                    firstMove = `${parseInt(currentRow) - 1}${parseInt(currentColumn) + 1}`;
                    document.getElementById(firstMove).style.backgroundColor = "green";
                    document.getElementById(firstMove).style.opacity = "0.5";
                    break;
                default:
                    firstMove = `${parseInt(currentRow) - 1}${parseInt(currentColumn) + 1}`;
                    secondMove = `${parseInt(currentRow) - 1}${parseInt(currentColumn) - 1}`;
                    document.getElementById(firstMove).style.backgroundColor = "green";
                    document.getElementById(firstMove).style.opacity = "0.5";
                    document.getElementById(secondMove).style.backgroundColor = "green";
                    document.getElementById(secondMove).style.opacity = "0.5";
            }
            
        } else if (this.state.color === 'black') {
            switch(currentColumn) {
                case '7':
                    firstMove = `${parseInt(currentRow) + 1}${parseInt(currentColumn) - 1}`;
                    document.getElementById(firstMove).style.backgroundColor = "green";
                    document.getElementById(firstMove).style.opacity = "0.5";
                    break;
                case '0':
                    firstMove = `${parseInt(currentRow) + 1}${parseInt(currentColumn) + 1}`;
                    document.getElementById(firstMove).style.backgroundColor = "green";
                    document.getElementById(firstMove).style.opacity = "0.5";
                    break;
                default:
                    firstMove = `${parseInt(currentRow) + 1}${parseInt(currentColumn) + 1}`;
                    secondMove = `${parseInt(currentRow) + 1}${parseInt(currentColumn) - 1}`;
                    document.getElementById(firstMove).style.backgroundColor = "green";
                    document.getElementById(firstMove).style.opacity = "0.5";
                    document.getElementById(secondMove).style.backgroundColor = "green";
                    document.getElementById(secondMove).style.opacity = "0.5";
            }
        }

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