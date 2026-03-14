import React from "react";
import { useEffect, useState, useRef } from "react";

// css!
import "../index.css";
import css from "./SliderMeals.module.css";

// react-router-dom!
import { Link } from "react-router-dom";

const SliderMeals = ({ area }) => {
  const [meals, setMeals] = useState([]);
  const sliderRef = useRef(null);
  // Fetch by country!
  const fetchData = async (area) => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
    );
    const data = await res.json();
    setMeals(data.meals || []);
  };

  useEffect(() => {
    fetchData(area);
  }, []);

  // Infinite scroll logic
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const scrollWidth = slider.scrollWidth;
      const clientWidth = slider.clientWidth;

      if (slider.scrollLeft <= 0) {
        slider.scrollLeft = scrollWidth / 2;
      }

      if (slider.scrollLeft + clientWidth >= scrollWidth) {
        slider.scrollLeft = scrollWidth / 2;
      }
    };
    slider.addEventListener("scroll", handleScroll);

    // start from middle
    slider.scrollLeft = slider.scrollWidth / 2;

    return () => slider.removeEventListener("scroll", handleScroll);
  }, [meals]);

  // duplicate meals for infinite slider
  const loopMeals = [...meals, ...meals];
  return (
    <>
      <h2 className={css.title}>{area} Food</h2>
      <div className={css.slider}>
        <div className={css.mealsContainer}>
          {loopMeals.map((meal, index) => (
            <Link
              key={`${meal.idMeal}-${index}`}
              to={`/detail/${meal.idMeal}`}
              className={css.txtDecoration}
            >
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
      </div>
    </>
  );
};

export default SliderMeals;
