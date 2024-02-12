import React, { useState } from 'react';

const AccountPage = ({ user, updateUser }) => {
  const [shippingAddress, setShippingAddress] = useState(user?.shippingAddress || '');
  const [userId, setUserId] = useState(user?.userId || '');
  const [password, setPassword] = useState(user?.password || '');

  const handleSave = () => {
    const updatedUser = { user, shippingAddress };
    updateUser(updatedUser);
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '10px', padding: '20px', margin: '20px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Address Confirmation</h2>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>UserId:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ display: 'block' }}>Shipping Address:</label>
          <input
            type="text"
            value={shippingAddress}
            onChange={(e) => setShippingAddress(e.target.value)}
            style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <button onClick={handleSave} style={{ width: '100%', padding: '8px 15px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Save Shipping Address</button>
      </div>
    </div>
  );
};

export default AccountPage;
