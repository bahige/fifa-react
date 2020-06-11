import React, { Component } from "react";
import axios from "axios";
import teamsStyle from "../components/teams.module.css";

class Teams extends Component {
  constructor(props) {
    super(props);
    this.state = { teams: [], error: "" };
  }

  url = "https://api.npoint.io/9b010625e1bef21d1aea";

  componentDidMount() {
    axios
      .get(this.url)
      .then((res) => this.setState({ teams: res.data["teams"] }))
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    const { teams, error } = this.state;

    const teamsList = teams.map((team) => {
      return (
        <div className={teamsStyle.singleTeam} key={team.id}>
          <div id={teamsStyle.img_cont}>
            <img src={team.flag} alt={team.country}></img>
          </div>
          <div id={teamsStyle.caption}> {team.country}</div>
        </div>
      );
    });

    return error !== null ? (
      <div id={teamsStyle.teams_grid}>{teamsList}</div>
    ) : (
      <div>There is an error in loading data from server.</div>
    );
  }
}

export default Teams;
