import React, { useContext } from "react";
import { RecipesContext } from "../context/RecipesContext";
import Button from "./reuseableComponents/Buttons";

const Pagination = () => {
  const { isHidden, error, loading } = useContext(RecipesContext);

  return (
    <>
      {isHidden && !loading && !error && (
        <div className="pagination">
          <Button />
          <Button />
        </div>
      )}
    </>
  );
};

export default Pagination;