import {BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Home";
import WallPosters from "./WallPosters";
import Polaroids from "./Polaroids";
import AddtoCart from "./AddtoCart";
import ViewCard from "./ViewCard";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="" element={<Home/>} ></Route>
          <Route path="/Home" element={<Home/>} ></Route>
          <Route path="/WallPosters" element={<WallPosters/>} ></Route>
          <Route path="/Polaroids" element={<Polaroids/>} ></Route>
          <Route path="/ViewCard/:type/:id" element={<ViewCard/>} ></Route>
          <Route path="/AddtoCart" element={<AddtoCart/>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
