import React, { useState, useEffect } from "react";
import { Box, Fade, Slide, withStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import _ from "lodash";

//=b css
const style = (theme) => ({
  icon: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  iconRoot: {
    background: "rgba(255,255,255,0.2)",
    boxShadow: theme.shadows[2],
    borderRadius: 50,
    transition: "0.4s",
    position: "absolute",
    "&:hover": {
      boxShadow: theme.shadows[15],
      marginLeft: -5,
      marginTop: -5,
    },
  },
});

//g -----------------------------------
const NavLink = withStyles(style)(({ classes, timeout, icon, alt }) => {
  //=y State
  const [labelIn, setLabelIn] = useState(false);

  //=? Cycle
  useEffect(() => setTimeout(() => setLabelIn(true), 2500), []);

  return (
    <Box
      marginBottom="50px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Fade in={labelIn}>
        <Box
          mr={2}
          fontSize="1.2rem"
          textAlign="end"
          flexGrow={1}
          color="primary.dark"
        >
          {alt}
        </Box>
      </Fade>
      <Slide
        direction="left"
        in={true}
        style={{
          transitionDelay: timeout,
        }}
      >
        <Link to="/portfolio">
          <Box width={100} height={100} position="relative">
            <Box width={100} height={100} p={2} className={classes.iconRoot}>
              <img src={icon} alt={alt} />
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
    <Box>
      <NavLink timeout={1000} icon="/icons/portfolio.svg" alt="Portfolio" />
      <NavLink timeout={1500} icon="/icons/curriculum.svg" alt="Curriculum" />
      <NavLink timeout={2000} icon="/icons/contatti.svg" alt="Contatti" />
    </Box>
  );
};

export default withStyles(style)(NavBar);
