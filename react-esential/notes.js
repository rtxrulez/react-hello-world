console.log('test')

var Note = React.createClass({
    render: function() {
        return (
            <div className="note">{this.props.children}</div>
        )
    }
})

var NotesGrid = React.createClass({
    render: function() {
        return (
            <div className="notes-grid">
                {
                    this.props.notes.map(function(note) {
                        return <Note key="{note.id}" color={note.color}></Note>
                    })
                }
            </div>
        )
    }
})

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
                <NotesGrid notes={this.state.notes} />
            </div>
        )
    }
})

ReactDOM.render(
    <NotesApp />,
    document.querySelector('body')
)
