import React, { Component } from "react";
import axios from "axios";
import Styles from "../components/detailed_team_style.module.css";
import Modal from "react-modal";
import Player from "../components/player";

Modal.setAppElement("#root");

export class detailed_team extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
      error: "",
      modalIsOpen: false,
    };
  }

  url = "https://extendsclass.com/api/json-storage/bin/bdbeaed";

  componentDidMount() {
    axios
      .get(this.url)
      .then((res) => {
        this.setState({ teams: res.data["teams"] });
      })
      .catch((error) => this.setState({ error: error.message }));
  }

  render() {
    let name = this.props.match.params.country;
    const { teams, modalIsOpen } = this.state;

    const teamList = teams.map((team) => {
      return team.country === name ? (
        <div id={Styles.whole_container} key={team.id}>
          <div className={Styles.container}>
            <img
              className={Styles.image_logo}
              src={team.logo}
              alt={team.country}
            ></img>
            <img
              className={Styles.image_flag}
              src={team.flag}
              alt={team.country}
            ></img>
          </div>
          <div className={Styles.container}>
            <div className={Styles.title}> {team.country}</div>
          </div>
          <div className={Styles.caption_container}>
            <div className={Styles.caption}>
              {" "}
              Participations: {team.appearances}
            </div>
            <div className={Styles.caption}> Winners: {team.titles}</div>
            <div className={Styles.caption}> Federation: {team.federation}</div>
          </div>
          <div className={Styles.container}>
            <button onClick={() => this.setState({ modalIsOpen: true })}>
              Team Players
            </button>{" "}
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => this.setState({ modalIsOpen: false })}
          >
            <div id={Styles.modal}>
              <div className={Styles.modal_title}> Team Players </div>
              <div id={Styles.player_container}>
                {team.players.map((player) => (
                  <Player player={player} key={player.id}></Player>
                ))}
              </div>
            </div>
          </Modal>
        </div>
      ) : null;
    });

    return <div>{teamList}</div>;
  }
}

export default detailed_team;
