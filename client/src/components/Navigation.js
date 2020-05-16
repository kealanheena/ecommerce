import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        Ecommerce
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/products">
          products
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link>
          <FontAwesomeIcon color="#fff" icon={faShoppingCart} />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
