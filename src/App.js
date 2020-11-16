import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/navBar/Header';
import Home from './components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

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
            <Route exact path='/cart'>
              <Header />
              <h2>cart</h2>
            </Route>
            <Route exact path='/returns'>
              <Header />
              <h2>returns</h2>
            </Route>
            <Route exact path='/try_prime'>
              <Header />
              <h2>try prime</h2>
            </Route>
            <Route exact path='/'>
              <Header />
              <Home />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
