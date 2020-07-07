import React, { Component } from 'react'
import './Player.css'

class PlayerRed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            winner: null,
            numPieces: null,
            currentTurn: null
        }
    }

    componentDidMount = () => {
        return this.setState({
            name: this.props.name,
            winner: this.props.winner,
            numPieces: this.props.numPieces,
            currentTurn: this.props.currentTurn
        })
    }

    render = () => {
        let turnBadge = this.state.currentTurn ? <h4><span className="badge badge-success">Your Move</span></h4> : <h4><span className="badge badge-danger">Sit Tight</span></h4>;
        return (
            <div>
                <div className="card player-one">
                    <div className="card-body">
                        <h5 className="card-title">{this.state.name}</h5>
                        <p className="card-text">Remaining Pieces: {this.state.numPieces}</p>
                        {turnBadge}                       
                    </div>
                </div>
            </div>
        )
    }
}

export default PlayerRed
