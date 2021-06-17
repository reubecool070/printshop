import { Grid, makeStyles } from "@material-ui/core";
import React from "react";

const styles = {
  grid: {
    marginRight: "-15px",
  },
};

// type PropsI = {
//   children: React.ReactNode;
//   className: string;
// } & typeof defaultProps;

// const defaultProps = {
//   className: "",
// };

const useStyles = makeStyles(styles);

const GridContainer = (props: any) => {
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
};

export default GridContainer;

// GridContainer.defaultProps = defaultProps;
