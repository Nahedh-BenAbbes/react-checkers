// Board class that renders 8 instances of the Row class

import React, { Component } from 'react';
import './Board.css'
import { connect } from 'react-redux';


class Board extends Component {

    render = () => {

        let newBoard = this.props.state.board.map((row, x) => {
            let evenOdd = '';
            if ((x + 1) % 2 === 0) {
                evenOdd = 'row Even'
            } else {
                evenOdd = 'row Odd'
            }

            return (
                <div key={x + 1} className={evenOdd}>
                    {row.map((col, y) => {
                        return (
                            <div key={x} className="col"></div>
                        )
                    })}
                </div>
            )
        })
        return (
            <div className="Board container">{newBoard}</div>
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
        removePiece: function() {
            dispatch({ type: 'REMOVEPIECE' });
        },
        king: function() {
            dispatch({ type: 'KING' });
        },
        getAvailableMove: function() {
            dispatch({ type: 'GETAVAILABLEMOVE' })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);