import { makeStyles, Paper, Theme } from "@material-ui/core";
import { createStyles } from "@material-ui/styles";
import React from "react";
import { withTheme } from "./Common/Css/GlobalStyles.css";
import Homepage from "./Page/HomePage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DashboardPage from "./Page/Dashboard/DashboardPage";
import TopHeader from "./Common/Components/TopHeader";
import Navbar from "./Common/Components/Navbar";
import Footer from "./Common/Components/Footer";

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
        <Router>
          <TopHeader darkMode={darkMode} setDarkMode={setDarkMode} />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/admin" component={DashboardPage} />
          </Switch>
          <Footer />
          {/* <Navbar /> */}
        </Router>
        {/* <Homepage darkMode={darkMode} setDarkMode={setDarkMode} /> */}
        {/* <Header darkMode={darkMode} setDarkMode={setDarkMode} /> */}
      </Paper>
      {/* Going to build an ecommerce Site */}
      {/* <TestuseEffect /> */}
      {/* <TestSample /> */}
    </>
  );
}

export default withTheme(App);
