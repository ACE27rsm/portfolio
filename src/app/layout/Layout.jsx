import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Box, withStyles } from "@material-ui/core";

//* components
import LayoutNavBar from "./components/LayoutNavBar";

//* static
import { colors, fonts } from "../../settings";

//=b css
const style = (theme) => {
  console.log("SPACE", theme.spacing(10));
  const pad = theme.spacing(5);

  return {
    root: {
      padding: pad,
      position: "relative",
      background: colors.background,
      minHeight: "100vh",
      minWidth: "100vw",
      [theme.breakpoints.down("xs")]: {
        padding: pad / 2,
      },
    },

    section: {
      background: colors.background,
      fontFamily: fonts.title,
      padding: pad / 2,
      color: theme.palette.primary.dark,
      position: "absolute",
      top: 0,
      right: 0,
      fontSize: "1.5rem",
      textAlign: "end",
      [theme.breakpoints.down("xs")]: {
        padding: pad / 4,
      },
    },

    children: {
      paddingTop: pad / 1.5,
      border: "2px solid",
      borderColor: theme.palette.primary.dark,
      minHeight: `calc(100vh - ${pad * 2}px)`,
      padding: pad / 2,
      [theme.breakpoints.down("xs")]: {
        paddingTop: pad,
        minHeight: `calc(100vh - ${pad}px)`,
        padding: pad / 4,
      },
    },

    nav: {
      width: "100vw",
      position: "fixed",
      bottom: 50,
      left: 0,
      display: "flex",
      justifyContent: "center",
    },
  };
};

//=STRT ================================
const Layout = ({ classes, section, children, ui }) => {
  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>{section}</Box>
      <Box className={classes.children}>{children}</Box>

      <LayoutNavBar />
    </Box>
  );
};

//=+ REDUX ----------------------------------------
const mapStateToProps = (state, ownProps) => {
  return {
    ui: state.ui,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Layout));