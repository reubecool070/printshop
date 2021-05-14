import { createStyles, makeStyles, Theme } from "@material-ui/core";
import headerLinksStyle from "../../../Common/Css/HeaderLinkStyle";
import { title, container } from "../../../Common/Css/Material-kit-Style";

const NavbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      padding: "70px 0",
      paddingTop: "0",
    },
    container,
    title: {
      ...title,
      marginTop: "30px",
      minHeight: "32px",
      textDecoration: "none",
    },
    navbar: {
      marginBottom: "-20px",
      zIndex: 100,
      position: "relative",
      overflow: "hidden",
      "& header": {
        borderRadius: "0",
      },
    },
    navigation: {
      backgroundPosition: "center center",
      backgroundSize: "cover",
      marginTop: "0",
      minHeight: "740px",
    },
    formControl: {
      margin: "0 !important",
      paddingTop: "0",
    },
    inputRootCustomClasses: {
      margin: "0!important",
    },
    searchIcon: {
      width: "20px",
      height: "20px",
      color: "inherit",
    },
    img: {
      width: "40px",
      height: "40px",
      borderRadius: "50%",
    },
    imageDropdownButton: {
      padding: "0px",
      top: "4px",
      borderRadius: "50%",
      marginLeft: "5px",
    },
  })
);
export default NavbarStyles;
