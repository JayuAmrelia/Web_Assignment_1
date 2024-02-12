import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductsPage = () => {

  const products = [
    { id: 1, name: 'Tshirt', description: 'Our Girl Power Definition tee is a the perfect gift for a woman or girl who knows her power and her worth.', price: 18,image: 'images/tshirt.jpg' },
    { id: 2, name: 'Shirt', description: 'The backseat lovers shirt, Music Lover Shirt, Trending Shirt.', price: 40, image: 'images/shirt.jpg'},
    { id: 3, name: 'OnePiece', description: 'Womens Sleeveless Spaghetti Strap Satin Dress Cocktail Beach Evening Party wear.', price: 25, image: 'images/one piece.jpg'},
    { id: 4, name: 'Jeans', description: 'Denimot - High-Waist Washed Loose Fit Jeans', price: 35, image: ' images/jeans.jpg'},
    { id: 5, name: 'Shoes', description: 'Womens Running Shoes Fashion Sneakers for Teen Girls Breathable Walking Shoes', price: 37, image: 'images/shoes.jpg' },
    { id: 6, name: 'Purse', description: 'Color-Block Crossbody Bags for Women Leather Cross Body Purses', price: 15, image: 'images/purse.jpg' },
  ];

  const navigate = useNavigate();

  const [cart, setCart] = useState([]);


  const addToCart = (product, quantity) => {
    const updatedCart = [ { product, quantity }];
    setCart(updatedCart);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Products</h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {products.map((product) => (
        <div key={product.id} style={{ border: '10px solid #ccc', borderRadius: '5px', margin: '5px', padding:  '15px', maxWidth: '400px' }}>
          <h3 style={{ fontSize: '30px', marginBottom: '10px', color: '#333' }}>{product.name}</h3>
          <p style={{ marginBottom: '10px', color: '#666' }}>{product.description}</p>
          <p style={{ marginBottom: '10px', color: '#333' }}>Price: ${product.price}</p>
          <img src={product.image} alt={product.name} style={{ width: '100%', height: '65%', borderRadius: '10px' }} />
          <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
            <input
              type="number"
              min="1"
              defaultValue="1"
              onChange={(e) => addToCart(product, parseInt(e.target.value, 10))}
              style={{ marginRight: '20px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100px' }}
            />
            <button
              onClick={() => navigate("/cart", { state: { cart }})}
              style={{ padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '10px', cursor: 'pointer' }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ProductsPage;