import React, { Component } from 'react';
import './Row.css';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowNum: null
        }
    }

    // When the Row component mounts, set the row number
    componentDidMount = () => {
        this.setState({ rowNum: this.props.rowNum });
    }

    render() {
        
        // Create an array with 8 null values, then map column divs to new array
        let colArr = new Array(8).fill(null).map((index) => {
            if (this.state.rowNum === 1 || this.state.rowNum === 2 || this.state.rowNum === 7 || this.state.rowNum === 8) { // This will eventually instantiate the Piece class on necessary divs, but for now, just display the grid
                return <div className="col" id={index}></div>
            } else {
                return <div className="col" id={index}></div>
            }
        });

        // Variable to track whether the Row being mounted is even or odd
        let evenOdd = 'row Even'; 
        if (this.state.rowNum % 2 !== 0) {
            evenOdd = 'row Odd';
        } 

        
        // Use evenOdd as a className to determine how each row color will start
        return (
            <div className={evenOdd}>
                {colArr}
            </div>
        )
    }
}


export default Row;
