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
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      padding: theme.spacing(1, 2),
    },
  })
);

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <Facebook />
              <Twitter />
              <Pinterest />
              <Instagram />
              <LinkedIn />
            </IconButton>
          </Grid>
          <Grid item>
            <Grid container direction="row">
              <Call style={{ marginTop: "5px" }} />
              <Typography variant="caption" className={classes.title}>
                01-4458745
              </Typography>
              <Typography variant="caption" className={classes.title}>
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
