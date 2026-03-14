import { memo } from "react";
import { useState } from "react";

// css!
import "./Sidebar.css";

// react-router-dom!
import { Link } from "react-router-dom";

// data!
import { categories } from "../data/categories";

const Sidebar = ({ isOpen }) => {
  const [openCategory, setOpenCategory] = useState(false);

  return (
    <div className={isOpen ? "sidebar active" : "sidebar"}>
      <ul>
        <Link className="normal" to={"/"}>
          <li>Home</li>
        </Link>
        <Link className="normal" to={"/mealbycountry"}>
          <li>Meals by Country</li>
        </Link>
        <Link className="normal" onClick={() => setOpenCategory(!openCategory)}>
          <li>Meals by Category</li>
        </Link>

        {openCategory && (
          <ul className="categoryContainer">
            {categories.map((cat) => (
              <li key={cat}>
                <Link to={`/category/${cat}`}>{cat}</Link>
              </li>
            ))}
          </ul>
        )}

        <Link className="normal" to={"/random"}>
          <li>Random Meal</li>
        </Link>
        <Link className="normal" to={"/favs"}>
          <li>Favorites</li>
        </Link>
        <Link className="normal" to={"/setting"}>
          <li>⚙ Settings</li>
        </Link>
      </ul>
    </div>
  );
};

export default memo(Sidebar);
