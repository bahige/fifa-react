import "./App.css";
import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import RoutedComponent from "./components/routed_component";
// import BodyComponent from "./components/body_component";

export class App extends Component {
  render() {
    return (
      <div id="main_container">
        <Header></Header>
        <div id="body">
          <div id="navbar">
            <Navbar></Navbar>
          </div>
          <div id="routed_comp">
            <RoutedComponent></RoutedComponent>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
