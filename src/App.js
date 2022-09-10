import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Amazon from "./components/amazon";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import CartHome from "./components/CartHome";
import HomeCard from "./components/HomeCard";
import HomeCardTwo from "./components/HomeCardTwo";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <CartHome /> */}
      <Routes>
        <Route path="/" element={<CartHome />} />
        <Route path="HomeCard" element={<HomeCard />} />
        <Route path="HomeCardTwo" element={<HomeCardTwo />} />
      </Routes>
    </>
  );
};

export default App;
