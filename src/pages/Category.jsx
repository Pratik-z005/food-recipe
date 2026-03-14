import React from "react";
import { useState, useEffect } from "react";

// react-router-dom!
import { useParams, Link } from "react-router-dom";

// css!
import css from "./ResultPage.module.css";

// components!
import Header from "../components/Header";

const Category = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState([]);

  const fetchCategoryMeals = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`,
    );
    const data = await res.json();
    setMeals(data.meals || []);
  };

  useEffect(() => {
    fetchCategoryMeals();
  }, [name]);
  return (
    <>
      <Header />

      <h2 className={css.heading}>{name} Meals</h2>

      <div className={css.mealsContainer}>
        {meals.map((meal) => (
          <Link key={meal.idMeal} to={`/detail/${meal.idMeal}`}>
            <div className={css.card}>
              <img
                className={css.img}
                src={meal.strMealThumb}
                alt={meal.strMeal}
              />
              <h4 className={css.mealName}>{meal.strMeal}</h4>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Category;
