import React, { useState } from "react";
import { Box, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import clsx from "clsx";

//=b css
const style = (theme) => ({
  rootNav: {
    position: "fixed",
    bottom: 30,
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

  rootIconContainer: {
    width: 150,
    height: 150,
    position: "relative",
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
    "&:hover": {
      "& .navIconTop": {
        opacity: 1,
        top: -150,
        [theme.breakpoints.down("lg")]: {
          top: -100,
        },
        [theme.breakpoints.down("sm")]: {
          top: -80,
        },
        [theme.breakpoints.down("xs")]: {
          top: -70,
        },
      },

      "& .navIconRight": {
        opacity: 1,
        left: 150,
        [theme.breakpoints.down("lg")]: {
          left: 100,
        },
        [theme.breakpoints.down("sm")]: {
          left: 80,
        },
        [theme.breakpoints.down("xs")]: {
          left: 70,
        },
      },

      "& .navIconLeft": {
        opacity: 1,
        left: -150,
        [theme.breakpoints.down("lg")]: {
          left: -100,
        },
        [theme.breakpoints.down("sm")]: {
          left: -80,
        },
        [theme.breakpoints.down("xs")]: {
          left: -70,
        },
      },
    },
  },

  rootIconContainerNotClicked: {
    "& .navIconTop, .navIconRight, .navIconLeft": {
      opacity: 0,
      top: -0,
    },

    "& .navIconRight": {
      opacity: 0,
      left: 0,
    },

    "& .navIconLeft": {
      opacity: 0,
      left: -0,
    },
  },

  rootIconContainerClicked: {
    "& .navIconTop": {
      opacity: 1,
      top: -150,
      [theme.breakpoints.down("lg")]: {
        top: -100,
      },
      [theme.breakpoints.down("sm")]: {
        top: -80,
      },
      [theme.breakpoints.down("xs")]: {
        top: -70,
      },
    },

    "& .navIconRight": {
      opacity: 1,
      left: 150,
      [theme.breakpoints.down("lg")]: {
        left: 100,
      },
      [theme.breakpoints.down("sm")]: {
        left: 80,
      },
      [theme.breakpoints.down("xs")]: {
        left: 70,
      },
    },

    "& .navIconLeft": {
      opacity: 1,
      left: -150,
      [theme.breakpoints.down("lg")]: {
        left: -100,
      },
      [theme.breakpoints.down("sm")]: {
        left: -80,
      },
      [theme.breakpoints.down("xs")]: {
        left: -70,
      },
    },
  },

  iconContainer: {
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

  navIconRightDelay: {
    transitionDelay: "0.4s",
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
  const [clicked, setClicked] = useState(false);

  //=? Cycle

  //=+ Handlers
  //+ ******************************************************************
  const handleClick = () => setClicked((prevState) => !prevState);

  //+ ******************************************************************
  const handleNavigate = (path) => history.push(path);
  //=g Utils

  //=o Variables
  let icon = null;
  let leftIcon = null;
  let rightIcon = null;
  let topIcon = "/icons/home.svg";
  let leftNavigate = null;
  let rightNavigate = null;

  if (location.pathname === "/portfolio") {
    icon = "icons/portfolio.svg";
    leftIcon = "icons/curriculum.svg";
    rightIcon = "icons/contatti.svg";
    leftNavigate = "/curriculum";
    rightNavigate = "/curriculum";
  } else if (location.pathname === "/curriculum") {
    icon = "icons/curriculum.svg";
    leftIcon = "icons/portfolio.svg";
    rightIcon = "icons/contatti.svg";
    leftNavigate = "/portfolio";
    //TODO: sistemare NAVIGATE
    rightNavigate = "/curriculum";
  } else if (location.pathname === "/contatti") {
    icon = "icons/contatti.svg";
    leftIcon = "icons/portfolio.svg";
    rightIcon = "icons/curriculum.svg";
    leftNavigate = "/portfolio";
    rightNavigate = "/curriculum";
  }

  return (
    <>
      {icon && (
        <Box className={classes.rootNav}>
          <Box
            className={clsx(
              classes.rootIconContainer,
              clicked && classes.rootIconContainerClicked
            )}
          >
            <Box className={classes.iconContainer}>
              <NavIcon icon={icon} menu onClick={handleClick} />
            </Box>

            {/* //=? Top Icon */}
            <Box
              className={clsx(
                classes.navIcon,
                classes.navIconTopDelay,
                "navIconTop"
              )}
            >
              <Box className={classes.iconContainer}>
                <NavIcon icon={topIcon} onClick={() => handleNavigate("/")} />
              </Box>
            </Box>

            {/* //=? Left Icon */}
            <Box className={clsx(classes.navIcon, "navIconLeft")}>
              <Box className={classes.iconContainer}>
                <NavIcon
                  icon={leftIcon}
                  onClick={() => handleNavigate(leftNavigate)}
                />
              </Box>
            </Box>

            {/* //=? Right Icon */}
            <Box
              className={clsx(
                classes.navIcon,
                classes.navIconRightDelay,
                "navIconRight"
              )}
            >
              <Box className={classes.iconContainer}>
                <NavIcon
                  icon={rightIcon}
                  onClick={() => handleNavigate(rightNavigate)}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default withStyles(style)(withRouter(LayoutNavBar));
