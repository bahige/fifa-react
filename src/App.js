import "./App.css";
import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
