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

    // Update board state with available moves for currently selected piece
    getAvailableMove = (x, y, color) => {
        this.props.clearAvailableMoves();
        let availableMoves = []
        console.log(`X: ${x}\nY: ${y}\nColor: ${color}`);
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
            console.log(`Before validating: ${JSON.stringify(availableMoves)}`);
            availableMoves = this.validateMoves(availableMoves, color);
            console.log(`After validating: ${JSON.stringify(availableMoves)}`);
            if (availableMoves == null) {
                return;
            }
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
            console.log(`Before validating: ${JSON.stringify(availableMoves)}`);
            availableMoves = this.validateMoves(availableMoves, color);
            console.log(`After validating: ${JSON.stringify(availableMoves)}`);
            if (availableMoves == null) {
                return;
            }
            this.props.updateSquare(availableMoves);
        }
    }

    // Check if the original checkers moves are valid, and return any updated available moves
    validateMoves = (moves, color) => {
        let updatedMoves = []
        moves.forEach((move, i) => {
            let newMove = this.props.state.board[move.x].find(square => {
                return square.id === move.y;
            })
            console.log(`New Move: ${JSON.stringify(newMove)}`)
            console.log(`hasPiece: ${this.validateSquare(newMove)}`)
            if (this.validateSquare(newMove) && newMove.data.pieceColor === color) {
                updatedMoves.push(newMove);
            } else if (this.validateSquare(newMove) && newMove.data.pieceColor !== color) {
                // Find the next possible square here
                if (newMove.data.pieceColor === 'red' && (newMove.data.y === 7 || newMove.data.y === 0)) {
                    updatedMoves.push(newMove);
                } else {
                    newMove = this.updateMove(newMove);
                    if (!this.validateSquare(newMove)) {
                        newMove.data.available = true;
                        updatedMoves.push(newMove);
                    }
                }
            } else {
                newMove.data.available = true;
                updatedMoves.push(newMove);
                return;
            }
        })
        return updatedMoves; 
    }

    // Check board state on individual objects to see if it has a piece
    validateSquare = (square) => {
        console.log(`validateSquare() square object: ${JSON.stringify(square)}`)
        const checkedSquare = this.props.state.board[square.data.x].find(sqr => {
            return sqr.id === square.data.y;
        })

        return checkedSquare.data.hasPiece;
    }

    // Update the move to add or subtract rows/columns depending on piece position and color
    updateMove = (move, origPosition) => {
        let newMove = {}
        if (move.color === 'red') {
            if (move.y < origPosition) {
                newMove = { id: move.id - 1, x: move.x - 1, y: move.y - 1, available: true }
            } else {
                newMove = { id: move.id + 1, x: move.x - 1, y: move.y + 1, available: true }
            }
        } else if (move.color === 'black') {
            if (move.y < origPosition) {
                newMove = { id: move.id - 1, x: move.x + 1, y: move.y - 1, available: true }
            } else {
                newMove = { id: move.id + 1, x: move.x + 1, y: move.y + 1, available: true }
            }
        }

        return newMove;
    }

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