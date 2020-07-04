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
        return <div className="col" id={this.state.id} piece={this.state.piece} available={this.state.available}></div>
    }
}

export default Square