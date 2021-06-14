import {
  Card,
  createStyles,
  makeStyles,
  Theme,
  CardContent,
  Box,
  CardMedia,
  Button,
} from "@material-ui/core";
import { ArrowForward, ArrowBack } from "@material-ui/icons";
import React, { useRef } from "react";
import Slider from "react-slick";
import GridContainer from "../../../Common/Reusable/Grid/GridContainer";
import GridItem from "../../../Common/Reusable/Grid/GridItem";
import "./carousel.css";

const button = {
  // position: "absolute",
  top: 0,
  width: "5%",
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
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      height: "300px",
      padding: theme.spacing(1),
    },
    content: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(0, 2),
      // alignItems: "center",
      // flex: "1 0 auto",
    },
    prev: {
      ...button,
      zIndex: 10,
      textAlign: "center",
      position: "absolute",
      left: -30,
    },
    next: {
      ...button,
      position: "absolute",
      right: -15,
      zIndex: 10,
      textAlign: "center",
    },
    cover: {
      // width: "30%",
      height: "300px",
      objectFit: "contain",
    },
  })
);

function SampleNextArrow(props: any) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <div onClick={onClick} className={classes.next}>
      {/* <ArrowForward
        style={{ position: "absolute", top: "50%" }}
        color="primary"
        fontSize="default"
      /> */}
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const classes = useStyles();
  const { onClick } = props;
  return (
    <div onClick={onClick} className={classes.prev}>
      {/* <ArrowBack
        style={{ position: "absolute", top: "50%" }}
        color="primary"
        fontSize="default"
      /> */}
    </div>
  );
}

const MainContent = () => {
  const classes = useStyles();

  const carousel = useRef<any>();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow onClick={next} />,
    prevArrow: <SamplePrevArrow onClick={previous} />,
    autoplay: false,
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
      <Card className={classes.root}>
        <GridContainer>
          <GridItem>
            <Slider {...settings}>
              <Box>
                <GridContainer>
                  <GridItem xs={5}>
                    <CardContent className={classes.content}>
                      <Box
                        textAlign="left"
                        fontSize={30}
                        fontWeight={600}
                        pt={5}
                      >
                        FLYERS & LEAFLETS
                      </Box>
                      <Box fontSize={14} fontWeight={400} pt={2} mb={2}>
                        Our A5 flyers and leaflets are our bestselling size.
                        This is because they're perfect for potential prospects
                        to carry around and are extremely cost effective. We
                        currently have an offer of 1000 flyers and leaflets for
                        only £ 24!
                      </Box>
                      <Button
                        style={{ width: "40%" }}
                        variant="outlined"
                        color="primary"
                      >
                        Buy Now
                      </Button>
                    </CardContent>
                  </GridItem>
                  <GridItem xs={7}>
                    <CardMedia
                      className={classes.cover}
                      image="http://www.pngmart.com/files/7/Red-Smoke-Transparent-Images-PNG.png"
                      title="nothing"
                    />
                  </GridItem>
                </GridContainer>
              </Box>
              <Box>
                <GridContainer>
                  <GridItem xs={5}>
                    <CardContent className={classes.content}>
                      <Box
                        textAlign="left"
                        fontSize={30}
                        fontWeight={500}
                        pt={5}
                      >
                        FLYERS & LEAFLETS
                      </Box>
                      <Box fontSize={14} fontWeight={400} pt={2} mb={2}>
                        Our A5 flyers and leaflets are our bestselling size.
                        This is because they're perfect for potential prospects
                        to carry around and are extremely cost effective. We
                        currently have an offer of 1000 flyers and leaflets for
                        only £ 24!
                      </Box>
                      <Button
                        style={{ width: "40%" }}
                        variant="outlined"
                        color="primary"
                      >
                        Buy Now
                      </Button>
                    </CardContent>
                  </GridItem>
                  <GridItem xs={7}>
                    <CardMedia
                      className={classes.cover}
                      image="http://www.pngmart.com/files/7/Red-Smoke-Transparent-Images-PNG.png"
                      title="nothing"
                    />
                  </GridItem>
                </GridContainer>
              </Box>
              <Box>
                <GridContainer>
                  <GridItem xs={5}>
                    <CardContent className={classes.content}>
                      <Box
                        textAlign="left"
                        fontSize={30}
                        fontWeight={500}
                        pt={5}
                      >
                        FLYERS & LEAFLETS
                      </Box>
                      <Box fontSize={14} fontWeight={400} pt={2} mb={2}>
                        Our A5 flyers and leaflets are our bestselling size.
                        This is because they're perfect for potential prospects
                        to carry around and are extremely cost effective. We
                        currently have an offer of 1000 flyers and leaflets for
                        only £ 24!
                      </Box>
                      <Button
                        style={{ width: "40%" }}
                        variant="outlined"
                        color="primary"
                      >
                        Buy Now
                      </Button>
                    </CardContent>
                  </GridItem>
                  <GridItem xs={7}>
                    <CardMedia
                      className={classes.cover}
                      image="http://www.pngmart.com/files/7/Red-Smoke-Transparent-Images-PNG.png"
                      title="nothing"
                    />
                  </GridItem>
                </GridContainer>
              </Box>
            </Slider>
          </GridItem>
        </GridContainer>
      </Card>
    </>
  );
};

export default MainContent;
