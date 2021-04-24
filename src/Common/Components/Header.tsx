import {
  AppBar,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import {
  Call,
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      "&.MuiPaper-elevation4": {
        boxShadow: "none",
      },
      "& .MuiToolbar-regular": {
        minHeight: "50px",
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      padding: theme.spacing(2, 2, 0, 1),
    },
    icon: {
      padding: theme.spacing(0, 2),
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="disabled"
              // size="small"
            >
              <Facebook className={classes.icon} color="secondary" />
              <Twitter className={classes.icon} color="secondary" />
              <Pinterest className={classes.icon} color="secondary" />
              <Instagram className={classes.icon} color="secondary" />
              <LinkedIn className={classes.icon} color="secondary" />
            </IconButton>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Call
                fontSize="small"
                color="secondary"
                style={{ marginTop: "19px" }}
              />
              <Typography
                color="textSecondary"
                variant="caption"
                className={classes.title}
              >
                01-4458745
              </Typography>
              <Typography
                color="textSecondary"
                variant="caption"
                className={classes.title}
              >
                Language: English
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        {/* <Button color="inherit">Login</Button> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
