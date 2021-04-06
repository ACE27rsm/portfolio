import React, { useState, useEffect } from "react";
import { Box, Button, withStyles } from "@material-ui/core";
import _ from "lodash";
import Lightbox from "react-image-lightbox";
import clsx from "clsx";

//* components
import Layout from "../../layout/Layout";

//* statics
import images from "./static/images";

//=b css
import "react-image-lightbox/style.css";
const style = (theme) => ({
  picRoot: {
    margin: theme.spacing(1),
    flexGrow: 1,
    height: 100,
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    [theme.breakpoints.down("xl")]: {
      height: 700,
    },
    [theme.breakpoints.down("lg")]: {
      height: 500,
    },
    [theme.breakpoints.down("md")]: {
      height: 400,
    },
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
    [theme.breakpoints.down("xs")]: {
      height: 200,
    },
  },

  picLarge: {
    width: "70%",
  },

  picMedium: {
    width: "33%",
  },

  picSmall: {
    width: "25%",
  },
});

//g -------------------------------------------------------
const Pic = withStyles(style)(
  ({ classes, src, alt, type, handleOpen, index }) => {
    return (
      <Box
        className={clsx(
          classes.picRoot,
          type === "large" && classes.picLarge,
          type === "medium" && classes.picMedium,
          type === "small" && classes.picSmall
        )}
      >
        <Box width={1} height={1} onClick={() => handleOpen(index)}>
          <img src={src} alt={alt} />
        </Box>
      </Box>
    );
  }
);

//=STRT ================================
const Portfolio = ({ classes }) => {
  //=y State
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  //=? Cycle

  //=+ Handlers
  const handleOpen = (index) => {
    setIsOpen(true);
    setPhotoIndex(index);
  };

  //=g Utils

  //=o Variables

  return (
    <Layout section="PORTFOLIO">
      <Box display="flex" flexWrap="wrap">
        {images.map((image, index) => (
          <Pic
            key={image.src}
            type={image.type}
            src={image.src}
            index={index}
            handleOpen={handleOpen}
          />
        ))}
      </Box>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex].hd}
          nextSrc={images[(photoIndex + 1) % images.length].hd}
          prevSrc={images[(photoIndex + images.length - 1) % images.length].hd}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (prevIndex) => (prevIndex + images.length - 1) % images.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((prevIndex) => (prevIndex + 1) % images.length)
          }
        />
      )}
    </Layout>
  );
};

export default withStyles(style)(Portfolio);
