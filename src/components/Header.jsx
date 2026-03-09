import React from "react";
// css!
import css from "./header.module.css";
// lucide-react!
import { Menu, Search } from "lucide-react";

const Header = () => {
  return (
    <>
      <div className={css.container}>
        <h1 id={css.heading}>
          Flavors of the World <i className="fa-solid fa-utensils"></i>
        </h1>
        <button id={css.mode}>
          <Menu />
        </button>

        <div className={css.searchBox}>
          <Search id={css.searchIcon} />
          <input type="text" id={css.input} placeholder="Search Recipes.." />
        </div>
      </div>
    </>
  );
};

export default Header;
