import React, { useState, useEffect } from "react";
import { Box, Button, withStyles } from "@material-ui/core";
import _ from "lodash";
import Lightbox from "react-image-lightbox";

//* components
import Layout from "../../layout/Layout";

//=b css
import "react-image-lightbox/style.css";
const style = (theme) => ({});

//* static
const images = ["/images/back1.jpg", "/images/back2.jpg"];

//=STRT ================================
const Portfolio = ({ classes }) => {
  //=y State
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  //=? Cycle

  //=+ Handlers

  //=g Utils

  //=o Variables

  return (
    <Layout section={<>PORTFOLIO</>}>
      <Box>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni, iusto
        ea eveniet in soluta iste, placeat quibusdam vel accusantium ratione
        pariatur maxime perspiciatis eos, assumenda perferendis earum? Adipisci
        esse dolor vitae est consequatur! Architecto eius magni quae vero cumque
        explicabo facilis culpa recusandae nesciunt harum. Nesciunt a, fugit
        debitis expedita consequatur velit autem optio asperiores. Dolorem id
        recusandae, officiis laudantium maiores autem aperiam facilis,
        perferendis tempore quos cupiditate delectus, doloribus deleniti
        corrupti sunt dolor inventore quibusdam sit atque numquam omnis amet est
        sed sint? Expedita repellendus unde recusandae eveniet nam beatae
        eligendi earum. Nisi harum quia impedit ab cumque earum.
      </Box>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
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
