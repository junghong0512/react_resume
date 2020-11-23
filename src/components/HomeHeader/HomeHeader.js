import React, { useEffect, useState } from "react";
import { Link as Scroll } from "react-scroll";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Button,
  Collapse,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import Typed from "react-typed";
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
  titleName: {
    fontSize: "4rem",
    color: "#bd8c7d",
    marginBottom: "3rem",
  },
  titleDescription: {
    fontSize: "3rem",
    color: "#d1bfa7",
    marginBottom: "3rem",
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
          <Typography className={classes.titleName}>
            <Typed strings={["Jung Hong"]} typeSpeed={40} />
          </Typography>
          <Typography className={classes.titleDescription}>
            <Typed
              strings={["Web Developer", "Full Stack Developer"]}
              typeSpeed={40}
              loop
            />
          </Typography>
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
