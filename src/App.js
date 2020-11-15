import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Amazon clone</h1>
        <Switch>
            <Route path='/login'>
                <h1>login page</h1>
            </Route>
            <Route exact path='/checkout/:val'>
              <h2>checkout</h2>
            </Route>
            <Route exact path='/'>
              <h2>home</h2>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
