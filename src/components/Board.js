// Board class that renders each playing square as a div on startup

import React, { Component } from 'react';
import '../css/Board.css'

class Board extends Component {

    render() {
        let boardArr = [];

        for(let row = 1; row <= 8; row++) {
            boardArr.push(<div className="row"></div>)
            for(let col = 1; col <= 8; col++) {
                let rowCol = `${row}${col}`
                boardArr.push(<div id={rowCol} className="col"></div>)
            }
        }
    }
}