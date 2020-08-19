import React, { Component } from 'react'

 class Notfound extends Component {
    render() {
        return (
            <div>
                 <h1>Please login to continue</h1>
                 <a className="nav-item nav-link" href="/Login">Login</a>

            </div>
        )
    }
}

export default Notfound
