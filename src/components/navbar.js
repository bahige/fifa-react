import React from "react";
import navbarstyle from "../components/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={navbarstyle.navbar}>
      <Link className={navbarstyle.link} to="/all_teams">
        <div> All Federations </div>
      </Link>
      <div> AFC </div>
      <div> CAF </div>
      <div> CONCACAF </div>
      <div> CONMEBOL </div>
      <div> UEFA </div>
    </div>
  );
};

export default Navbar;
