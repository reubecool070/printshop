import { makeStyles, Paper, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import React from "react";
import Header from "./Common/Components/Header";
import Navbar from "./Common/Components/Navbar";
import { withTheme } from "./Common/Css/GlobalStyles.css";
import Homepage from "./Page/HomePage/Homepage";
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
    <React.Fragment>
      <Paper className={classes.root} elevation={0}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Navbar />
      </Paper>
      Going to build an ecommerce Site
      <TestuseEffect />
      <Homepage />
    </React.Fragment>
  );
}

export default withTheme(App);
