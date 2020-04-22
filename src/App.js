import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from './utils/history';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Buyers from './views/Buyers';
import Sellers from './views/Sellers';
import Foreclosure from './views/Foreclosure';
import Timeline from './views/Timeline';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/buyers' component={Buyers} />
          <Route exact path='/sellers' component={Sellers} />
          <Route exact path='/foreclosure' component={Foreclosure} />
          <Route exact path='/timeline' component={Timeline} />
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
