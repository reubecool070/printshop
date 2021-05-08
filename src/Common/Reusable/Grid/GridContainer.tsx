import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";

const styles = {
  grid: {
    marginRight: "-15px",
  },
};

const useStyles = makeStyles(styles);

const GridContainer = (props: any) => {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default GridContainer;

GridContainer.defaultProps = {
  className: "",
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
