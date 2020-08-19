import React from "react";
import Join from "./components/Join";
import Chat from "./components/Chat";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import Novabar from "./components/Novabar";
import Register from "./components/Registration";
import LoginCom from "./components/LoginCom";
import Notfound from "./components/Notfound";
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" exact component={Novabar} />
      <Route path="/chat" exact component={Chat} />
      <Route path="/register" exact component={Register} />
      <Route path="/Login" exact component={LoginCom} />
      <Route path="/join" component={Join}></Route>
    </Switch>
  </BrowserRouter>
);

export default App;
