import React from "react";
import FooterLeft from "./components/left/FooterLeft";
import FooterRight from "./components/right/FooterRight";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-wrapper__content">
        <FooterLeft />
        <FooterRight />
      </div>
      <div className="footer-wrapper__footer">
        <span>2022</span>
        <span>Copyright © Octopus Lab</span>
        <span>Пользовательское соглашение</span>
      </div>
    </div>
  );
};

export default Footer;
