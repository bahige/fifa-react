import "./App.css";
import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import HomeComponent from "./components/home_component";
import Teams from "./components/teams";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import TeamsAfrica from "./components/teams _africa";
import TeamsAsia from "./components/teams _asia";
import TeamsEurope from "./components/teams _europe";
import TeamsSouthAmerica from "./components/teams _southamerica";
import TeamsNorthAmerica from "./components/teams _northamerica";
import DetailedTeam from "./components/detailed_team";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navbarClass: "navbar_hide",
      routedCompClass: "home_comp_expand",
    };
    this.displayNavbar = this.displayNavbar.bind(this);
  }

  displayNavbar() {
    if (
      this.state.navbarClass === "navbar" &&
      this.state.routedCompClass === "home_comp"
    ) {
      this.setState({
        navbarClass: "navbar_hide",
        routedCompClass: "home_comp_expand",
      });
    } else if (
      this.state.navbarClass === "navbar_hide" &&
      this.state.routedCompClass === "home_comp_expand"
    ) {
      this.setState({
        navbarClass: "navbar",
        routedCompClass: "home_comp",
      });
    }
  }

  render() {
    const { navbarClass, routedCompClass } = this.state;

    return (
      <BrowserRouter>
        <div id="main_container">
          <Header clickMenu={this.displayNavbar}></Header>

          <div id="body">
            <div className={navbarClass}>
              <Navbar></Navbar>
            </div>

            <div className={routedCompClass}>
              <Switch>
                <Route exact path="/" component={HomeComponent}></Route>
                <Route exact path="/all" component={Teams}></Route>
                <Route
                  exact
                  path="/all/:country"
                  component={DetailedTeam}
                ></Route>
                <Route exact path="/caf" component={TeamsAfrica}></Route>
                <Route
                  exact
                  path="/caf/:country"
                  component={DetailedTeam}
                ></Route>
                <Route exact path="/afc" component={TeamsAsia}></Route>
                <Route
                  exact
                  path="/afc/:country"
                  component={DetailedTeam}
                ></Route>
                <Route
                  exact
                  path="/conmebol"
                  component={TeamsSouthAmerica}
                ></Route>
                <Route
                  exact
                  path="/conmebol/:country"
                  component={DetailedTeam}
                ></Route>
                <Route
                  exact
                  path="/concacaf"
                  component={TeamsNorthAmerica}
                ></Route>
                <Route
                  exact
                  path="/concacaf/:country"
                  component={DetailedTeam}
                ></Route>
                <Route exact path="/uefa" component={TeamsEurope}></Route>
                <Route
                  exact
                  path="/uefa/:country"
                  component={DetailedTeam}
                ></Route>
              </Switch>
            </div>
          </div>

          <Footer></Footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
