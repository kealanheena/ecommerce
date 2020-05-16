import React from 'react';

function ProductCard({ title, image, price, description }) {
  return (
    <div style={{ marginTop: "15px" }} className="product-card">
      <img style={{ width: "100%" }} width="100%" src={image} alt={title} />
      <h5>{title}</h5>
      <p>{`£${price}`}</p>
      <p>{description}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
