import React from "react";
import { Button } from "./Button";

export const ListItem = ({ color, removeItem }) => {
  const click = () => {
    removeItem(color);
  };

  return (
    <div>
      {color}
      <Button text="X" onClick={click} />
    </div>
  );
};
