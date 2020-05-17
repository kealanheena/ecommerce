import React, { useContext, useState } from 'react';

import { Button, Card } from 'react-bootstrap';

import CartContext from '../context/cart-context';

function ProductCard({ title, image, price, description }) {
  const { dispatch } = useContext(CartContext);
  const [itemInCart, setItemInCart] = useState(false);

  function addToCart() {
    dispatch({
      type: 'ADD_TO_CART',
      product: { title, image, price, description },
    });
    setItemInCart(true);
  }

  // Important, there is a bug where if the user clicks on a button
  // then switches pages the product does not 'remember' which items have been added

  return (
    <Card style={{ marginTop: '15px' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{`£${price}`}</Card.Text>
        <Card.Text>{description}</Card.Text>
        <Button
          variant="success"
          disabled={itemInCart}
          onClick={() => addToCart()}
        >
          {itemInCart ? 'Added' : 'Add to cart'}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
