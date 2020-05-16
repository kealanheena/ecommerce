import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, Nav, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navigation({ toggleSidePanel }) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand as={Link} to="/">
        Ecommerce
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/products">
          products
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <Nav.Link onClick={() => toggleSidePanel()}>
          <FontAwesomeIcon color="#fff" icon={faShoppingCart} />
          <Badge pill variant="danger">
            5 {/* This number will be dynamic someday */}
          </Badge>
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
