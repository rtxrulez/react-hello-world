var ReactDOM = require('react-dom')
var React = require('react')
import { Router, Route, hashHistory } from 'react-router'
// var NotesApp = require('./components/NotesApp.jsx')
import App from './App.jsx'
import AboutPage from './components/AboutPage.jsx'
import InboxPage from './components/InboxPage.jsx'
import Message from './components/Message.jsx'

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path='/about' component={AboutPage} />
            <Route path='/inbox' component={InboxPage}>
                <Route path='/inbox/messages/:msgId' component={Message} />
            </Route>
        </Route>
    </Router>,
    document.getElementById("root")
)

console.info('Start!')
