import "./scss/style.scss";
import Header from "./companents/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import React from "react";
import { PizzaFull } from "./companents/PizzaFull/PizzaFull";

function App() {
  return (
    <div className="wrapper">
        <Header />
        <div className="container">
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/pizza/:id" element={<PizzaFull />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </div>
    </div>
  );
}

export default App;
