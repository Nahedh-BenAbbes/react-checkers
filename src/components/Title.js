import React, { Component } from 'react'
import './Title.css'

class Title extends Component {
    render() {
        // const title = 'Checkers!'
        // let newTitle = title.split(title)
        return (
            <div className="jumbotron jumbotron-fluid bg-secondary title-header">
                <div className="container">
                    <h1 className="display-4 text-center">Checkers!</h1>
                </div>
            </div>
        )
    }
}

export default Title
