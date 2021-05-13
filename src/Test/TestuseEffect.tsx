import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import GridContainer from "../Common/Reusable/Grid/GridContainer";
import GridItem from "../Common/Reusable/Grid/GridItem";
import { useEffectOnUpdate } from "../Common/Utils/useEffectOnUpdate";

const TestuseEffect = () => {
  const [count, setCount] = useState(0);

  // React.useEffect(() => {
  //   dispatch(GetPosts(item));
  // });

  useEffectOnUpdate(() => {
    // console.log("working fine");
  });

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Adding value {count}</Button>

      <GridContainer>
        <GridItem>check</GridItem>
      </GridContainer>
    </div>
  );
};

export default TestuseEffect;
