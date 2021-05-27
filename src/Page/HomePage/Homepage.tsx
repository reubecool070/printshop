import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";

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
      <Carousel />
    </>
  );
};

export default Homepage;
