import React from 'react';

function ProductCard({ product, onSelect }) {
  return (
    <div onClick={() => onSelect(product)} style={{ cursor: 'pointer', margin: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '10px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
    </div>
  );
}

export default ProductCard;
