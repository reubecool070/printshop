import {
  ClickAwayListener,
  Divider,
  Grow,
  Icon,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import { CustomDropDownStyle } from "../Css/CustomDropDownStyle";
import CustomButton from "./CustomButton";

interface PropsI {
  hoverColor?: [
    "black",
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose"
  ];
  buttonText: React.ReactNode;
  // buttonIcon: object | string;
  buttonIcon: any;
  dropdownList: (string | { divider: boolean })[];
  buttonProps: object;
  dropup: boolean;
  dropdownHeader: React.ReactNode;
  rtlActive: boolean;
  caret: boolean;
  left: boolean;
  noLiPadding: boolean;
  // onClick: () => void;
  onClick: any;
}

const CustomDropDown = (props: any) => {
  const classes: any = CustomDropDownStyle();

  const {
    buttonText,
    buttonIcon,
    dropdownList,
    buttonProps,
    dropup,
    dropdownHeader,
    caret,
    hoverColor,
    left,
    rtlActive,
    noLiPadding,
  } = props;

  const [anchorEl, setAnchorEl] = React.useState<any>(null);

  const handleClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (anchorEl && anchorEl.contains(event.target)) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = (param: any) => {
    setAnchorEl(null);
    if (props && props.onClick) {
      props.onClick(param);
    }
  };
  const handleCloseAway = (event: any) => {
    if (anchorEl.contains(event.target)) {
      return;
    }
    setAnchorEl(null);
  };

  const caretClasses = classNames({
    [classes.caret]: true,
    [classes.caretActive]: Boolean(anchorEl),
    [classes.caretRTL]: rtlActive,
  });
  const dropdownItem = classNames({
    [classes.dropdownItem]: true,
    [classes[hoverColor + "Hover"]]: true,
    [classes.noLiPadding]: noLiPadding,
    [classes.dropdownItemRTL]: rtlActive,
  });
  let icon = null;
  switch (typeof buttonIcon) {
    case "object":
      icon = <props.buttonIcon className={classes.buttonIcon} />;
      break;
    case "string":
      icon = <Icon className={classes.buttonIcon}>{props.buttonIcon}</Icon>;
      break;
    default:
      icon = null;
      break;
  }

  return (
    <>
      <div>
        <div>
          <CustomButton
            size=""
            color="transparent"
            aria-label="Notifications"
            aria-owns={anchorEl ? "menu-list" : null}
            aria-haspopup="true"
            {...buttonProps}
            onClick={handleClick}
          >
            {icon}
            {buttonText !== undefined ? buttonText : null}
            {caret ? <b className={caretClasses} /> : null}
          </CustomButton>
        </div>
        <Popper
          open={Boolean(anchorEl)}
          anchorEl={anchorEl}
          transition
          disablePortal
          placement={
            dropup
              ? left
                ? "top-start"
                : "top"
              : left
              ? "bottom-start"
              : "bottom"
          }
          // placement="bottom-start"
          className={classNames({
            [classes.popperClose]: !anchorEl,
            [classes.popperResponsive]: true,
          })}
        >
          {() => (
            <Grow
              in={Boolean(anchorEl)}
              // id="menu-list"
              style={
                dropup
                  ? { transformOrigin: "0 100% 0" }
                  : { transformOrigin: "0 0 0" }
              }
            >
              <Paper className={classes.dropdown}>
                <ClickAwayListener onClickAway={handleCloseAway}>
                  <MenuList role="menu" className={classes.menuList}>
                    {dropdownHeader !== undefined ? (
                      <MenuItem
                        onClick={() => handleClose(dropdownHeader)}
                        className={classes.dropdownHeader}
                      >
                        {dropdownHeader}
                      </MenuItem>
                    ) : null}
                    {dropdownList.map((prop: any, key: any) => {
                      if (prop.divider) {
                        return (
                          <Divider
                            key={key}
                            onClick={() => handleClose("divider")}
                            className={classes.dropdownDividerItem}
                          />
                        );
                      }
                      return (
                        <MenuItem
                          key={key}
                          onClick={() => handleClose(prop)}
                          className={dropdownItem}
                        >
                          {prop}
                        </MenuItem>
                      );
                    })}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </>
  );
};

// CustomDropDown.defaultProps = {
//   caret: true,
//   hoverColor: "primary",
// };

export default CustomDropDown;
