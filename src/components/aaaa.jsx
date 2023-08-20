import React, { useState, useEffect } from 'react';
import './App.css'; // Подключите стили в соответствующем файле

function Stars({ rating }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={`fa fa-star ${i < rating ? 'active' : ''}`}
      ></span>
    );
  }
  return <div>{stars}</div>;
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

  const handleDoubleClick = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    );
  };

  return (
    <div className="app">
      <header className="header">Header</header>
      <main className="main">
        <div className="product-list">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onDoubleClick={() => handleDoubleClick(product.id)}
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <Stars rating={product.rating} />
            </div>
          ))}
        </div>
      </main>
      <footer className="footer">Footer</footer>
    </div>
  );
}

export default App;
