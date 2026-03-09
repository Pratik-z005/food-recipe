import React from "react";
import { useEffect, useState } from "react";
// components!
import Header from "../components/Header";
// data!
import { countries } from "../data/countries";
// css!
import "../index.css";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const apiData = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${countries[5]}`,
    );

    const data = await res.json();
    setMeals(data.meals);
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <>
      <Header />

      <div className="container">
        <div className="btnContainer">
          {countries.map((data, idx) => (
            <button key={idx}>{data}</button>
          ))}
        </div>

        <div className="contendContainer">
          {meals.map((meal, idx) => (
            <div key={idx} className="card">
              <img src={meal.strMealThumb} width="200" />

              <h4>{meal.strMeal}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
