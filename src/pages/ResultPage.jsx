import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// css!
import css from "./ResultPage.module.css";

// components!
import Header from "../components/Header";

// pages!
import Allcountry from "./Allcountry";

import { Link } from "react-router-dom";

const ResultPage = () => {
  const { area } = useParams();
  const [meals, setMeals] = useState([]);
  const [showCountries, setShowCountries] = useState(false);

  const fetchCountryMeals = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`,
    );
    const data = await res.json();
    setMeals(data.meals);
  };

  useEffect(() => {
    fetchCountryMeals();
  }, [area]);

  return (
    <>
      <Header setShowCountries={setShowCountries} />

      {/* Hidden by default */}
      {showCountries ? (
        <Allcountry />
      ) : (
        <>
          <div>
            <h2 className={css.title}>{area} Recipes</h2>

            <div className={css.mealsContainer}>
              {meals &&
                meals.map((meal) => (
                  <Link
                    to={`/detail/${meal.idMeal}`}
                    key={meal.idMeal}
                    className={css.card}
                  >
                    <img src={meal.strMealThumb} className={css.img} />
                    <h4 className={css.mealName}>{meal.strMeal}</h4>
                  </Link>
                ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ResultPage;
