import React, { useState } from "react";
import iconSearch from "../../assets/images/icon-search.svg";
import { useContext } from "react";
import { Link } from "react-router";
import { FoodContext } from "../../FoodContext/FoodContext";
import "./Recipelist.css";

const RecipeList = () => {
  const [search, setSearch] = useState("");
  const { filteredRecipes, searchIngredients } = useContext(FoodContext);

  //searching for ingredients
  const handleSearch = (e) => {
    setSearch(e.target.value);
    searchIngredients(e.target.value);
  };
  return (
    <div className="menu">
      <div className="menu-desc">
        <h1>Explore our simple, healthy recipes</h1>
        <p>
          Discover eight quick, whole-food dishes that fit real life schedules
          and taste amazing.Use the search bar to find a recipe by name or
          ingredient, or simple scroll the list and let something delicious
          catch your eye.
        </p>
      </div>
      <div className="menu-analysis">
        <div className="menu-selection">
          <div className="prep-time">
            <select name="" id="">
              <option value="">Max Prep Time</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>

          <div className="cook-time">
            <select name="" id="">
              <option value="">Max Cook Time</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </select>
          </div>
        </div>
        <div className="menu-search">
          <img src={iconSearch} alt={iconSearch} />
          <input
            type="text"
            placeholder="search by name or ingredient..."
            id=""
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="menu-grid">
        {filteredRecipes.map((recipe) => {
          const {
            id,
            title,
            image,
            overview,
            servings,
            prepMinutes,
            cookMinutes,
          } = recipe;
          return (
            <div className="menu-card" key={id}>
              <img src={image} alt={image} />
              <h3>{title}</h3>
              <p>{overview}</p>
              <p>
                <span>{servings}</span>
                <span>{prepMinutes}</span>
              </p>
              <span>{cookMinutes}</span>
              <Link to={`${recipe.id}`}>
                <div className="btn-btn">
                  <button>View recipe</button>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecipeList;
