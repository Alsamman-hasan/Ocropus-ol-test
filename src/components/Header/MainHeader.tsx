import React from "react";
import { ButtonDiscktopPurple } from "../../UiKit/Buttons";
import { LogoSVG } from "../../static/assets/svg/desktopSVG";
import "./mainHeader.scss";

const MainHeader = () => {
  window.addEventListener("scroll", function () {
    const scroll = this.scrollY;
    const elem = document.getElementById("coords");
    if (elem) {
      if (scroll === 0) {
        elem.style.cssText = "box-shadow: none";
      } else {
        elem.style.cssText = "box-shadow: 0px 8px 12px rgba(17, 0, 29, 0.08)";
        elem.style.cssText = "background-color: #FFFFFF;";
      }
    }
  });
  return (
    <div className="main-header-wrapper" id="coords">
      <div className="main-header-wrapper__contetn">
        <div className="main-header-wrapper__logo">
          <LogoSVG />
        </div>
        <div className="main-header-wrapper__info">
          <div className="main-header-wrapper__btn">
            <ButtonDiscktopPurple
              fullWidth
              text="Обсудить проект"
              style={{ backgroundColor: "#450072", padding: "16px 40px" }}
            />
          </div>
          <div className="main-header-wrapper__lan">
            <p>ru</p>
            <span>|</span>
            <p>en</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
