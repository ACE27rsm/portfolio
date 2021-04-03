import React, { useState, useEffect } from "react";
import { Box, Slide, withStyles } from "@material-ui/core";
import _ from "lodash";

//=b css
const style = (theme) => ({});

//g -----------------------------------
const Menu = ({ timeout }) => (
  <>
    <Slide
      direction="up"
      in={true}
      style={{
        transitionDelay: timeout,
      }}
    >
      <Box width={100} height={100} bgcolor="red"></Box>
    </Slide>
  </>
);

//=STRT ================================
const NavBar = ({ classes }) => {
  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Box
      position="fixed"
      bottom={50}
      display="flex"
      justifyContent="space-evenly"
      width="100vw"
    >
      <Menu timeout={1000} />
      <Menu timeout={1500} />
      <Menu timeout={2000} />
    </Box>
  );
};

export default withStyles(style)(NavBar);
