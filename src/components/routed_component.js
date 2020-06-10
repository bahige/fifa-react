import React from "react";
import Background from "../assets/World_Cup_Background.jpg";
import Styles from "../components/routed_component.module.css";

const RoutedComponent = () => {
  return (
    <div className={Styles.container}>
      <img src={Background} alt="background"></img>
    </div>
  );
};

export default RoutedComponent;
