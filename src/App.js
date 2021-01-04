import React from 'react';
import './css/App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Intro from './components/Intro';
import Products from './components/Products';
import Cart from "./components/Cart";

const App = () => {

  return (
    <Router>
      <Route path="/" exact component={Intro} />
      <Route path="/products" component={Products} />
      <Route path="/cart" component={Cart} />
    </Router>
  )
}

export default App;
