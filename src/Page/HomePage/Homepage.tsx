import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";
import MainContent from "./Components/MainContent";
import QualityAssurance from "./Components/QualityAssurance";
import PromotionProduct from "./Components/PromotionProduct";
import AllProducts from "./Components/AllProducts";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.primary.dark
          : theme.palette.primary.light,
    },
    title: {
      padding: theme.spacing(0, 2),
      color: "#fff",
      fontSize: "14px",
    },
  })
);

const Homepage = (props: any) => {
  return (
    <>
      <Navbar />
      {/* <Carousel /> */}
      <MainContent />
      <QualityAssurance />
      <PromotionProduct />
      <AllProducts />
    </>
  );
};

export default Homepage;
