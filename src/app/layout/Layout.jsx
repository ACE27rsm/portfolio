import React, { Fragment, useState, useEffect } from "react";
import { Box, Fade, withStyles } from "@material-ui/core";
import _ from "lodash";

//* compnents
import NavBar from "./nav/NavBar";

//=b css
const style = (theme) => ({
  background: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    overflow: "hidden",
    zIndex: -100,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },

  title: {
    fontFamily: "Permanent Marker, cursive",
    textAlign: "end",
    // color: "white",
    fontSize: "10rem",
  },
});

//=STRT ================================
const Layout = ({ classes }) => {
  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <>
      <div className={classes.background}>
        <img src="/images/background.jpg" alt="Lucia Zavatta web page" />
      </div>

      {/* //=? */}
      <Fade
        in={true}
        timeout={{
          appear: 2500,
          enter: 1500,
          exit: 500,
        }}
      >
        <Box p={10} className={classes.title}>
          Lucia Zavatta
        </Box>
      </Fade>

      <NavBar />
    </>
  );
};

export default withStyles(style)(Layout);
