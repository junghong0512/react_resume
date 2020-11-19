import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Collapse,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import { Sort, ExpandMore } from "@material-ui/icons";

import "./HomeHeader.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none !important",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  icon: {
    color: "#d4d4dc",
    fontSize: "2rem",
  },
  appbarTitle: {
    color: "#d4d4dc",
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "#feda6a",
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontSize: "4.5rem",
    color: "#d4d4dc",
    fontWeight: "600",
    marginBottom: "5rem",
  },
  goDown: {
    color: "#feda6a",
    fontSize: "4rem",
  },
  menuItem: {
    color: "whtie",
  },
}));

export default function HomeHeader() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className={classes.root} id="main">
      <AppBar className={classes.appbar} position="absolute" elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            <Button onClick={refreshPage}>
              My<span className={classes.colorText}>Resume.</span>
            </Button>
          </h1>
          {/* <IconButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <Sort className={classes.icon} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className={classes.menu}
          >
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <Link to="/">Resume</Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <Link to="/portfolio">Portfolio</Link>
            </MenuItem>
            <MenuItem onClick={handleClose} className={classes.menuItem}>
              <Scroll to="main_content">
                <Link to="/contact">Contact</Link>
              </Scroll>
            </MenuItem>
          </Menu> */}
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={20}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br />
            my
            <span className={classes.colorText}> Resume.</span>
          </h1>
          <Scroll to="main_content" smooth={true}>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<ExpandMore />}
            >
              View My Resume
            </Button>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}
