import React from 'react';

import { Button } from 'react-bootstrap';

function ProductCard({ title, image, price, description }) {
  return (
    <div style={{ marginTop: "15px" }} className="product-card">
      <img style={{ width: "100%" }} width="100%" src={image} alt={title} />
      <h5>{title}</h5>
      <p>{`£${price}`}</p>
      <p>{description}</p>

      <Button variant="success">Add to cart</Button>
    </div>
  );
}

export default ProductCard;
