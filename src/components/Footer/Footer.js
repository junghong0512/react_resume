import { Typography } from "@material-ui/core";
import React from "react";

import resumeData from "../../utils/resumeData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">Jung Hong</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Design and Developed by{" "}
          <a
            href="https://github.com/junghong91/react_resume"
            target="_blank"
            rel="noreferrer"
          >
            {resumeData.name}
          </a>
          <br />
          Clone idea from{" "}
          <a
            href="https://themeforest.net/user/tavonline/"
            target="_blank"
            rel="noreferrer"
          >
            Tavonline
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
