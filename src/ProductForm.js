import React,{useState} from 'react';

const categories = ["food", "electronic item", "skincare products"];

function ProductForm({ onAddProduct }) {
  const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");
  const [category, setCategory] = useState(categories[0]);

  const handleAdd = () => {
    const newProduct = {
      id: productId,
      name: productName,
      price: sellingPrice,
      category: category
    };
    onAddProduct(newProduct);
  };

  return (
    <div>
      <input 
        placeholder="Product ID" 
        value={productId} 
        onChange={(e) => setProductId(e.target.value)} 
      />
      <input 
        placeholder="Product Name" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      <input 
        placeholder="Selling Price" 
        value={sellingPrice} 
        onChange={(e) => setSellingPrice(e.target.value)} 
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map(cat => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={handleAdd}>Add Product</button>
    </div>
  );
}

export default ProductForm;
