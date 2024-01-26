import React from "react";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Cart } from "./pages/Cart"
import { Products } from "./pages/Products"
import { Home } from "./pages/Home"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
         <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />}/>
        <Route path="/cart" element={<Cart />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
      
     
    </div>
  );
}

export default App;
