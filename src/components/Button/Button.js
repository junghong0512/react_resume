import React from "react";
import { Button } from "@material-ui/core";

import "./Button.css";

const CustomButton = ({ text, icon, type }) => {
  return (
    <Button
      type={type}
      className="custom_btn"
      endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};

export default CustomButton;
