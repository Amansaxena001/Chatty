import React from 'react'
import Join from './components/Join'
import Chat from './components/Chat'

import {BrowserRouter as Router,Route} from 'react-router-dom'

const App =()=>(
    <Router>
        <Route path="/" exact component={Join}/>
        <Route path="/chat" component={Chat}/>
    </Router>
)

export default App;
