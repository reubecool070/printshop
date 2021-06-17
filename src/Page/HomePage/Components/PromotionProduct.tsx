import { Typography, Divider, Grid } from "@material-ui/core";
import React from "react";
import ProductCard from "../../../Common/Components/ProductCard";
import GridContainer from "../../../Common/Reusable/Grid/GridContainer";
import GridItem from "../../../Common/Reusable/Grid/GridItem";

const PromotionProduct = () => {
  return (
    <>
      <GridContainer style={{ marginRight: "-15px" }} justify="center">
        <Typography align="center" variant="h5">
          PROMOTIONS PRODUCTS
        </Typography>
        <GridItem>
          <Divider style={{ margin: "1% 0" }} />
        </GridItem>
        <div
          style={{
            margin: "1rem",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </GridContainer>
    </>
  );
};

export default PromotionProduct;
