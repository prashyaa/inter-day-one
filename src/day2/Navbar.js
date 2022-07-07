import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">AboutUs</Link>
    </>
  );
};

export default NavBar;
