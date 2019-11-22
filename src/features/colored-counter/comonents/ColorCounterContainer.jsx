import React from "react";
import { useSelector } from "react-redux";
import { Counter } from "../../../components/common/Counter";
import { colorsSelector } from "../state/selectors";

export const ColorCounterContainer = () => {
  const colorCount = useSelector(colorsSelector);

  return <Counter count={colorCount} />;
};
