import React from 'react';

import { Button, Card } from 'react-bootstrap';

function ProductCard({ title, image, price, description }) {
  return (
    <Card style={{ marginTop: '15px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`£${price}`}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button variant="success">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
