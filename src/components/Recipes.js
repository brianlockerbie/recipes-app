import React from "react";
import { RecipesContext } from "../context/RecipesContext";
import { Link } from "react-router-dom";

const Recipes = () => {
  const { recipes, error, loading } = useContext(RecipesContext);

  return (
    <>
      {error && <h1>Error...</h1>}
      {recipes && 
        !error && 
        !loading && 
        recipes.map((recipe, index) => (
          <div key={index} className="recipe">
            <a
              href={recipe.recipe.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                style={{
                  background: `url(${recipe.recipe.image}) no-repeat center/cover`,
                }}
                className="recipeBg"
              ></div>
            </a>
            <div classNAme="recipeInfo">
              <p>{recipe.recipe.label}</p>
              <p>{Math.floor(recipe.recipe.calories)} calories</p>
              <Link to="/">View more</Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default Recipes;
