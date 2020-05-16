import React from 'react';

function ProductCard({ title, image, price, description }) {
  return (
    <div className="product-card">
      <img width="100%" src={image} alt={title} />
      <h5>{title}</h5>
      <p>{`£${price}`}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProductCard;
