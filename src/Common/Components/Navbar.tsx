import React, { useEffect, useRef } from "react";
import {
  Badge,
  Collapse,
  createStyles,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Theme,
} from "@material-ui/core";
import logo from "../../images/logo.png";
import NavbarLink from "./NavbarLink";
import { Search, ShoppingCart } from "@material-ui/icons";
import useOutsideAlerter from "../Utils/DetectOutside";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2.5, 0),
      borderBottom: "1px solid #ddd",
    },
    logoImage: {
      padding: theme.spacing(0, 7),
    },
    badge: {
      // padding: theme.spacing(1, 2),
      // justifyContent: "flex-end",
    },
    input: {
      marginLeft: theme.spacing(1),
      width: "100%",
    },
    iconButton: {
      padding: 10,
    },
    dropDown: {
      marginTop: theme.spacing(0),
      position: "absolute",
      borderTop: "2px solid #25bce9",
      background: "#fff",
      marginLeft: "-170px",
      boxShadow: "-4px 8px 16px -6px rgba(0,0,0,0.64)",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, () => setOpen(false));

  const handleClick = () => {
    setOpen(!open);
  };

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
          <Grid container justify="flex-end">
            <IconButton aria-label="cart">
              <Badge badgeContent={4} overlap="circle" max={99} color="error">
                <ShoppingCart color="primary" />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
        <Grid ref={wrapperRef} item lg={1} md={1}>
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
            color="primary"
            onClick={handleClick}
          >
            <Search />
          </IconButton>
          <Collapse
            className={classes.dropDown}
            in={open}
            timeout="auto"
            unmountOnExit
          >
            <InputBase
              className={classes.input}
              placeholder="Search.."
              startAdornment={
                <Search style={{ padding: "2px 5px" }} color="primary" />
              }
              inputProps={{ "aria-label": "search" }}
            />
          </Collapse>
        </Grid>
      </Grid>
    </>
  );
};

export default Navbar;
