import React, { useState, useEffect } from "react";
import { Box, Link, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import clsx from "clsx";

//=b css
const style = (theme) => ({
  rootNav: {
    position: "fixed",
    bottom: 50,
    left: "calc(50vw - 75px)",
    [theme.breakpoints.down("lg")]: {
      left: "calc(50vw - 50px)",
    },
    [theme.breakpoints.down("sm")]: {
      left: "calc(50vw - 40px)",
    },
    [theme.breakpoints.down("xs")]: {
      left: "calc(50vw - 35px)",
    },
  },

  iconContainer: {
    width: 150,
    height: 150,
    position: "relative",
    [theme.breakpoints.down("lg")]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down("lg")]: {
      width: 80,
      height: 80,
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
    [theme.breakpoints.down("lg")]: {
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down("sm")]: {
      width: 80,
      height: 80,
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
    [theme.breakpoints.down("lg")]: {
      borderRadius: 50,
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 40,
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
    [theme.breakpoints.down("lg")]: {
      borderRadius: 50,
      width: 100,
      height: 100,
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 40,
      width: 80,
      height: 80,
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
    [theme.breakpoints.down("lg")]: {
      top: -150,
    },
    [theme.breakpoints.down("sm")]: {
      top: -100,
    },
    [theme.breakpoints.down("xs")]: {
      top: -70,
    },
  },

  navIconLeft: {
    opacity: 1,
    left: -200,
    [theme.breakpoints.down("lg")]: {
      left: -150,
    },
    [theme.breakpoints.down("sm")]: {
      left: -100,
    },
    [theme.breakpoints.down("xs")]: {
      left: -70,
    },
  },

  navIconRightDelay: {
    transitionDelay: "0.4s",
  },

  navIconRight: {
    opacity: 1,
    left: 200,
    [theme.breakpoints.down("lg")]: {
      left: 150,
    },
    [theme.breakpoints.down("sm")]: {
      left: 100,
    },
    [theme.breakpoints.down("xs")]: {
      left: 70,
    },
  },

  rootNav2: {
    position: "fixed",
    bottom: 40,
    left: "calc(50vw - 280px)",
    [theme.breakpoints.down("lg")]: {
      left: "calc(50vw - 130px)",
    },
    [theme.breakpoints.down("xs")]: {
      left: "calc(50vw - 100px)",
    },
  },

  aurea: {
    background: "green",
    width: 560,
    height: 370,
    borderTopRightRadius: 560,
    borderTopLeftRadius: 560,
    [theme.breakpoints.down("lg")]: {
      width: 260,
      height: 180,
      borderTopRightRadius: 260,
      borderTopLeftRadius: 260,
    },
    [theme.breakpoints.down("xs")]: {
      width: 200,
      height: 150,
      borderTopRightRadius: 200,
      borderTopLeftRadius: 200,
    },
  },
});

//g --------------------------------------
const NavIcon = withStyles(style)(({ classes, icon, menu, onClick }) => (
  <Box
    width={menu ? 1 : "70%"}
    height={menu ? 1 : "70%"}
    p={1}
    className={classes.iconRoot}
    zIndex={1000}
    onClick={onClick}
    bgcolor="orange"
  >
    <img src={icon} alt={icon} />
  </Box>
));

//=STRT ================================
const LayoutNavBar = ({ classes, location, history }) => {
  //=y State

  const [hovered, setHovered] = useState(false);

  //=? Cycle

  //=+ Handlers
  //+ ******************************************************************
  const handleClick = () => setHovered((prevState) => !prevState);

  //+ ******************************************************************
  const handleHoverIn = () => {
    setHovered(true);
  };

  //+ ******************************************************************
  const handleHoverOut = () => {
    setHovered(false);
  };

  //+ ******************************************************************
  const handleNavigate = (path) => history.push(path);
  //=g Utils

  //=o Variables
  let icon = null;
  let leftIcon = null;
  let rightIcon = null;
  let topIcon = "/icons/home.svg";

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
      <Box className={classes.rootNav2} bgcolor="blue">
        <Box className={classes.aurea} onMouseLeave={handleHoverOut} />
      </Box>
      {icon && (
        <Box className={classes.rootNav} bgcolor="pink">
          <Box className={classes.iconContainer} onMouseEnter={handleHoverIn}>
            <NavIcon icon={icon} menu onClick={handleClick} />

            {/* //=? Top Icon */}
            <Box
              className={clsx(
                classes.navIcon,
                classes.navIconTopDelay,
                hovered && classes.navIconTop
              )}
            >
              <Box className={classes.iconContainer2}>
                <NavIcon icon={topIcon} onClick={() => handleNavigate("/")} />
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
