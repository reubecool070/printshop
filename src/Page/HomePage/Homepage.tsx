import classes from "*.module.css";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React from "react";
import Header from "../../Common/Reusable/Header";
import HeaderLinks from "./Components/HeaderLinks";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.primary.dark
          : theme.palette.primary.light,
    },
  })
);

const Homepage = (props: any) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <>
      <Header
        leftLinks={<HeaderLinks />}
        clasName={classes.root}
        changeColorOnScroll={
          {
            // height: 400,
            // color: "white",
            // opacity: 0,
          }
        }
        {...rest}
      />
    </>
  );
};

export default Homepage;
