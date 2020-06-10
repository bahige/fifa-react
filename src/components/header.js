import React from "react";
import WorldCupLogo from "../assets/wc_logo.png";
import Facebook from "../assets/facebook.png";
import Twitter from "../assets/twitter.png";
import Instagram from "../assets/instagram.png";
import Menu from "../assets/three_menu.png";
import headerstyle from "../components/header.module.css";

const Header = (props) => {
  return (
    <div className={headerstyle.header}>
      <img
        className={headerstyle.logo}
        src={WorldCupLogo}
        alt="World Cup Logo"
      ></img>
      <div className={headerstyle.social_media_container}>
        <img
          className={headerstyle.social_media}
          src={Facebook}
          alt="facebook_logo"
        ></img>
        <img
          className={headerstyle.social_media}
          src={Twitter}
          alt="twitter_logo"
        ></img>
        <img
          className={headerstyle.social_media}
          src={Instagram}
          alt="instagram_log"
        ></img>
        <img
          onClick={props.clickMenu}
          className={headerstyle.social_media}
          src={Menu}
          alt="menu"
        ></img>
      </div>
    </div>
  );
};

export default Header;
