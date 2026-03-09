import React from "react";
import { useState } from "react";
// css!
import css from "./header.module.css";
// lucide-react!
import { Menu, Search } from "lucide-react";

const Header = ({ searchRecipe }) => {
  const [input, setInput] = useState("");
  // on Enter!
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchRecipe(input);
      setInput("");
    }
  };
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
          <input
            type="text"
            id={css.input}
            placeholder="Search Recipes.."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
