import React from "react";
import Background from "../assets/World_Cup_Background.jpg";
import Styles from "../components/home_component.module.css";

const HomeComponent = () => {
  return (
    <div className={Styles.container}>
      <img src={Background} alt="background"></img>
    </div>
  );
};

export default HomeComponent;
