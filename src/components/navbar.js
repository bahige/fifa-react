import React from "react";
import navbarstyle from "../components/navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={navbarstyle.navbar}>
      <Link className={navbarstyle.link} to="/all">
        <div> All Federations </div>
      </Link>
      <Link className={navbarstyle.link} to="/afc">
        <div> AFC </div>
      </Link>
      <Link className={navbarstyle.link} to="/caf">
        <div> CAF </div>
      </Link>
      <Link className={navbarstyle.link} to="/concacaf">
        <div> CONCACAF </div>
      </Link>
      <Link className={navbarstyle.link} to="/conmebol">
        <div> CONMEBOL </div>
      </Link>
      <Link className={navbarstyle.link} to="/uefa">
        <div> UEFA </div>
      </Link>
    </div>
  );
};

export default Navbar;
