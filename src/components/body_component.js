import React from "react";
import Navbar from "../components/navbar";
import RoutedComponent from "../components/routed_component";

const BodyComponent = () => {
  return (
    <div id="body">
      <Navbar></Navbar>
      <RoutedComponent></RoutedComponent>
    </div>
  );
};

export default BodyComponent;
