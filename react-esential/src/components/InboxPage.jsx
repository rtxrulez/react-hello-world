import React from 'react'

import msg from '../msg.json'

const InboxPage = React.createClass({
    getInitialState() {
        return {
            msg
        }
    },

    handleView(m) {
        console.info('m',m)
    },

    render() {

        const { msg } = this.state
        console.info('st', msg)

        return (
            <div className='InboxPage'>
                <h1>InboxPage</h1>
                <legend>
                    <ol>
                        {
                            msg.map(function(m) {
                                return (
                                    <li
                                        onClick={this.handleView.bind(null, m)}
                                        key={m.id}>
                                        {m.subject}
                                    </li>
                                )
                            })
                        }
                    </ol>
                </legend>
                <div>
                    <h2>Msg</h2>
                    {this.props.children}
                </div>
            </div>
        )
    }
})

export default InboxPage
