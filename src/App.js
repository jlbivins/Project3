import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signUp";
import Main from './components/main';
import Questionnaire from './components/questionnaire';
import NotFound from './components/notFound';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/index" component={Main} />
          <Route exact path="/questionnaire/:id" component={Questionnaire} />
          <Ropute component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
