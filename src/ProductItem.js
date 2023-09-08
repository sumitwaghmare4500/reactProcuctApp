import React from 'react';

function ProductItem({ product, onDelete }) {
  return (
    <div>
      {product.id} - {product.name} - ${product.price}
      <button onClick={() => onDelete(product.id)}>Delete</button>
    </div>
  );
}

export default ProductItem;
