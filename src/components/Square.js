import React, { Component } from 'react';

class Square extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            piece: this.props.piece,
            available: this.props.available
        }
    }

    render = () => {
        let ifAvailable = 'col';
        if (this.state.available) {
            ifAvailable = 'col available'
        }
        return <div className={ifAvailable} id={this.state.id}></div>
    }
}

export default Square