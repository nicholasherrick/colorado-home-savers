import React from 'react';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import history from "./utils/history";
import Home from './views/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="*"><Redirect to="/"/></Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
