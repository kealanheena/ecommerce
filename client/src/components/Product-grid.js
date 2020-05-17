import React from 'react';

import { Col } from 'react-bootstrap';
import ProductCard from './Product-card';

function ProductGrid({ products }) {
  if (!products) {
    return <p>Loading products... Hopefully</p>;
  }

  return (
    <>
      {products.map(({ id, title, image, price, description }) => (
        <Col xs={12} sm={6} md={6} lg={4} key={id}>
          <ProductCard
            data-testid="product-card"
            title={title}
            image={image}
            price={price}
            description={description}
          />
        </Col>
      ))}
    </>
  );
}

export default ProductGrid;
