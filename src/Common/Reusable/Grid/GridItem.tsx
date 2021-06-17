/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const styles: object = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    // paddingRight: "15px",
    // paddingLeft: "15px",
    flexBasis: "auto",
  },
};

interface PropsI {
  children: React.ReactNode;
  className: string;
}

const useStyles = makeStyles(styles);

const GridItem = (props: any) => {
  const classes: any = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default GridItem;
