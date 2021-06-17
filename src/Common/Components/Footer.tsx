import {
  Box,
  Grid,
  Divider,
  createStyles,
  makeStyles,
  Theme,
} from "@material-ui/core";
import { Call, Home, Mail } from "@material-ui/icons";
import React from "react";
import logo from "../../images/logo.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    line: {
      backgroundColor: "#ddd",
      marginRight: "72px",
      "&::before": {
        content: '""',
        background: theme.palette.primary.main,
        width: "5%",
        height: "1px",
        position: "absolute",
      },
    },
    footerText: {
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
  })
);

const Footer = () => {
  const classes = useStyles();

  const ContactBox = (props: any) => {
    const { icon, text } = props;
    return (
      <Box
        component="p"
        fontSize={10}
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        color="white"
        className={classes.footerText}
      >
        {icon}
        {text}
      </Box>
    );
  };
  return (
    <>
      <Grid container style={{ padding: "3% 7%", backgroundColor: "#212121" }}>
        <Grid item xs={3}>
          <Box color="primary.main" my={1} component="p" fontSize={18}>
            ABOUT US
            <Divider className={classes.line} />
          </Box>
          <img src={logo} alt="" />
          <ContactBox
            icon={
              <Home
                fontSize="small"
                style={{ marginRight: "10px", color: "#fff" }}
              />
            }
            text="102580 Santa Monica Los Angeles"
          />
          <ContactBox
            icon={
              <Call
                fontSize="small"
                style={{ marginRight: "10px", color: "#fff" }}
              />
            }
            text="+3 045 224 33 12"
          />
          <ContactBox
            icon={
              <Mail
                fontSize="small"
                style={{ marginRight: "10px", color: "#fff" }}
              />
            }
            text="support@netbaseteam.net"
          />
        </Grid>
        <Grid item xs={3}>
          <Box color="primary.main" my={1} component="p" fontSize={18}>
            CORPORATE
            <Divider className={classes.line} />
          </Box>
          <ContactBox text="About" />
          <ContactBox text="Green" />
          <ContactBox text="Affiliates" />
          <ContactBox text="Non-profits and Government" />
          <ContactBox text="Terms of Service" />
          <ContactBox text="Privacy Policy" />
        </Grid>
        <Grid item xs={3}>
          <Box color="primary.main" my={1} component="p" fontSize={18}>
            SUPPORT
            <Divider className={classes.line} />
          </Box>
          <ContactBox text="My Account" />
          <ContactBox text="Design Guide" />
          <ContactBox text="FAQ" />
          <ContactBox text="Design Services" />
          <ContactBox text="Contact Us" />
        </Grid>
        <Grid item xs={3}>
          <Box color="primary.main" my={1} component="p" fontSize={18}>
            OTHER INFO
            <Divider className={classes.line} />
          </Box>
          <ContactBox text="Printmart provides fast online printing for both homes and businesses. We provide high quality business cards, postcards, flyers, brochures, stationery and other premium online print products." />
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
