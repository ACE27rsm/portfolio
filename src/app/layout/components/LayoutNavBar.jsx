import React, { useState, useEffect, createRef } from "react";
import { Box, withStyles } from "@material-ui/core";
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
      "90%": {
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

    "@keyframes topIconReverse": {
      "0%": {
        opacity: 1,
        top: -size * Math.sin(1.5708),
        left: size * Math.cos(1.5708),
      },
      "30%": {
        opacity: 1,
        top: -size * Math.sin(1.5708),
        left: size * Math.cos(1.5708),
      },
      "45%": {
        opacity: 1,
        top: -size * Math.sin(1.8326),
        left: size * Math.cos(1.8326),
      },
      "60%": {
        opacity: 0.7,
        top: -size * Math.sin(2.35619),
        left: size * Math.cos(2.35619),
      },
      "75%": {
        opacity: 0.3,
        top: -size * Math.sin(2.79253),
        left: size * Math.cos(2.79253),
      },

      "90%": {
        opacity: 0,
        top: 0,
        left: size * Math.cos(3.14159),
      },
      "100%": { opacity: 0, top: 0 },
    },

    "@keyframes rightIcon": {
      "0%": {
        opacity: 0,
        top: -size * Math.sin(1.5708),
        left: size * Math.cos(1.5708),
      },
      "35%": {
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

    "@keyframes rightIconReverse": {
      "0%": {
        opacity: 1,
        top: -size * Math.sin(0),
        left: size * Math.cos(0),
      },

      "5%": {
        opacity: 1,
        top: -size * Math.sin(0),
        left: size * Math.cos(0),
      },

      "15%": {
        opacity: 1,
        top: -size * Math.sin(0.349066),
        left: size * Math.cos(0.349066),
      },

      "25%": {
        opacity: 0.7,
        top: -size * Math.sin(0.785398),
        left: size * Math.cos(0.785398),
      },

      "35%": {
        opacity: 0,
        top: -size * Math.sin(1.309),
        left: size * Math.cos(1.309),
      },

      "55%": {
        opacity: 0,
        top: -size * Math.sin(1.5708),
        left: size * Math.cos(1.5708),
      },

      "100%": {
        opacity: 0,
        top: -size * Math.sin(1.5708),
        left: size * Math.cos(1.5708),
      },
    },

    "@keyframes iconTooltip": {
      "0%": { opacity: 0 },
      "80%": { opacity: 0 },
      "100%": { opacity: 1 },
    },
    "@keyframes iconTooltipReverse": {
      "0%": { opacity: 1 },
      "20%": { opacity: 0 },
      "100%": { opacity: 0 },
    },

    "@keyframes root": {
      "0%": { opacity: 0 },
      "90%": { opacity: 0 },
      "100%": { opacity: 1 },
    },

    rootIconContainer: {
      width: size,
      height: size,
      cursor: "pointer",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      // animationName: "$root",
      // animationDuration: "2.2s",
      // animationTimingFunction: "linear",
      // animationFillMode: "forwards",
      // background: "red",
      position: "relative",
      "& .navIconTooltip": {
        position: "absolute",
        opacity: 1,
        top: -30,
        color: "white",
        borderRadius: 10,
      },
    },

    menuOpen: {
      "& .navIconTooltip": {
        animationName: "$iconTooltip",
        animationDuration: "2s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },
      "& .navIconTop": {
        animationName: "$topIcon",
        animationDuration: "1s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },

      "& .navIconRight": {
        animationName: "$rightIcon",
        animationDuration: "1.7s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },

      "& .navIconLeft": {
        animationName: "$leftIcon",
        animationDuration: "0.2s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },
    },

    menuClose: {
      "& .navIconTooltip": {
        animationName: "$iconTooltipReverse",
        animationDuration: "2s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },
      "& .navIconLeft": {
        animationName: "$leftIconReverse",
        animationDuration: "2s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },
      "& .navIconTop": {
        animationName: "$topIconReverse",
        animationDuration: "2s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },
      "& .navIconRight": {
        animationName: "$rightIconReverse",
        animationDuration: "2s",
        animationTimingFunction: "linear",
        animationFillMode: "forwards",
      },
    },

    iconContainer: {
      width: size,
      height: size,
      // background: "green",
      position: "relative",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },

    iconRoot: {
      background: "rgba(255,255,255,0.8)",
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
  };
};

//g --------------------------------------
const NavIcon = withStyles(style)(({ classes, icon, onClick, label }) => (
  <Box
    width={!label ? 1 : "70%"}
    height={!label ? 1 : "70%"}
    className={classes.iconRoot}
    zIndex={1000}
    onClick={onClick}
    position="relative"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    {label && (
      <Box className={clsx("navIconTooltip")} textAlign="center" width="100%">
        {label}
      </Box>
    )}
    <img src={icon} alt={icon} style={{ width: "90%", height: "90%" }} />
  </Box>
));

//=STRT ================================
const LayoutNavBar = ({ classes, location, history }) => {
  //=y State
  const [disabled, setDisabled] = useState(false);
  const [open, setOpen] = useState(null);
  const [disableTimeout, setDisableTimeout] = useState(null);

  const wrapper = createRef();

  //=? Cycle
  useEffect(
    () => () => {
      if (disableTimeout) {
        clearTimeout(disableTimeout);
      }
    },
    [disableTimeout]
  );

  //=+ Handlers
  //+ ******************************************************************
  const handleToggleMenu = () => {
    if (!disabled) {
      setOpen((prevState) => !Boolean(prevState));
      setDisabled(true);
      setDisableTimeout(setTimeout(() => setDisabled(false), 2000));
    }
  };

  //+ ******************************************************************
  const handleNavigate = (path) => history.push(path);
  //=g Utils

  //=o Variables
  let icon = null;
  let leftIcon = null;
  let rightIcon = null;
  let leftNavigate = null;
  let rightNavigate = null;
  let rightLabel = "";
  let leftLabel = "";

  if (location.pathname === "/portfolio") {
    icon = "icons/portfolio.svg";
    leftIcon = "icons/skills.svg";
    leftNavigate = "/skills";
    leftLabel = "Skills";
    rightIcon = "icons/contatti.svg";
    rightNavigate = "/contatti";
    rightLabel = "Contatti";
  } else if (location.pathname === "/skills") {
    icon = "icons/skills.svg";
    leftIcon = "icons/portfolio.svg";
    leftNavigate = "/portfolio";
    leftLabel = "Portfolio";
    rightIcon = "icons/contatti.svg";
    rightNavigate = "/contatti";
    rightLabel = "Contatti";
  } else if (location.pathname === "/contatti") {
    icon = "icons/contatti.svg";
    leftIcon = "icons/portfolio.svg";
    leftNavigate = "/portfolio";
    leftLabel = "Portfolio";
    rightIcon = "icons/skills.svg";
    rightNavigate = "/skills";
    rightLabel = "Skills";
  }

  return (
    <>
      {icon && (
        <Box className={classes.rootNav}>
          <Box
            className={clsx(
              classes.rootIconContainer,
              open && classes.menuOpen,
              !open && open !== null && classes.menuClose
            )}
            onClick={handleToggleMenu}
          >
            <Box position="relative">
              <Box className={classes.iconContainer}>
                <NavIcon icon={icon} />
              </Box>

              {/* //=? Top Icon */}
              <Box className={clsx(classes.navIcon, "navIconTop")}>
                <Box className={classes.iconContainer}>
                  <NavIcon
                    icon="/icons/home.svg"
                    onClick={() => handleNavigate("/")}
                    label="Home"
                  />
                </Box>
              </Box>

              {/* //=? Left Icon */}
              <Box className={clsx(classes.navIcon, "navIconLeft")}>
                <Box className={classes.iconContainer}>
                  <NavIcon
                    icon={leftIcon}
                    onClick={() => handleNavigate(leftNavigate)}
                    label={leftLabel}
                  />
                </Box>
              </Box>

              {/* //=? Right Icon */}
              <Box className={clsx(classes.navIcon, "navIconRight")}>
                <Box className={classes.iconContainer}>
                  <NavIcon
                    icon={rightIcon}
                    onClick={() => handleNavigate(rightNavigate)}
                    label={rightLabel}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default withStyles(style)(withRouter(LayoutNavBar));
