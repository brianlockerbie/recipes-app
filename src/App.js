import React from "react";
import { RecipesState } from "./context/RecipesContext";
import { BrowswerRouter as Router, Route } from "react-router-dom";
import Nav from './components/Nav';
import "./App.css";

const App = () => {
  return (
    <RecipesState>
      <Router>
        <Nav />
      </Router>
    </RecipesState> 
  );
};

export default App;
