import React from 'react';

function ProductCard({ title, price, description }) {
  return (
    <div className="product-card">
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
