import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// components!
import Header from "../components/Header";

// css!
import "../index.css";
import css from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);

  useEffect(() => {
    const fetchMeal = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
      );
      const data = await res.json();
      setMeal(data.meals[0]);
    };

    fetchMeal();
  }, [id]);

  if (!meal) return <h2>Loading...</h2>;

  const addToFav = () => {
    const existingFav = JSON.parse(localStorage.getItem("favMeals")) || [];

    const updatedFav = [...existingFav, meal];

    localStorage.setItem("favMeals", JSON.stringify(updatedFav));
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className={css.flex}>
          <div className="imgContainer">
            <img className={css.img} src={meal.strMealThumb} />
            <h4 className={css.mealHeading}>{meal.strMeal}</h4>
          </div>
          <div className={css.infoContainer}>
            <h1 className={css.mealHeading} id={css.mainheading}>
              {meal.strMeal}
            </h1>
            <button className={css.favBtns} onClick={addToFav}>
              Add to Favourites
            </button>
            <p>{meal.strInstructions}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
