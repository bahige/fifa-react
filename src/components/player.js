import React from "react";
import PlayerStyles from "../components/player.module.css";

const Player = ({ player }) => {
  return (
    <div id={PlayerStyles.player_container}>
      <div>
        <img src={player.image} alt={player.name}></img>
      </div>
      <div className={PlayerStyles.caption}>{player.name}</div>
      <div className={PlayerStyles.caption}>Age: {player.age}</div>
      <div className={PlayerStyles.caption}>Club: {player.club}</div>
    </div>
  );
};

export default Player;
