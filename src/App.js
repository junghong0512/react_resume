import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Container,
  Grid,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";

import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

import "./App.css";
import HomeHeader from "./components/HomeHeader/HomeHeader";
import useWindowPosition from "./utils/hooks/useWindowPosition";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#d1bfa7",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/atmospheric-4740395_1280.jpg"
    })`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();

  const checked = useWindowPosition("main");

  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <div className={classes.root} id="home_header">
          <HomeHeader />
        </div>

        <Container className="mt_60" id="main_content">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <Profile className="container_shadow" checked={checked} />
            </Grid>
            <Grid item xs>
              <Header checked={checked} />
              <div className="main_content container_shadow">
                <Switch>
                  <Route path="/" exact component={Resume} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/Contact" component={Contact} />
                </Switch>
              </div>
              <Footer checked={checked} />
            </Grid>
          </Grid>
        </Container>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
