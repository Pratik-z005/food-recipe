import { useEffect, useState } from "react";

// react-router-dom!
import { Link } from "react-router-dom";

// components!
import Header from "../components/Header";

// css!
import "../index.css";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);

  const fetchRandomMeal = async () => {
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php",
    );
    const data = await res.json();
    setMeal(data.meals[0]);
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  if (!meal) return <h2>Loading...</h2>;

  return (
    <>
      <Header />
      <div className="container">
        <h2 className={css.heading}>Random Meal </h2>

        <div>
          <Link to={`/detail/${meal.idMeal}`} id="viewMore">
            <img src={meal.strMealThumb} width="300" />
          </Link>
          <h3>{meal.strMeal}</h3>

          <Link to={`/detail/${meal.idMeal}`} id="viewMore">
            View Full Recipe
          </Link>
        </div>

        <button className="randomBtn" onClick={fetchRandomMeal}>
          Random Meal
        </button>
      </div>
    </>
  );
};

export default RandomMeal;
