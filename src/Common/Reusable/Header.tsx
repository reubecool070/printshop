/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AppBar,
  Button,
  Drawer,
  Hidden,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import headerStyle from "../Css/HeaderStyle";
import Menu from "@material-ui/icons/Menu";

interface PropsI {
  color:
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "transparent"
    | "white"
    | "rose"
    | "danger";
  rightLinks: React.ReactNode;
  leftLinks: React.ReactNode;
  brand: string;
  fixed: boolean;
  className: string;
  absolute: boolean;
  height: number;
  bgColor?: boolean;
  changeColorOnScroll: {
    height: number;
    color:
      | "primary"
      | "info"
      | "success"
      | "warning"
      | "danger"
      | "transparent"
      | "white"
      | "rose"
      | "danger";
  };
}

const Header = (props: PropsI) => {
  const classes: any = headerStyle();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  const {
    color,
    rightLinks,
    leftLinks,
    brand,
    fixed,
    absolute,
    height,
    className,
    bgColor,
  } = props;

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.bgColor]: bgColor,
  });
  const brandComponent = <Button className={classes.title}>{brand}</Button>;

  return (
    <AppBar style={{ height: height }} className={appBarClasses}>
      <Toolbar className={classes.container}>
        {/* {leftLinks !== undefined ? brandComponent : null} */}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Header;

// Header.defaultProp = {
//   color: "",
//   className: "",
// };

// Header.propTypes = {
//   color: PropTypes.oneOf([
//     "primary",
//     "info",
//     "success",
//     "warning",
//     "danger",
//     "transparent",
//     "white",
//     "rose",
//     "dark",
//   ]),
//   rightLinks: PropTypes.node,
//   leftLinks: PropTypes.node,
//   brand: PropTypes.string,
//   fixed: PropTypes.bool,
//   className: PropTypes.string,
//   absolute: PropTypes.bool,
//   // this will cause the sidebar to change the color from
//   // props.color (see above) to changeColorOnScroll.color
//   // when the window.pageYOffset is heigher or equal to
//   // changeColorOnScroll.height and then when it is smaller than
//   // changeColorOnScroll.height change it back to
//   // props.color (see above)
//   changeColorOnScroll: PropTypes.shape({
//     height: PropTypes.number.isRequired,
//     // height: PropTypes.number,
//     color: PropTypes.oneOf([
//       "primary",
//       "info",
//       "success",
//       "warning",
//       "danger",
//       "transparent",
//       "white",
//       "rose",
//       "dark",
//     ]).isRequired,
//   }),
// };
