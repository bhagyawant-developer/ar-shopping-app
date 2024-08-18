import React from 'react';
import 'aframe';
import 'aframe-ar';

function ARViewer({ product }) {
  return (
    <a-scene embedded arjs>
      <a-marker preset="hiro">
        <a-entity gltf-model={`url(${product.model})`} scale="0.5 0.5 0.5"></a-entity>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
}

export default ARViewer;
