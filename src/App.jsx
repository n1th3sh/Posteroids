import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import WallPosters from './WallPosters';
import Polaroids from './Polaroids';
import AddtoCart from './AddtoCart';
import ViewCard from './ViewCard';
import { CartContext } from './CartContext';

function App() {
  const [cart, setCart] = useState([]);

  // Add item or increment quantity if it already exists
  const addToCart = (product, type) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id && item.type === type);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.type === type
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, type, quantity: 1 }];
    });
  };

  // Update item quantity or remove if quantity becomes 0
  const updateQuantity = (id, type, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id && item.type === type) {
            return { ...item, quantity: item.quantity + amount };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item directly
  const removeFromCart = (id, type) => {
    setCart((prevCart) => prevCart.filter((item) => !(item.id === id && item.type === type)));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/WallPosters" element={<WallPosters />} />
          <Route path="/Polaroids" element={<Polaroids />} />
          <Route path="/ViewCard/:type/:id" element={<ViewCard />} />
          <Route path="/AddtoCart" element={<AddtoCart />} />
        </Routes>
      </Router>
    </CartContext.Provider>
  );
}

export default App;