import React from "react";

// css!
import css from "./Allcountry.module.css";

// data!
import { countries } from "../data/countries";

// components!

// react-router-dom!
import { Link } from "react-router-dom";

const Allcountry = () => {
  return (
    <>
      <div className={css.btnContainer}>
        {countries.map((country, idx) => (
          <Link key={idx} to={`/country/${country}`}>
            <button className={css.countryBtn}>{country}</button>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Allcountry;
