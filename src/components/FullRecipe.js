import React, { useContext } from "react";
import { useParams } from "react-reouter-dom";
import { RecipesContext } from "../context/RecipesContext";
import Container from "./resuableComponents/Container";

const FullRecipe = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <section className="fullRecipe">
      <Container></Container>
    </section>
  );
};

export default FullRecipe;