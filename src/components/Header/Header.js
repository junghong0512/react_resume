import React from "react";
import { Link, NavLink, withRouter } from "react-router-dom";
import { Link as Scroll } from "react-scroll";

import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeRounded, Telegram } from "@material-ui/icons";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";

import "./Header.css";
import { Collapse } from "@material-ui/core";

const Header = ({ checked }) => {
  const pathName = window.location.pathname;

  return (
    // <Navbar expand="lg" sticky="top" className="header">

    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Navbar expand="lg" className="header">
        {/* Home Link */}
        <Scroll to="home_header" smooth={true}>
          <Nav.Link as={NavLink} to="/" className="header_navlink">
            <Navbar.Brand className="header_home">
              <HomeRounded />
            </Navbar.Brand>
          </Nav.Link>
        </Scroll>
        <Nav className="header_left">
          {/* Resume Link */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>

          {/* Portfolio Link */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>

          {/* Contact Link */}
          <Nav.Link
            as={NavLink}
            to="/contact"
            className={
              pathName === "/contact" ? "header_link_active" : "header_link"
            }
          >
            Contact
          </Nav.Link>
        </Nav>

        <div className="header_right">
          {Object.keys(resumeData.socials).map((key, i) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
              key={i}
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
          <Link to="/contact" className="header_button_link">
            <CustomButton text={"Hire Me"} icon={<Telegram />} />
          </Link>
        </div>
      </Navbar>
    </Collapse>
  );
};

export default withRouter(Header);
