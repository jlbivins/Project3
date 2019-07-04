import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import NewUser from "./components/newUser";
import Main from './components/main';
import Questionaire from './components/questionaire';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/new-user" component={NewUser} />
          <Route exact path="/main-menu/user/:id" component={Main} />
          <Route exact path="/questionaire/:id" component={Questionaire} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
