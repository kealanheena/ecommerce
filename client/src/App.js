import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import PLP from './pages/PLP';
import Checkout from './pages/Checkout';

import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={PLP} />
        <Route exact path="/checkout" component={Checkout} />
      </Router>
    </div>
  );
}

export default App;
