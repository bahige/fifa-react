import React from "react";
import navbarstyle from "../components/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={navbarstyle.navbar}>
      <Link className={navbarstyle} to="/all_teams">
        <div> All Federations </div>
      </Link>
      <Link className={navbarstyle} to="/afc">
        <div> AFC </div>
      </Link>
      <Link className={navbarstyle} to="/caf">
        <div> CAF </div>
      </Link>
      <Link className={navbarstyle} to="/concacaf">
        <div> CONCACAF </div>
      </Link>
      <Link className={navbarstyle} to="/conmebol">
        <div> CONMEBOL </div>
      </Link>
      <Link className={navbarstyle} to="/uefa">
        <div> UEFA </div>
      </Link>
    </div>
  );
};

export default Navbar;
