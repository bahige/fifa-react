import React from "react";
import navbarstyle from "../components/navbar.module.css";

const Navbar = () => {
  return (
    <div className={navbarstyle.navbar}>
      <div> All Federations </div>
      <div> AFC </div>
      <div> CAF </div>
      <div> CONCACAF </div>
      <div> CONMEBOL </div>
      <div> UEFA </div>
    </div>
  );
};

export default Navbar;
