import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import WallPosters from './WallPosters';
import Polaroids from './Polaroids';
import AddtoCart from './AddtoCart';
import ViewCard from './ViewCard';

function App() {
  return (
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
  );
}

export default App;