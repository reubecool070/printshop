/* eslint-disable react-hooks/exhaustive-deps */
import { Button } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPosts } from "../Store/Action/SampleAction";
import { RootStore } from "../Store/Store";

const TestSample = () => {
  const dispatch = useDispatch();

  const sampleSelector = useSelector((state: RootStore) => state.sample.posts);

  useEffect(() => {
    dispatch(GetPosts(item));
  }, []);

  const item = ["menu", "sample", "contact"];

  const handleEffect = () => {
    // dispatch(GetPosts(item));
  };

  console.log("sampel", sampleSelector);

  return (
    <>
      <Button onClick={handleEffect}>Add value in dispatch</Button>
    </>
  );
};

export default TestSample;
