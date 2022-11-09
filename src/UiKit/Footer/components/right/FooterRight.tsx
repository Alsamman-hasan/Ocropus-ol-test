import React from "react";
import "./footerRight.scss";
// import avatar from "static/assets/png/avatar.svg";
import { ButtonDefault } from "../../../../UiKit/Buttons";
import { EmailSVG, PhoneSVG } from "../../../../static/assets/svg/desktopSVG";
import {
  FacebookSVG,
  InstagramSVG,
  TelegramSVG,
  VkSVG,
} from "../../../../static/assets/svg/social";

const FooterRight = () => {
  return (
    <div className="footerRight">
      <div className="footerRight__info">
        <div className="footerRight__container">
          <div className="footerRight__header">
            <span>
              Вы также можете написать нам в чат. Наш менеджер ответит на все
              интересующие вас вопросы.
            </span>
          </div>
          <div className="footerRight__manager">
            <div className="footerRight__manager_img">
              {/* <img src={avatar} className="" alt="" /> */}
              <span className="footerRight__manager_onlin"></span>
            </div>
            <div className="footerRight__manager_info">
              <span className="footerRight__manager_name">Иванова Марина</span>
              <span className="footerRight__manager_position">
                Менеджер проектов
              </span>
            </div>
          </div>
          <div className="footerRight__btn">
            <ButtonDefault
              text="Написать в чат"
              style={{
                padding: "12px 24px",
                border: "1px solid #FFFFFF",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
      <div className="footerRight__contacts">
        <span className="footerRight__contacts_header">Наши контакты</span>
        <div className="footerRight__contacts_item">
          <EmailSVG />
          <span>nashapochta@gmail.com</span>
        </div>
        <div className="footerRight__contacts_item">
          <PhoneSVG />
          <span>nashapochta@gmail.com</span>
        </div>
      </div>
      <div className="footerRight__social">
        <TelegramSVG />
        <InstagramSVG />
        <FacebookSVG />
        <VkSVG />
      </div>
    </div>
  );
};

export default FooterRight;
