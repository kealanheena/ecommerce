import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import PDP from './pages/PDP';
import PLP from './pages/PLP';

import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={PLP} />
        <Route exact path="/products/:id" component={PDP} />
      </Router>
    </div>
  );
}

export default App;
