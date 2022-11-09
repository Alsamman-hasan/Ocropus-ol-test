import { useState } from "react";
import "./footerLeft.scss";
import { inputscollection } from "./constants";
import { IState } from "../../types";
import { ButtonDiscktopBlue } from "../../../../UiKit/Buttons";
import { InputInUi } from "../../../../UiKit/inputs";

const FooterLeft = () => {
  const [state, setState] = useState<IState>({});

  const onHandelChange = (params: string, value: string) => {
    setState((prev) => ({ ...prev, [params]: value }));
    console.log(params);
  };
  return (
    <div className="footerLeft">
      <div className="footerLeft__header">
        <span className="footerLeft__header-title">
          Мы готовы обсудить новый проект
        </span>
        <span className="footerLeft__header-subTitle">
          Присылайте ваш проект на оценку. А также мы ответим на ваши вопросы.
        </span>
      </div>
      <div className="footerLeft__forms">
        {inputscollection(state).map((item) => (
          <div key={item.params}>
            <InputInUi
              value={item.value}
              handleChange={onHandelChange}
              fullWidth
              label={item.label}
              params={item.params}
            />
          </div>
        ))}
      </div>
      <div className="footerLeft__footers">
        <div className="footerLeft__btn">
          <ButtonDiscktopBlue
            fullWidth
            text="Оценить проект"
            style={{ background: "#17CEE0", padding: "16px 24px" }}
          />
        </div>
        <div className="footerLeft__text">
          <span>
            Нажимая кнопку «Оценить проект», я даю свое согласие на обработку
            моих персональных данных, в соответствии с Федеральным законом от
            27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для
            целей, определенных в{" "}
          </span>{" "}
          <a href="/">Согласии на обработку персональных данных.</a>
        </div>
      </div>
    </div>
  );
};

export default FooterLeft;
