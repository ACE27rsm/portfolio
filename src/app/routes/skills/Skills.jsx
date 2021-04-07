import React, { useState, useEffect } from "react";
import { Box, Link, Divider, withStyles } from "@material-ui/core";
import clsx from "clsx";

//* components
import Layout from "../../layout/Layout";

//=b css
import "react-image-lightbox/style.css";
const style = (theme) => ({
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
  pencilCenterFinal: {
    width: 1000,
  },

  skillValueContainer: {
    fontFamily: "Barriecito",
  },
});

//=STRT ================================
const Curriculum = ({ classes }) => {
  //=y State
  const [go, setGo] = useState(false);

  //=? Cycle
  useEffect(() => setTimeout(() => setGo(true), 1000), []);

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Layout section="SKILLS">
      <Box color="primary.main">
        <Box display="flex" alignItems="center" flexWrap="wrap" mb={1}>
          <Box fontSize="3rem" mr={2}>
            Photoshop:
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
                go && classes.pencilCenterFinal
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
            8/10
          </Box>
        </Box>
        <Box p={2}>
          <Divider />
        </Box>
      </Box>
      <a
        href="https://www.behance.net/luciazavatta/followers?background=%2Fluciazavatta"
        target="_blank"
      >
        <Box bgcolor="red" width={100} height={100} />
      </a>
    </Layout>
  );
};

export default withStyles(style)(Curriculum);
