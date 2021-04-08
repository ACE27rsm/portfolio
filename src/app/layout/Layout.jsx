import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import { Box, withStyles } from "@material-ui/core";

//* components
import LayoutNavBar from "./components/LayoutNavBar";

//* static
import { colors, fonts } from "../../settings";

//=b css
const style = (theme) => {
  const pad = theme.spacing(5);

  return {
    root: {
      padding: pad,
      position: "relative",
      background: colors.background,
      minHeight: "100vh",
      minWidth: "calc(100vw - 0.5rem)",
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
  };
};

//=STRT ================================
const Layout = ({ classes, section, children }) => {
  //=y State

  //=? Cycle
  useEffect(() => window.scrollTo(0, 0), [section]);

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
