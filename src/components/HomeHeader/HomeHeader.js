import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import { Sort, ExpandMore } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none !important",
  },
  icon: {
    color: "#fff",
    fontSize: "2rem",
  },
  appbarTitle: {
    color: "#fff",
    flexGrow: "1",
  },
  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },
  colorText: {
    color: "#5AFF3D",
  },
  container: {
    textAlign: "center",
  },
  title: {
    fontSize: "4.5rem",
    color: "#fff",
    fontWeight: "600",
  },
  goDown: {
    color: "#5AFF3D",
    fontSize: "4rem",
  },
}));

export default function HomeHeader() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="absolute" elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            My<span className={classes.colorText}>Resume.</span>
          </h1>
          <IconButton>
            <Sort className={classes.icon} />
          </IconButton>
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
          <IconButton>
            <ExpandMore className={classes.goDown} />
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}
