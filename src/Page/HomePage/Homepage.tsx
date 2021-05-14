import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Call, NightsStayOutlined, WbSunnyOutlined } from "@material-ui/icons";
import React from "react";
import CustomButton from "../../Common/Reusable/CustomButton";
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
    title: {
      padding: theme.spacing(0, 2),
      color: "#fff",
      fontSize: "14px",
    },
  })
);

const Homepage = (props: any) => {
  const classX = useStyles();
  const { darkMode, setDarkMode, ...rest } = props;

  const theme = useTheme();

  const handleClick = () => {
    // e.preventDefault();
  };

  return (
    <>
      <Header
        leftLinks={<HeaderLinks />}
        height={45}
        rightLinks={
          <>
            <Grid
              style={{ display: "flex", alignItems: "center" }}
              container
              direction="row"
            >
              <Call fontSize="small" color="secondary" />
              <Typography
                color="textSecondary"
                variant="caption"
                className={classX.title}
              >
                01-4458745
              </Typography>
              <Typography
                color="textSecondary"
                variant="caption"
                className={classX.title}
              >
                Language: English
              </Typography>
              <Button onClick={() => setDarkMode(!darkMode)} color="inherit">
                {theme.palette.type === "dark" ? (
                  <WbSunnyOutlined style={{ color: "#fff" }} />
                ) : (
                  <NightsStayOutlined />
                )}
              </Button>
            </Grid>
          </>
        }
        {...rest}
      />
    </>
  );
};

export default Homepage;
