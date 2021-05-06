import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useEffectOnUpdate } from "../Common/Utils/useEffectOnUpdate";

const TestuseEffect = () => {
  const [count, setCount] = useState(0);

  useEffectOnUpdate(() => {
    console.log("working fine");
  });

  useEffect(() => {
    console.log("working not fine");
  });

  return (
    <div>
      <Button onClick={() => setCount(count + 1)}>Adding value {count}</Button>
    </div>
  );
};

export default TestuseEffect;
