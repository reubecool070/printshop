import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { ArrowBack, ArrowForward, LocationOn } from "@material-ui/icons";
import React, { useRef } from "react";
import Slider from "react-slick";
import GridContainer from "../../../Common/Reusable/Grid/GridContainer";
import GridItem from "../../../Common/Reusable/Grid/GridItem";
import "./carousel.css";

const button = {
  // position: "absolute",
  top: 0,
  width: "15%",
  height: "100%",
  background: "0 0",
  border: "none",
  cursor: "pointer",
  alignContent: "center",
  "&:hover": {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // overflow: "hidden",
      // "&.MuiSvgIcon-root": {
      //   fill: "black !important",
      //   color: "black",
      //   background: "#000",
      // },
    },
    prev: {
      ...button,
      zIndex: 10,
      textAlign: "center",
      position: "absolute",
      left: 0,
    },
    next: {
      ...button,
      position: "absolute",
      right: 0,
      zIndex: 10,
      textAlign: "center",
    },
    box: {
      position: "absolute",
      bottom: "2%",
      padding: "10px",
    },
    absolute: {
      position: "absolute",
      zIndex: 9999,
      width: "100%",
      bottom: 65,
      color: "#ffffff",
    },
  })
);

function SampleNextArrow(props: any) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <div onClick={onClick} className={classes.next}>
      <ArrowForward
        style={{ position: "absolute", top: "50%" }}
        color="primary"
        fontSize="default"
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <div onClick={onClick} className={classes.prev}>
      <ArrowBack
        style={{ position: "absolute", top: "50%" }}
        color="primary"
        fontSize="default"
      />
    </div>
  );
}

const Carousel = () => {
  const classes = useStyles();

  const carousel = useRef<any>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    nextArrow: <SampleNextArrow onClick={next} />,
    prevArrow: <SamplePrevArrow onClick={previous} />,
    appendDots: (dots: any) => (
      <div style={{ position: "absolute", bottom: 0, padding: "10px" }}>
        <ul style={{ margin: 0 }}> {dots}</ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div
        style={{
          width: "15px",
          background: "white",
          height: "15px",
          marginRight: "15px",
          boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75) inset",
        }}
      ></div>
    ),
  };

  function next() {
    carousel.current.slickNext();
  }
  function previous() {
    carousel.current.slickPrev();
  }
  return (
    <>
      <GridContainer className={classes.root} justify="center">
        <GridItem xs={12} sm={12} md={12}>
          <Slider ref={carousel} {...settings}>
            <Box>
              <img
                src="https://source.unsplash.com/random/1200x400"
                alt=""
                width="1200px"
              />
              {/* <Grid container className={classes.absolute}>
                <Typography align="center" variant="h5">
                  Hello There
                </Typography>
              </Grid> */}
            </Box>
            <Box>
              <img
                src="https://source.unsplash.com/user/erondu/1200x400"
                alt=""
                width="1200px"
              />
            </Box>
            <Box>
              <img
                width="1200px"
                src="https://source.unsplash.com/collection/190727/1200x400"
                alt=""
              />
            </Box>
          </Slider>
          {/* <div>
            <button className={classes.prev} onClick={previous}>
              <ArrowBack />
            </button>
            <button className={classes.next} onClick={next}>
              <ArrowForward />
            </button>
          </div> */}
        </GridItem>
      </GridContainer>
    </>
  );
};

export default Carousel;
