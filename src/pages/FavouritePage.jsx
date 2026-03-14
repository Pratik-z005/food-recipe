import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// components!
import Header from "../components/Header";

// css!
import css from "./ResultPage.module.css";

const FavouritePage = () => {
  const [favMeals, setFavMeals] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favMeals")) || [];
    setFavMeals(data);
  }, []);

  return (
    <>
      <Header />
      <div>
        <h2>My Favorite Meals </h2>

        <div className={css.mealsContainer}>
          {favMeals.map((meal) => (
            <Link key={meal.idMeal} to={`/detail/${meal.idMeal}`}>
              <div className={css.card}>
                <img
                  className={css.img}
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                />
                <h4>{meal.strMeal}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavouritePage;
