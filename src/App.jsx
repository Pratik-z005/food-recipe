import React from "react";

// css!
import "./index.css";

// pages!
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import ResultPage from "./pages/ResultPage";
import CountryBtnPage from "./pages/CountryBtnPage";
import Category from "./pages/Category";
import RandomMeal from "./pages/RandomMeal";
import FavouritePage from "./pages/FavouritePage";
import SettingPage from "./pages/SettingPage";

// react-router-dom!
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/country/:area" element={<ResultPage />} />
        <Route path="/mealbycountry" element={<CountryBtnPage />} />
        <Route path="/category/:name" element={<Category />} />
        <Route path="/random" element={<RandomMeal />} />
        <Route path="/favs" element={<FavouritePage />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </>
  );
};

export default App;
