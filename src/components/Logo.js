import React from "react";
import { Link } from "React-router-dom"

const Logo = () => {
  return (
    <Link to="/" className="logo"> 
      Recipes<span>.</span>
    </Link>
  );
};

export default Logo;