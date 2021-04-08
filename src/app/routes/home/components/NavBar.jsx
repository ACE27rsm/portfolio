import React, { useState, useEffect } from "react";
import { Box, Fade, Slide, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import _ from "lodash";

//=b css
const style = (theme) => ({
  root: {
    width: "100%",
  },

  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  iconContainer: {
    width: 100,
    height: 100,
    position: "relative",
    [theme.breakpoints.down("xs")]: {
      width: 150,
      height: 150,
    },
  },

  iconRoot: {
    background: "rgba(255,255,255,0.2)",
    boxShadow: theme.shadows[2],
    borderRadius: 50,
    transition: "0.4s",
    position: "absolute",
    [theme.breakpoints.down("xs")]: {
      borderRadius: 75,
    },
    "&:hover": {
      boxShadow: theme.shadows[15],
      marginLeft: -5,
      marginTop: -5,
    },
  },
  navItemRoot: {
    marginBottom: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
      width: "100%",
      flexDirection: "column-reverse",
      alignItems: "center",
    },
  },

  navLabel: {
    marginRight: theme.spacing(2),
    fontSize: "1.2rem",
    textAlign: "end",
    flexGrow: 1,
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      textAlign: "center",
      marginRight: 0,
      marginTop: theme.spacing(1),
    },
  },
});

//g -----------------------------------
const NavLink = withStyles(style)(({ classes, timeout, icon, label, to }) => {
  //=y State
  const [labelIn, setLabelIn] = useState(false);

  //=? Cycle
  useEffect(() => setTimeout(() => setLabelIn(true), 2500), []);

  return (
    <Box className={classes.navItemRoot}>
      <Fade in={labelIn}>
        <Box className={classes.navLabel}>{label}</Box>
      </Fade>
      <Slide
        direction="left"
        in={true}
        style={{
          transitionDelay: timeout,
        }}
      >
        <Link to={to}>
          <Box className={classes.iconContainer}>
            <Box width={1} height={1} p={2} className={classes.iconRoot}>
              <img src={icon} alt={label} />
            </Box>
          </Box>
        </Link>
      </Slide>
    </Box>
  );
});

//=STRT ================================
const NavBar = ({ classes }) => {
  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Box className={classes.root}>
      <NavLink
        timeout={1000}
        icon="icons/portfolio.svg"
        label="Portfolio"
        to="/portfolio"
      />
      <NavLink
        timeout={1500}
        icon="icons/skills.svg"
        label="Skills"
        to="/skills"
      />
      <NavLink
        timeout={2000}
        icon="icons/contatti.svg"
        label="Contatti"
        to="/contatti"
      />
    </Box>
  );
};

export default withStyles(style)(NavBar);
