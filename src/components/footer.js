import React from "react";
import footerstyle from "../components/footer.module.css";

const Footer = () => {
  return (
    <div className={footerstyle.footer}>
      <div className={footerstyle.footer_list}>
        <p> Terms of Service </p>
        <p> Privacy Policy </p>
        <p> Cookie Policy </p>
        <p> Downloads </p>
        <p> Contact FIFA </p>
        <p> Mobile Apps </p>
        <p> Jobs </p>
      </div>

      <div className={footerstyle.last_row}>
        <div className={footerstyle.select_div}>
          <select>
            <option> English </option>
            <option> Español </option>
            <option> Français </option>
            <option> عربي </option>
          </select>
        </div>
        <div className={footerstyle.footer_list}>
          <p> Copyright ©1994 - 2020 FIFA. All Rights Reserved.</p>
        </div>
        <div className={footerstyle.dummy_div}></div>
      </div>
    </div>
  );
};

export default Footer;
