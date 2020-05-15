import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="Navigation">
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
  );
}

export default Navigation;
