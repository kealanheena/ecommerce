import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import PDP from './pages/PDP';
import PLP from './pages/PLP';

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/products">plp</Link>
            </li>
            <li>
              <Link to="/products/:id">pdp</Link>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={PLP} />
        <Route exact path="/products/:id" component={PDP} />
      </Router>
    </div>
  );
}

export default App;
