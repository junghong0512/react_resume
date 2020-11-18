import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  Container,
  createMuiTheme,
  Grid,
  makeStyles,
  MuiThemeProvider,
} from "@material-ui/core";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

import "./App.css";
import ScrollToTop from "./utils/ScrollToTop";
import HomeHeader from "./components/HomeHeader/HomeHeader";

const theme = createMuiTheme({
  typography: {
    fontFamily: "revert",
  },
  palette: {
    primary: {
      main: "#d1bfa7",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${
      process.env.PUBLIC_URL + "/assets/seascape-5588651_1280.webp"
    })`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <HomeHeader />
      </div>
      <Container className="mt_60">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile className="container_shadow" />
          </Grid>
          <Grid item xs>
            <Router>
              <div className="container_shadow">
                <Header />
              </div>
              <div className="main_content container_shadow">
                <Switch>
                  <Route path="/" exact component={Resume} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/Contact" component={Contact} />
                </Switch>
              </div>
            </Router>
            <div className="container_shadow">
              <Footer />
            </div>
          </Grid>
        </Grid>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
