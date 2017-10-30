import React from 'react'

const AboutPage = React.createClass({
    render() {
        return (
            <div className="AboutPage">
                <h1>Message</h1>
                {this.props.children}
            </div>
        )
    }
})

export default Message
