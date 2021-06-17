import React from "react";
import { createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import { Eco, LocalShipping, ThumbUp, Money } from "@material-ui/icons";
import GridContainer from "../../../Common/Reusable/Grid/GridContainer";
import GridItem from "../../../Common/Reusable/Grid/GridItem";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    quality: {
      backgroundColor:
        theme.palette.type === "dark" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.1)",
      padding: "3% 5%",
      width: "100%",
      margin: "1rem 0",
    },
    icon: {
      textAlign: "center",
      "& .MuiSvgIcon-fontSizeLarge": {
        borderRadius: "50%",
        fontSize: "8rem",
        // border: "1px solid black",
        padding: "2rem",
        color: "#fff",
        background:
          theme.palette.type === "dark"
            ? theme.palette.primary.dark
            : theme.palette.primary.light,
      },
    },
  })
);

const QualityAssurance = () => {
  const classes = useStyles();

  const QualityCard = (props: any) => {
    const classes = useStyles();
    const { title, description, icon } = props;
    return (
      <>
        <GridItem md={3}>
          <div className={classes.icon}>{icon}</div>
          <Typography component="h6" variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography component="p" align="justify" variant="body2">
            {description}
          </Typography>
        </GridItem>
      </>
    );
  };

  return (
    <>
      <GridContainer spacing={9} className={classes.quality}>
        <QualityCard
          icon={<ThumbUp fontSize="large" />}
          title="Quality Printing"
          description="Bright inks. Thick Paper. Precise cuts. We believe that quality
            printing matters. That quality printing matters."
        />
        <QualityCard
          icon={<LocalShipping fontSize="large" />}
          title="Timely Delivery"
          description="No printer is faster. Order today by 8:00pm EST and you can even get it tomorrow."
        />
        <QualityCard
          icon={<Eco fontSize="large" />}
          title="Eco-Minded"
          description="Overnight Prints is the greenest online printer in the world. See our Waterless technology."
        />
        <QualityCard
          icon={<Money fontSize="large" />}
          title="Money Back Guaranteed"
          description="Most sellers work with buyers to quickly resolve issues, but if a solution isn't reached, we can help."
        />
      </GridContainer>
    </>
  );
};

export default QualityAssurance;
