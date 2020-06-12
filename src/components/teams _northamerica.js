import React, { Component } from "react";
import axios from "axios";
import teamsStyle from "../components/teams.module.css";
import { Link } from "react-router-dom";

class TeamsNorthAmerica extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [], error: "" };
  }

  url = "https://extendsclass.com/api/json-storage/bin/bdbeaed";

  componentDidMount() {
    axios
      .get(this.url)
      .then((res) => this.setState({ teams: res.data["teams"] }))
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    const { teams, error } = this.state;

    const teamsList = teams.map((team) => {
      return team.federation === "CONCACAF" ? (
        <Link
          className={teamsStyle.link}
          to={"/concacaf/" + team.country}
          key={team.id}
        >
          <div className={teamsStyle.singleTeam} key={team.id}>
            <div id={teamsStyle.img_cont}>
              <img src={team.logo} alt={team.country}></img>
            </div>
            <div id={teamsStyle.caption}> {team.country}</div>
          </div>
        </Link>
      ) : null;
    });

    return error !== null ? (
      <div id={teamsStyle.teams_grid}>{teamsList}</div>
    ) : (
      <div>There is an error in loading data from server.</div>
    );
  }
}

export default TeamsNorthAmerica;
