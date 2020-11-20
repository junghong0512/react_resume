import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Button, Collapse, Toolbar } from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";

import "./HomeHeader.css";

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
}));

export default function HomeHeader() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

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
