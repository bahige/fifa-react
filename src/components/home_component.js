import React from "react";
import Background from "../assets/World_Cup_Background.jpg";
import HomeStyles from "../components/home_component.module.css";

const HomeComponent = () => {
  return (
    <div className={HomeStyles.container}>
      <img
        className={HomeStyles.back_image}
        src={Background}
        alt="background"
      ></img>
    </div>
  );
};

export default HomeComponent;
