import {
  AppBar,
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
  useTheme,
} from "@material-ui/core";
import {
  Call,
  Facebook,
  Instagram,
  LinkedIn,
  NightsStayOutlined,
  Pinterest,
  Twitter,
  WbSunnyOutlined,
} from "@material-ui/icons";
import React from "react";
import { withTheme } from "../Css/GlobalStyles.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor:
        theme.palette.type === "dark"
          ? theme.palette.primary.dark
          : theme.palette.primary.light,
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
      color: "#fff",
    },
    icon: {
      // padding: theme.spacing(0, 2),
      // color: "#fff",
      width: "45px",
    },
  })
);

const Header = (props: any) => {
  const classes = useStyles();
  const theme = useTheme();
  const { darkMode, setDarkMode } = props;

  console.log("props", props);
  console.log("theme", theme);

  return (
    <AppBar className={classes.root} position="static">
      <Toolbar>
        <Grid container justify="space-between">
          <Grid item>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
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
        <Button onClick={() => setDarkMode(!darkMode)} color="inherit">
          {theme.palette.type === "dark" ? (
            <WbSunnyOutlined style={{ color: "#fff" }} />
          ) : (
            <NightsStayOutlined />
          )}
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
