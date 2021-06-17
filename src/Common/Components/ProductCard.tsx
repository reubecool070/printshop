import {
  makeStyles,
  Theme,
  createStyles,
  Box,
  Grid,
  useTheme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    product: {
      border: "1px solid #ddd",
      margin: "1rem 1.5rem 3rem 1.5rem",
      maxWidth: "20%",
      cursor: "pointer",
      transition: "box-shadow 0.5s",
      "&:hover": {
        backgroundColor: "#ddd",
        color: "#000",
        // transform: "scale(1.08)",
        boxShadow:
          "0 4px 18px 0px rgb(0 0 0 / 12%), 0 7px 10px -5px rgb(0 0 0 / 15%)",
      },
    },
    productImage: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      padding: "0 3%",
      // maxWidth: "400px",
    },
  })
);

const ProductCard = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid
      onClick={() => alert("clicked")}
      item
      xs={3}
      className={classes.product}
    >
      <img
        className={classes.productImage}
        src="http://www.pngmart.com/files/7/Red-Smoke-Transparent-Images-PNG.png"
        alt=""
        height="200px"
      />

      <Box
        component="h6"
        m={1}
        textAlign="center"
        fontSize={16}
        fontWeight={600}
        color={theme.palette.type === "dark" ? "primary.dark" : "primary.light"}
      >
        Business Card
      </Box>
      <Box
        component="p"
        m={1}
        textAlign="center"
        fontSize={12}
        fontWeight={400}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </Box>
      <Box
        component="p"
        m={1}
        textAlign="center"
        fontSize={12}
        fontWeight={600}
      >
        Price: 9$
      </Box>
    </Grid>
  );
};

export default ProductCard;
