import React, { useState, useEffect } from "react";
import { Box, Fade, withStyles } from "@material-ui/core";
import _ from "lodash";

//* static
import { colors, fonts } from "../../settings";

//=b css
const style = (theme) => {
  console.log("SPACE", theme.spacing(10));
  const pad = theme.spacing(5);

  const childrenHeight = `calc(100vh - ${pad * 2}px)`;

  return {
    root: {
      padding: pad,
      position: "relative",
      background: colors.background,
      minHeight: "100vh",
      minWidth: "100vw",
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
    },

    children: {
      paddingTop: pad / 1.5,
      border: "2px solid",
      borderColor: theme.palette.primary.dark,
      minHeight: childrenHeight,
      padding: pad / 2,
    },
  };
};

//=STRT ================================
const Layout = ({ classes, children, section }) => {
  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Box className={classes.root}>
      <Box className={classes.section}>{section}</Box>
      <Box className={classes.children}>{children}</Box>
    </Box>
  );
};

export default withStyles(style)(Layout);
