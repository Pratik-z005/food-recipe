import React from "react";
import { useEffect, useState } from "react";
// components!
import Header from "../components/Header";
// css!
import "../index.css";
import css from "./Home.module.css";
// react-router-dom!
import { Link } from "react-router-dom";

const Home = () => {
  const [meals, setMeals] = useState([]);
  // Fetch by country!
  const fetchData = async (area) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
    );
    const data = await res.json();
    const recipe = data.meals;
    setMeals(recipe);
  };

  const searchRecipe = async (query) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`,
    );
    const data = await res.json();
    setMeals(data.meals);
  };

  useEffect(() => {
    fetchData("Indian");
  }, []);

  return (
    <>
      <Header searchRecipe={searchRecipe} />

      <Link to={"/countries"}>on Click</Link>

      <div className={css.mealsContainer}>
        {meals &&
          meals.map((meal) => (
            <div key={meal.idMeal} className={css.card}>
              <img className={css.img} src={meal.strMealThumb} />
              <h4 className={css.mealName}>{meal.strMeal}</h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
