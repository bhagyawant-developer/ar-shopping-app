import React, { useState } from 'react';
import productsData from './data/productsData';
import ProductCard from './components/ProductCard';
import ProductDetails from './components/ProductDetails';
import ARViewer from './components/ARViewer';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [viewAR, setViewAR] = useState(false);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setViewAR(false);
  };

  const handleARView = () => {
    setViewAR(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>AR Shopping Experience</h1>
      {viewAR ? (
        <ARViewer product={selectedProduct} />
      ) : selectedProduct ? (
        <ProductDetails product={selectedProduct} onARView={handleARView} />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {productsData.map(product => (
            <ProductCard key={product.id} product={product} onSelect={handleProductSelect} />
          ))}
        </div>
      )}
      {selectedProduct && !viewAR && (
        <button onClick={() => setSelectedProduct(null)} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
          Back to Products
        </button>
      )}
    </div>
  );
}

export default App;
