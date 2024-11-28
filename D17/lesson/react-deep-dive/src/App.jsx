import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AppNavbar from "./components/AppNavBar";
import FormExample from "./components/FormExample";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";

// Your page components

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <h1>Welcome to My App</h1>
        {/* Define routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/form" element={<FormExample />} />
          <Route path="/products" element={<Products />}>
            <Route path=":id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
