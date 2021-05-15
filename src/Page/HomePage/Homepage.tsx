import React, { useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";

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

const Homepage = (props: any) => {
  return (
    <>
      <Navbar />
      {/* <Link to="/admin">Go to Dashboard</Link> */}
    </>
  );
};

export default Homepage;
