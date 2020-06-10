import "./App.css";
import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import RoutedComponent from "./components/routed_component";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass: "navbar_hide",
      routedCompClass: "routed_comp_expand",
    };
    this.displayNavbar = this.displayNavbar.bind(this);
  }

  displayNavbar() {
    if (
      this.state.navbarClass === "navbar" &&
      this.state.routedCompClass === "routed_comp"
    ) {
      this.setState({
        navbarClass: "navbar_hide",
        routedCompClass: "routed_comp_expand",
      });
    } else if (
      this.state.navbarClass === "navbar_hide" &&
      this.state.routedCompClass === "routed_comp_expand"
    ) {
      this.setState({
        navbarClass: "navbar",
        routedCompClass: "routed_comp",
      });
    }
  }

  render() {
    return (
      <div id="main_container">
        <Header clickMenu={this.displayNavbar}></Header>
        <div id="body">
          <div class={this.state.navbarClass}>
            <Navbar></Navbar>
          </div>
          <div class={this.state.routedCompClass}>
            <RoutedComponent></RoutedComponent>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
