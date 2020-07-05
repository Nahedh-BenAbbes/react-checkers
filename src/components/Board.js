// Board class that renders 8 instances of the Row class

import React, { Component } from 'react';
import './Board.css';
import Piece from './Piece';
import { connect } from 'react-redux';


class Board extends Component {

    movePiece = () => {
        this.props.movePiece()
    }

    removePiece = () => {
        this.props.removePiece()
    }

    king = () => {
        this.props.king()
    }

    getAvailableMove = (x, y, color) => {
        this.props.clearAvailableMoves();
        let availableMoves = []
        // console.log(`X: ${x}\nY: ${y}\nColor: ${color}`);
        if (color === 'red') {
            switch(y) {
                case 7:
                    availableMoves.push({ id: y - 1, x: x - 1, y: y - 1, available: true });
                    break;
                case 0:
                    availableMoves.push({ id: y + 1, x: x - 1, y: y + 1, available: true });
                    break; 
                default:
                    availableMoves.push({ id: y + 1, x: x - 1, y: y + 1, available: true });
                    availableMoves.push({ id: y - 1, x: x - 1, y: y - 1, available: true });
            }
            console.log(availableMoves);
            this.props.updateSquare(availableMoves);
        } else if (color === 'black') {
            switch(y) {
                case 7:
                    availableMoves.push({ id: y - 1, x: x + 1, y: y - 1, available: true });
                    break;
                case 0:
                    availableMoves.push({ id: y + 1, x: x + 1, y: y + 1, available: true });
                    break; 
                default:
                    availableMoves.push({ id: y + 1, x: x + 1, y: y + 1, available: true });
                    availableMoves.push({ id: y - 1, x: x + 1, y: y - 1, available: true });
            }
            console.log(availableMoves);
            this.props.updateSquare(availableMoves);
        }
    }

    /* validateSquare = (move, color) => {
        const newMove = this.props.state.board[move.x].find(square => {
            return square.id = move.y;
        })
        if (newMove.hasPiece === true && newMove.color === color) {
            return false
        } else if (newMove.hasPiece === false) {
            return true
        } 
    } */

    updateSquare = (availableMoves) => {
        this.props.updateSquare(availableMoves);
    }

    clearAvailableMoves = () => {
        this.props.clearAvailableMoves();
    }

    render = () => {

        let newBoard = this.props.state.board.map((row, x) => {
            let evenOdd = '';
            if ((x + 1) % 2 === 0) {
                evenOdd = 'row Even'
            } else {
                evenOdd = 'row Odd'
            }

            return (
                <div key={x} className={evenOdd}>
                    {row.map((col, y) => {
                        const rowColumn = `${x}${y}`
                        let ifAvailable = 'col';
                        if (this.props.state.board[x][y].data.available) {
                            ifAvailable = 'col available';
                        }
                        // Set up conditional statements for mounting the Piece component
                        for (let i = 0; i < this.props.state.pieces.length; i++) {
                            if (x === this.props.state.pieces[i].currentRow && y === this.props.state.pieces[i].currentColumn) {
                                return (
                                    <div id={rowColumn} className={ifAvailable}>
                                        <div onClick={() => this.getAvailableMove(x, y, this.props.state.pieces[i].color)}>
                                            <Piece 
                                                id={this.props.state.pieces[i].id} 
                                                color={this.props.state.pieces[i].color} 
                                                currentRow={this.props.state.pieces[i].currentRow} 
                                                currentColumn={this.props.state.pieces[i].currentColumn}
                                                active={this.props.state.pieces[i].active}
                                                isKing={this.props.state.pieces[i].isKing}
                                            />
                                        </div>
                                    </div>
                                )
                            }                          
                        }
                        return (
                            <div key={y} id={rowColumn} className={ifAvailable}></div>
                        )
                    })}
                </div>
            )
        })
        return (
            <div className="Board container">
                {newBoard}
                <div id="test-buttons">
                    <div type="button" className="btn btn-secondary">Remove Piece</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: {...state}
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        movePiece: () => {
            dispatch({ type: 'MOVE_PIECE' });
        },
        removePiece: () => {
            dispatch({ type: 'REMOVE_PIECE' });
        },
        king: () => {
            dispatch({ type: 'KING' });
        },
        updateSquare: (availableMoves) => {
            dispatch({ type: 'UPDATE_SQUARE', payload: { availableMoves }});
        },
        clearAvailableMoves: () => {
            dispatch({ type: 'CLEAR_AVAILABLE_MOVES' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);