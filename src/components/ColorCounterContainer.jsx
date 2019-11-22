import React from "react";
import { useSelector } from "react-redux";
import { Counter } from "./Counter";

const colorsSelector = state => state.colors.length;

export const ColorCounterContainer = () => {
  const colorCount = useSelector(colorsSelector);

  return <Counter count={colorCount} />;
};
