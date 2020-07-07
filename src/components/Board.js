// Board class that renders 8 instances of the Row class

import React, { Component } from 'react';
import './Board.css';
import Piece from './Piece';
import PlayerRed from './PlayerRed';
import PlayerBlack from './PlayerBlack';
import { connect } from 'react-redux';


class Board extends Component {

    // Move selected piece to the selected div
    movePiece = (piece, square) => {
        console.log(`Pieces Pending removal: ${JSON.stringify(this.props.state.pendingRemoval)}`);
        console.log(`movePiece() args:\n\tpiece: ${JSON.stringify(piece)}\n\tsquare: ${JSON.stringify(square)}`)
        if (this.props.state.pendingRemoval) { // Check if there is a jumped piece
            this.props.state.pendingRemoval.forEach(rem => {
                console.log(`piece.currentColumn: ${piece.currentColumn}, square.data.y: ${square.data.y}\nAverage: ${(piece.currentColumn + square.data.y) / 2}`)
                if ((piece.currentColumn + square.data.y) / 2 === rem.data.y) {
                    this.removePiece(rem)
                }
            })
        }
        this.props.movePiece(piece, square);
        this.props.clearAvailableMoves();
    }

    updatePendingMove = (piece) => {
        this.props.updatePendingMove(piece);
    }

    updatePendingRemoval = (pieces) => {
        this.props.updatePendingRemoval(pieces);
    }

    removePiece = (piece) => {
        this.props.removePiece(piece);
    }

    king = () => {
        this.props.king();
    }

    // Update board state with available moves for currently selected piece
    getAvailableMove = (x, y, color) => {
        this.props.clearAvailableMoves();
        const selectedPiece = this.props.state.pieces.find(piece => {
            if (piece.currentRow === x && piece.currentColumn === y) {
                return piece;
            }
        })
        this.updatePendingMove(selectedPiece);
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
        let pendingRemoval = []
        moves.forEach((move, i) => {
            let newMove = this.props.state.board[move.x].find(square => {
                return square.id === move.y;
            })
            console.log(`New Move: ${JSON.stringify(newMove)}`)
            console.log(`hasPiece: ${this.validateSquare(newMove)}`)
            let hasPiece = this.validateSquare(newMove);
            if (hasPiece && newMove.data.pieceColor === color) {
                updatedMoves.push(newMove);
            } else if (hasPiece && newMove.data.pieceColor !== color) {
                // Find the next possible square here
                console.log('New move is blocked by opposite color');
                if (newMove.data.y === 7 || newMove.data.y === 0) {
                    console.log('New move is on edge of board');
                    updatedMoves.push(newMove);
                } else {
                    console.log('Finding new move...');
                    let updatedMove = this.updateMove(newMove, move.y, color);
                    let updatedHasPiece = this.validateSquare(updatedMove);
                    if (!updatedHasPiece) {
                        console.log(`Blocked move: ${JSON.stringify(newMove)}`)
                        pendingRemoval.push(newMove);
                        updatedMove.data.available = true;
                        updatedMoves.push(updatedMove);
                    }
                }
            } else {
                newMove.data.available = true;
                updatedMoves.push(newMove);
            }
        })
        console.log(`pendingRemoval array: ${JSON.stringify(pendingRemoval)}`);
        this.props.updatePendingRemoval(pendingRemoval);
        // console.log(`Pieces Pending removal: ${this.props.state.pendingRemoval}`);
        return updatedMoves; 
    }

    // Check board state on individual div objects to see if it has a piece
    validateSquare = (square) => {
        console.log(`validateSquare() square object: ${JSON.stringify(square)}`)
        const checkedSquare = this.props.state.board[square.data.x].find(sqr => {
            return sqr.id === square.data.y;
        })

        return checkedSquare.data.hasPiece;
    }

    // Update the move to add or subtract rows/columns depending on piece position and color
    updateMove = (move, origPosition, color) => {
        let newMove = {}
        console.log(`Before updating move: ${JSON.stringify(move)}`);
        if (color === 'red') {
            if (move.data.y < origPosition) {
                newMove = { id: move.id - 1, data: { x: move.data.x - 1, y: move.data.y - 1, available: true } }
            } else {
                newMove = { id: move.id + 1, data: { x: move.data.x - 1, y: move.data.y + 1, available: true } }
            }
        } else if (color === 'black') {
            if (move.y < origPosition) {
                newMove = { id: move.id - 1, data: { x: move.data.x + 1, y: move.data.y - 1, available: true } }
            } else {
                newMove = { id: move.id + 1, data: { x: move.data.x + 1, y: move.data.y + 1, available: true } }
            }
        } else {
            newMove = move;
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
                            if (x === this.props.state.pieces[i].currentRow && y === this.props.state.pieces[i].currentColumn && this.props.state.pieces[i].active === true) {
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
                            <div 
                                key={y} 
                                id={rowColumn} 
                                className={ifAvailable} 
                                onClick={e => {
                                    this.props.state.board[x][y].data.available ? 
                                    this.movePiece(this.props.state.pendingMove, this.props.state.board[x][y]) :
                                    alert('That space is unavailable for the current piece selected, please select a green space.')}}>
                            </div>
                        )
                    })}
                </div>
            )
        })
        return (
            <div id="board">
                <div className="Board container">
                {newBoard}
                </div>
                <PlayerRed 
                    name={this.props.state.players[0].name} 
                    winner={this.props.state.players[0].winner} 
                    numPieces={this.props.state.players[0].numPieces}
                    currentTurn={this.props.state.players[0].currentTurn} 
                />
                <PlayerBlack 
                    name={this.props.state.players[1].name} 
                    winner={this.props.state.players[1].winner} 
                    numPieces={this.props.state.players[1].numPieces}
                    currentTurn={this.props.state.players[1].currentTurn} 
                />
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
        movePiece: (piece, square) => {
            dispatch({ type: 'MOVE_PIECE' , payload: { piece: piece, square: square }});
        },
        updatePendingMove: (piece) => {
            dispatch({ type: 'UPDATE_PENDING_MOVE', payload: { piece }});
        },
        updatePendingRemoval: (pieces) => {
            dispatch({ type: 'UPDATE_PENDING_REMOVAL', payload: { pieces: pieces } });
        },
        removePiece: (piece) => {
            dispatch({ type: 'REMOVE_PIECE', payload: { piece } });
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