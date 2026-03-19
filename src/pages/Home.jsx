import React from "react";
import { useEffect, useState } from "react";

// components!
import Header from "../components/Header";
import SliderMeals from "../components/SliderMeals";

// pages!
import Allcountry from "./Allcountry";

// css!
import "../index.css";

const Home = () => {
  const [showCountries, setShowCountries] = useState(false);
  const searchRecipe = async (query) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    );
    const data = await res.json();
    setMeals(data.meals || []);
  };

  return (
    <>
      <Header searchRecipe={searchRecipe} setShowCountries={setShowCountries} />

      {/* Hidden by default */}
      {showCountries ? (
        <Allcountry />
      ) : (
        <>
          <hr />
          <SliderMeals area="Indian" />
          <hr />
          <SliderMeals area="Chinese" />
          <hr />
          <SliderMeals area="Japanese" />
          <hr />
          <SliderMeals area="Italian" />
        </>
      )}
    </>
  );
};

export default Home;
