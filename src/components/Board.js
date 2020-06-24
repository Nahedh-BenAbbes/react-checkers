// Board class that renders 8 instances of the Row class

import React, { Component } from 'react';
import '../css/Board.css'
import { connect } from 'react-redux';
import Row from './Row'

class Board extends Component {

    render = () => {

        let rowsJSX = new Array(8).fill(null).map(index => {
            return <Row rowNum={index} />
        })

        return (
            <div className="Board">{rowsJSX}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
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