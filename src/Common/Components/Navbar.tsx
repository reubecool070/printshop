import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import logo from "../../images/logo.png";
import NavbarLink from "./NavbarLink";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2.5, 0),
      borderBottom: "1px solid #ddd",
    },
    logoImage: {
      padding: theme.spacing(0, 7),
    },
  })
);

const Navbar = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.root} container>
        <Grid item lg={4} md={4}>
          <img className={classes.logoImage} src={logo} alt="" />
        </Grid>
        <Grid item lg={6} md={6}>
          <NavbarLink />
        </Grid>
        <Grid item lg={1} md={1}>
          Cart
        </Grid>
        <Grid item lg={1} md={1}>
          Search bar
        </Grid>
      </Grid>
      i m a Navbar
    </>
  );
};

export default Navbar;
