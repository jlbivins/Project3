import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Main from './pages/main';
import Questionnaire from './pages/questionnaire';
import NotFound from './pages/notFound';

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
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
