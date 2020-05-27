import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './utils/history';
import Home from './views/Home';
import Foreclosure from './views/Foreclosure';
import Contact from './views/Contact';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='page-container'>
        <Router history={history}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/home' component={Home} />
            <Route path='/foreclosure' component={Foreclosure} />
            <Route path='/contact' component={Contact} />
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
