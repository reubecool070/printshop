import React from "react";
import {
  Button,
  createStyles,
  Grid,
  List,
  ListItem,
  makeStyles,
  Theme,
  Tooltip,
  Typography,
  useTheme,
} from "@material-ui/core";
import { Call, NightsStayOutlined, WbSunnyOutlined } from "@material-ui/icons";
import headerLinksStyle from "../Css/HeaderLinkStyle";
import CustomButton from "../Reusable/CustomButton";
import Header from "../Reusable/Header";

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

const topHeaderData = {
  social: ["twitter", "instagram", "linkedin", "facebook", "pinterest"],
  phone_number: "01 - 4458745",
  language: "English",
};

const TopHeader = (props: any) => {
  const classes = headerLinksStyle();
  const classX = useStyles();
  const theme = useTheme();

  console.log("object", topHeaderData);

  const { darkMode, setDarkMode, ...rest } = props;

  return (
    <>
      <Header
        bgColor
        leftLinks={
          <List className={classes.list}>
            <ListItem className={classes.listItem}>
              {topHeaderData.social.map((item) => {
                return (
                  <Tooltip
                    key={item}
                    // id="instagram-twitter"
                    title={`Follow us on ${item}`}
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <CustomButton
                      size=""
                      // href="https://twitter.com/CreativeTim?ref=creativetim"
                      target="_blank"
                      color="transparent"
                      className={classes.navLink}
                    >
                      <i className={classes.socialIcons + ` fab fa-${item}`} />
                    </CustomButton>
                  </Tooltip>
                );
              })}
            </ListItem>
          </List>
        }
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
                {topHeaderData.phone_number}
              </Typography>
              <Typography
                color="textSecondary"
                variant="caption"
                className={classX.title}
              >
                Language: {topHeaderData.language}
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

export default TopHeader;
