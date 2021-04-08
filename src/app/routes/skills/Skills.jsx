import React, { useState, useEffect } from "react";
import { Box, Link, Divider, withStyles } from "@material-ui/core";
import VisibilitySensor from "react-visibility-sensor";
import clsx from "clsx";

//* components
import Layout from "../../layout/Layout";

//* satic
import skills from "./static/skillsValues";

//=b css
import "react-image-lightbox/style.css";
const style = (theme) => ({
  root: {
    color: theme.palette.primary.main,
  },

  //b ******* VALUE *******************************
  skillValueContainer: {
    fontFamily: "Barriecito",
  },

  //b ******* PENCIL ******************************
  pencilStart: {
    height: 100,
    width: 180,
  },
  pencilEnd: {
    height: 100,
    width: 160,
  },
  pencilCenter: {
    height: 100,
    width: 10,
    transition: "width 2s ease-in",
  },

  pencil6: {
    width: "calc(60% - 340px)",
  },
  pencil7: {
    width: "calc(70% - 340px)",
  },
  pencil8: {
    width: "calc(80% - 340px)",
  },
  pencil9: {
    width: "calc(90% - 340px)",
  },

  pencilCenterFinal: {
    width: "50%",
  },
});

//g -------------------------------------------------
const Skill = withStyles(style)(({ classes, title, value }) => {
  //=y State
  const [visible, setVisible] = useState(false);

  //=+ Handlers
  const handleVisible = (isVisible) => {
    if (isVisible && !visible) setVisible(true);
  };

  return (
    <VisibilitySensor onChange={handleVisible}>
      <Box color="primary.main">
        <Box display="flex" alignItems="center" flexWrap="wrap" mb={1}>
          <Box fontSize="3rem" width={380} mr={2}>
            {title}:
          </Box>
          <Box display="flex" flexGrow={1}>
            <img
              className={classes.pencilStart}
              src="images/pencilStart.png"
              alt="pencilStart"
            />
            <img
              className={clsx(
                classes.pencilCenter,
                visible && classes[`pencil${value}`]
              )}
              src="images/pencilCenter.png"
              alt="pencilCenter"
            />
            <img
              className={classes.pencilEnd}
              src="images/pencilEnd.png"
              alt="pencilEnd"
            />
          </Box>

          <Box fontSize="4rem" ml={2} className={classes.skillValueContainer}>
            {value}/10
          </Box>
        </Box>
        <Box p={2}>
          <Divider />
        </Box>
      </Box>
    </VisibilitySensor>
  );
});

//=STRT ================================
const Skills = ({ classes }) => {
  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Layout section="SKILLS">
      {skills.map((s) => (
        <Skill title={s.title} value={s.value} key={s.title} />
      ))}
    </Layout>
  );
};

export default withStyles(style)(Skills);
