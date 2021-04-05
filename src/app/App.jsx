import React, { useState, useEffect } from "react";
import {
  Box,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  withStyles,
} from "@material-ui/core";
import { lightGreen, brown } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import _ from "lodash";
import {
  HashRouter,
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

//* components
import Home from "./routes/home/Home";
import Portfolio from "./routes/portfolio/Portfolio";

//* actions
import { SET_THEME } from "../store/actions/actions";

//* store
import store from "../store/store";

//=b css
const style = (theme) => ({});

const theme = createMuiTheme({
  //=? PALETTE
  palette: {
    primary: {
      light: "#a98274",
      main: "#795548",
      dark: "#4b2c20",
      contrastText: "#fff",
    },
    secondary: {
      light: "#cfff95",
      main: "#9ccc65",
      dark: "#6b9b37",
      contrastText: "#fff",
    },
    text: {
      primary: brown[400],
    },
  },
  //=? TYPOGRAPHY
  typography: {
    fontFamily: "Spartan, Roboto, Helvetica, Arial, sans-serif",
    h1: {
      fontFamily: '"Barriecito" cursive',
    },
  },
});

//=STRT ================================
const App = ({ classes }) => {
  store.dispatch(SET_THEME({ ...theme }));

  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path={"/portfolio"} component={Portfolio}></Route>
            <Route path={"/"} component={Home}></Route>
            <Redirect to="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default withStyles(style)(App);
