import React from "react";
import { useState, useEffect } from "react";

// css!
import "../index.css";
import css from "./Header.module.css";

// lucide-react!
import { Menu, Moon, Sun, Search } from "lucide-react";

// component!
import Sidebar from "./Sidebar";

// react-router!
import { Link } from "react-router-dom";

const Header = ({ searchRecipe, setShowCountries }) => {
  const [input, setInput] = useState("");
  // on Enter!
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchRecipe(input);
      setInput("");
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  const [darkMode, setDarkMode] = useState(false);
  const toggleMode = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div>
      <div className={css.container}>
        <h1 id={css.heading}>
          <Link className={css.links} to={"/"}>
            Flavors of the World{" "}
          </Link>
        </h1>
        <button id={css.menu} onClick={toggleMenu}>
          <Menu />
        </button>
        <Sidebar isOpen={isOpen} />
        <button id={css.mode} onClick={toggleMode}>
          {darkMode ? <Sun /> : <Moon />}
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
            onFocus={() => setShowCountries(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
