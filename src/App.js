import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Header from './navBar/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path='/account'>
                <h1>login page</h1>
            </Route>
            <Route exact path='/checkout/:val'>
              <h2>checkout</h2>
            </Route>
            <Route exact path='/'>
              <Header />
              <h1>Home page</h1>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
