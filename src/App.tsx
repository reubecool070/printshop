import { makeStyles, Paper, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import React from "react";
import Header from "./Common/Components/Header";
import Navbar from "./Common/Components/Navbar";
import { withTheme } from "./Common/Css/GlobalStyles.css";
import Homepage from "./Page/HomePage/Homepage";
import TestSample from "./Test/TestSample";
import TestuseEffect from "./Test/TestuseEffect";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

function App(props: any) {
  const { darkMode, setDarkMode } = props;
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.root} elevation={0}>
        <Homepage darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        <Navbar />
      </Paper>
      Going to build an ecommerce Site
      <TestuseEffect />
      <TestSample />
    </>
  );
}

export default withTheme(App);
