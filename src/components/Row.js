import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        this.setState({ rowNum: this.props.rowNum })
    }

    render() {
        
        // Variable to track whether the Row being mounted is even or odd
        let evenOdd = 'row Even'; 
        if (this.state.rowNum % 2 !== 0) {
            evenOdd = 'row Odd';
        } 

        
        // Use evenOdd as a className to determine how each row color will start
        return (
            <div className={evenOdd}>
                <div className="col" id="1"></div>
                <div className="col" id="2"></div>
                <div className="col" id="3"></div>
                <div className="col" id="4"></div>
                <div className="col" id="5"></div>
                <div className="col" id="6"></div>
                <div className="col" id="7"></div>
                <div className="col" id="8"></div>
            </div>
        )
    }
}

export default Row
