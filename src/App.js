import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './utils/history';
import Home from './views/Home';
import Buyers from './views/Buyers';
import Sellers from './views/Sellers';
import Foreclosure from './views/Foreclosure';
import About from './views/About';
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className='page-container'>
        <div className='content-wrap'>
          <Router history={history}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/buyers' component={Buyers} />
              <Route exact path='/sellers' component={Sellers} />
              <Route exact path='/foreclosure' component={Foreclosure} />
              <Route exact path='/about' component={About} />
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
