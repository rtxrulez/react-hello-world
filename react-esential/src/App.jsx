import React from 'react'
import { Link } from 'react-router'


const App = React.createClass({
    render: function() {
        return (
            <div className="app">
                App
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/inbox">Inbox</Link>
                    </li>
                </ul>
                <div className="content">
                    { this.props.children }
                </div>
            </div>
        )
    }
})

export default App
