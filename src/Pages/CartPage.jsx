import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [cart, setCart] = useState(location?.state?.cart || []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const updateQuantity = (index, quantity) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  const calculateTotalWithTax = () => {
    const total = calculateTotal();
    const taxAmount = total * 0.13; // 13% tax
    return total + taxAmount;
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Shopping Cart</h2>
      {cart.map((item, index) => (
        <div key={index} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '25px', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px', color: '#333' }}>{item.product.name}</h3>
          <p style={{ marginBottom: '10px', color: '#666' }}>Quantity: 
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(index, parseInt(e.target.value, 10))}
              style={{ marginLeft: '10px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100px' }}
            />
          </p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => removeFromCart(index)}
              style={{ padding: '8px 15px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', marginRight: '10px', cursor: 'pointer' }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {cart.length ? (
        <div style={{ padding: '20px', gap: "40px" }}>
          <p>Total: ${calculateTotal().toFixed(2)}</p>
          <p>Tax (13%): ${calculateTotalWithTax().toFixed(2) - calculateTotal().toFixed(2)}</p>
          <p>Total Amount: ${calculateTotalWithTax().toFixed(2)}</p>

          <button
            onClick={clearCart}
            style={{ padding: '10px 15px', marginRight: "10px", backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate("/account")}
            style={{ padding: '10px 15px', backgroundColor: '#28a745', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
          >
            Done
          </button>
        </div>
      ) : (
        <div style={{
          margin: '20px',
          border: '1px solid #ccc',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '50px',
          fontSize: '20px',
          fontWeight: 'bold'
        }}>
          No product found
        </div>
      )}
    </div>
  );
};

export default CartPage;
