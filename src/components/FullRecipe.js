import React, { useContext } from "react";
import { useParams } from "react-reouter-dom";
import { RecipesContext } from "../context/RecipesContext";
import Container from "./resuableComponents/Container";

const FullRecipe = () => {
  const { recipes } = useContext(RecipesContext);
  const { id } = useParams();

  return (
    <section className="fullRecipe">
      <Container>
          {recipes && recipes
          .filter((recipeData) => recipeData.recipe.label === id)
          .map((recipeData, index) => (
              <div key={index} classNAme="fullRecipeCard">
                   <div className="fullRecipeBg"></div> 
              </div>
          ))
          }
      </Container>
    </section>
  );
};

export default FullRecipe;