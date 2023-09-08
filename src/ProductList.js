import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ products, category, onDelete }) {
  return (
    <div>
      <h2>{category}</h2>
      {products.filter(prod => prod.category === category).map(product => (
        <ProductItem key={product.id} product={product} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProductList;
