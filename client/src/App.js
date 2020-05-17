import React, { useState, useReducer } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import PLP from './pages/PLP';
import Checkout from './pages/Checkout';

import Navigation from './components/Navigation';
import SidePanel from './components/SidePanel';

import CartContext from './context/cart-context';
import CartReducer from './reducer/cart-reducer';

function App() {
  const [cartProducts, dispatch] = useReducer(CartReducer, []);

  const [isSidePanelOpen, setIsSidePanelOpen] = useState(false);
  
  function toggleSidePanel() {
    setIsSidePanelOpen(!isSidePanelOpen);
  }

  return (
    <CartContext.Provider value={{ cartProducts, dispatch }}>
      <div style={{ paddingTop: '56px' }} className="App">
        <Router>
          <Navigation toggleSidePanel={toggleSidePanel} />
          <SidePanel isOpen={isSidePanelOpen} />

          <Route exact path="/" component={Home} />
          <Route exact path="/products" component={PLP} />
          <Route exact path="/checkout" component={Checkout} />
        </Router>
      </div>
    </CartContext.Provider>
  );
}

export default App;
