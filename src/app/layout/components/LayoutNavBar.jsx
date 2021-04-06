import React, { useState, useEffect } from "react";
import { Box, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import clsx from "clsx";

//=b css
const style = (theme) => ({
  iconContainer: {
    width: 150,
    height: 150,
    position: "relative",
    [theme.breakpoints.down("md")]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down("xs")]: {
      width: 70,
      height: 70,
    },
  },

  iconContainer2: {
    width: 150,
    height: 150,
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down("xs")]: {
      width: 70,
      height: 70,
    },
  },

  iconRoot: {
    background: "rgba(255,255,255,0.9)",
    boxShadow: theme.shadows[2],
    borderRadius: 75,
    transition: "0.4s",
    position: "absolute",
    [theme.breakpoints.down("md")]: {
      borderRadius: 50,
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: 35,
    },
  },

  navIcon: {
    position: "absolute",
    borderRadius: 75,
    width: 150,
    height: 150,
    opacity: 0,
    top: 0,
    left: 0,
    transition:
      "opacity 0.3s linear, top 0.3s ease-in, left 0.3s ease-in, width 0.3s ease-in",
    [theme.breakpoints.down("md")]: {
      borderRadius: 50,
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down("xs")]: {
      borderRadius: 35,
      width: 70,
      height: 70,
    },
  },

  navIconTopDelay: {
    transitionDelay: "0.2s",
  },

  navIconTop: {
    opacity: 1,
    top: -200,
    height: 350,
    [theme.breakpoints.down("md")]: {
      top: -150,
      height: 250,
    },
    [theme.breakpoints.down("xs")]: {
      top: -100,
      height: 170,
    },
  },

  navIconLeft: {
    opacity: 1,
    left: -200,
    width: 350,
    [theme.breakpoints.down("md")]: {
      left: -150,
      width: 250,
    },
    [theme.breakpoints.down("xs")]: {
      left: -100,
      width: 170,
    },
  },

  navIconRightDelay: {
    transitionDelay: "0.4s",
  },

  navIconRightFlex: {
    display: "flex",
    justifyContent: "flex-end",
  },

  navIconRight: {
    opacity: 1,
    width: 350,
    [theme.breakpoints.down("md")]: {
      width: 250,
    },
    [theme.breakpoints.down("xs")]: {
      width: 170,
    },
  },

  rootNav: {
    width: "100vw",
    position: "fixed",
    bottom: 50,
    left: 0,
    display: "flex",
    justifyContent: "center",
  },
  rootNav2: {
    width: "100vw",
    position: "fixed",
    bottom: 40,
    left: 0,
    display: "flex",
    justifyContent: "center",
  },

  aurea: {
    // background: "green",
    width: 500,
    height: 400,
    borderTopRightRadius: 500,
    borderTopLeftRadius: 500,
    [theme.breakpoints.down("md")]: {
      width: 370,
      height: 250,
      borderTopRightRadius: 370,
      borderTopLeftRadius: 370,
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
      height: 170,
      borderTopRightRadius: 250,
      borderTopLeftRadius: 250,
    },
  },
});

//g --------------------------------------
const NavIcon = withStyles(style)(({ classes, icon, menu }) => (
  <Box
    width={menu ? 1 : "70%"}
    height={menu ? 1 : "70%"}
    p={2}
    className={classes.iconRoot}
    zIndex={1000}
  >
    <img src={icon} alt={icon} />
  </Box>
));

//=STRT ================================
const LayoutNavBar = ({ classes, location }) => {
  //=y State

  const [hovered, setHovered] = useState(false);

  //=? Cycle

  //=+ Handlers
  const handleClick = () => setHovered((prevState) => !prevState);
  const handleHoverIn = () => {
    setHovered(true);
  };
  const handleHoverOut = () => {
    setHovered(false);
  };

  //=g Utils

  //=o Variables
  let icon = null;
  let leftIcon = null;
  let rightIcon = null;

  if (location.pathname === "/portfolio") {
    icon = "icons/portfolio.svg";
    leftIcon = "icons/curriculum.svg";
    rightIcon = "icons/contatti.svg";
  } else if (location.pathname === "/curriculum") {
    icon = "icons/curriculum.svg";
    leftIcon = "icons/portfolio.svg";
    rightIcon = "icons/contatti.svg";
  } else if (location.pathname === "/contatti") {
    icon = "icons/contatti.svg";
    leftIcon = "icons/portfolio.svg";
    rightIcon = "icons/curriculum.svg";
  }

  return (
    <>
      <Box className={classes.rootNav2}>
        <Box className={classes.aurea} onMouseLeave={handleHoverOut} />
      </Box>
      {icon && (
        <Box className={classes.rootNav}>
          <Box
            className={classes.iconContainer}
            onClick={handleClick}
            onMouseEnter={handleHoverIn}
            // onMouseLeave={handleHoverOut}
          >
            <NavIcon icon={icon} menu />

            {/* //=? Top Icon */}
            <Box
              className={clsx(
                classes.navIcon,
                classes.navIconTopDelay,
                hovered && classes.navIconTop
              )}
            >
              <Box className={classes.iconContainer2}>
                <NavIcon icon={icon} />
              </Box>
            </Box>

            {/* //=? Left Icon */}
            <Box
              className={clsx(classes.navIcon, hovered && classes.navIconLeft)}
            >
              <Box className={classes.iconContainer2}>
                <NavIcon icon={leftIcon} />
              </Box>
            </Box>

            {/* //=? Right Icon */}
            <Box
              className={clsx(
                classes.navIcon,
                classes.navIconRightDelay,
                classes.navIconRightFlex,
                hovered && classes.navIconRight
              )}
            >
              <Box className={classes.iconContainer2}>
                <NavIcon icon={rightIcon} />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default withStyles(style)(withRouter(LayoutNavBar));
