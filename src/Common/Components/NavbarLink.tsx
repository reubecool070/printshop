import React, { useEffect, useRef } from "react";
import {
  List,
  ListItem,
  ListItemProps,
  ListItemText,
  makeStyles,
  createStyles,
  Theme,
  Collapse,
} from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import useOutsideAlerter from "../Utils/DetectOutside";
// import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "row",
      padding: 0,
      "& .MuiListItem-gutters": {
        padding: theme.spacing(1, 1),
      },
      "& .MuiListItemText-primary": {
        // color: theme.palette.type === "dark" ? "#fff" : "#000",
      },
    },
    dropDown: {
      marginTop: theme.spacing(3),
      position: "absolute",
      borderTop: "2px solid #ddd",
      background: "#25bce9",
      marginLeft: "-50px",
    },
  })
);

function ListItemLink(props: ListItemProps<"a", { button?: false }>) {
  return (
    <ListItem
      style={{ textAlign: "center" }}
      button={false}
      component="a"
      {...props}
    />
  );
}

const NavbarLink = (Props: any) => {
  const classes = useStyles();
  // const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, () => setOpen(false));

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <List ref={wrapperRef} className={classes.root} dense component="ul">
        <ListItemLink onClick={handleClick}>
          <ListItemText primary="All Products"></ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemLink>
        <ListItemLink>
          <ListItemText primary="Business Cards" />
        </ListItemLink>
        <ListItemLink>
          <ListItemText primary="Marketing" />
        </ListItemLink>
        <ListItemLink>
          <ListItemText primary="Post Cards" />
        </ListItemLink>
        <ListItemLink>
          <ListItemText primary="About Us" />
        </ListItemLink>
      </List>
      <Collapse
        className={classes.dropDown}
        in={open}
        timeout="auto"
        unmountOnExit
      >
        <List component="div" disablePadding>
          <ListItem button>
            <ListItemText secondary="Business Cards" />
          </ListItem>
          <ListItem button>
            <ListItemText secondary="Premium Business Cards" />
          </ListItem>
          <ListItem button>
            <ListItemText secondary="Luxury Business Cards" />
          </ListItem>
        </List>
      </Collapse>
    </>
  );
};

export default NavbarLink;
