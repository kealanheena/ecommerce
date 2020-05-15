import React, { useState } from 'react';

import productData from '../mock_data/products';

function PLP() {
  const [ products ] = useState(productData);

  return (
    <div className="plpPage">
      <h2>PLP page</h2>

      {products.map(({ title, price, description }) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{price}</p>
          <p>{description}</p>
        </div>
      ))}
    </div>
  );
}

export default PLP;
