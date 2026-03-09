import React from "react";
// css!
import css from "./Allcountry.module.css";
// data!
import { countries } from "../data/countries";
// components!
import Header from "../components/Header";
// react-router-dom!
import { Link } from "react-router-dom";

const Allcountry = () => {
  const searchRecipe = async (query) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    );
    const data = await res.json();
    setMeals(data.meals);
  };
  return (
    <>
      <Header searchRecipe={searchRecipe} />

      <div className={css.btnContainer}>
        {countries.map((data, idx) => (
          <Link key={idx} to={"/"}>
            <button className={css.countryBtn}>{data}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Allcountry;
