import React, { useState, useEffect } from "react";
import {
  Box,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
  withStyles,
} from "@material-ui/core";
import { lightGreen, red } from "@material-ui/core/colors";
import { Provider } from "react-redux";
import _ from "lodash";
import { BrowserRouter, Route } from "react-router-dom";

//* components
import Layout from "./layout/Layout";

//* actions
import { SET_THEME } from "../store/actions/actions";

//* store
import store from "../store/store";

//=b css
const style = (theme) => ({});

const theme = createMuiTheme({
  palette: {
    primary: lightGreen,
    secondary: red,
    text: {
      primary: red[50],
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
          <Route path={"/:filter?"} component={Layout}></Route>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  );
};

export default withStyles(style)(App);
