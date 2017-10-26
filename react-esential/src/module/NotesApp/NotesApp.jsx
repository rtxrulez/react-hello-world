var React = require('react')
var NotesGrid = require('../NotesGrid/NotesGrid')


var NotesApp = React.createClass({
    getInitialState: function() {
        return {
            notes: [
                {
                    id: 0,
                    text: "Test Text",
                    color: "green"
                },
                {
                    id: 1,
                    text: "TExt 2",
                    color: "purple"
                },
                {
                    id: 2,
                    text: "teeest 4",
                    color: "yellow"
                }
            ]
        }
    },

    render: function() {
        return (
            <div className="notes-app">
                Test
            </div>
        )
    }
})

module.exports = NotesApp
