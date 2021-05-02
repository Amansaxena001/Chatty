import React from "react";
import Join from "./components/Join";
import Chat from "./components/Chat";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

const App = () => (
  <Router>
    <Route path="/" exact component={Home} />
    <Route path="/chat" component={Chat} />
    <Route path="/join" component={Join} />
  </Router>
);

export default App;
