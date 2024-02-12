import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import AccountPage from './Pages/AccountPage';

const App = () => {
  const [user, setUser] = useState(null);


  const updateUser = (userData) => {
    setUser(userData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" 
        element={<ProductsPage />} />
        <Route
          path="/cart"
          element={
            <CartPage />
          }
        />
        <Route
          path="/account"
          element={<AccountPage user={user} updateUser={updateUser} />}
        />
      </Routes>
    </Router>
  );
};

export default App;