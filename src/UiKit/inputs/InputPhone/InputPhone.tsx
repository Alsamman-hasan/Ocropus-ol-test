import React, { FC } from "react";
import { IInputsProps } from "../types";
import { TextField } from "@mui/material";
import "./inputPhone.scss";

const InputPhone: FC<IInputsProps> = ({
  value,
  handleChange,
  fullWidth,
  style,
  label,
  params = "",
}) => {
  return (
    <div className="input-container">
      <TextField
        label={label}
        fullWidth={fullWidth}
        variant="standard"
        type="phone"
        style={style}
        sx={{ maxWidth: fullWidth ? "inherit" : "12rem" }}
        value={value}
        onChange={(event) => handleChange(params, event.target.value)}
        autoComplete="off"
      />
    </div>
  );
};

export default InputPhone;
