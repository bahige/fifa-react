import React from "react";
import WorldCupLogo from "../assets/wc_logo.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Menu from "../assets/three_menu.png";
import headerStyle from "../components/header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div className={headerStyle.header}>
      <div className={headerStyle.logo_container}>
        <Link to="/">
          <img
            className={headerStyle.logo}
            src={WorldCupLogo}
            alt="World Cup Logo"
          ></img>
        </Link>
        <img
          onClick={props.clickMenu}
          className={headerStyle.social_media}
          src={Menu}
          alt="menu"
        ></img>
      </div>
      <div className={headerStyle.social_media_container}>
        <img
          className={headerStyle.social_media}
          src={Facebook}
          alt="facebook_logo"
        ></img>
        <img
          className={headerStyle.social_media}
          src={Twitter}
          alt="twitter_logo"
        ></img>
        <img
          className={headerStyle.social_media}
          src={Instagram}
          alt="instagram_log"
        ></img>
      </div>
    </div>
  );
};

export default Header;
