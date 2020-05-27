import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './utils/history';
import Home from './views/Home';
import Contact from './views/Contact';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <div className='page-container'>
        <div className='content-wrap'>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/home' component={Home} />
              <Route path='/contact' component={Contact} />
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
