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

    getAvailableMove = () => {
        this.props.getAvailableMove()
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
                        // Set up conditional statements for mounting the Piece component
                        for (let i = 0; i < this.props.state.pieces.length; i++) {
                            if (x === this.props.state.pieces[i].currentRow && y === this.props.state.pieces[i].currentColumn) {
                                return (
                                    <div key={y} id={rowColumn} className="col">
                                        <div onClick={this.getAvailableMove}>
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
                            <div key={y} id={rowColumn} className="col"></div>
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
        getAvailableMove: () => {
            dispatch({ type: 'GET_AVAILABLE_MOVE' });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);