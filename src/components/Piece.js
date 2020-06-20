// Piece class to manage the state of each piece on the Board

import React, { Component } from 'react';
import '../css/Piece.css';
import { connect } from 'react-redux';

class Piece extends Component {

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

const mapStateToProps = (state) => {
    return {
        active: true,
        isKing: false,
        color,
        currentRow,
        currentColumn
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

export default connect(mapStateToProps, mapDispatchToProps)(Piece);