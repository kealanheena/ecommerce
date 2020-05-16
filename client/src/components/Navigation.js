import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Ecommerce
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/products">
          products
        </Nav.Link>
        <Nav.Link as={Link} to="/products/:id">
          pdp
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
