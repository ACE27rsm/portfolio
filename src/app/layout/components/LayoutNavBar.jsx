import React, { useState } from "react";
import { Box, Tooltip, withStyles } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import clsx from "clsx";

//=b css
const style = (theme) => {
  let size = 150;

  if (theme.breakpoints.down("lg") === "@media (max-width:1919.95px)") {
    size = 100;
  } else if (theme.breakpoints.down("sm") === "@media (max-width:959.95px)") {
    size = 80;
  } else if (theme.breakpoints.down("xs") === "@media (max-width:599.95px)") {
    size = 70;
  }

  console.log("SIZE", size * Math.sin(22), size * Math.cos(22), Math.sin(22));

  return {
    rootNav: {
      position: "fixed",
      bottom: 30,
      left: `calc(50vw - ${size / 2}px)`,
    },

    "@keyframes leftIcon": {
      "0%": { opacity: 0, left: 0 },
      "100%": {
        opacity: 1,
        left: -size,
      },
    },

    "@keyframes leftIconReverse": {
      "0%": {
        opacity: 1,
        left: -size,
      },
      "100%": { opacity: 0, left: 0 },
    },
    "@keyframes topIcon": {
      "0%": { opacity: 0, top: 0 },
      "40%": {
        opacity: 0,
        top: 0,
        left: size * Math.cos(3.14159),
      },
      "55%": {
        opacity: 0.3,
        top: -size * Math.sin(2.79253),
        left: size * Math.cos(2.79253),
      },
      "70%": {
        opacity: 0.7,
        top: -size * Math.sin(2.35619),
        left: size * Math.cos(2.35619),
      },
      "85%": {
        opacity: 0.7,
        top: -size * Math.sin(1.8326),
        left: size * Math.cos(1.8326),
      },
      "100%": {
        opacity: 1,
        top: -size * Math.sin(1.5708),
        left: size * Math.cos(1.5708),
      },
    },

    "@keyframes rightIcon": {
      "0%": {
        opacity: 0,
        top: -size * Math.sin(1.5708),
        left: size * Math.cos(1.5708),
      },
      "40%": {
        opacity: 0,
        top: -size * Math.sin(1.5708),
        left: size * Math.cos(1.5708),
      },
      "55%": {
        opacity: 0,
        top: -size * Math.sin(1.309),
        left: size * Math.cos(1.309),
      },
      "70%": {
        opacity: 0.7,
        top: -size * Math.sin(0.785398),
        left: size * Math.cos(0.785398),
      },
      "85%": {
        opacity: 1,
        top: -size * Math.sin(0.349066),
        left: size * Math.cos(0.349066),
      },
      "100%": {
        opacity: 1,
        top: -size * Math.sin(0),
        left: size * Math.cos(0),
      },
    },
    // "@keyframes topIconXLOut": {
    //   from: { opacity: 1, top: -150 },
    //   to: { opacity: 0, top: 0 },
    // },

    rootIconContainer: {
      width: size,
      height: size,
      position: "relative",
      "&:hover": {
        "& .navIconTop": {
          animationName: "$topIcon",
          animationDuration: "1s",
          animationTimingFunction: "linear",
          animationFillMode: "forwards",
        },

        "& .navIconRight": {
          animationName: "$rightIcon",
          animationDuration: "1.6s",
          animationTimingFunction: "linear",
          animationFillMode: "forwards",
        },

        "& .navIconLeft": {
          animationName: "$leftIcon",
          animationDuration: "0.4s",
          animationTimingFunction: "linear",
          animationFillMode: "forwards",
        },
      },
    },

    rootIconContainerNotClicked: {
      "& .navIconTop": {
        animationName: "$topIcon",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },

      "& .navIconRight": {
        animationName: "$rightIcon",
        animationDuration: "1.6s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },

      "& .navIconLeft": {
        animationName: "$leftIconReverse",
        animationDuration: "0.4s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },
    },

    rootIconContainerClicked: {
      "& .navIconTop": {
        animationName: "$topIcon",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },

      "& .navIconRight": {
        animationName: "$rightIcon",
        animationDuration: "1.6s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },

      "& .navIconLeft": {
        animationName: "$leftIcon",
        animationDuration: "0.4s",
        animationTimingFunction: "ease-in",
        animationFillMode: "forwards",
      },
    },

    iconContainer: {
      width: size,
      height: size,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    iconRoot: {
      cursor: "pointer",
      background: "rgba(255,255,255,0.7)",
      boxShadow: theme.shadows[2],
      borderRadius: "50%",
      transition: "0.4s",
      position: "absolute",
    },

    navIcon: {
      position: "absolute",
      borderRadius: "50%",
      width: size,
      height: size,
      opacity: 0,
      top: 0,
      left: 0,
    },

    // navIconTopDelay: {
    //   transitionDelay: "0.2s",
    // },

    navIconRightDelay: {
      transitionDelay: "0.4s",
    },
  };
};

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
    <Tooltip title="prova">
      <img src={icon} alt={icon} />
    </Tooltip>
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
    leftIcon = "icons/skills.svg";
    rightIcon = "icons/contatti.svg";
    leftNavigate = "/skills";
    rightNavigate = "/contatti";
  } else if (location.pathname === "/skills") {
    icon = "icons/skills.svg";
    leftIcon = "icons/portfolio.svg";
    rightIcon = "icons/contatti.svg";
    leftNavigate = "/portfolio";
    rightNavigate = "/contatti";
  } else if (location.pathname === "/contatti") {
    icon = "icons/contatti.svg";
    leftIcon = "icons/portfolio.svg";
    rightIcon = "icons/skills.svg";
    leftNavigate = "/portfolio";
    rightNavigate = "/skills";
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
