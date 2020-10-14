import React, { useState, useEffect, createContext } from "react";

export const RecipesContext = createContext();

export const RecipesState = ({ children }) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [firstRecipe, setFirstRecipe] = useState(0);
    const [lastRecipe, setLastRecipe] = useState(9);
    const [isHidden, setIsHidden] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const APP_ID ="919a9d19";
    const APP_KEY = "370b87026149f014efaae07078e219bc";

    return(
        <RecipesContext.Provider value={( )}>
            {children}
        </RecipesContext.Provider>
    )
}