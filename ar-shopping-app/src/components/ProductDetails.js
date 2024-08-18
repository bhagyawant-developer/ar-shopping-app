import React from 'react';

function ProductDetails({ product, onARView }) {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '10px', maxWidth: '600px', margin: '20px auto' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <button onClick={onARView} style={{ padding: '10px 20px', cursor: 'pointer' }}>View in AR</button>
    </div>
  );
}

export default ProductDetails;
