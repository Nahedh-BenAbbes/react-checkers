import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h3>Thanks for playing!</h3>
                    <h4>Here are a few features to be added in the future:</h4>
                    <dl className="row">
                        <dt className="col-sm-3">Socket.IO</dt>
                        <dd className="col-sm-9">Actually playable online!</dd>
                        <dt className="col-sm-3">Logins</dt>
                        <dd className="col-sm-9">User profiles to customize avatars, modify display names, etc.</dd>
                        <dt className="col-sm-3">Stats</dt>
                        <dd className="col-sm-9">One of my favorite aspects of any game is statistics, so on a per user basis, there will be plenty of neat stats to look at.</dd>
                        <dt className="col-sm-3">UI Improvements</dt>
                        <dd className="col-sm-9">Creative frontends are a week point as you can see, but this will be worked more thoroughly for a prettier and overall more user intuitive experience.</dd>
                    </dl>
                </div>
            </div>
        )
    }
}

export default Footer
