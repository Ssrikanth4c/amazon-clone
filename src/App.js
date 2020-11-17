import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/navBar/Header';
import Home from './components/Home/Home';
import ProductCards from './components/Products/ProductCards';
import Cart from './components/Cart/Cart';
function App() {
  const home_products=[
    {
      img_url:'https://images-eu.ssl-images-amazon.com/images/I/31f95VzP8kL._AC_US160_.jpg',
      product_title: 'Voltas Beko 8 Place Table Top Dishwasher (DT8S, Silver, Inbuilt Heater, Adjustable Upper Shelf)',
      product_by: 'Voltas Beko',
      actual_price:25990 ,
      discount_price: 29990,
      isPrime: true,
      ratings:4 
    },
    {
      img_url:'https://images-eu.ssl-images-amazon.com/images/I/31sQGJmD58L._AC_US160_.jpg',
      product_title: 'AmazonBasics 12 Place Setting Dishwasher (Silver, Rapid, Intense Wash for Heavily Soiled Utensils)',
      product_by: 'AmazonBasics',
      actual_price:28999 ,
      discount_price: 43999,
      isPrime: true,
      ratings:3 
    },
    {
      img_url:'https://images-eu.ssl-images-amazon.com/images/I/31Ne6MXM5OL._AC_US160_.jpg',
      product_title: 'IFB Neptune VX Fully Electronic Dishwasher (12 Place Settings, Dark Silver)',
      product_by: 'IFB',
      actual_price:38990 ,
      discount_price: 30000,
      isPrime: false,
      ratings:3 
    },
    {
      img_url:'https://images-eu.ssl-images-amazon.com/images/I/31LBtObtmkL._AC_US160_.jpg',
      product_title: 'Voltas Beko Dishwasher DF14W',
      product_by: 'Voltas Beko',
      actual_price:29000,
      discount_price: 20000,
      isPrime: false,
      ratings:5 
    },
    {
      img_url:'https://images-eu.ssl-images-amazon.com/images/I/31JoYyMBmmL._AC_US160_.jpg',
      product_title: 'IFB Neptune 15 Place Settings Dishwasher (VX plus, Graphite Grey, Quick Wash with Steam Drying)',
      product_by: 'IFB',
      actual_price:42999,
      discount_price: 35000,
      isPrime: false,
      ratings:3
    },
    {
      img_url:'https://images-eu.ssl-images-amazon.com/images/I/31JoYyMBmmL._AC_US160_.jpg',
      product_title: 'Faber 12 Place Settings Dishwasher (FFSD 6PR 12S, Neo Black, Best suited for Indian Kitchen, Hygiene Wash)',
      product_by: 'Faber',
      actual_price:32000,
      discount_price: 25000,
      isPrime: false,
      ratings:3
    }
  ]
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
                <Cart />
              </Route>
              <Route exact path='/returns'>
                <Header />
                <h2>returns</h2>
              </Route>
              <Route exact path='/try_prime'>
                <Header />
                <h2>try prime</h2>
              </Route>
              <Route exact path='/home_products'>
                <Header />
                <ProductCards home_products={home_products} />
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
