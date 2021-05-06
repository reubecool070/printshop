import {
  FormControlLabel,
  makeStyles,
  Paper,
  Switch,
  Theme,
} from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import React from "react";
import Header from "./Common/Components/Header";
import Navbar from "./Common/Components/Navbar";
import { withTheme } from "./Common/Css/GlobalStyles.css";
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
        Going to build an ecommerce Site
        <TestuseEffect />
        {/* <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
          label="Dark Mode"
        /> */}
      </Paper>
    </React.Fragment>
  );
}

export default withTheme(App);
