import React, { FC, useMemo } from "react";
import "./buttonDiscktopBlue.scss";
import { ICustomButtonProps } from "../types";
import Button from "@mui/material/Button";

const ButtonDiscktopBlue: FC<ICustomButtonProps> = ({
  fullWidth,
  text = "",
  disabled,
  onClick,
  style,
  minWidth,
  typeButton,
}) => {
  const fullWidthInput = fullWidth ? "full-width-input" : "";

  const newMinWidth = useMemo(() => {
    if (typeof minWidth === "string") return minWidth;
    if (typeof minWidth === "boolean" && minWidth) return "7.5rem";
    return "";
  }, [minWidth]);

  return (
    <div
      className={`primary-button-container ${fullWidthInput}`}
      style={{ minWidth: newMinWidth }}
    >
      <div className={"primary-button"}>
        <Button
          disableRipple={true}
          disabled={disabled}
          fullWidth={fullWidth}
          onClick={onClick}
          type={typeButton}
          style={style}
        >
          {text}
        </Button>
      </div>
    </div>
  );
};

export default ButtonDiscktopBlue;
