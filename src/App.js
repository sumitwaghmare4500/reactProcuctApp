import React, { useState, useEffect } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const categories = ["food", "electronic item", "skincare products"];

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleAddProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  return (
    <div>
      <ProductForm onAddProduct={handleAddProduct} />
      {categories.map(cat => (
        <ProductList key={cat} category={cat} products={products} onDelete={handleDeleteProduct} />
      ))}
    </div>
  );
}

export default App;
