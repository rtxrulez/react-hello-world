var React = require('React')
var Note = require('../Note/Note.jsx')

var NotesGrid = React.createClass({
    render: function() {
        return (
            <div className="notes-grid">
                {
                    this.props.notes.map(function(note) {
                        <Note key={note.id} color={note.color}>{note.text}</Note>
                    })
                }
            </div>
        )
    }
})

module.exports = NotesGrid
