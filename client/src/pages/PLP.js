import React, { useState } from 'react';

import productData from '../mock_data/products';

import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../components/Product-card';

function PLP() {
  const [products] = useState(productData);

  return (
    <Container className="plpPage">
      <Row>
        <h2>PLP page</h2>
      </Row>
      <Row>
        {products.map(({ id, title, image, price, description }) => (
          <Col xs={4} key={id}>
            <ProductCard
              title={title}
              image={image}
              price={price}
              description={description}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PLP;
