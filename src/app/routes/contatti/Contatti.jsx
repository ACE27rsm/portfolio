import React, { useState, useEffect } from "react";
import { Box, Link, Divider, withStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehanceSquare,
  faBehance,
  faFacebookF,
  faFacebookSquare,
  faInstagramSquare,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//* components
import Layout from "../../layout/Layout";

//=b css
import "react-image-lightbox/style.css";
const style = (theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    minHeight: "calc(100vh - 150px)",
  },

  email: {
    marginTop: theme.spacing(30),
    color: "primary.main",
    width: "100%",
    textAlign: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },

  icon: {
    fontSize: 100,
    color: theme.palette.primary.dark,
    [theme.breakpoints.down("md")]: {
      fontSize: 75,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 50,
    },
  },
});

//=STRT ================================
const Contatti = ({ classes }) => {
  //=y State

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Layout section="CONTATTI">
      <div className={classes.root}>
        <div className={classes.email}>
          <a
            href="mailto:info@luciazavatta.com"
            rel="noreferrer noopener"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <Box color="primary.main">info@luciazavatta.com</Box>
          </a>
        </div>
        {/* //=? Icons */}
        <Box display="flex">
          <Box m={2}>
            <a
              href="https://www.behance.net/luciazavatta/followers?background=%2Fluciazavatta"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faBehanceSquare}
                className={classes.icon}
              />
            </a>
          </Box>
          <Box m={2}>
            <a
              href="https://www.behance.net/luciazavatta/followers?background=%2Fluciazavatta"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className={classes.icon}
              />
            </a>
          </Box>
          <Box m={2}>
            <a
              href="https://www.behance.net/luciazavatta/followers?background=%2Fluciazavatta"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagramSquare}
                className={classes.icon}
              />
            </a>
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default withStyles(style)(Contatti);
