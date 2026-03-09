import React from "react";
import { useState, useEffect } from "react";
import css from "./Category.module.css";

const Category = () => {
  const [meals, setMeals] = useState([]);
  const fetchData = async (cat) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`,
    );
    const data = await res.json();
    const categories = data.meals;
    setMeals(categories);
  };
  useEffect(() => {
    fetchData("seafood");
  }, []);
  return (
    <>
      <h1>Cat Page</h1>

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

export default Category;
