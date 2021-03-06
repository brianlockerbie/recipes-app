import React from "react";
import Container from "./reusableComponents/Container.js";
import Logo from "./Logo";

const Nav = () => {
  return (
    <nav>
      <Container>
        <Logo />
      </Container>
    </nav>
  );
};

export default Nav;
