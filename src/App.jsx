import React from "react";
// components!
import Header from "./components/Header";
// pages!
import Home from "./pages/Home";
import Allcountry from "./pages/Allcountry";
import Category from "./pages/Category";
// react-router-dom!
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/countries" element={<Allcountry />} />
        <Route path="/category" element={<Category />} />
      </Routes>
    </>
  );
};

export default App;
