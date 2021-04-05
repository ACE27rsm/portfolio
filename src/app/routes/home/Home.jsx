import React, { Fragment, useState, useEffect } from "react";
import { Box, Fade, Typography, withStyles } from "@material-ui/core";
import _ from "lodash";

//* compnents
import NavBar from "./components/NavBar";

//=b css
const style = (theme) => ({
  background: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    overflow: "hidden",
    opacity: 0.25,
    zIndex: -100,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },

  title: {
    padding: theme.spacing(10),
    lineHeight: 1,
    textAlign: "end",
    color: theme.palette.primary.dark,
    fontSize: "8rem",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(4),
      fontSize: "6rem",
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
      fontSize: "4.2rem",
    },
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(4),
      fontSize: "3rem",
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
      fontSize: "2rem",
    },
  },

  subTitle: {
    fontSize: "2rem",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "0.75rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.5rem",
    },
  },

  navbar: {
    padding: theme.spacing(10),
    display: "flex",
    justifyContent: "flex-end",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(2),
    },
  },

  stroke: {
    borderBottom: "2px solid",
    borderColor: theme.palette.primary.dark,
  },
});

//=STRT ================================
const Home = ({ classes }) => {
  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Box overflow="hidden">
      <div className={classes.background}>
        <img src="images/back2.jpg" alt="Lucia Zavatta web page" />
      </div>

      {/* //=? */}
      <Fade
        in={true}
        timeout={{
          appear: 1500,
          enter: 1500,
          exit: 500,
        }}
      >
        <Box>
          <Box className={classes.title}>
            LUCIA <br /> ZAVATTA
            <Box display="flex" alignItems="center" width={1}>
              <Box flexGrow={1} mr={3}>
                <Box width={1} height="1px" className={classes.stroke} />
              </Box>
              <Box className={classes.subTitle}>Graphic Designer</Box>
            </Box>
          </Box>
        </Box>
      </Fade>
      <Box className={classes.navbar}>
        <NavBar />
      </Box>
    </Box>
  );
};

export default withStyles(style)(Home);
