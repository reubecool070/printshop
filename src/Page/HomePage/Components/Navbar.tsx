import {
  Badge,
  Collapse,
  Grid,
  IconButton,
  InputBase,
  List,
  ListItem,
  useTheme,
} from "@material-ui/core";
import { Search, ShoppingCart } from "@material-ui/icons";
import React from "react";
import headerLinksStyle from "../../../Common/Css/HeaderLinkStyle";
import CustomButton from "../../../Common/Reusable/CustomButton";
import CustomDropDown from "../../../Common/Reusable/CustomDropDown";
import Header from "../../../Common/Reusable/Header";
import useOutsideAlerter from "../../../Common/Utils/DetectOutside";
import logo from "../../../images/logo.png";

const mainNav = [
  {
    nav: "Products",
    dropdown: [
      "Business Cards",
      "Premium Cards",
      { divider: true },
      "Canvas",
      { divider: true },
      "Brochures",
      "Bills",
    ],
  },
  { nav: "Business Cards", dropdown: [] },
  { nav: "Marketing", dropdown: [] },
  { nav: "Post Cards", dropdown: [] },
  { nav: "About Us", dropdown: [] },
];

const Navbar = (props: any) => {
  const classes: any = headerLinksStyle();
  const theme = useTheme();

  const [open, setOpen] = React.useState(false);
  const wrapperRef = React.useRef(null);

  useOutsideAlerter(wrapperRef, () => setOpen(false));

  const handleClick = () => {
    setOpen(!open);
  };

  const { ...rest } = props;

  return (
    <>
      <Header
        brand="Info Color"
        color={theme.palette.type === "dark" ? "dark" : "white"}
        leftLinks={<img src={logo} alt="" />}
        height={60}
        rightLinks={
          <List className={classes.list}>
            {mainNav.map((elem: any, index: number) => {
              return (
                <ListItem key={index} className={classes.listItem}>
                  {elem.dropdown.length ? (
                    <CustomDropDown
                      hoverColor="primary"
                      caret
                      buttonText={elem.nav}
                      dropdownHeader="All Products"
                      buttonProps={{
                        className: classes.navLink,
                        color: "transparent",
                      }}
                      dropdownList={elem.dropdown.map((item: any) => item)}
                    />
                  ) : (
                    <CustomButton
                      size=""
                      className={classes.navLink}
                      color="transparent"
                    >
                      {elem.nav}
                    </CustomButton>
                  )}
                </ListItem>
              );
            })}
            <ListItem
              style={{ marginLeft: "50px" }}
              className={classes.listItem}
            >
              <Grid container justify="flex-end">
                <IconButton aria-label="cart">
                  <Badge
                    badgeContent={4}
                    overlap="circle"
                    max={99}
                    color="error"
                  >
                    <ShoppingCart color="primary" />
                  </Badge>
                </IconButton>
              </Grid>
            </ListItem>
            <ListItem ref={wrapperRef} className={classes.listItem}>
              <IconButton
                type="submit"
                // className={classes.iconButton}
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
                  // className={classes.input}
                  placeholder="Search.."
                  startAdornment={
                    <Search style={{ padding: "2px 5px" }} color="primary" />
                  }
                  inputProps={{ "aria-label": "search" }}
                />
              </Collapse>
            </ListItem>
          </List>
        }
        {...rest}
      />
    </>
  );
};

export default Navbar;
